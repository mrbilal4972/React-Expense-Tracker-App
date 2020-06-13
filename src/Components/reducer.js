function Reducer(state, action){
    switch(action.type){
        case 'Add_Transcation':
            return [...state, action.values.val]
        case 'Del_Transcation':
            return (
                state = state.filter((val, ind) => action.i !== ind)
            )
        default:
            return state;
    }
}

export {Reducer}