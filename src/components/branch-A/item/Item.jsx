import { useNavigate } from "react-router-dom";
import { providers } from "../../../firebase/providers";
import { memo, useEffect, useState } from "react";
import './style-item.css'


export const Item = ({ manga }) => {
    
    const [urlImg,setUrlImg] = useState(null);
    const { nombre, editorial, id, precio } = manga;
    const { getImgFirebase } = providers();
    const navigate = useNavigate();
    
    useEffect(() => {
            getImgFirebase(editorial, nombre)
            .then(respuesta => setUrlImg( respuesta ))
            .catch( error => console.log(error) );
    }, []);
    
    const navigateItemDetail = () =>{
        localStorage.setItem('ItemDetailImg',JSON.stringify({ id, urlImg}))
        navigate( `/item/${id}` );
    }
    

    return (
        <section className="itemContainer" onClick={ navigateItemDetail }>
            <figure>
                {
                    ( !urlImg )
                    ? <h3>Cargando...</h3>
                    : <img 
                        src={ urlImg } 
                        alt= {`Imagen de la portada del tomo 1 del manga ${nombre} de la editorial ${editorial}`} 
                    />
                }
            </figure>
            <h1>{ nombre }</h1>
            <p> ${ precio } </p>
            {/* {     console.log("Item") } */}
        </section>
    )
};