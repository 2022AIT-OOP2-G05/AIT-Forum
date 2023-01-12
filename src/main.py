from flask import Flask, render_template, jsonify
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

@app.route('/detail')
def detail():
   
    return render_template('detail.html')

@app.route('/form')
def form():
    
    return render_template('form.html')
    
if __name__ == "__main__":
    app.run(debug=True)