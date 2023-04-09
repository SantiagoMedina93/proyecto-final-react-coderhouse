import { useParams } from "react-router-dom";

import { Layout } from "../components/layout/Layout";
import { ItemListContainer } from "../components/branch-A/ItemListContainer/ItemListContainer";



export const Root = () => {
    const { id } = useParams();

    return (
        <Layout>
            <ItemListContainer category={ id }/>
        </Layout>
    )
};