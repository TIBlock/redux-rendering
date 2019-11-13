const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const changeCardOne = document.getElementById("card1Button");
const changeCardTwo = document.getElementById("card2Button");

changeCardOne.addEventListener("click", e => {
  e.preventDefault();

  dispatch({
    type: "CHANGECARD",
    card: 0
  });
});

changeCardTwo.addEventListener("click", e => {
  e.preventDefault();

  dispatch({
    type: "CHANGECARD",
    card: 1
  });
});

// class deck
