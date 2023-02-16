export const increases_quantity=(product)=>{
    console.log(product)
    return{
        type:'INCREASE',
        payload:product
    }
}
export const decreases_quantity=(product)=>{
    
    return{
        type:'DECREASE',
        payload:product
    }
}