import { createContext, useContext, useState, useEffect} from "react"
import { toast } from "react-toastify";

const cartContext = createContext()
const Provider = cartContext.Provider

export const useCart = () => {
    const values = useContext(cartContext);
    return values
}

const CartProvider = ({ children }) => {
    const stored = JSON.parse(localStorage.getItem('cartList')) ?? [];
    const [cart, setCart] = useState(stored);
    const [totalCart, setTotalCart] = useState()
    const [totalPrice, setPrice] = useState(0)

    const [disable, setDisable] = useState()

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cart))
        setTotalCart(totalProd)
        setPrice(total)
    }, [cart]);


    const addProd = (item, amount) => {
        setCart((current) => {
            if (inCart(item)) {
               const newCart = current.map((i) => {
                if (item.id == i.id) {
                    if (i.amount + amount > i.stock) { 
                        toast("Te pedimos disculpas, en este momento no tenemos más unidades disponibles.", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          });
                          setDisable(true)
                        return i} else {
                            toast("Tu album ya te espera en el carrito", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                    return {...item, amount: i.amount + amount}}
                } 
                else {
                    return i
                }
               })
               return[...newCart]
        }
        else {
            toast("Tu album ya te espera en el carrito", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
                return [...current, {...item, amount: amount}]
            }
        })
        
    }

 const modifyProd = (id) => {
    const find = cart.find((el) => el.id == id)
    setCart(
        (current) => {
            if (find) {
                const newCart = current.map((i) => {
                    if (i.id == id) {
                        return {...i, amount: i.amount +1}
                    }
                    else {
                        return i
                    }
                })
                return [...newCart]
            }
        }
    )
 }

 const lessProd = (id) => {
    const find = cart.find((el) => el.id == id)
    setCart(
        (current) => {
            if (find) {
                const newCart = current.map((i) => {
                    if (i.id == id) {
                        return {...i, amount: i.amount -1}
                    }
                    else {
                        return i
                    }
                })
                return [...newCart]
            }
        }
    )
 }

 const delProd = (id) => {
    setCart(
        (current) => {
            
                return current.filter((el) => el.id !== id)
            
        }
    )

 }

    const empty = () => {
        setCart([])
    }

    const total = cart.reduce((accumulator, curValue) => {
            return accumulator + (curValue.price * curValue.amount)
        }, 0)

        const totalProd = cart.reduce((accumulator, curValue) => {
            return accumulator + curValue.amount
        }, 0)
    

    const inCart = (item) => {
        const current = [...cart]
        const found = current.find((el) => el.id == item.id)
        
       if (found) {return true}
       else {return false}
        
    }

    const values = {
        cart: cart,
        totalCart: totalCart,
        addProd: addProd,
        empty: empty,
        delProd: delProd,
        totalPrice: totalPrice,
        modifyProd: modifyProd,
        lessProd: lessProd,
        disable:disable,

    }

    return (
        <Provider value={values}>
            {children}
        </Provider>
    )
}

export default CartProvider