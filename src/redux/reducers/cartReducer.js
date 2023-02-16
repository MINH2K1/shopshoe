
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
        case 'REMOVE_PRODUCT_ON_CART':{
            const newList=[...state.list];
            var newList2 = newList.filter((product) => product.id !== action.payload);
        return {
            ...state,
            list:newList2
        }
        } 
        default: return state
    }
}

export default cartReducer