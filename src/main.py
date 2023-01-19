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

    average(name)

    return jsonify(json_data)

def average(str) -> None:

 json_open = open(f'src/data/json/items/{str}/input/item.json','r')
 json_load = json.load(json_open)

 number_of_credits_s = 0
 level_s = 0
 hit_level_s =0
 teacher_review_s = 0
 adequacy_s = 0
 test_level_s = 0
 middle_test_level_s =0
 total_s = 0 

 count = 0 #評価数
 print(json_load)
 for v in json_load:#inputに入っているデータの平均を出す

    number_of_credits_s += v["number_of_credits"]
    level_s += v["level"]
    hit_level_s += v["hit_level"]
    teacher_review_s += v["teacher_review"]
    adequacy_s += v["adequacy"]
    test_level_s += v["test_level"]
    middle_test_level_s += v["middle_test_level"]
    total_s += v["total"]
    count += 1

 ave1 = number_of_credits_s/count
 ave2 = level_s/count
 ave3 = hit_level_s/count
 ave4 = teacher_review_s/count
 ave5 = adequacy_s/count
 ave6 =test_level_s/count
 ave7 =middle_test_level_s/count
 ave8 = total_s/count

 dicta = {"number_of_credits_s": ave1} 
 print(dicta)
 #print(ave8)#評価の平均を表示する

 with open('src/data/json/items/{str}/output/item.json', "w") as f:
   json.dump(dicta, f, indent=4)

 #return  
    
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

    return jsonify(json_data)

if __name__ == "__main__":
    average("first_ai_3")
    #app.run(debug=True)
