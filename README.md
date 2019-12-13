## Table of Contents
* [General Info](#general-info)
* [Database Scripts](#database-scripts)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contributing](#contributing)

## General Info
Sign up, Sign in, then do some action like CRUD operation and finally Sign out.

Following are some important notes:
* Run the given [Database Scripts](https://github.com/sumuongit/fullstack-developer-opportunity-task/tree/master/WebAPI/WebAPI/Database_Scripts) to generate the database
* Remove the existing edmx and create new one from the database just created
* Web API configuration:

  ```
  //WebApiConfig.cs - change the url of the Angular project if the url does not match
  config.EnableCors(new EnableCorsAttribute("http://localhost:4200", headers:"*", methods:"*"));  
  ```
* Run Web API project
* Angular project settings:
  
  ```
  //user-login.service.ts - change the url of the Web API project if the url does not match
  readonly rootURL = "http://localhost:36348/api/User/";
  //user-register.service.ts - change the url of the Web API project if the url does not match
  readonly rootURL = "http://localhost:36348/api";  
  //customer.service.ts - change the url of the Web API project if the url does not match 
  readonly rootURL = "http://localhost:36348/api";
  ```
* Run Angular project 

## Database Scripts
[Database Scripts](https://github.com/sumuongit/fullstack-developer-opportunity-task/tree/master/WebAPI/WebAPI/Database_Scripts)
	
## Technologies
This application is created with:
* ASP.NET Web API 2 in Visual Studio 2017
* C# 
* Angular 8 in Visual Studio Code
* Entity Framework 6 (Database First Approach)
* SQL Server 2014
	
## Setup
To clone and run this repository you will need [Git](https://git-scm.com/) installed on your computer. From your command line:

```
# Clone this repository
$ git clone https://github.com/sumuongit/fullstack-developer-opportunity-task.git
# Go into the repository
$ cd fullstack-developer-opportunity-task
```

## Contributing
* Fork the repository
* Create a topic branch
* Implement your feature or bug fix
* Add, commit, and push your changes
* Submit a pull request
