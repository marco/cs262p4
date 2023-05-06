import time
from flask import Flask, render_template, request, redirect, url_for
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/upload', methods=['POST'])
def upload_file():
    """
    Uploads a file to the server.
    """

    if 'file' not in request.files:
        return redirect(request.url)
    
    file = request.files['file']

    if file.filename == '':
        return redirect(request.url)

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return 'File uploaded successfully.'

    return 'File type not allowed.'

@app.route('/request', methods=['POST'])
def request_img():
    """
    Request a generation of a subject.
    """
    print(request.data)
    # print(request.form)
    return 'Request received.'

if __name__ == '__main__':
    app.run(debug=True)