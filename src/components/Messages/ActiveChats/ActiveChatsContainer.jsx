import ActiveChats from "./ActiveChats";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogues: state.messagesPage.activeChats,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ActiveChatsContainer = connect(mapStateToProps, mapDispatchToProps)(ActiveChats)

export default ActiveChatsContainer


