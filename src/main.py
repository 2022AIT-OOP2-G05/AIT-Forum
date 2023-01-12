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
@app.route('/api/detail/<name>',methods=['POST'])
def form(name = "no name"):
    
    with open(f'./data/json/items/{name}/input/item.json') as f:
            json_data = json.load(f)

    
    if request.headers['Content-Type'] != 'application/json':
        print(request.headers['Content-Type'])
        return jsonify(res='error'), 400

    data = request.get_json
    print (data)

    return jsonify(json_data)
    
if __name__ == "__main__":
    app.run(debug=True)