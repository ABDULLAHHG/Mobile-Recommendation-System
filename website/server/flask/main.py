from flask import Flask , jsonify , request

app = Flask(__name__)

@app.route('/Register')
def Print():
    User = {'Email' : request.json(['userEmail']),
            'Password' :request.json(['userPassword'])}
    print(user)
           