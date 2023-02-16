import data from '../../data/cart'
const initalState= 1
function quantityReducer(state=initalState,action) {
    switch(action.type)
    {
        case 'DECREASE_QUANTITY_ACTION':{
            state=state-1;
             action.payload.quantity= state+1;
        return {
            state,
        }
        } 
        case 'INCREASE_QUANTITY_ACTION':{
            state=state+1;
            action.payload.quantity= state;
            return {
                state,
        }
        } 
        default: return state
    }
}

export default quantityReducer