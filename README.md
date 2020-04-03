## Table of Contents
* [General Info](#general-info)
* [Features](#features)
* [Database Scripts](#database-scripts)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contributing](#contributing)
* [License](#license)

## General Info
A sample application depicting Sign up, Sign in, CRUD and Sign out features using ASP.NET MVC 5, Web API 2, Entity Framework (DB First Approach), SQL Server 2014, Visual Studio Code and Angular 8

Following are some important notes:
* Run the given [Database Scripts](https://github.com/sumuongit/asp-mvc-web-api-vscode-angular-8-crud-2/tree/master/WebAPI/WebAPI/Database_Scripts) to generate the database
* Remove the existing edmx and create new one from the database just created
* Web API configuration:

  ```
  //WebApiConfig.cs - change the url of the Angular project if the url does not match
  config.EnableCors(new EnableCorsAttribute("http://localhost:4200", headers:"*", methods:"*"));  
  ```
* Run Web API project
* Angular project settings:
  
  ```
  //change the url of the Web API project if the url does not match
  //user-login.service.ts
  readonly rootURL = "http://localhost:36348/api/User/";
  //user-register.service.ts
  readonly rootURL = "http://localhost:36348/api";  
  //customer.service.ts 
  readonly rootURL = "http://localhost:36348/api";
  ```
* Run Angular project

## Features
* Sign up and Sign in
* CRUD operation
* Sign out

## Database Scripts
[Database Scripts](https://github.com/sumuongit/asp-mvc-web-api-vscode-angular-8-crud-2/tree/master/WebAPI/WebAPI/Database_Scripts)
	
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
$ git clone https://github.com/sumuongit/asp-mvc-web-api-vscode-angular-8-crud-2.git
# Go into the repository
$ cd asp-mvc-web-api-vscode-angular-8-crud-2
```

## Contributing
* Fork the repository
* Create a topic branch
* Implement your feature or bug fix
* Add, commit, and push your changes
* Submit a pull request

## License
[MIT License](https://github.com/sumuongit/asp-mvc-web-api-vscode-angular-8-crud-2/blob/master/LICENSE)
