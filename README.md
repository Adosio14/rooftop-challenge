# API Rest microservice

This microservice is a final activity of a **Rooftop Academy** web development course. It was designed and developed using the skills learned in the lessons. The functions of this microservice are retrieve, delete, update coupon or store information from an external database. 

## Technologies used 🛠️

 - [PostgreSQL]  Database creation
 - [Node.Js]	Powerfull Java/Typescript tool for backend development
 - [ExpressJs] A library to create a server with requests and responses
 - [Joi] For the query parameters validation
 - [Dotenv] To implement the environment variables to the project
 - [Typeorm] To connect and work with the Database
 - [Nodemon] A tool which restarts the server when a change is saved in a file of the project
 - [Postman] A software to create requests and check the responses 

## Project clonation, installation and use 💾

To clone this project, use the following:

    git clone https://github.com/Adosio14/rooftop-challenge

💡**You will need to create a "deleted_at" column (timestamp without time zone) in the tables "Coupons and Stores". This is extremely necessary. Otherwise, the delete resource will not work**💡

Then, to run this project you will need to install the tools below:

    npm install express
    npm install joi
    npm install nodemon
    npm install typescript ts-node tsc --save-dev
    npm install pg
    npm install typeorm
    npm install --save @types/node
    npm install --save @types/express

Then, to run the project you will use `npm run dev`. So, the **`dev`** script in the package.json should look like this: 

     "scripts": {
		    "dev": "nodemon typeorm/src/index.ts",
	 }
There is no notification when the microservice is up, so I recommend to wait 3-5 seconds before sending the first request.

For testing all the endpoints, you can use the **Postman** collection. It is available in the repository!

## Links consulted for troubleshooting 🔧
[Nodejs & PostgreSQL REST API - YouTube](https://www.youtube.com/watch?v=7NfvC-gOcRc&ab_channel=FaztCode)
[Random date in JavaScript (github.com)](https://gist.github.com/miguelmota/5b67e03845d840c949c4)
[How to type `request.query` in express using TypeScript? - Stack Overflow](https://stackoverflow.com/questions/63538665/how-to-type-request-query-in-express-using-typescript)
[Get Query Strings and Parameters in Express.js (stackabuse.com)](https://stackabuse.com/get-query-strings-and-parameters-in-express-js)
And all the respective documentation of the libraries and tools employed 🤓


## Dev. Extra annotations 📝

The **Stats** resource should send an object with five stats, but only send 3 because the daily counter of the created/assigned coupon is not implemented yet.
