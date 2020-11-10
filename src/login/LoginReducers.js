const initialState = {
    user: '',
    isLoading: false
};

export default function (state = initialState, action) {
    switch(action.type){
        case 'GET_DATA':
            if (action.payload.length !== 0 ){
                localStorage.setItem('user', JSON.stringify(action.payload))
            }
        return {
            ...state,
            user: action.payload,
        }
        default:
            return state;
    }
}