const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const addCircle = document.getElementById("addCircle");

addCircle.addEventListener("click", e => {
  var randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

  var randomRadius = Math.floor(Math.random() * Math.floor(100));

  dispatch({
    type: "ADDCIRCLE",
    radius: randomRadius,
    color: randomColor
  });
});
