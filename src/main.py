from crypt import methods
from flask import Flask, jsonify, render_template, request
import json

#flaskの初期化
app = Flask(__name__)
app.config["JSON_AS_ASCII"] = Flask

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
    
    with open(f'src/data/json/items/{name}/input/item.json') as f:
            json_data = json.load(f)

    if request.headers['Content-Type'] != 'application/json':
        print(request.headers['Content-Type'])
        return jsonify(res='error'), 400

    data = request.get_json()
    json_data.append(data)

    with open(f'src/data/json/items/{name}/input/item.json', 'w') as f:
        json.dump(json_data, f, indent=4)
    
    print (data)

    ave = average(name)

    return jsonify(json_data)

def average(str) -> None:

 json_open = open(f'src/data/json/items/{str}/input/item.json','r')
 json_load = json.load(json_open)

 total_s = 0 #評価の合計
 count = 0 #評価数

 for v in json_load:#inputに入っているデータの平均を出す
    total_s += v["total"]
    print(v["total"]) #確認用
    count += 1

 ave = total_s/count
 print(ave)#評価の平均を表示する

 return ave #平均返す
    
@app.route('/')
@app.route('/<subject>')
def subject(subject):
    return render_template('detail.html')

@app.route('/api')
@app.route('/api/detail')
@app.route('/api/detail/<subject>', methods=['GET'])
def subject_json(subject):

    with open('src/data/json/items/'+subject+'/output/item.json') as f:
        json_data = json.load(f)

    print(json_data)

    return jsonify(json_data)

if __name__ == "__main__":
    app.run(debug=True)