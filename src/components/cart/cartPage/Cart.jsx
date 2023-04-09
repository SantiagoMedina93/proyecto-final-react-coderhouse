import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/cartContext";
import { ItemCartContainer } from "../itemCartContainer/ItemCartContainer";
import { NavLink } from "react-router-dom";

import "./style-Cart.css"
import "../../../main.css"

export const Cart = () => {
    
    const { cart, setCart } = useContext( CartContext );

    const localValue = JSON.parse(localStorage.getItem('cart'));  
    
    useEffect(() => {
        if (cart.length == 0 && localValue != null) {
            setCart(localValue);
        }
    }, []);
    
    
    return (
        <>
            <div className="titleCart">
                    <h1>CARRITO DE COMPRAS</h1> 
                </div>
            <section className="cartMain">
                
            {
                ( cart.length > 0 )
                ? <ItemCartContainer cart={ cart } /> 
                : <NavLink to={-1} className="btn-main" style={{ textDecoration:"none" }} > VOLVER </NavLink>
                }
            </section>
        </>
    )
};