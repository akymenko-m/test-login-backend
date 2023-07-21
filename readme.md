# Node.js, Express User authentication

-   created a server using Express and implemented authentication (login)
-   used the Mongodb database
-   implemented 2 endpoints: /login and /protected
-   /login - takes name and password and returns a JWT token
-   /protected - without a token this endpoint is not available and gives an error, with a token it returns msg: "Hello"
