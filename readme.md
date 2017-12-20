# Hidden Founders Challenge - Store Challenge

### project 
this application is a hidden founders challenge in reference of Software engineering internship and the idea of this application is to lists shops nearby.

### functions 

* the user can see the stores saved in database stored by distance the nearset stores come first 
* the user can also like a store and it will be saved in favorite page 
* the user can dislike a store and it will be disappeared from the list and it will be displayed after 1 minute (just for test purpose)
* the user can check the list of his favorite stores 
* the user can remove stores from his favorite list 
* the user can sign up and login 

### how i made it 

Those are the technologies i used :

* Frontend
> ReactJS
* Backend
> NodeJS
* Database
> Mongodb 

### How to test it 

1- first of all Clone the repository : 
> git https://github.com/sothmane/storeChallenge.git

2- install all the dependencies & modules using npm :
> npm install
 
3- install live-server 
> npm install live-server --save

4- import database collections shops & user using cmd 
> mongoimport --db test --collection shops --file shops.json
> mongoimport --db test --collection user --file user.json

5- launch mongo database in cmd line : 
> mongod

6- run in the home directory live-server
> npm run run 

7- run node server 

> node server/app

#### once you do all that the application will run perfectly on  http://127.0.0.1:8080/public/









