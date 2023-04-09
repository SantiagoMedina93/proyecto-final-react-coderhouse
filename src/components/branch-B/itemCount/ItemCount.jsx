import React from 'react';
import './style-ItemCount.css'

export const ItemCount = React.memo(({ counter, setCounter, cantidad }) => {
    
    const handleDecrease = () =>{
        if ( counter > 1 ) {
            setCounter( counter => counter - 1 );
        }
    }

    const handleAdd = () =>{
        if ( counter < cantidad ) {
            setCounter( counter => counter + 1 );
        }
    }

    return (
        <section className='counter'>
            <button onClick={ handleDecrease }> - </button>
                <h3>{ counter }</h3>
            <button onClick={ handleAdd } > + </button>
            {/* { console.log( "ItemCount" ) } */}
        </section>
        
    )
});