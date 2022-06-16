import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { doc, getDoc, setDoc, getFirestore, Timestamp  } from "firebase/firestore";
import { app } from "./firebase";

export const FirebaseProvider = {
    'DEFAULT': "firebase", 'GOOGLE': "google", 'FACEBOOK':"facebook", 'TWITTER': "twitter", 'GITHUB': "github",
  }

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

    getAuthCredential(){
      return this.authCredential;
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
      try{
      if((this.authProvider === FirebaseProvider.DEFAULT)
      && (aUser.pass)){
        const auth = getAuth();
        const credential = EmailAuthProvider.credential(
          aUser.email,
          aUser.defaultPasswd
         );
        await reauthenticateWithCredential(auth.currentUser, credential)
        const user = await updatePassword(auth.currentUser, aUser.pass)
      }
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
        const result = await setDoc(docRef, userLikeUsers);
        return result
      }catch(error){
        console.log(error);
      }
    }

    async addUser(aUser) {
        const userLikeUsers = {
          country: (aUser.country)?aUser.country:'',
          lastname: (aUser.lastname)?aUser.lastname:'',
          message: (aUser.message)?aUser.message:'',
          name: (aUser.name)?aUser.name:'',
          picture: (aUser.picture)?aUser.picture:'',
          timestamp: Timestamp.fromDate(new Date()),
          username: (aUser.username)?aUser.username:'',
      }

      if(this.authProvider === FirebaseProvider.DEFAULT){
        const auth = getAuth();
        const user = await createUserWithEmailAndPassword(auth, aUser.email, aUser.pass)
        userLikeUsers.Id = user.user.uid;
        userLikeUsers.accessToken = user.user.accessToken;
        userLikeUsers.providerId = user.user.providerId;
        const result = await this.setUser(userLikeUsers);
        return userLikeUsers
      
      }
    }
}
