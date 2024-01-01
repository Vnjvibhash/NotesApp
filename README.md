# Note App Readme
Welcome to the Note App! This React Native Android application, backed by Firebase, allows you to efficiently manage your notes. Below, you'll find information about the different pages and functionalities offered by the app.

## Home Page
The Home Page is the main dashboard of the Note App. Here, you can view a list of all your notes. Each note is displayed with its title, a brief preview, and options to edit or delete the note.

## Add Note Page
The Add Note Page lets you create a new note. You can enter a title and the content of your note. Once you've added the necessary information, click the "Save" button to save the new note. This note will then be displayed on the Home Page.

## Edit Note Page
The Edit Note Page allows you to modify the content of an existing note. It includes the following functionalities:

## Update Note
You can update the title and content of the note. After making the necessary changes, click the "Update" button to save the updated information.

## Delete Note
If you want to remove a note, click the "Delete" button on the Edit Note Page. A confirmation prompt will appear before permanently deleting the note.

# Firebase Integration
The Note App utilizes Firebase for backend functionalities, including data storage and authentication. Make sure to set up your Firebase project and replace the configuration details in the app accordingly.

# Getting Started
To run the Note App on your Android device, follow these steps:

#### Clone this repository to your local machine.

```
  git clone https://github.com/your-username/note-app.git
```

#### Navigate to the project directory.

```
  cd note-app
```

#### Install the dependencies.

```
  npm install
```

### Set up your Firebase project and replace the configuration details in the app.
use the Firestore as database and use the web app integration to connect with and add the config file to your repository such as:
##### config.js
```
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "Your API Key",
    authDomain: "notesapp-Domain",
    projectId: "notesapp-id",
    storageBucket: "notesapp-stirage",
    messagingSenderId: "ID",
    appId: "Your Firebase App ID",
    measurementId: "G-ID"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig,{
        experimentalForceLongPolling: true,
        useFetchStreams: false,
    });
}

export { firebase };
```

#### Start the React Native development server.

```
  npx react-native start
```
Now press the a to run on android device.

#### Build and run the Android app.

```
  npx react-native run-android
```
Now press the a to run on android device.

Explore, add, edit, and delete notes as needed on your Android device!


# Technologies Used
📝 React Native

📝 Firebase (Firestore for data storage)

## Contributions
Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

Happy noting on your React Native Android App with Firebase backend! 📝🔥
