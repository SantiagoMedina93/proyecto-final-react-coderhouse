import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ItemCart } from "../itemCart/itemCart";

import './style-ItemCartContainer.css'
import '../../../main.css';

export const ItemCartContainer = ({ cart }) => {

    const [totalValue,setTotalValue] = useState([]);
    const navigate = useNavigate()
    const getBack = () =>{
        navigate(-1);
    }

    // if (total.length > 1) {
    //     total.map( value => {

    //     })
    // }

    return (
        <ul className="ItemCartContainerMain">
            {
                cart.map( item => (
                    <li key={ item.id }>
                        <ItemCart item={ item } setTotal={ setTotalValue } total={ totalValue }/>
                    </li>
                ))
            }
            <section className="ItemCartContainerFooter">
                <button onClick={ getBack } className="btn-main">
                    VOLVER
                </button>
                <div className="btnFooter">
                    <h1>TOTAL: ${ }</h1>

                    <NavLink to="/checkout">
                        <button className="btn-main">
                            CONTINUAR
                        </button>
                    </NavLink>
                    
                </div>
            </section>
        </ul>
    )   
};