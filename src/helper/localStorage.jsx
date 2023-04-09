import { useContext } from "react";
import { CartContext } from "../context/cartContext";


export const localStorage = () => {

    const setLocalStorage = () =>{
        const { cart } = useContext( CartContext );
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    
    
    return {
        //Metodos 
        setLocalStorage
    }
};