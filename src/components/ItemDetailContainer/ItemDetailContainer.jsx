import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"


const DetailContainer = (relojes) => {
    const { id } = useParams()
   console.log(relojes)

    return (
        <div>
            <ItemDetail
                imagen={relojes.imagen}
                marca={relojes.marca}
                precio={relojes.precio}
            />
        </div>
    );
}

export default DetailContainer 