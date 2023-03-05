export const addCart=(product)=>{

    return{
        type:'ADD_PRODUCT_ON_CART',
        payload: product
        
    }
}
export const removeCart=(id)=>{
    return{
        type:'REMOVE_PRODUCT_ON_CART',
        payload: id
    }
}