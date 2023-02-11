import React from 'react';
import {senMsgActionCreator, updateCurrentMsgActionCreator} from "../../../redux/old_store";
import OpenChat from "./OpenChat";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.openChatMessages,
        currentValue: state.messagesPage.currentValue,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(senMsgActionCreator())
        },
        updateCurrentMessage: (val) => {
            dispatch(updateCurrentMsgActionCreator(val))
        },
    }
}

const OpenChatContainer = connect(mapStateToProps, mapDispatchToProps)(OpenChat)

export default OpenChatContainer