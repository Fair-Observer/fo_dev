import * as firebase from 'firebase';
import firebase_app from './firebase.js';
import { isBrowser, isNode } from 'browser-or-node';

export function updateHeader(updates) {
  if(isBrowser){
    updates.map(update => {
      const queryString = `meta[${update.identifier}=\"${update.type}\"]`;
      let oldHeader = document.querySelector(queryString)
      oldHeader.content = update.newValue;
      if(update.type === "title") {
        document.title = update.newValue;
      }
    });
  }
}

export function updateFirestore(collection,document,field,content,nextfunction = function(){}) {
  const db = firebase.firestore();
  let updates={};
  let correctcontent;
  if (typeof content == "string"){
    correctcontent = Number(content)?Number(content):content;
  } else {
    correctcontent = content;
  }
  updates[field] = correctcontent;
  db.collection(collection).doc(document).set(updates , { merge: true })
  .then(nextfunction)
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}

export function duplicateFirestore(collection,olddocument,nextfunction = function(){}) {
  let newdocument = prompt(`Copying document ${olddocument} in collection ${collection}. Please enter a new document name: `);
  const db = firebase.firestore();
  firebase.firestore().collection(collection).doc(olddocument).get().then(result => {
    let data = result.data();
    data["key"] = newdocument
    db.collection(collection).doc(newdocument).set(data , { merge: true })
      .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  })
  .then(nextfunction)
  .catch(function(error) {
    console.error("Error reading document: ", error);
  });
}

export function duplicateFirestoreExpicit(collection,olddocument,newdocument,nextfunction = function(){}) {
  const db = firebase.firestore();
  firebase.firestore().collection(collection).doc(olddocument).get().then(result => {
    let data = result.data();
    data["key"] = newdocument
    db.collection(collection).doc(newdocument).set(data , { merge: true })
      .then(()=>{
        nextfunction()
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  })
  .catch(function(error) {
    console.error("Error reading document: ", error);
  });
}

export function updateFirestoreObject(collection,document,object,nextfunction = function(){}) {
  const db = firebase.firestore();
  db.collection(collection).doc(document).set(object , { merge: true })
  .then(nextfunction)
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}

export function uploadFile(path,file,name,nextfunction = function(url){}) {
  const storage = firebase.storage();
  var storageRef = storage.ref().child(path);
  storageRef.put(file).then(snapshot => {
    snapshot.ref.getDownloadURL().then(url => {
      // console.log(`Your file can be downloaded at ${url}`);
      nextfunction(url);
    });
  });
}

export function signInWithEmailAndPassword(email, password, errorhandler = function(error){}, nextfunction = function(result){}) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(result => { 
    nextfunction(result)
  })
  .catch(error => {errorhandler(error.message)});
}

export function createUserWithEmailAndPassword(email, password, firstname, lastname, phone, errorhandler = function(error){}, nextfunction = function(result){}) {
  // console.log(`Create user event with email ${email} and password ${password}.`);
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => { 
    const db = firebase.firestore();
    const timestamp = Date.now();
    const updates = {
      accountcreated: timestamp,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      key: result.user.uid,
      image_url:"https://firebasestorage.googleapis.com/v0/b/edeeu-server.appspot.com/o/userimages%2Fblank-profile-picture-973460_640%20(1).png?alt=media&token=4ffaf44e-b4c2-4240-abf7-ed9ec22f4bd4"
    };
    // console.log("Result in createUserWithEmailAndPassword: ",result);
    db.collection("users").doc(updates.key).set(updates, { merge: true }).then(nextfunction(result))
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  })
  .catch(error => {errorhandler(error.message)});
}

export function onboardingCreateUserWithEmailAndPassword(email, password, firstname, lastname) {
  const onboardingVerifyEmail = firebase_app.functions().httpsCallable('onboardingVerifyEmail');
  // console.log(`Create user event with email ${email} and password ${password}.`);
  const db = firebase.firestore();
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => { 
    // console.log("I created a user with email and password.")
    const timestamp = Date.now();
    const updates = {
      accountcreated: timestamp,
      firstname: firstname,
      lastname: lastname,
      email: email,
      key: result.user.uid,
      image_url:"https://firebasestorage.googleapis.com/v0/b/edeeu-server.appspot.com/o/userimages%2Fblank-profile-picture-973460_640%20(1).png?alt=media&token=4ffaf44e-b4c2-4240-abf7-ed9ec22f4bd4"
    };
    // console.log("Updates in onboardingCreateUserWithEmailAndPassword: ",updates);
    // console.log("Result in onboardingCreateUserWithEmailAndPassword: ",result);
    // console.log("The db object:",db)
    // console.log("The db collection users object:",db.collection("users"))
    db.collection("users").doc(updates.key).set(updates, { merge: true }).then(() => {
      // console.log("I get to onboardingCreateUserWithEmailAndPassword after adding data: ");
      onboardingVerifyEmail({ email: email,firstname:firstname,uid:result.user.uid})
      .then(verifyemailresult => {
        console.log("Verify email success")
        console.log(verifyemailresult) 
      }).catch(error => {
        console.log("Verify email failure")
        // console.log(error) 
      });
    })
    .catch(function(error) {
      console.log("Error writing document: ", error);
    });
  })
  .catch(error => {console.log(error)});
}


    

