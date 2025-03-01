import Card from "./Card";
import Person from "./Person";

const persons = [
  {
    name: "Rahul",
    age: 28,
    isStudent: true,
  },
  {
    name: "Raj",
    age: 20,
    isStudent: false,
  },
];

function App() {
  return (
    <>
      <h1>Hello from App js</h1>
      <Card />
      <Person />
      <Person {...persons[0]} />
      <Person {...persons[1]} />
    </>
  );
}
export default App;

//props
