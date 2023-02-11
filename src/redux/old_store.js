import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";


let old_store = {
    _state: {
        messagesPage: {
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
        },

        profilePage: {
            posts: [{
                id: 1,
                name: 'Chester Lee',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum.',
                img: 'https://i.pinimg.com/564x/4e/7f/94/4e7f94b81257eeb80e95fe7e16f8ad54.jpg',
                date: '2 hrs ago',
                likes: '30'
            }, {
                id: 2,
                name: 'Levi Kim',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                img: 'https://i.pinimg.com/564x/8f/f0/c1/8ff0c1d829f0c83a76f3b3648e298149.jpg',
                date: '2 hrs ago',
                likes: '53'
            },],
            currentValue: '',
        },
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    },
}


export default old_store


const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_CURRENT_MESSAGE = 'UPDATE-CURRENT-MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_CURRENT_VALUE = 'UPDATE-CURRENT-VALUE';

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateCurrentValueActionCreator = (val) => ({
    type: UPDATE_CURRENT_VALUE,
    newValue: val
})

export const senMsgActionCreator = () => ({
    type: SEND_MESSAGE
})

export const updateCurrentMsgActionCreator = (val) => ({
    type: UPDATE_CURRENT_MESSAGE,
    newValue: val
})