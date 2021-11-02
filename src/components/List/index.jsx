import List from "./List";
import {connect} from "react-redux";
import {clearListAction} from "../../redux/scannerReducer";

const mapStateToProps = (state) =>{
     return{
        items: state.scanner.itemsList,
        streamsHeight: state.scanner.streamsHeight
     }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        clearList: ()=> dispatch(clearListAction())
    }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export default ListContainer;