export function updateUserInfo(object={}) {
  // console.log("Updating user")
  // console.log(firebase.auth().currentUser);
  firebase.auth().currentUser.updateProfile(object).then(function() {
    // console.log("Update done!");
    // console.log("updateUserInfo currentUser",firebase.auth().currentUser);
  }).catch(function(error) {
    // console.log(error);
  });
} 

export function updateUserEmail(email) {
  firebase.auth().currentUser.updateEmail(email).then(function() {
    // console.log("Update done!");
  }).catch(function(error) {
    // console.log(error);
  });
}

export function logout(afterlogout) {
  firebase.auth().signOut().then(() => {
    if(afterlogout) {
      afterlogout();
    }
    console.log("Logged out!");
  });
}

export function createNewDirector(username,nextfunction = function(result){}) {
  const db = firebase.firestore();
  let details={};
  details["bio"] = "This is the Bio";
  details["displaytitle"] = "Director of Studies";
  details["displayname"] = "displayname";
  details["homepage"] = false;
  details["image_url"] = "https://firebasestorage.googleapis.com/v0/b/edeeu-education-master-build.appspot.com/o/general%2Fblank-profile-picture-973460_640.png?alt=media&token=0e648993-c3bd-4d18-af4f-8104c74b0a75";
  details["subjects"] = [];
  details["rate"] = 950;
  details["key"] = username;
  details["id"] = username;
  db.collection("directors").doc(username).set(details , { merge: true })
  .then(nextfunction)
  .catch(function(error) {
    // console.error("Error writing document: ", error);
  });
}

export function createNewClass(classname,nextfunction = function(result){}) {
  const db = firebase.firestore();
  let details={};
  details["maintitle"] = "This is the Main Title";
  details["subtitle"] = "This is the Sub Title";
  details["key"] = classname;
  db.collection("classes").doc(classname).set(details , { merge: true })
  .then(nextfunction)
  .catch(function(error) {
    // console.error("Error writing document: ", error);
  });
}

export function createNewEvent(eventname,nextfunction = function(result){}) {
  const db = firebase.firestore();
  let details={};
  details["maintitle"] = "This is the Main Title";
  details["key"] = eventname;
  details["startdateandtime"] = new Date();
  details["duration"] = 1;
  details["showimage"] = "no";
  db.collection("events").doc(eventname).set(details , { merge: true })
  .then(nextfunction)
  .catch(function(error) {
    // console.error("Error writing document: ", error);
  });
}

export function createNewEventseries(eventseriesname,nextfunction = function(result){}) {
  const db = firebase.firestore();
  let details={};
  details["maintitle"] = "This is the Main Title";
  details["key"] = eventseriesname;
  db.collection("eventseries").doc(eventseriesname).set(details , { merge: true })
  .then(nextfunction)
  .catch(function(error) {
    // console.error("Error writing document: ", error);
  });
}

export function createNewStatus(statusname,nextfunction = function(result){}) {
  const db = firebase.firestore();
  let details={};
  details["maintitle"] = "This is the Main Title";
  details["key"] = statusname;
  db.collection("statuses").doc(statusname).set(details , { merge: true })
  .then(nextfunction)
  .catch(function(error) {
    // console.error("Error writing document: ", error);
  });
}

export function createNewStudent(username,nextfunction = function(result){}) {
  const db = firebase.firestore();
  let details={};
  db.collection("students").doc(username).set(details , { merge: true })
  .then(nextfunction)
  .catch(function(error) {
    // console.error("Error writing document: ", error);
  });
}

export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function addHours(date, hours) {
  var result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
}

export function formattedDateAndTime(date) {
  const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const numbers = ["0th","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st"]
  let formatted_date = (date.getHours()%12) + ":" +  (date.getMinutes()<10 ? ('0' +date.getMinutes()) : date.getMinutes()) + (date.getHours()<12?"am":"pm") + " " + days[date.getDay()]+ ", " + months[date.getMonth()] + " " + numbers[date.getDate()] + ", " + date.getFullYear()
  return formatted_date
}

export function formattedDate(date) {
  const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const numbers = ["0th","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st"]
  let formatted_date =  days[date.getDay()]+ ", " + months[date.getMonth()] + " " + numbers[date.getDate()] + ", " + date.getFullYear()
  return formatted_date
}

  
export function shuffle(array) {
  var copy = Array.from(array)
  var currentIndex = copy.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = copy[currentIndex];
    copy[currentIndex] = copy[randomIndex];
    copy[randomIndex] = temporaryValue;
  }
  return copy;
}

export default { 
  updateFirestore: updateFirestore,
  uploadFile: uploadFile,
  shuffle: shuffle,
  signInWithEmailAndPassword: signInWithEmailAndPassword,
  createUserWithEmailAndPassword: createUserWithEmailAndPassword,
  updateFirestoreObject: updateFirestoreObject,
  createNewClass: createNewClass,
  createNewEvent: createNewEvent,
  addDays: addDays,
  formattedDateAndTime: formattedDateAndTime,
  formattedDate:formattedDate
};