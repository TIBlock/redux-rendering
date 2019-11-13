const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const addHeight = document.getElementById('height');
const addWidth = document.getElementById('width');
const colorRed = document.getElementById('red');
const colorBlue = document.getElementById('blue');


addHeight.addEventListener('click', e => {

    dispatch({
        type: 'ADDHEIGHT'
    })

})

addWidth.addEventListener('click', e => {

    dispatch({
        type: 'ADDWIDTH'
    })

})

colorRed.addEventListener('click', e => {

    dispatch({
        type: 'RED'
    })

})

colorBlue.addEventListener('click', e => {

    dispatch({
        type: 'BLUE'
    })


})