from crypt import methods
import math
from flask import Flask, jsonify, render_template, request
import json

#flaskの初期化
app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/first')
def firstsemester():
    with open('src/data/json/Firstsemesterclass.json') as f:
        json_data = json.load(f)
    return jsonify(json_data)

@app.route('/api/last')
def lastsemester():
    with open('src/data/json/Lateclass.json', 'r') as f:
        json_data = json.load(f)
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
    
    average(name)
    write_total(name)

    return jsonify(json_data)

def write_total(name):
    opening = name.split("_")[0]
    if opening == "first":
        with open('src/data/json/Firstsemesterclass.json') as f:
            json_data = json.load(f)
    else:
        with open('src/data/json/Lateclass.json') as f:
            json_data = json.load(f)

    with open(f'src/data/json/items/{name}/output/item.json') as f:
        items_data = json.load(f)

    for v in json_data:
        if v["lesson_name_en"] == name:
            v["total"] = items_data["total"]
    
    if opening == "first":
        with open('src/data/json/Firstsemesterclass.json', 'w') as f:
            json.dump(json_data, f, indent=4)
    else:
        with open('src/data/json/Lateclass.json', 'w') as f:
            json.dump(json_data, f, indent=4)


def average(stra) -> None:

 json_open = open(f'src/data/json/items/{stra}/input/item.json','r')
 json_load = json.load(json_open)

 level_s = 0
 hit_level_s =0
 teacher_review_s = 0
 adequacy_s = 0
 test_level_s = 0
 task_level_s = 0
 middle_test_level_s =0
 total_s = 0 
 attendance = 0
 carry = 0

 id3 = json_load[0]["lesson_name"]
 id4 = json_load[0]["teacher_name"]
 id5 = json_load[0]["day_of_week"]
 id6 = json_load[0]["time"]

 number_of_credits = json_load[0]["number_of_credits"]

 count = 0 #評価数
#  print(json_load)

 for v in json_load:#inputに入っているデータの平均を出す

    if v["hit_level"] == True:
        hit_level_s += 1

    if v["carry"] == True:
        carry += 1

    if v["attendance"] == True:
        attendance += 1
    # number_of_credits_s += v["number_of_credits"]
    level_s += v["level"]
    teacher_review_s += v["teacher_review"]
    adequacy_s += v["adequacy"]
    test_level_s += v["test_level"]
    task_level_s += v["task_level"]
    middle_test_level_s += v["middle_test_level"]
    total_s += v["total"]

    count += 1

 ave2 = level_s/count
 ave3 = hit_level_s/count
 ave4 = teacher_review_s/count
 ave5 = adequacy_s/count
 ave6 = test_level_s/count
 ave7 = task_level_s/count
 ave8 = middle_test_level_s/count
 ave9 = total_s/count
 attendance_ave = attendance/count
 carry_ave = carry/count


 json_open = open(f'src/data/json/items/{stra}/output/item.json','r')
 json_load = json.load(json_open)

 json_load["lesson_name"]=id3
 json_load["teacher_name"]=id4
 json_load["day_of_week"]=id5
 json_load["time"]=id6

 json_load["number_of_credits"]=number_of_credits

 json_load['level'] = round(ave2)
 json_load['hit_level'] = round(ave3*100)
 json_load['teacher_review'] = round(ave4)
 json_load['adequacy'] = round(ave5)
 json_load['test_level'] = round(ave6)
 json_load['task_level'] = round(ave7)
 json_load['middle_test_level'] = round(ave8)
 json_load['total'] = round(ave9)
 json_load["attendance"]=round(attendance_ave*100)
 json_load["carry"]=round(carry_ave*100)
 
 with open(f'src/data/json/items/{stra}/output/item.json', "w") as f:
   json.dump(json_load, f, indent=4)

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
    app.run(debug=True)


