import { createContext, useContext, useState} from "react"

const checkoutContext = createContext()
const Provider = checkoutContext.Provider

export const useCheckout = () => {
    const values = useContext(checkoutContext);
    return values
}

const CheckoutProvider = ({ children }) => {

    const [order, setOrder] = useState();
    const [bought, setBought] = useState()
    
    const orderComplete = (obj) => {
          setOrder(obj)
          setBought(obj.cart)
    }
    
    const values = {
        orderComplete: orderComplete,
        order: order,
        bought: bought,

    }

    return (
        <Provider value={values}>
            {children}
        </Provider>
    )
}

export default CheckoutProvider