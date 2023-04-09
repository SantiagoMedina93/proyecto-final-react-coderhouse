
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { useForm } from '../../hook/useForm';

import { useNavigate } from 'react-router-dom';
import { providers } from '../../firebase/providers';

import './style-Checkout.css'
import '../../main.css'


export const Checkout = () => {
    
    const [changePage,setChangePage] = useState(false);
    const { nombre, email, direccion, onInputChange } = useForm({
        nombre:'',
        email:'',
        direccion:''
    });
    const {cart, setCart} = useContext( CartContext );
    const { upLoadStockFirebase, setNewOrderFirebase } = providers();
    const navigate = useNavigate();

    useEffect(() => {
        // VERIFICAR EL LOCAL STORAGE
    }, []);



    const onSubmitForm = (e) => {
        e.preventDefault();
        setChangePage(true)

        // const pedido = [];
        cart.map( item => { 
            upLoadStockFirebase(item).then(console.log("ok"));
            // pedido.push(item);
            // delete pedido.urlImg;
            // delete pedido.cantidad;
        });
        
        const newOrder = {pedido:card, nombre, email, direccion,total:"$$$"}
        setNewOrderFirebase(newOrder)

        setCart([]);
        localStorage.clear();
    }

    const onGoHome = () =>{
        navigate('/');
        location.reload()
    }
    
    return (
        <>
            <section className='checkoutMain' style={{display: (changePage)? "none":"flex"}}>
                <h1> CHECKOUT </h1>
                <form className="checkoutForm" onSubmit={ onSubmitForm }>
                    <div className='inputCheckout'>   
                        <label>Nombre</label>
                        <input 
                            type="text"
                            required
                            name='nombre'
                            value={ nombre }
                            onChange={ onInputChange }
                            />
                    </div>
                    <div className='inputCheckout'>
                        <label>Email</label>
                        <input 
                            type="email"
                            required
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                            />
                    </div>
                    
                    <div className='inputCheckout'>
                        <label>Direccion</label>
                        <input 
                            type="text"
                            required
                            name='direccion'
                            value={ direccion }
                            onChange={ onInputChange }    
                            />
                    </div>
                    <h3>Total: $$$</h3>
                    <button type='submit' className='btn-main'>
                        FINALIZAR COMPRA
                    </button>
                </form>
            </section>

            <section className='lastClass' style={{display: (!changePage)? "none":"flex"}}>
                <h1>GRACIAS POR SU COMPRA!!</h1>
                <div className='form-info'>
                    <p>Nombre:{ nombre }</p>
                    <p>Email: { email }</p>
                    <p>Dirección: { direccion }</p>
                    <p>Total: $$$</p>
                </div>

                <button className='btn-main' onClick={onGoHome}>
                    VOLVER AL INICIO
                </button>
                
            </section>
        </>
    )
};