import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { mFetch } from "../utils/mFetch"


const DetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        mFetch(id)
            .then(resp => setItem(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    })

    return (
        <div>
            {loading ?
                <h2>cargando...</h2>
                :
                <ItemDetail item={item} />}
        </div>
    );
}

export default DetailContainer 