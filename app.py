from flask import Flask, Response, request, redirect

app = Flask(__name__, static_url_path='/static')

@app.route('/', methods=['GET'])
def mainpage():
    return app.send_static_file('./index.html')

if __name__ == "__main__":
    app.run(debug=True, host='localhost', port=8080)

