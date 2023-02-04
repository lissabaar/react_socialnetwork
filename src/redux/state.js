let state = {
    messagesPage: {
        openChatMessages: [{
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
            userpic: 'https://i.pinimg.com/564x/cb/2d/cd/cb2dcdcf7568945c9414acc0524fcbbb.jpg',
            time: '3:25'
        }, {
            id: 3,
            userId: 1,
            text: 'consectetur adipisicing elit',
            author: 'Chester Lee',
            userpic: 'https://i.pinimg.com/564x/cb/2d/cd/cb2dcdcf7568945c9414acc0524fcbbb.jpg',
            time: '5:25'
        }], activeChats: [{
            id: 1,
            name: 'Chester Lee',
            img: 'https://i.pinimg.com/564x/cb/2d/cd/cb2dcdcf7568945c9414acc0524fcbbb.jpg',
            lastMsg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, rerum!'
        }, {
            id: 2,
            name: 'Remi Song',
            img: 'https://i.pinimg.com/564x/1b/53/1c/1b531c912062d55cab75962bdb0fc45e.jpg',
            lastMsg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, rerum!'
        }]
    },

    profilePage: {
        posts: [{
            id: 1,
            name: 'Chester Lee',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum.',
            img: 'https://i.pinimg.com/564x/4e/7f/94/4e7f94b81257eeb80e95fe7e16f8ad54.jpg',
            date: '',
            likes: '30'
        }, {
            id: 2,
            name: 'Levi Kim',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            img: 'https://i.pinimg.com/564x/8f/f0/c1/8ff0c1d829f0c83a76f3b3648e298149.jpg',
            date: '',
            likes: '53'
        },]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        name: 'Levi Kim',
        text: postMessage,
        img: 'https://i.pinimg.com/564x/8f/f0/c1/8ff0c1d829f0c83a76f3b3648e298149.jpg',
        date: '',
        likes: '0'
    }
    state.profilePage.posts.push(newPost)
}

export default state