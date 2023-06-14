# Nginx + Node.js + MySQL Challenge

This project is a challenge that utilizes Nginx as a reverse proxy for a Node.js application, which in turn connects to a MySQL database and performs name registration and reading operations.

## Setup

Make sure you have Docker and Docker Compose installed on your machine before proceeding.

1. Clone the repository

   Clone this repository to your local environment:

   ```bash
   git@github.com:fabiocordeiroaraujo/docker-node-nginx-reverso.git

2. Run the containers

   In the project directory, execute the following command to start the containers:

   ```bash
   docker-compose up -d --build

> You will see the message "Full Cycle Rocks!" followed by a list of names registered in the database.

3. Inserting a new name

   To insert a new name into the database, you can make a GET request to the /name/:name endpoint, replacing :name with the desired name. For example, to insert the name "John" into the database, you can access the following URL:

   ```bash
   http://localhost:8080/name/John

> You will receive a response indicating that the name has been inserted successfully.

Feel free to explore and adapt the code in this repository according to your needs.
