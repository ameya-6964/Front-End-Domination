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

  // Destructuring Example With Objects
  // You Cannot Name Anything It Should Match Key With Original Object
  const { firstName, age } = state;
  const { firstName: firstName2, age: age2 } = state2;

  //Destructuring Example With Arrays
  const array = [
    12,
    function (firstName) {
      return `Hey How Are You ${firstName}`;
    },
  ];

  // You Can Name Anything In Array Destructuring
  const [x, y] = array;

  arr2.pop();
  return (
    <div>
      <h1>{arr}</h1>
      <h1>{arr2}</h1>
      <h1>
        {firstName},{age}
      </h1>
      <h1>
        {firstName2},{age2}
      </h1>
      <h2>{x}</h2>
      <h2>{y("Xyz")}</h2>
    </div>
  );
};

export default App;
