# Base template 

This project is part of a submission for a final test

## Requirements📋
- Postman (or any frontend that allows to consume the api)

## How to test endpoints 🚀

Request: GET https://entrega-node-1.herokuapp.com/

Response: "Hi!"

- **Authentication**

**REGISTER**

Request:
``` javascript
 {
    "firstName": "Juan",
    "lastName": "Perez",
    "phone": "221-222-2222",
    "email": "juan@perez.com",
    "password": "123456",
    "username":"juanperez"
}
    
 POST https://entrega-node-1.herokuapp.com/auth/register
```

Response:  
```   
 If the username exists in database, it responses "Username exists"
 If you dont send credentials, it will show "Empty field"
 If there isn't any user with the username setted, it responses the token
 Token will be valid for 2 hours
``` 

**LOGIN**

Request:
```javascript
 {
    "username": "marcoslopez",
    "password": "123456"
 }
    
 POST https://entrega-node-1.herokuapp.com/auth/login
```

Response:  
 ```   
  If you use the JSON body, it responses with the token
  If you make a mistake in credentials, it will show "Invalid credentials"
  If you dont send credentials, it will show "Empty field" 
```

---

- **Users**

**GET**

Request (remember you have to send the x-access-token in the header):
```javascript
 GET https://entrega-node-1.herokuapp.com/api/v1.0/users
```

Response:  
 ```   
  If you dont send the token, it responses "Token required"
  If you send the token, and it is valid, you will get the list of all users
  If you send the token, and it isn't valid, it responses "Invalid token" 
```

**PUT**

Request (remember you have to send the x-access-token in the header):
```javascript
 {
    "phone": "221-111-1111"
 } 

 PUT https://entrega-node-1.herokuapp.com/api/v1.0/users/PUT_ID_HERE
```

Response:  
 ```   
  If you dont send the token, it responses "Token required"
  If you send the token, and it is valid, you will get the user with the updated fields
  If you send the token, and it isn't valid, it responses "Invalid token" 
```

**DELETE**

Request (remember you have to send the x-access-token in the header):
```javascript
 DELETE https://entrega-node-1.herokuapp.com/api/v1.0/users/PUT_ID_HERE
```

Response:  
 ```   
  If you dont send the token, it responses "Token required"
  If you send the token, and it is valid, you will get the list of all users 
excepting the deleted
  If you send the token, and it isn't valid, it responses "Invalid token" 
```

**CREATE**

Request (remember you have to send the x-access-token in the header):
```javascript
{
    "firstName": "Juan",
    "lastName": "Perez",
    "phone": "221-222-2222",
    "email": "juan@perez.com",
    "password": "123456",
    "username":"juanperez"
}
 POST https://entrega-node-1.herokuapp.com/api/v1.0/users
```

Response:  
 ```   
  If you dont send the token, it responses "Token required"
  If you send the token, and it is valid, and the username already doesn't exists, 
  you will get the list of all users including the inserted
  If you send the token, and it is valid, and the username already exists, 
  it responses "Username exists"
  If you send the token, and it isn't valid, it responses "Invalid token" 
```

---

- **Tasks**

**GET**

Request (remember you have to send the x-access-token in the header):
```javascript
 GET https://entrega-node-1.herokuapp.com/api/v1.0/tasks
```

Response:  
 ```   
  If you dont send the token, it responses "Token required"
  If you send the token, and it is valid, you will get the list of all tasks
  If you send the token, and it isn't valid, it responses "Invalid token" 
```

**CREATE**

Request (remember you have to send the x-access-token in the header):
```javascript
 { 
    "name": "Github",
    "description": "push project to github",
    "expirationDate": "2021-08-18"
 }
 POST https://entrega-node-1.herokuapp.com/api/v1.0/tasks
```

Response:  
 ```   
  If you dont send the token, it responses "Token required"
  If you send the token, and it is valid, you will get the created task for 
  the authenticated user
  If you send the token, and it isn't valid, it responses "Invalid token" 
```

**UPDATE**

Request (remember you have to send the x-access-token in the header):
```javascript
 { 
    "name": "Updated Task",
 }
 PUT https://entrega-node-1.herokuapp.com/api/v1.0/tasks/PUT_ID_HERE
```

Response:  
 ```   
  If you dont send the token, it responses "Token required"
  If you send the token, and it is valid, you will get the updated task for 
  the authenticated user
  If you send the token, and it isn't valid, it responses "Invalid token" 
```

**DELETE**

Request (remember you have to send the x-access-token in the header):
```javascript
 DELETE https://entrega-node-1.herokuapp.com/api/v1.0/tasks/PUT_ID_HERE
```

Response:  
 ```   
  If you dont send the token, it responses "Token required"
  If you send the token, and it is valid, you will get the list of all
  tasks excepting the deleted
  If you send the token, and it isn't valid, it responses "Invalid token" 
```

## License 📄
[MIT](https://choosealicense.com/licenses/mit/)