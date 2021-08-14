GET
localhost:3000/
shows a "hi"

localhost:3000/api/v1.0/users
If you dont send the token, it responses "Token required"
If you send the token, and it is valid, you will get the list of all users (GET a /users)
If you send the token, and it isn't valid, it responses "Invalid token"

Token will be valid for 2 hours.

POST
localhost:3000/auth/login
{
    "username": "juanperez",
    "password": "123456"
}
Should response the user's data and the token needed for the other requests

If you make a mistake in credentials, it will show "invalid credentials"
If you dont send credentials, it will show "Empty field"

localhost:3000/auth/register
If you dont send credentials, it will show "Empty field"

{
    "username": "juanperez",
    "password": "123456"
}
If the username exists in database, it responses "Username exists"

{
    "firstName": "Marcos",
    "lastName": "Lopez",
    "phone": "221-333-3333",
    "email": "marcos@lopez.com",
    "password": "123456",
    "username":"marcoslopez"
}
If there isn't any user with the username setted, it responses the token

PUT
localhost:3000/api/v1.0/users/2	
{
    "phone": "221-222-2222"
}

If token is valid, is updated succefully
If not, it responses that token is invalid

VER LO DEL USERNAME


