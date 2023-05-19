import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';


export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [totalCount, setTotalCount] = useState()

    //ADD PRODUCTS
    const cartAdd = (newProduct) => {
        const productExist = cartList.find((product) => product.id === newProduct.id)

        if (productExist) {
            const updateCartList = cartList.map((product) => {
                if (product.id === newProduct.id) {
                    return { ...product, cant: product.cant + 1 }
                } else {
                    return product;
                }
            })
            setCartList(updateCartList)
        } else { setCartList([...cartList, newProduct]) }

    }

    //PRODUCT COUNTER
    const getTotalProduct = (cartList) => {
        const totalProduct = cartList.reduce(
            (acumulador, actual) => acumulador + actual.cant, 0
        )
        return totalProduct
    }


    //TOTAL PRICE
    useEffect(() => {
        const count = cartList.reduce((acumulador, actual) => acumulador + (actual.precio * actual.cant), 0)
        setTotalCount(count)
    }, [cartList])

    //DELETE ONE PRODUCT
    const deleteProduct = (id) => {
        setCartList(cartList.filter(producto => producto.id !== id))
    }

    //DELETE ALL
    const deleteProducts = () => {
        setCartList([])
    }


    // MESSAGE
    const message = () => {
        toast.success('Watch added to cart successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })

    }
   
    return (
        <CartContext.Provider value={{
            cartList,
            cartAdd,
            totalCount,
            deleteProducts,
            deleteProduct,
            getTotalProduct,
            message
        }}>
            {children}

        </CartContext.Provider>

    )
}