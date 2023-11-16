import firebase from "../firebase";

const db = firebase.ref("/tutorials");

class TutorialDataService {
    getAll() {
        return db;
    }

    create(tutorial) {
        return db.push(tutorial);
    }

    update(key, value) {
        return db.child(key).update(value);
    }
}