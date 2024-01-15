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

  // Arrow Functions with Implicit Return
  const greet = (lastName) => `Hey How Are You ${lastName}`;

  //Arrow Function With Return KeyWord => Mandotary To Write return Keyword If Using Curly Brackets {}
  const greet2 = (firstName) => {
    return `Hey How Are You ${firstName}`;
  };

  //Returning Onjects From Arrow Functions

  const fullName = () => ({ firstName: "Ameya", lastName: "Belvalkar" });
  console.log(fullName());
  arr2.pop();

  //Map Filter Functions In React With Arrays

  const numbers = [1, 2, 3, 4, 54, 5, 6];
  const largeNumbers = [1, 2, 3, 12, 6, 9, 8, 22, 30];

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
      <h2>{greet2("Ameya")}</h2>
      <h2>{greet("Belvalkar")}</h2>
      <h3>Map Method Exercise</h3>
      <ul>
        {numbers.map((number, i) => (
          <li style={{ listStyle: "none" }} key={i}>
            {number}
          </li>
        ))}
      </ul>
      <h3>Filter Method Exercise</h3>
      <h3>Numbers === {largeNumbers.join(" ,")}</h3>
      <h3>
        Divisible By 3 === {largeNumbers.filter((n) => n % 3 === 0).join(" ,")}
      </h3>
    </div>
  );
};

export default App;
