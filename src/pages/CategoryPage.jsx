import {useParams} from "react-router-dom"
import Header from "../components/Header";
import { capitalise } from "../constants/functions";

const CategoryPage = () => {

    const {categoryName} = useParams()
    return ( 
        <Header header={capitalise(categoryName)} />

     );
}
 
export default CategoryPage;