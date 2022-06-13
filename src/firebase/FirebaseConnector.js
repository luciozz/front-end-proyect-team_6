import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { doc, getDoc, setDoc, getFirestore, Timestamp  } from "firebase/firestore";
import { app } from "./firebase";

export const FirebaseProvider = [
    'DEFAULT', 'GOOGLE', 'FACEBOOK', 'TWITTER', 'GITHUB',
]

export class FirebaseConnector {
  constructor(props) {
    this.authProvider = props.authProvider;
    this.authCredential = null;
    this.user = null;

    // Get a reference to the database service
    this.database = getDatabase(app);
    this.firestore = getFirestore(app);
  }

    async getAuthUser(userEMail, pass = null) {

        if(this.authProvider === FirebaseProvider.DEFAULT){
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(auth, userEMail, pass)
        .then((userCredential) => {
            // Signed in
            this.authCredential = userCredential;
            // ...
            //callBack(user);    
            if (userCredential.user) {
                this.user = userCredential.user;
            }        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
        }
        return this.getUserAuthData()
    }

    getProviderID(){
        return this.user.providerId;
    }

    getUserAuthData(){
        return ({
            ID: this.user.uid,
            email: this.user.email,
            token: this.user.accessToken,
        })
    }

    getUserAuthToken(){
        return this.user.accessToken;
    }

    async getUser(Id){
        const docRef = doc(this.firestore, 'Users', Id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
          } else {
            console.log("No such document!");
            return null
          }
    }

    async setUser(aUser) {
        const docRef = doc(this.firestore, 'Users', aUser.Id);
        const userLikeUsers = {
            country: (aUser.country)?aUser.country:'',
            lastname: (aUser.lastname)?aUser.lastname:'',
            message: (aUser.message)?aUser.message:'',
            name: (aUser.name)?aUser.name:'',
            picture: (aUser.picture)?aUser.picture:'',
            timestamp: Timestamp.fromDate(new Date()),
            username: (aUser.username)?aUser.username:'',
        }
        await setDoc(docRef, userLikeUsers);
    }

}
