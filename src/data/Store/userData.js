import { getFirestore, setDoc, doc, getDoc, updateDoc, arrayUnion, query, where, getDocs, collection} from "firebase/firestore";

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

export async function arrIncrement(dataI) {
    return arrayUnion(dataI)
}

export async function conditionalGetData(collectionRef, field, value) {
    const queryData = query(collection(db, collectionRef),  where(field, "==", value));
    return await getDocs(queryData);
}