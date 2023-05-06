# Web App

Make sure you have Python 3 (the newer the better) and `pip` installed. If you'd like to use the web app, make sure you have npm installed. 

In `web` directory, run `npm install`.

In `server` directory, run `python3 -m venv env`. Then make sure your environment is activated (`source env/bin/activate`) and install the dependencies (just Flask and `python-dotenv`: `pip3 install -r requirements.txt`).

Then inside the `web` directory, run:

```
npm start
npm run start-api
```

This starts the frontend and backend. You can then upload an image and it will show up in server/uploads.
