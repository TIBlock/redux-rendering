const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const changeCardOne = document.getElementById('card1Button');
const changeCardTwo = document.getElementById('card2Button');

changeCardOne.addEventListener('click', e => {
    e.preventDefault();
    
    let compileCardOne = () {

    }

	dispatch({
		type: 'CHANGECARDONE'
	});
});

changeCardTwo.addEventListener('click', e => {
	e.preventDefault();
	dispatch({
		type: 'CHANGECARDTWO'
	});
});

// class deck 