import { collection, addDoc } from "firebase/firestore";
import database from "./firebase/firebase";

export const write_to_db = () =>  {
    addDoc(collection(database, "fishData"), {
        firstName: "John",
        lastName: "Doe",
        age: 30
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
}
