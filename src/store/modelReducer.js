import { STORE, SHOW_ERROR, HIDE_ERROR } from "./actionTypes";
import { HISTORY_LEN } from "../config/consts";

export default (state, action) => {
    switch (action.type) {

        case STORE:
            return { 
                ...state, 
                [action.dataType]: [
                    ...(state[action.dataType] || []).filter(item => Number(item.dateTime)!==Number(action.data.dateTime)).slice(HISTORY_LEN*-1),
                    {dateTime: action.data.dateTime, value: action.data.value}
                ]
            };
        
        case SHOW_ERROR:
            return {
                ...state,
                error: {...action.data}
            }
        
        case HIDE_ERROR:
            return {
                ...state,
                error: {...action.data}
            }

        default:
            return state || {};
    }

    
}
