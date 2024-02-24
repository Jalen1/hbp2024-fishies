import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"
await setDoc(doc(database, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});