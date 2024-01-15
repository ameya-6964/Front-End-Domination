const App = () => {
  /* Shallow Copy/Clone => Bad Practice
   const arr = [1, 2, 3, 4];
  const arr2 = arr 
  */

  // Deep Copy/CLone => Best Practice
  const arr = [1, 2, 3, 4];
  const arr2 = [...arr, 5, 6, 7, 8];
  const state = {
    firstName: "Ameya",
    age: 26,
  };

  const state2 = {
    ...state,
    firstName: "Ameya Belvalkar",
    age: 27,
  };

  arr2.pop();
  return (
    <div>
      <h1>{arr}</h1>
      <h1>{arr2}</h1>
      <h1>
        {state.firstName},{state.age}
      </h1>
      <h1>
        {state2.firstName},{state2.age}
      </h1>
    </div>
  );
};

export default App;
