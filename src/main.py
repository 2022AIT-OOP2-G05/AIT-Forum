from crypt import methods
from flask import Flask, jsonify, render_template, request
import json

#flaskの初期化
app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/detail')
def detail():
   
    return render_template('detail.html')

@app.route('/form')
def form():
    
    return render_template('form.html')
    
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