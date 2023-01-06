from flask import Flask, render_template

#flaskの初期化
app = Flask(__name__)

@app.route('/index')
def index():

    return render_template('index.html')

@app.route('/detail')
def detail():
   
    return render_template('detail.html')

@app.route('/form')
def form():
    
    return render_template('form.html')
