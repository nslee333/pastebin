from flask import Flask
from flask import url_for, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/app")
def index():
    return render_template('index.html', message=None)