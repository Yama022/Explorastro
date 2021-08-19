<img src="./docs/mascot-rocket.svg" align="right"
     alt="Astrocharles" width="178" height="178">

# ⭐ ExplorAstro&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

- This project is currently **under development.** 🏗️

## 👨‍💻 Technologies

<div align='center'>
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
        <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=Redux&logoColor=white" />
        <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
        <img src="https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white" />
        <img src="https://img.shields.io/badge/Bulma-00D1B2?style=for-the-badge&logo=Bulma&logoColor=white" />
        <br>
        <img src="https://img.shields.io/badge/Express-F8F8FF?style=for-the-badge&logo=express&logoColor=61DAFB" />
        <img src="https://img.shields.io/badge/PostgresQL-4169E1?style=for-the-badge&logo=Postgresql&logoColor=white" />
        <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
</div>

## 📦 Installation

1 - Clone this repository.  
2 - Install frontend dependencies: `yarn`.  
3 - Install backend dependencies: `cd api && yarn`.  
4 - Deploy the database: `cd api && yarn db:install`. **(You must have a PostgreSQL "explorastro" database running on localhost:5432)**  
5 - Copy the sqitch config file: `cp ./api/templates/sqitch.conf.example ./api/sqitch.conf`, and edit them if needed.  
6 - Create your own enviroment variables: `cp ./api/templates/.env.example ./api/.env` and edit them.  
7 - Run the API: `cd api && yarn start`.  
8 - In a new terminal, run the frontend: `yarn start`.  
9 - Open the app in your browser: `http://localhost:8080`.  
10 - Enjoy! 💡
