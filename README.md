*** Tools Used ***
## Back-End Services
- Java 1.8
- Spring Framework 2.1.5
    - Spring Boot
    - Spring MongoDB/Data
    - Spring Security
    - Spring REST Api
- Database
    - MongoDB 4.0
- Authentication
    - JWT
    
## Front-End UI
- Angular 5
- HTML/CSS
- Angular JWT




*** How to run the application ***

## Starting up the back-end services
1) Make sure mongodb is already running in "localhost" as the host and in "27017" as its port.
2) Open command line
3) Run "cd {path-in-local}/lewisglanz/source-codes/back-end/lewisglanzset/" to switch to backend project directory
4) Run "gradlew clean build" to build executable jar
5) Run "java -jar lgs-app/build/libs/lgs-app-1.0-SNAPSHOT.jar" to execute the spring boot application
    - Note that the application will run on the default "8080" port
6) If running is successful, there should be the last line saying "Started LewisGlanzSoftwareEngineeringTest...." message

## Starting up the front-end user interface
1) Make sure "4200" is not occupied by any other applications. 
2) Make sure NPM (Node Package Manager) v5.5.1 or later versions is installed and available in environment path
3) Make sure Node v8.9.3 or later versions is installed and available in environment path
4) Open another command line
5) Run "cd {path-in-local}/lewisglanz/source-codes/front-end/lewisglanzset-fe"
6) Run "npm cache clean --force"
7) Run "npm install"
    - Note that it might take time for the installation of dependencies to finish
8) Run "npm start" to run the application
9) Open a browser (Chrome, Firefox) and navgiate to localhost:4200
10) Sign up for new account to login




*** REST API Endpoints ***
1) POST http://localhost:8080/lgs/api/user/register
    - Used for registering or signing up a new account
    - Sample request body 
    {
        "username": "pat", 
        "password": "pat", 
        "firstName": "Patrick", 
        "lastName": "Licardo"
    }
    - If registration is successful, it will return: 
    {
        "registered": true
    }

2) POST http://localhost:8080/lgs/api/login
    - Used for acquiring a JWT token in order to login in the application
    - Sample request body 
    {
        "username": "pat", 
        "password": "pat"
    }
    - If successful, it should return something like: 
    {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2hueSIsImV4cCI6MTU2MjI4MjU5Nn0.VNEpU9nvfMgoMWzozeABRlFYa5JZy9x76i7-bWh0lAiD6bc_dZwG_e43-5K5Kaaj2VLGfP_-gp7e9TlBIdoH4Q",
        "username": "johny"
    }

3) After acquiring a token, each contact transaction's or rest calls should be attached with a "Bearer {token}" as one of it's headers

4) GET http://localhost:8080/lgs/api/contact/all
    - Retrieves all the contacts from database (mongodb)
    - Should have headers: 
        "Content-Type": "applicaition/json",
        "Authorization": "Bearer {token}"
        
5) GET http://localhost:8080/lgs/api/contact/{contactId}
    - Retrieves a contact from database (mongodb) based on the supplied contactId
    - Should have headers: 
        "Content-Type": "applicaition/json",
        "Authorization": "Bearer {token}"
        
6) PUT http://localhost:8080/lgs/api/contact
    - Inserts a new user in the databsae
    - Should have headers: 
        "Content-Type": "applicaition/json",
        "Authorization": "Bearer {token}"
    - Sample request body: 
    {
        "name": "Juanito Blanco",
        "email": "juanito@email.com", 
        "telephone": "000-0001"
    }
    
7) POST http://localhost:8080/lgs/api/update
    - Updates an existing contact
    - Should have headers: 
        "Content-Type": "applicaition/json",
        "Authorization": "Bearer {token}"
    - Sample request body: 
    {
        "name": "Juanito Blanco",
        "email": "juanito@email.com", 
        "telephone": "123-1234"
    }
    
8) DELETE http://localhost:8080/lgs/api/contact/{contactId}
    - Delets an existing contact based on the supplied contactId
    - Should have headers: 
        "Content-Type": "applicaition/json",
        "Authorization": "Bearer {token}"
        
        
        
