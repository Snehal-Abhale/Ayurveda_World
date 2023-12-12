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

if __name__ == "__main__":
    app.run(port=5000)
