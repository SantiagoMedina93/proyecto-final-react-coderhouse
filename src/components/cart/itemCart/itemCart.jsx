import { memo, useContext, useEffect, useState } from "react";

import { ItemCount } from "../../branch-B/itemCount/itemCount";
import { CartContext } from "../../../context/cartContext";

import './style-itemCart.css'
import '../../../main.css';


export const ItemCart = memo(({ item, totalValue, setTotalValue }) => {
    const { urlImg, cantidad, cantidadPedida, precio } = item; 
    const [counter,setCounter] = useState(cantidadPedida);
    const { cart, setCart } = useContext( CartContext );
    
    useEffect(() => {
        // const parcialValue = {
        //     id: item.id,
        //     value: counter * precio
        // }

        
    }, [counter]);
    
    
    
    return (
        <section className="itemCartMain">
            <section className="cartContainer">
                <figure>
                    <img src={ urlImg } alt="" />
                </figure>
                <h2>{ item.nombre } </h2>
                <h3>Precio: ${ precio }</h3>
                <div className="counterItemCard">
                    <ItemCount counter={ counter }  setCounter={ setCounter } cantidad={ cantidad }/>
                </div>
                <h3>Subtotal: ${ item.precio*counter }</h3>
                <button className="btn-main">
                    ELIMINAR
                </button>
            </section>
        </section>
    )
});