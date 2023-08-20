import {getFirestore, getDocs, collection, where, query} from "firebase/firestore"
import { useEffect, useState } from "react"
import UseGetDocumentById from "../hooks/useGetDocumentById"

const Firebase = () =>{
    const [zapatillas, setProductos] = useState([])

    const {zapatilla} = UseGetDocumentById("snekers",)

    useEffect(() => {
        const db = getFirestore()
        const zapasCollection = collection(db, "snekers")
        getDocs(zapasCollection).then((snapshot) => {
            if(snapshot.size > 0) {
                const zapatillas = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()

                    }
                })
                setProductos(zapatillas)
            }
        })
    },[])

// filtro de datos
    useEffect(() => {
        const db = getFirestore()
        const zapasCollection = collection(db,"snekers")
        const conditionPrecio = where("precio", ">", 40000)
        const q = query(zapasCollection, conditionPrecio)
        getDocs(q).then((snapshot) => {
            if(snapshot.size > 0) {
                const zapatillas = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()

                    }
                })
                setProductos(zapatillas)
            }
        })
    },[])

    useEffect(() => {
        const db = getFirestore()
        const zapasCollection = collection(db,"snekers")
        const conditionColor = where("Color", "==", "Negro")
        const q = query(zapasCollection, conditionColor)
        getDocs(q).then((snapshot) => {
            if(snapshot.size > 0) {
                const zapatillas = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()

                    }
                })
                setProductos(zapatillas)
            }
        })
    },[])


    if (!zapatilla){
        return(
            <div>Cargando...</div>
        )
    }

    
    if (!zapatillas){
        return(
            <div>Cargando...</div>
        )
    }


    return(
        <div>

        </div>
    )
}

export default Firebase;