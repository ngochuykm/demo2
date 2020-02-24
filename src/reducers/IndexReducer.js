import * as types from '../constant'
const DEFAULT_STATE = {
    listItem: [],
    dataFetched: false,
    isFetching: false,
    dataGETched: false,
    isGetching: false,
    error: false,
    errorMessage: null,
    itemLength: '',
    activePage: 1
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case types.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }

        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listItem: action.payload,
                itemLength: action.payload.length
            }
            
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        default:
            return state;
    }
}