from flask import Flask, request
from flask import Flask, request, render_template, jsonify
import json

#flaskの初期化
app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/detail')
def detail():
   
    return render_template('detail.html')

@app.route('/api/detail')
@app.route('/api/detail/<name>')
def form(name = "no name"):
    
    with open(f'./data/json/items/{name}/input/obj2-item.json') as f:
            json_data = json.load(f)
    return jsonify(json_data)
    
if __name__ == "__main__":
    app.run(debug=True)