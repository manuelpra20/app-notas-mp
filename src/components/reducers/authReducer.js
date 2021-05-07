import { types } from "../../types/types";


// lo que se va a mnejar: {
    // uid: dasldhahfkfhlfhjklfasf,
    // name: 'manuel'
// }


export const authReducer = ( state = {}, action) => {

    switch ( action.type ) {

        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return { }
            
    
        default:
            return state;
    }
}