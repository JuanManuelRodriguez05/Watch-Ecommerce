import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "../ItemDetailContainer/ItemDetailContainer.css"
import { doc, getDoc, getFirestore } from "firebase/firestore"


const DetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const[producto, setProducto] = useState({})
    const { id } = useParams()


     useEffect(() => {
         const dbFirestore = getFirestore()
         const queryDoc = doc(dbFirestore, "productos", id)
         getDoc(queryDoc)
             .then(resp => setProducto({ id: resp.id, ...resp.data() })) 
             .catch(err => console.log(err))
             .finally (()=> setLoading(false))
     }, [])

    return (
        <div>
            {loading ?
                <div className="custom-loader-detail"></div>
                :
                <ItemDetail producto={producto} />}
        </div>
    );
}

export default DetailContainer 