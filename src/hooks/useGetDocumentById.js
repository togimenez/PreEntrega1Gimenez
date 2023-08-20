import {getFirestore, doc, getDoc} from "firebase/firestore"
import { useEffect, useState } from "react"

const UseGetDocumentById = (collectionName, id) => {
    const [zapatilla, setProduct] = useState(null)


    useEffect(() => {
        const db = getFirestore()

        const zapasRef = doc(db, collectionName, id)
        getDoc(zapasRef).then((snapshot) => {
            if(snapshot.exists()) {
                const zapatilla = {id: snapshot.id, ...snapshot.data()}
                setProduct(zapatilla)

            }
        })
    }, []);

    return{zapatilla}

}

export default UseGetDocumentById