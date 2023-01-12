from crypt import methods
from flask import Flask, jsonify, render_template, request
import json

#flaskの初期化
app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/api/first')
def firstsemester():
    with open('src/data/json/Firstsemesterclass.json') as f:
        json_data = json.load(f)
    print(json_data)
    return jsonify(json_data)

@app.route('/api/last')
def lastsemester():
    with open('src/data/json/Lateclass.json', 'r') as f:
        json_data = json.load(f)
    print(json_data)
    return jsonify(json_data)

@app.route('/api/detail')
@app.route('/api/detail/<name>',methods=['POST'])
def form(name = "no name"):
    
    with open(f'./data/json/items/{name}/input/item.json') as f:
            json_data = json.load(f)

    if request.headers['Content-Type'] != 'application/json':
        print(request.headers['Content-Type'])
        return jsonify(res='error'), 400

    data = request.get_json
    json_data.append(data)

    with open(f'./data/json/items/{name}/input/obj2-item.json', 'w') as f:
        json.dump(json_data, f, indent=4)
    
    print (data)

    return jsonify(json_data)
    
@app.route('/')
@app.route('/<subject>')
def subject(subject):
    return render_template('detail.html')

@app.route('/api')
@app.route('/api/detail')
@app.route('/api/detail/<subject>', methods=['GET'])
def subject_json(subject):

    with open('src/data/json/items/'+subject+'/output/'+subject+'.json') as f:
        json_data = json.load(f)

    return jsonify(json_data)

if __name__ == "__main__":
    app.run(debug=True)