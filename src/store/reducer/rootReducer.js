const initState = {
    user: [
        { id: 1, name: 'Tuan' },
        { id: 2, name: 'Nhung' },
        { id: 3, name: 'Hao'}
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let user = state.user;
            user = user.filter(item => item.id !== action.payload.id)
            return {
                ...state, user
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 100);
            let users = { id: id, name: `Nameless - ${id}` }
            return {
                ...state, user: [...state.user, users]
            }
        default:
            return state;
    }
}

export default rootReducer;