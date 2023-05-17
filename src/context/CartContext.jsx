import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [totalCount, setTotalCount] = useState()

//AGREGAR PRODUCTOS
    const cartAdd = (newProduct) => {
        const productExist = cartList.find((product)=> product.id === newProduct.id)
        
        if(productExist){
            const updateCartList = cartList.map((product) =>{
                if (product.id === newProduct.id){ 
                    return{ ...product, cant: product.cant + 1}
                }else{
                    return product;
                }
            })
            setCartList(updateCartList)
        } else{ setCartList([...cartList, newProduct ])}
           
    }

//SUMA DE PRODUCTOS
  const getTotalProduct = (cartList) =>{
     const totalProduct = cartList.reduce(
         (acumulador, actual) => acumulador + actual.cant,0 
     )
     return totalProduct
  }


//PRECIO TOTAL
    useEffect(() => {
        const count = cartList.reduce((acumulador, actual) => acumulador + (actual.precio * actual.cant), 0)
        setTotalCount(count)
    }, [cartList])

//ELIMINAR 1 PRODUCTO
     const deleteProduct = (id) => { 
     setCartList(cartList.filter(producto => producto.id !==id))
      }   
     
//ELIMINAR TODO
    const deleteProducts = () => {
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            cartAdd, 
            totalCount,
            deleteProducts,
            deleteProduct,
            getTotalProduct,
           
            
        }}>
            {children}

        </CartContext.Provider>

    )
}