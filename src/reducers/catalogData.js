import { types } from '../actions/index';

const initialState = {
    catalogInfo: [],
    castList: [],
    summeryIndex: null
}

export const catalogData = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_DATA: {
            return {
                ...state,
                catalogInfo: action.data
            }
        }

        default: 
            return state;
    }
}