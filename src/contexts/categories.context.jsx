import { createContext, useState ,useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const CategoriesContext =createContext({
    categoriesMap:[],

})

export const CategoriesProvider=({children})=>{
    const [categoriesMap,setcategoriesMap]=useState([])
    useEffect(()=>{
        const getcategoriesMap=async()=>{
            const categoryMap= await getCategoriesAndDocuments();
            setcategoriesMap(categoryMap)
        }
        getcategoriesMap()
    },[])
    const value={categoriesMap}
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}