import { NavLink, useNavigate } from "react-router-dom";

import { providers } from "../../../firebase/providers";
import { useForm } from "../../../hook/useForm";

import './styleNavBar.css'
import { WidgetCart } from "../../cart/widgetCart/WidgetCart";


export const NavBar = () => {
    
    const { searchText, onInputChange } = useForm({ searchText:'' });
    const { getCollectionFirebase } = providers();
    const navigate = useNavigate()
    



    const onFormSubmit = (e) =>{
        e.preventDefault();
        getCollectionFirebase()
        .then( mangas =>{
            const manga = mangas.filter( manga => manga.nombre == searchText );
            if ( manga.length == 0 ) {
                navigate('/');
                console.log("No se encontro un producto con ese nombre");
            }
            console.log("Producto encontrado");
            navigate(`/item/${ manga[0].id }`);
            location.reload()
        })
        .catch( error => console.log( error ))
        
    }
    
    return (
        <section className="navBarBG">
            <nav className="navbar navbar-expand-lg  navBar">
                <div className="container-fluid col-7 end-0">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to={ '/' }>HOME</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" to={ '/category/Ivrea Argentina' }>Ivrea Argentina</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to={ '/category/Pannini' }>Pannini</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to={ '/category/Ovni Mangas' }>Ovni Mangas</NavLink>
                        </li>
                    </ul>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse col-5 searchNav" id="navbarSupportedContent">
                    <div className="navbar-nav mb-2 mb-lg-0 ">
                        <form className="d-flex nav-item mr-" role="search" onSubmit={ onFormSubmit }>
                            <input 
                                className="form-control me-2 navBarInput" 
                                placeholder="Buscar producto" 
                                name="searchText"
                                value={ searchText }
                                onChange={ onInputChange }
                            />
                            <button className="btn btn-search-color" type="submit">BUSCAR</button>
                        </form>

                        <div className="d-flex nav-item">
                            <NavLink className="nav-link active" to={ '/cart' }>
                                <WidgetCart />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
};