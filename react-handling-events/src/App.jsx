import Card from "./components/Card";

const App = () => {
  const names = ["Harsh", "Sarthak", "Ameya", "Tushar", "Suraj"];
  return (
    <div className="flex justify-between flex-wrap p-10">
      {names.map((name) => (
        <Card name={name} key={name} />
      ))}
    </div>
  );
};

export default App;
