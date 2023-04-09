import { memo, useEffect, useState } from "react";

import { providers } from "../../../firebase/providers";
import { ItemList } from "../itemList/ItemList";
import './style-ItemListContainer.css'



export const ItemListContainer = memo(({ category }) => {
    const [ mangas,setMangas ] = useState(null);
    const { getCollectionFirebase, getDocsFirebaseFiltered } = providers();

    
    useEffect(() => {
        if ( Boolean( category ) ) {
            getDocsFirebaseFiltered( category ) 
            .then( resultado => setMangas(resultado) )
            .catch( error => console.log("Error al obtener los productos: " + error) );
        }else{
            getCollectionFirebase()
            .then( resultado => setMangas(resultado) )
            .catch( error => console.log("Error al obtener la colección: " + error) );
        }
    }, [category]);
    
    

    return (
        <>
            <section className="main">
                {
                    (Boolean( category ) && <h1>{ category }</h1> )
                }
                <ul 
                    className={ (Boolean( category ))
                        ? "itemListContainerContainerID"
                        : "itemListContainerMain"
                    }
                    >
                    {
                        ( !mangas )
                        ? <li>CARGANDO...</li>
                        : <ItemList mangas={ mangas }/> 
                        
                    }
                    {/* { console.log("ItemListContainer") } */}
                </ul>
            </section>
        </>
    )
});