Genshin Team App
The Genshin Team App is a powerful tool designed to assist players of the popular game Genshin Impact in building optimal teams. With a comprehensive list of all playable characters in the game, this app allows you to select your owned characters and create customized teams of up to four members. Whether you're a beginner or an experienced player, the Genshin Team App can help you maximize your team's potential and enhance your gaming experience.

Features
Character Selection: The app provides a list of all playable characters in Genshin Impact, allowing you to easily browse and select the characters you own.

Team Building: Once you've chosen your characters, you can create teams by dragging and dropping them into the team slots. The app enforces the maximum limit of four members per team.

Team Optimization: The Genshin Team App offers suggestions and insights to help you optimize your team composition. It considers character synergies, elemental reactions, and other factors to ensure your team is well-balanced and effective.

Team Sharing: You can save and share your teams with other Genshin Impact players. This feature is particularly useful for seeking advice, collaborating with friends, or showcasing your team setups.

Tech Stack
The Genshin Team App is built using the following technologies:

PostgreSQL: A robust and scalable open-source relational database management system that stores character and team data.

Express: A fast and minimalist web application framework for Node.js that enables building the app's backend API.

Node.js: A powerful JavaScript runtime environment that allows running server-side code and powering the app's backend logic.

React: A popular JavaScript library for building user interfaces, utilized to create the app's interactive and responsive frontend.

Installation
To run the Genshin Team App locally, follow these steps:

Clone the repository from GitHub:

bash
Copy code
git clone https://github.com/FefesG5/genshin_teams.git
Navigate to the project directory:

bash
cd backend
npm install

cd frontend
npm install
Set up the PostgreSQL database:

Ensure PostgreSQL is installed and running on your machine.
Create a new database for the app.
Database name should be: genshin_team
Configure the backend:

Rename the .env.example file in the backend directory to .env.
Open the .env file and update the database connection details to match your PostgreSQL configuration.
Start the backend server:

bash
Copy code
cd backend
npm start
Start the backend development server:

bash
Copy code
cd frontend
npm run start
Access the app in your browser at http://localhost:3000.

Future Enhancements
The Genshin Team App is an ongoing project, and the following features are planned for future updates:

User Authentication: Implement user accounts to allow users to save and retrieve their teams across multiple devices.

Team Analysis: Provide in-depth team performance analysis, including damage output, elemental reaction strengths, and elemental resonance bonuses.

Contributing
Contributions to the Genshin Team App are welcome! If you'd like to contribute, please follow these steps:

Fork the repository and clone it to your local machine.

Create a new branch for your feature or bug fix:

License
The Genshin Team App is open-source software licensed under the MIT License.

Contact
For any inquiries, feedback, or support requests, please contact the project maintainer:

GitHub: FefesG5
Feel free to reach out if you have any questions or suggestions related to the Genshin Team App. We appreciate your interest and support!
