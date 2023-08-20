import {getFirestore, collection, getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"

const useGetDocuments = (coleccion) => {
    const [zapatillas, setZapatillas] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const zapasCollection = collection(db, coleccion)
        getDocs(zapasCollection).then((snapshot) => {
            if(snapshot.size > 0) {
                const zapatillas = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setZapatillas(zapatillas)
            }
        })
    },[])
    return{zapatillas}
}

export default useGetDocuments;