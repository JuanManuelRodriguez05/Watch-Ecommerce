import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mFetch } from "../utils/mFetch.js"
import Filter from "../Filter/Filter.jsx"
import "../ItemListContainer/ItemListContainer.css"


const ItemListContainer = (props) => {
  const [relojes, setRelojes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idc } = useParams()

  //FUNCION ASINCRONA
  useEffect(() => {
    if (!idc) {
      mFetch()
        .then(resultado => {
          setRelojes(resultado);
        })
        .catch(error => console.log(error))
        .finally(setIsLoading(false));
    } else {
      mFetch()
        .then(resultado => {
          setRelojes(resultado.filter(relojes => relojes.categoria === idc));
        })
        .catch(error => console.log(error))
        .finally(setIsLoading(false));
    }

  }, [idc]);



  const pFiltered = ({ stateF, filterChange }) => (
    <div className="container-b">
      <section className="seartch">
        <h2>Buscar</h2>
        <input type="text" value={stateF} onChange={filterChange} />
      </section>

      {isLoading ?
        <h2>Cargando...</h2>
        :
        <>
          {stateF === ""
            
             ? relojes.map(({ id, categoria, imagen, marca, precio }) => <div key={id} className="card">
              <img src={imagen} className="img-card" alt="imagen-reloj" />
              <div className="card-b">
                <h4>{marca}</h4>
                <h6>{categoria}</h6>
                <h6>{precio}</h6>
              </div>
              <Link to={`/detail/${id}`}>
                <button className="card-btn">Ver</button>
              </Link>
            </div>
            )
            :
            relojes.filter(reloj => reloj.marca.toLowerCase().includes(stateF.toLowerCase())).map(({ id, categoria, imagen, marca, precio }) => <div key={id} className="card">
              <img src={imagen} className="img-card" alt="imagen-reloj" />
              <div className="card-b">
                <h4>{marca}</h4>
                <h6>{categoria}</h6>
                <h6>{precio}</h6>
              </div>
              <Link to={`/detail/${id}`}>
                <button className="card-btn">Ver</button>
              </Link>
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
