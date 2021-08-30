
# microz 🎉

This is a project that I'll use in my future cafe -
I've made it using microservices architecture following all the production norms. 

##### *This repo is going to be pretty.*
## Services
#### 1) General
##### *Docker and Kubernetes*
I've used Docker and Kubernetes in this project extensively. To get over 
the [infinite loop of pain and suffering](https://www.youtube.com/watch?v=TYx0BTyFtmc) during development which is pushing and applying services and deployments I've used [skaffold](https://skaffold.dev/) which apparently goes with well with GCP. (As of now, it's a mess using it!)

I'm using both of these on *Google Cloud Platform* - Kubernetes Engine and cloud build.  

##### *Mongoose with Typescript*
It's tough! 

I plan to use [typegoose](https://typegoose.github.io/) in the future.x

##### *Commits to repository*
I'm following [conventional commits](https://www.conventionalcommits.org/) to keep my commits constant and *beautiful*. 


##### *Error Handling*
Error Handling is done following this: [Express Middleware](https://expressjs.com/en/guide/error-handling.html).
To avoid using next() while throwing errors in async calls I have used this [package](https://www.npmjs.com/package/express-async-errors) which automatically listens to thrown errors. 

I have used a base abstract class - CustomBaseError (It has status code and other information related to error) which I use in error handling middleware to send a uniform response. 
This class is extended by other error classes in the folder extensions. Check out this [folder](https://github.com/yash-dxt/microz/tree/feature/auth/auth/errors).
#### 2)  Authentication Service
Password Hashing: I've used the library [bcryptjs](https://www.npmjs.com/package/bcryptjs) for password hashing and comparing using the async method mentioned over there in another [class](https://github.com/yash-dxt/microz/blob/feature/auth/auth/services/password.ts). 