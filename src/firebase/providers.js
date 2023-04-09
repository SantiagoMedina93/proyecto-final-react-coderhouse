import { getDownloadURL, ref } from "firebase/storage";
import { doc, collection, getDoc, getDocs, query, where, updateDoc, addDoc } from 'firebase/firestore'

import { FirebaseDB, FirebaseStorage } from "./config";



export const providers = () => {

    const getDocFirebaseById = async(id) =>{
        const itemRef = doc( FirebaseDB, "mangas", id);
        const snapshot = await getDoc( itemRef );
        return({ 
            id: snapshot.id, 
            ... snapshot.data() 
        });
    }

    const getCollectionFirebase = async() => {
        const mangasCollection = collection( FirebaseDB, "mangas" );
        const snapshot = await getDocs( mangasCollection );
        const newState = snapshot.docs.map( doc => ({ id: doc.id, ... doc.data() }))
        return newState;  
    }

    const getDocsFirebaseFiltered = async(editorial) =>{
        const mangasCollection = collection( FirebaseDB, "mangas" );
        const queryResult = query( mangasCollection, where("editorial","==", editorial) )
        const snapshot = await getDocs( queryResult );
        const newState = snapshot.docs.map( doc => ({ id: doc.id, ... doc.data() }))
        return newState; 
    }

    const getImgFirebase = async( editorial, nombre ) => {
        const imgRef = ref( FirebaseStorage, `${editorial}/${nombre}.jpg` );
        const data = await getDownloadURL(imgRef);
        return data; 
    }

    const upLoadStockFirebase = async( item ) =>{
        const itemRef = doc( FirebaseDB, "mangas", item.id);
        const nuevaCantidad = item.cantidad - item.cantidadPedida; 
        await updateDoc(itemRef, {cantidad:nuevaCantidad})
    }

    const setNewOrderFirebase = async( newOrder ) => {
        const comprasCollection = collection( FirebaseDB, "ordendes" );
        await addDoc( comprasCollection, newOrder );
    }
    
    return {
        // Metodos
        getDocFirebaseById,
        getCollectionFirebase,
        getDocsFirebaseFiltered,
        getImgFirebase,
        upLoadStockFirebase,
        setNewOrderFirebase
    }
};