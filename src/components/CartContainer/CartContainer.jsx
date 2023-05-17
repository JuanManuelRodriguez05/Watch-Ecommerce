import { addDoc, collection, getFirestore} from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import "../CartContainer/CartContainer.css"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const [id, setId] = useState("")
    const [completeForm, setCompleteForm] = useState(false)
    const [orderPrice, setOrderPrice] = useState(0)
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const { cartList, deleteProducts, totalCount, deleteProduct} = useCartContext()

// GENERAR ORDEN
const addOrder = (evt) =>{
    evt.preventDefault()
     
    const order ={}
    order.buyer = dataForm
    order.items = cartList.map(({marca, id,  precio, cant}) => ({id, marca, precio, cant}))
    order.total = totalCount
    setOrderPrice(totalCount)

    const dbFirestore = getFirestore()
    const ordersCollection = collection(dbFirestore, "orders")

    addDoc(ordersCollection, order)
    .then(resp=> setId(resp.id),
    setDataForm({
        name: dataForm.name,
        phone: dataForm.phone,
        email: dataForm.email
    }))
    .catch(err =>console.log(err))
    .finally(()=>{
        setTimeout(()=>{
             deleteProducts()
        }, 10000)
   
    })
}

const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
    setCompleteForm(
      Object.values({
        ...dataForm,
        [evt.target.name]: evt.target.value
      }).every((value) => value !== "")
    )
  }
 console.log(dataForm)
    return (
        <div>
            {id.length !== 0 && <div className="order-id">
                <h2>Order Details:</h2>
                <h4>Name: {dataForm.name}</h4>
                <h4>Phone: {dataForm.phone}</h4>
                <h4>Email: {dataForm.email}</h4>
                <h4>Total price: U$D {orderPrice} </h4>
                <h3>Here is the Order ID: {id}</h3> 

                
            </div>}
            {cartList.length !== 0 ?
            <>
            {cartList.map(item => (
                <div className="CartCont-item" key={item.id} >
                    <img className="img-item" src={item.imagen} alt={item.marca} />
                    <div className="itemCart-detail">
                        <span>brand: {item.marca} </span>
                        <span>Quantity: {item.cant}</span>
                        <span>Price: U$D {item.precio} </span>
                    </div>
                    <div className="div-btn-eliminar">
                        <button className="btn-CContainer" onClick={() => deleteProduct(item.id)}>Delete from the cart</button>
                    </div>
                </div>
            ))}
            <div>
                <div className="PTotal">
                    <span>Precio total: U$D {totalCount} </span>
                </div>
                <button onClick={deleteProducts} className="btn-CContainer">Delete products</button>
            </div>
            <form className="dataForm">
                <h3>Complete this form to send the order</h3>
                <input type="text"
                    name="name"
                    onChange={handleOnChange}
                    value={dataForm.name}
                    placeholder="Name" />

                <input type="text"
                    name="phone"
                    onChange={handleOnChange}
                    value={dataForm.phone}
                    placeholder="Phone number" />

                <input type="text"
                    name="email"
                    onChange={handleOnChange}
                    value={dataForm.email}
                    placeholder="Email" />

                <input type="email"
                    name="confirmEmail"
                    onChange={handleOnChange}
                    value={dataForm.confirmEmail}
                    placeholder="Confirm email" />

                    <button className="btn-order" onClick={addOrder} disabled={!completeForm} >Send Order</button>
            </form>
            </>
            :
              <div className="empty-cart">
                <h1>The cart is empty</h1>
                <Link className="btn-home" to="/">Home</Link>
              </div>
             }
        </div>


    )


}

export default CartContainer