import { getFirestore, setDoc, doc, getDoc, updateDoc} from "firebase/firestore";

import { app } from "../connectFirebase.js";

const db = getFirestore(app);

export async function getData(collection, id) {
    return await getDoc(doc(db, collection, id));
}

export async function updateData(collection, id, data) {
    return await updateDoc(doc(db, collection, id), data);
}

export async function setData(collection, id, data) {
    return await setDoc(doc(db, collection, id), data);
}