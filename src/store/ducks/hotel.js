const INITIAL_STATE = {
   hotel: null
 };
  
 export default function hotelReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_HOTEL':
        return {
          ...state,
          hotel: action.hotel
        };
      default:
        return state;
    }
 }
  