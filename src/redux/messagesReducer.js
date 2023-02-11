const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_CURRENT_MESSAGE = 'UPDATE-CURRENT-MESSAGE';

let initialState = {
    openChatMessages: [
        {
            id: 0,
            userId: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, rerum!',
            author: 'Chester Lee',
            userpic: 'https://i.pinimg.com/564x/cb/2d/cd/cb2dcdcf7568945c9414acc0524fcbbb.jpg',
            time: '3:15'
        }, {
            id: 2,
            userId: 1,
            text: 'Lorem ipsum dolor sit amet',
            author: 'Chester Lee',
            date: '2 hrs ago',
            userpic: 'https://i.pinimg.com/564x/cb/2d/cd/cb2dcdcf7568945c9414acc0524fcbbb.jpg',
            time: '3:25'
        }, {
            id: 3,
            userId: 1,
            text: 'consectetur adipisicing elit',
            author: 'Chester Lee',
            date: '2 hrs ago',
            userpic: 'https://i.pinimg.com/564x/cb/2d/cd/cb2dcdcf7568945c9414acc0524fcbbb.jpg',
            time: '5:25'
        }],
    currentValue: '',
    activeChats:
        [{
            id: 1,
            name: 'Chester Lee',
            img: 'https://i.pinimg.com/564x/cb/2d/cd/cb2dcdcf7568945c9414acc0524fcbbb.jpg',
            lastMsg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, rerum!'
        }, {
            id: 2,
            name: 'Remi Song',
            img: 'https://i.pinimg.com/564x/1b/53/1c/1b531c912062d55cab75962bdb0fc45e.jpg',
            lastMsg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, rerum!'
        }],
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state.currentValue.length) {
                let newMsg = {
                    id: 0,
                    userId: 1,
                    text: state.currentValue,
                    author: 'Chester Lee',
                    userpic: 'https://i.pinimg.com/564x/cb/2d/cd/cb2dcdcf7568945c9414acc0524fcbbb.jpg',
                    time: '3:15'
                }
                state.openChatMessages.push(newMsg)
                state.currentValue = ''
            }
            return state
        case UPDATE_CURRENT_MESSAGE:
            state.currentValue = action.newValue
            return state
        default:
            return state
    }
}

export default messagesReducer