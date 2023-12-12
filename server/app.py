from flask import Flask, jsonify
import time
import datetime
import json

app = Flask(__name__)

# Read data from a JSON file
with open('/home/snehal/dev/Phase5/Ayurveda_World/server/db.json') as f:
    data = json.load(f)
    print(data)

@app.route("/", methods=["GET"])
def index():
    return {"message": "The Ayurvedic world API is Active!"}


@app.route("/productCategories/<category>", methods=["GET"])
def get_products_by_category(category):
    # Check if the provided category exists in the data
    if category not in data:
        return jsonify({"error": "Category not found"}), 404

    # Get the products for the specified category
    products = data[category]

    # Return the products for the specified category
    return jsonify({category: products})

@app.route("/productDetails/<category>/<int:productID>", methods=["GET"])
def get_product_by_category_product_id(category, productID):
    # Check if the provided category exists in the data
    if category not in data:
        return jsonify({"error": "Category not found"}), 404
    
    # Get the products for the specified category
    products = data[category]

    # Find the product with the specified ID
    product = next((item for item in products if item["id"] == productID), None)

    # Check if the product with the specified ID exists
    if product is None:
        return jsonify({"error": f"Product with ID {productID} not found in category {category}"}), 404

    # Return the specific product
    return jsonify({"product": product})

if __name__ == "__main__":
    app.run(port=5000)
