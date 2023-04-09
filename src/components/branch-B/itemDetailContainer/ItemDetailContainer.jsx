import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { providers } from "../../../firebase/providers";
import { ItemDetail } from "../itemDetail/ItemDetail";


export const ItemDetailContainer = memo(() => {
    const [item,setItem] = useState(null);
    const { getDocFirebaseById } = providers();
    const { id } = useParams();

    useEffect(() => {
        getDocFirebaseById(id)
        .then( resultado => setItem(resultado) )
        .catch( error => console.log("Error al obtener el producto " + error) );
    }, []);

    
    return (
        <section>
            {
                ( !item )
                ? <h2>CARGANDO....</h2>
                : <ItemDetail item={ item }/>
               
            }
            {/* { console.log( "ItemDetailContainer" )} */}
        </section>
    )
});