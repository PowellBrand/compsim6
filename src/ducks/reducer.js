import axios from 'axios';

//43G
const initialState = {
    bookData: [],
    book: [],
    user: {}
};

const CREATE_BOOK = "CREATE_BOOK";
const GET_BOOKS = "GET_BOOKS";
const USER = "USER";

//Create Character function
export function createBook(title, author, dds, available) {
    // console.log(value)
    let body = {
        "title": title,
        "author": author,
        "dds": dds,
        "available": available
    }
    let book = axios.post(`/api/createBook`, body).then(res => {
        return res.data
    })

    return {
        type: CREATE_BOOK,
        payload: book
    }
}

export function getBooks() {
    let getBooks = axios.get('/api/getBooks').then(res => {
        return res.data
    })
    return {
        type: GET_BOOKS,
        payload: getBooks
    }
}

export function getUser() {

    let user = axios.get('/api/getUser').then(res => {

        return res.data
    })
    return {
        type: USER,
        payload: user
    }
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_BOOK + '_FULFILLED':
            return Object.assign({}, state, { book: action.payload });

        case GET_BOOKS + '_FULFILLED':
            return Object.assign({}, state, { bookData: action.payload });

        case USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        default: return state;
    }
}


export default reducer;