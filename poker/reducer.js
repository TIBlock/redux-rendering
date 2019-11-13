const initialState = [
  {
    value: "K",
    suit: "C"
  },
  {
    value: "K",
    suit: "D"
  }
];

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const { type } = action;

  // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)

  if (type === "CHANGECARD") {
    valueArr = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "A",
      "J",
      "K",
      "Q"
    ];
    suitArr = ["C", "D", "S", "H"];

    let newValue = valueArr[Math.floor(Math.random() * valueArr.length)];
    let newSuit = suitArr[Math.floor(Math.random() * suitArr.length)];

    var newState = JSON.parse(JSON.stringify(state));
    newState.splice(action.card, 1, { value: newValue, suit: newSuit });

    return newState;

    /* This was my solution originally but found I was mutating the state and not a copy of the state.  */
    // let newState = [...state]
    // let i = action.card
	// let returnedState = (newState[i].value = newValue) && (newState[i].suit = newSuit)
	
  }

  return state;
};
