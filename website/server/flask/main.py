from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/Register', methods=['POST'])
def Print():
    User = {
        'Email': request.json['userEmail'],
        'Password': request.json['userPassword']
    }
    print(User)
    return User
    
if __name__ == "__main__":
    app.run(debug=True)