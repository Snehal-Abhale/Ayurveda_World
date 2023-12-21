from flask import Flask, jsonify, request
import time
import datetime
import json
from pymongo import MongoClient
from bson.json_util import dumps
from bson.objectid import ObjectId


# from flask_mongoengine import MongoEngine

app = Flask(__name__)


client = MongoClient('localhost', 27017)
db = client['ayurveda-DB']
products_collection = db['products']
product_id_counter_collection = db['counters']
cart_collection = db['cart']

# Counter for generating auto-incremented IDs
id_counter = db['id_counter']

@app.route("/", methods=["GET"])
def index():
    return {"message": "The Ayurvedic world API is Active!"}


@app.route('/insert_product', methods=['POST'])
def insert_product():
    try:
        data = request.get_json()

        # Ensure that the 'id' field is not provided by the client
        data.pop('id', None)

        # Get the next value for the counter
        counter = product_id_counter_collection.find_one_and_update(
            {'_id': 'product_counter'},
            {'$inc': {'value': 1}},
            upsert=True,
            return_document=True
        )

        # Add the 'id' field with the next counter value
        data['id'] = counter['value']

        # Insert the product
        result = products_collection.insert_one(data)
        inserted_id = str(result.inserted_id)

        return jsonify({"message": "Product inserted successfully", "inserted_id": inserted_id}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    


@app.route('/productCategories/<string:category>', methods=['GET'])
def get_products_by_category(category):
    if category.lower() == 'all':
        # If category is 'All', return all products
        all_products = list(products_collection.find())
        return dumps({"All": all_products})
    
    # Retrieve products for the given category
    products_for_given_category = list(products_collection.find({"category": category}))
    
    if not products_for_given_category:
        # If category not found, return a 404 error
        return jsonify({"Error": f"Category '{category}' not found"}), 404
    
    return dumps({category: products_for_given_category})


@app.route("/productDetails/<category>/<int:product_id>", methods=["GET"])
def get_product_by_category_product_id(category, product_id):
    product_details = products_collection.find_one({"category": category, "id": product_id})
    
    if not product_details:
        # If product not found, return a 404 error
        return jsonify({"Error": f"Product with ID {product_id} not found in category '{category}'"}), 404
    
    return dumps({"product": product_details})


# API endpoint to receive cart data
@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    try:
        cart_data = request.get_json()

        # Generate auto-incremented ID
        id_document = id_counter.find_one_and_update(
            {'_id': 'cart_id'},
            {'$inc': {'sequence_value': 1}},
            return_document=True
        )
        cart_data['id'] = id_document['sequence_value']

        # Insert the data into the 'cart' collection
        cart_collection.insert_one(cart_data)

        return jsonify({"status": "success", "message": "Item added to the cart"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500



# API endpoint to retrieve cart data
@app.route('/get_cart_data', methods=['GET'])
def get_cart_data():
    try:
        # Fetch all documents from the 'cart' collection
        cart_data = list(cart_collection.find({}))

        return dumps({"status": "success", "cart_data": cart_data})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
    
# Route to handle DELETE request for removing an item from the cart
@app.route('/remove_from_cart/<int:item_id>', methods=['DELETE'])
def remove_from_cart(item_id):
    try:
        # Find the item in the cart collection by its ID and remove it
        result = cart_collection.delete_one({'id': item_id})

        if result.deleted_count == 1:
            return jsonify({"status": "success", "message": "Item removed from the cart"})
        else:
            return jsonify({"status": "error", "message": "Item not found in the cart"}), 404
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500



@app.route('/update_quantity/<item_id>', methods=['PATCH'])
def update_quantity(item_id):
    try:
        # Get the action from the JSON body
        action = request.json.get('action')

        # Validate the action (it should be 'increase' or 'decrease')
        if action not in ['increase', 'decrease']:
            return jsonify({"status": "error", "message": "Invalid action"}), 400

        # Find the item in the cart collection
        item = cart_collection.find_one({"id": int(item_id)})

        if not item:
            return jsonify({"status": "error", "message": "Item not found"}), 404

        # Update the quantity and total based on the action
        if action == 'increase':
            new_quantity = item.get('quantity', 0) + 1
        elif action == 'decrease' and item.get('quantity', 0) > 1:
            new_quantity = item.get('quantity', 0) - 1
        else:
            new_quantity = item.get('quantity', 0)

        new_total = round(float(item.get('price', '').replace('$', '')) * new_quantity, 2)

        # Update the quantity and total in the cart collection
        cart_collection.update_one(
            {"id": int(item_id)},
            {"$set": {"quantity": new_quantity, "total": new_total}}
        )

        return jsonify({"status": "success", "message": "Quantity and total updated successfully"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": str(error)}), 404

if __name__ == "__main__":
    app.run(port=5000)
