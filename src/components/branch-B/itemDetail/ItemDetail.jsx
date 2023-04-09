import { memo, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { providers } from "../../../firebase/providers";
import { CartContext } from "../../../context/cartContext";

import { ItemCount } from "../itemCount/itemCount";

import "./style-ItemDetail.css"
import "../../../main.css";




export const ItemDetail = memo(({ item }) => {
    const [urlImg,setUrlImg]     = useState(null);
    const [disabled,setDisabled] = useState(false);
    const [counter,setCounter]   = useState(1);
    const { getImgFirebase }     = providers();
    const { cart, setCart, setCardCount  }     = useContext( CartContext );
    
    const { nombre, editorial, precio, cantidad, descripcion, id } = item;
    const localValue = JSON.parse(localStorage.getItem('cart'));
    const navigate = useNavigate();

    useEffect(() => {
        const localValue = JSON.parse(localStorage.getItem('ItemDetailImg'));
        (localValue != null && id == localValue.id) 
        ? setUrlImg( localValue.urlImg )
        : getImgFirebase(editorial, nombre)
         .then(respuesta => setUrlImg( respuesta ))
         .catch( error => console.log(error) );
    }, []);

    useEffect(() => {
        if (localValue != null){
            localValue.map( itemLocal =>{
                ((itemLocal.id == item.id) && setDisabled(true)); 
            });
        }
    }, []);

    const addCart = () => {   
        const newItem = { ...item, cantidadPedida: counter, urlImg };

        (localValue != null)   
        ? localStorage.setItem('cart',JSON.stringify([ ...localValue, newItem  ]))  // CARRITO LLENO
        : localStorage.setItem('cart',JSON.stringify([ newItem ]));                 // CARRITO Vacio


        setCardCount( JSON.parse(localStorage.getItem('cart')).length )
        setCart([ ...cart, newItem]); 
        setDisabled(true);
    }

    const getBack = () => {
        navigate(-1);
    }
    
    console.log(item);

    return (
        <section className="mainItemDetail">
            <section className="img">
                {
                    <img 
                    src={ urlImg } 
                    alt= {`Imagen de la portada del tomo 1 del manga ${nombre} de la editorial ${editorial}`} 
                    />
                }
            </section>
            <section className="info">
                <h1><b>{ nombre }</b></h1>
                <p><b>Precio:</b> ${ precio }</p>
                <p><b>Editorial: </b> { editorial } </p>
                <p><b>Stock: </b> { cantidad } </p>
                <p><b>Descripción:</b> { descripcion } </p>


                <div className="btn-div">
                    <button 
                        className="btn-main" 
                        onClick={ getBack }
                    >
                        VOLVER
                    </button>

                    <div className="btn-counterCart" style={{display: (cantidad > 0)?"flex":"none"}}>
                        <div className="counterCart">
                            <ItemCount 
                                counter={ counter } 
                                setCounter={ setCounter } 
                                cantidad={ cantidad }
                            />    
                        </div>
                        <button 
                            className="btn-main "
                            onClick={ addCart }
                            disabled={ disabled }
                            >
                            AGREGAR AL CARRITO
                        </button>
                        {
                            (disabled && <p>AGREGADO!</p>)
                        }
                    </div>

                    <button disabled className="btn-main" style={{display: (cantidad > 0)?"none":"flex"}}>
                        SIN STOCK
                    </button>
                </div>
            </section>
            {/* { console.log( "ItemDetail" ) } */}
        </section>
    )
});