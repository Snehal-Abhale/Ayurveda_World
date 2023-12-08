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
    return {"message": "Hello world!"}

@app.route("/date", methods=["GET"])
def view_current_date():
    # Get the current time
    current_time = time.time()
    # Convert it to a date
    current_date = datetime.datetime.fromtimestamp(current_time).strftime("%Y-%m-%d")
    return {"date": current_date, "time": current_time}

@app.route("/productCategories", methods=["GET"])
def get_Oils_json_data():
    # Return data read from the JSON file
    return jsonify(data)

if __name__ == "__main__":
    app.run(port=5000)
