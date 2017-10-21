export default async function db() {
    const firebase = await import('firebase')
  
    const config = {
        apiKey: "AIzaSyArRe1B0k7_MmMnECovmfT5A_LMpXaworA",
        authDomain: "bob-campport.firebaseapp.com",
        databaseURL: "https://bob-campport.firebaseio.com",
        projectId: "bob-campport",
        storageBucket: "bob-campport.appspot.com",
        messagingSenderId: "842347491143"
      }
  
    try {
      firebase.initializeApp(config)
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
      }
    }
  
    return firebase
}