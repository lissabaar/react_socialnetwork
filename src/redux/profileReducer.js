const ADD_POST = 'ADD-POST';
const UPDATE_CURRENT_VALUE = 'UPDATE-CURRENT-VALUE';

let initialStare = {
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
}

const profileReducer = (state = initialStare, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.currentValue.length) {
                let newPost = {
                    id: 3,
                    name: 'Levi Kim',
                    text: state.currentValue,
                    img: 'https://i.pinimg.com/564x/8f/f0/c1/8ff0c1d829f0c83a76f3b3648e298149.jpg',
                    date: 'just now',
                    likes: '0'
                }
                state.posts.push(newPost)
                state.currentValue = ''
            }
            return state
        case UPDATE_CURRENT_VALUE:
            state.currentValue = action.newValue
            return state
        default:
            return state
    }
}

export default profileReducer