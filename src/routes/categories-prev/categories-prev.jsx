import { useContext , Fragment} from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../componenets/categorypreview/category-prev";
const CategoriesPreview =()=>{
    const {categoriesMap}=useContext(CategoriesContext)
    return(
        <Fragment className="category-preview-container" >
                {Object.keys(categoriesMap).map((title)=>{
                    const products =categoriesMap[title]
                    return (<CategoryPreview key ={title} title={title} products={products}/>
                    )
                })}
        </Fragment>
    )
}
export default CategoriesPreview;