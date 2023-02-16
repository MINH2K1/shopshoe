export const addCart=(product)=>{
    console.log(product)
    return{
        type:'ADD_PRODUCT_ON_CART',
        payload: product
        
    }
}