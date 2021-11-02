import {connect} from "react-redux";
import {addItemAction, getStreamsHeightAction} from "../../redux/scannerReducer";

import Stream from "./Stream";

const mapStateToProps = (state) =>{
    return{
        items: state.scanner.itemsList,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addItem: (format, text)=> dispatch(addItemAction(format,text)),
        getStreamsHeight: (value) => dispatch(getStreamsHeightAction(value))
    }
}
const StreamContainer = connect(mapStateToProps, mapDispatchToProps)(Stream)

export default StreamContainer;
