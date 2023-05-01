<!-- Bot Battlr App -->
Welcome to Bot Battlr, the web app where you can build and manage your bot army. This is a React application that allows you to view a list of available bots and enlist them into your army. You can also release a bot from your army or delete it permanently.

<!-- Table of Contents -->
Technologies Used
Installation and Usage
Features
Contributing
License




<!-- Technologies Used -->
The technologies used to build this app include:

ReactJS
HTML
CSS
JavaScript



<!-- Installation and Usage -->
To get started with Bot Battlr, follow the instructions below:

Clone this repository by running the following command in your terminal:
bash
Copy code
git clone https://github.com/Iq-droid/bot-battlr.git
Install the dependencies:
Copy code
npm install
Start the development server:
sql
Copy code
npm start
In a separate terminal, run the following command to start the backend server:
css
Copy code
json-server --watch db.json
Test your server by visiting the following route in your browser:
bash
Copy code
http://localhost:8001/bots
This should display a JSON response containing a list of bots.

<!-- Features -->
As a user, you can:

View all the bots rendered in BotCollection
Add an individual bot to your army by clicking on it. The selected bot will render in the YourBotArmy component. The bot can be enlisted only once.
Release a bot from your army by clicking on it. The bot will disappear from the YourBotArmy component.
Discharge a bot from your service forever by clicking the red button marked "x", which will delete the bot both from the backend and from the YourBotArmy on the frontend.
Choose to view the detailed specifications of a bot by clicking on the bot card in BotCollection. This will display the BotSpecs component with a button to go back to the list view and another button to enlist that bot into your army.
Contributing
If you would like to contribute to the development of Bot Battlr, please contact the developer at iqra.ali@student.moringaschool.com. Suggestions and feedback are welcome.


<!-- License -->
This project is licensed under the MIT License.


<!-- Resources -->
React documentation
JSON Server documentation