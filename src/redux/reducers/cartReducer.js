
import data from '../../data/cart'
const initalState={
    list: [...data],
    selectId:null
} 

function cartReducer(state=initalState,action) {
    switch(action.type)
    {
        case 'ADD_PRODUCT_ON_CART':{
            const newList=[...state.list];
            newList.push(action.payload);
            console.log(newList);
        return {
            ...state,
            list:newList
        }
        } 
    
        default: return state
    }
}

export default cartReducer