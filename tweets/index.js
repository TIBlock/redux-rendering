const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

let sortLikes = document.getElementById('sortLikes')
let sortRetweets = document.getElementById('sortRetweets')
let sortReplies = document.getElementById('sortReplies')

sortLikes.addEventListener('click', e => {

    dispatch({
        type: 'SORTLIKES'
    })
})

sortRetweets.addEventListener('click', e => {

    dispatch({
        type: 'SORTRETWEETS'
    })
})

sortReplies.addEventListener('click', e => {

    dispatch({
        type: 'SORTREPLIES'
    })
})