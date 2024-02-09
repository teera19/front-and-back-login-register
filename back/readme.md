** env_guide **

PORT=

JWT_KEY=

-----------------

** api_service **

method         authen      path             params       body

POST                     /auth/register     none        {username,password,confirmPassword,email}  
POST                     /auth/login        none        {username,password}
GET                      /auth/me           none              none
GET                     /todo   1   none

----------

Notes

MVC(Models, route + Conrtroller, View)
