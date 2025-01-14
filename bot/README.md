
```FolderStructure
    chatbot_project/
    ├── node_modules
    ├── public/
    │   ├── app.js
    │   ├── index.html
    │   └── styles.css
    ├── server/
    │   ├── data/
    │   │   └── scraped_data.json
    │   ├── index.js
    │   ├── scrape_data_cleanup.js
    │   └── scrape.js
    │   
    ├── .env
    ├── .gitignore
    ├── license
    ├── README.md
    ├── package.json
    └── package-lock.json
```
#### clone project 
```
https://github.com/darshan1005/ChatBot.git
```
or
### create a project
#### npm init
### Install Packages
#### npm install axios body-parser express cheerio dotenv cors
#### file system (fs) will be included in the Node installation no need to install seperatly.

1. check Json which must be close to this
```Package.json dependencies
  "dependencies": {
    "axios": "^1.7.2",
    "body-parser": "^1.20.2",
    "cheerio": "^1.0.0-rc.12",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  }
```
2. Run the Scraping and Cleaning Scripts
    - Run node server/scrape.js to scrape the data and save it to scraped_data.json.
3. Start the Server
    - Run npm start to start the Express server.
4. Open the UI
    - Open your browser and navigate to http://localhost:3000 to interact with your chatbot.
  

