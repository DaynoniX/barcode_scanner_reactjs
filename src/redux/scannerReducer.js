const ADD_ITEM = 'ADD_ITEM';
const CLEAR_LIST = 'CLEAR_LIST';
const STREAMS_HEIGHT = 'STREAMS_HEIGHT';

const initialState = {
    itemsList: [],
    streamsHeight: ''
};

const scannerReducer = (state = initialState, action) =>{
    switch (action.type){
        case (ADD_ITEM):
            const newItem = {
                id: state.itemsList.length + 1,
                format: action.format,
                text: action.text
            };
            return {
                ...state,
                itemsList: [...state.itemsList, newItem]
            };
        case (CLEAR_LIST):
            return{
                ...state,
                itemsList: []
            }
        case (STREAMS_HEIGHT):
            return{
                ...state,
                streamsHeight: action.heightValue
            }
        default:
            return state;
    }
}

export const addItemAction = (format, text) => ({type: ADD_ITEM, format: format, text: text})
export const clearListAction = () => ({type: CLEAR_LIST})
export const getStreamsHeightAction = (value) => ({type: STREAMS_HEIGHT, heightValue: value})
export default scannerReducer;
