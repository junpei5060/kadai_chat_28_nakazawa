import Firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyA365DFhVAAH_WLASehC8uBYi6R25xkfB0",
    authDomain: "chat-app-1715d.firebaseapp.com",
    databaseURL: "https://chat-app-1715d.firebaseio.com",
    projectId: "chat-app-1715d",
    storageBucket: "chat-app-1715d.appspot.com",
    messagingSenderId: "239344260010",
    appId: "1:239344260010:web:bfdae543d4531602dbd1d3"
}

const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore