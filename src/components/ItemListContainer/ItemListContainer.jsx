import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Filter from "../Filter/Filter.jsx"
import "../ItemListContainer/ItemListContainer.css"


const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { categoria } = useParams()

  
  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, "productos")
    const collectionFiltered = !categoria ? queryCollection : query(
      queryCollection,
      where("categoria", "==", categoria)
    )



    getDocs(collectionFiltered)
      .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }, [categoria])



  const pFiltered = ({ stateF, filterChange }) => (
    <div className="container-b">
      <section className="seartch">
        <h2>Seartch</h2>
        <input type="text" value={stateF} onChange={filterChange} />
      </section>

      {isLoading ?
        <div className="custom-loader"></div>
        :
        <>
          {stateF === ""

            ? productos.map(({ id, categoria, imagen, marca, precio }) => <div key={id} className="card">
              <img src={imagen} className="img-card" alt="watch" />
              <div className="card-b">
                <h4>{marca}</h4>
                <h6>{categoria}</h6>
                <h6> U$D {precio}</h6>

                <Link to={`/detail/${id}`}>
                  <button className="card-btn">Detail</button>
                </Link>
              </div>
            </div>
            )
            :
            productos.filter(reloj => reloj.marca.toLowerCase().includes(stateF.toLowerCase())).map(({ id, categoria, imagen, marca, precio }) => <div key={id} className="card">
              <img src={imagen} className="img-card" alt="watch" />
              <div className="card-b">
                <h4>{marca}</h4>
                <h6>{categoria}</h6>
                <h6>{precio}</h6>
                <Link to={`/detail/${id}`}>
                  <button className="card-btn">Detail</button>
                </Link>
              </div>
            </div>

            )}
        </>}

    </div>
  )




  return (

    <Filter >
      {pFiltered}
    </Filter>
  )
}


export default ItemListContainer
