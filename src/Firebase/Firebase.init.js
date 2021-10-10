import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeOthentiction = () => {
    initializeApp(firebaseConfig)
}
export default initializeOthentiction;

/* steps for Authenticaton 
-----------
Step-1: Initial setup
1. firebase: cerate project
2. create web app
3.  get configure
4. initialize firebase
5. enable auth method

-----------------
Step-2  setup component
1. create login component
2. create register component
3. create route for login and register

-----------------

Step-3 set auth system
1. set up sing in method
2. set up sing out method
3. user state
4. specail observer
5.return necerrary methods and states from fire base

-------------------
Step-4  create auth
1. create a auth provider
2. create context  provider
3. use auth provider
5. create use auth hook
6. set provider context value

-----------------
Step-5 create private route
1. create private route
2. set private route

----------------

Step-6 Redirect after login
1. after redirect user to their desiger
*/

