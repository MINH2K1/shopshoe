export const increases_quantity=(id,quantity)=>{
    return{
        type:'DECREASE_QUANTITY_ACTION',
        payload:{
            id,
            quantity
        }
    }
}
export const decreases_quantity=(id,quantity)=>{
    
    return{
        type:'DECREASE_QUANTITY_ACTION',
        payload:{
            id, 
            quantity
        }
    }
}