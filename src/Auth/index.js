import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBh2hsYU6XHLLv4riFgaqVt944s4NOVsyM",
  authDomain: "vickyapi.firebaseapp.com",
  projectId: "vickyapi",
  storageBucket: "vickyapi.appspot.com",
  messagingSenderId: "702282977515",
  appId: "1:702282977515:web:e52e10e1d0d230d937aeae"
};
let app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();



// query documents in a collection

function QuerryDoc() {
  this.start =  (dbname, where1, where2) => {
    let data = [];
    const collRef = collection(db, dbname);
    const q = query(collRef, where(where1, '==', where2));
    onSnapshot(q, (snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        data.push({ ...doc.data(), id: doc.id });
      })
    })
    return data
  };
}

let getDocuments = new QuerryDoc();
// end of querry documents

// reset user password
function ResetPassword(){
  this.reset = (email)=>{
   const res =  sendPasswordResetEmail(auth, email)
   return res

  }
}

function GetSingleDoc(dbname, id){
  const docRef = doc(db, dbname, id);
  const docSnap =  getDoc(docRef);
  return docSnap.data
}

let passwordReset = new ResetPassword()
//reset user password


// query documents 2 in a collection

function QuerryDoc2() {
  this.start =  (dbname, where1, where2) => {
    const collRef = collection(db, dbname);
    const q = query(collRef, where(where1, '==', where2));
    return q
  };
}

let getDocument = new QuerryDoc2();
// end of querry documents

// create account function for new users
function signup() {
  this.start = (email, password) => {
    let data = createUserWithEmailAndPassword(auth, email, password);
    return data;
  };
}
let createAccount = new signup();
// end create account function for new users

function signin() {
  this.start = (email, password) => {
    let data = signInWithEmailAndPassword(auth, email, password);
    return data;
  };
}
let login = new signin();
// end create account function for new users

// add doc to database
function addDocument() {
  this.start = (dbname, dform) => {
    let collRef = collection(db, dbname);
    let data = addDoc(collRef, dform);  
    return data;
  };
}

let AddDoc = new addDocument();

//end of add doc

// set the value of users in a database
function updateSingleDoc() {
  this.update = (dbname, userId, arrayinfo) => {
    let data = setDoc(doc(db, dbname, userId), arrayinfo);
    return data;
  };
}
let docUpate = new updateSingleDoc();
// set the value of users in a database

// update the value of a document  in an exising database
function updateExitingDoc() {
  this.update = (dbname, userId, arrayinfo) => {
    const selectedUser = doc(db, dbname, userId);
    return updateDoc(selectedUser, arrayinfo);
  };
}
let UpdateADoc = new updateExitingDoc();
// update the value of a document  in an exising database

// log out function in the database
function logOut() {
  let data = signOut(auth);
  return data;
}
// log out function in the database

// get the value of a single document realtime
let selectedUser = (dbname, user_id) => {
  let User = doc(db, dbname, user_id);
  return User;
};
// used with snapshot  onSnapshot(selectedUser("users", curUser), (doc) => {})
// gets the value of a single user by its id

// get the value of collection of documents
let alluser = (dbname) => {
  let User = collection(db, dbname);
  return User;
};

// update image of user

let UploadImg = (file, dbname, uid, data) => {
  const storage = getStorage(app);
  const metadata = {
    contentType: 'image/jpeg',
  };

  // const file = './images.jpeg'
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, 'ekdata/companyLogo/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      data.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (snapshot.state == 'done') {
        data.status == 'completed';
      }
    },
    (error) => {
      switch (error.code) {
        case 'storage/unauthorized':
          data.errMsg = 'storage/unauthorized';
          break;
        case 'storage/canceled':
          data.errMsg = 'storage/canceled';
          break;

        case 'storage/unknown':
          data.errMsg = 'storage/unknown';
          break;

        default:
          data.errMsg = 'none';
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        UpdateADoc.update(dbname, uid, { companyLogo: downloadURL }).then(
          () => {
            data.uploaded = 'uploaded';
          }
        );
      });
    }
  );
  let res = data;
  return res;
};


let UploadImage = (file, dbname, uid, data) => {
  const storage = getStorage(app);
  const metadata = {
    contentType: 'image/jpeg',
  };

  // const file = './images.jpeg'
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, 'ekdata/foundersImage/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      data.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (snapshot.state == 'done') {
        data.status == 'completed';
      }
    },
    (error) => {
      switch (error.code) {
        case 'storage/unauthorized':
          data.errMsg = 'storage/unauthorized';
          break;
        case 'storage/canceled':
          data.errMsg = 'storage/canceled';
          break;

        case 'storage/unknown':
          data.errMsg = 'storage/unknown';
          break;

        default:
          data.errMsg = 'none';
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        UpdateADoc.update(dbname, uid, { founderImage: downloadURL }).then(
          () => {
            data.uploaded = 'uploaded';
          }
        );
      });
    }
  );
  let res = data;
  return res;
};

export {
  AddDoc,
  alluser,
  app,
  auth,
  createAccount,
  db,
  doc,
  docUpate,
  getAuth,
  getDoc,
  getDocument,
  getDocuments,
  getDownloadURL,
  GetSingleDoc,
  getStorage,
  login,
  logOut,
  onAuthStateChanged,
  onSnapshot,
  passwordReset,
  ref,
  selectedUser,
  sendEmailVerification,
  UpdateADoc,
  uploadBytesResumable,
  UploadImage,
  UploadImg,
};

// upload(file) {
//   const storage = getStorage(app);
//   const metadata = {
//     contentType: 'image/jpeg'
//   };
//   // const file = './images.jpeg'
//   // Upload file and metadata to the object 'images/mountains.jpg'
//   const storageRef = ref(storage, 'kinapp/userprofile/' + file.name);
//   const uploadTask = uploadBytesResumable(storageRef, file, metadata);

//   // Listen for state changes, errors, and completion of the upload.
//   uploadTask.on('state_changed',
//     (snapshot) => {
//       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log('Upload is ' + progress + '% done');
//       switch (snapshot.state) {
//         case 'paused':
//           console.log('Upload is paused');
//           break;
//         case 'running':
//           console.log('Upload is running');
//           break;
//         case 'done':
//           console.log('Upload is done');
//           break
//       }
//     },
//     (error) => {
//       console.log(error.code)
//       // A full list of error codes is available at
//       // https://firebase.google.com/docs/storage/web/handle-errors
//       switch (error.code) {
//         case 'storage/unauthorized':
//           alert('storage/unauthorized')
//           // User doesn't have permission to access the object
//           break;
//         case 'storage/canceled':
//            alert('storage/canceled')
//           // User canceled the upload
//           break;

//         // ...

//         case 'storage/unknown':
//           // Unknown error occurred, inspect error.serverResponse
//           break;
//       }
//     },
//     () => {
//       // Upload completed successfully, now we can get the download URL
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log('File available at', downloadURL);
//         UpdateADoc.update("users", this.uid, { img: downloadURL }).then(()=>{
//           alert("image upladesd ")
//         })
//       });
//     }
//   );
// }

// onSnapshot(alluser("users"), (snapshot) => {
//   this.Users = []
//   snapshot.forEach((doc) => {
//     this.Users.push({ ...doc.data(), id: doc.id });
//   });
// })
// end of get the value of all documents or user
// getDocs(usersDetail)
// .then((snapshot)=>{
//   let users = []
//   snapshot.forEach((doc)=>{
//     users.push({...doc.data(), id: doc.id})
//   })
//   console.log(users)
// }).catch((err)=>{
//   console.log(err)
// })
// Storage areaa
