from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

# Data do início do namoro
START_DATE = datetime(2021, 10, 9)

def calcular_dias():
    hoje = datetime.now()
    diferenca = (hoje - START_DATE).days
    return diferenca

@app.route('/')
def home():
    dias = calcular_dias()
    return render_template('index.html', dias=dias)

if __name__ == '__main__':
    app.run(debug=True)