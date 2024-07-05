import { Route,Routes } from 'react-router-dom'
import './shop.styles.scss'
import Category from '../category/category.component'
import CategoriesPreview from '../categories-prev/categories-prev'
const Shop =()=>{
    return(
            <Routes>
                <Route index element={<CategoriesPreview/>}/>
                <Route path=":category" element={<Category/>}/>

            </Routes>
    )
}
export default Shop;