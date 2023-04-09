import { useEffect, useState } from "react";
import { CartContext } from "./cartContext";


export const CartProvider = ({ children }) => {
    
    const [cart,setCart] = useState([]);
    const [cardCount,setCardCount] = useState(0);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        const localValue = JSON.parse(localStorage.getItem('cart'));
        if (localValue != null) {
            setCardCount( localValue.length );
        }       
    }, []);

    return (
        <CartContext.Provider 
            value={{ 
                cart, setCart: setCart,
                isLoading, setIsLoading: setIsLoading,
                cardCount, setCardCount: setCardCount
            }}
        >
            { children }
        </CartContext.Provider>
    )
};