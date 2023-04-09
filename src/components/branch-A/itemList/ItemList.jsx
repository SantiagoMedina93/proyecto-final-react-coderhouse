
import { Item } from "../item/Item";


export const ItemList = ({ mangas }) => {
    
    
    return (
        <>  
            { 
                mangas.map( manga => (
                <li key={ manga.id }>
                    <Item manga={ manga }/>
                    {/* { console.log("ItemList") } */}
                </li>
            ))
            } 
        </>
    )
};