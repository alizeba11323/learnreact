import MyButton from "./MyButton";
import "./card.css";
function Card() {
  return (
    <div className="card">
      <h1>This is a Card Component</h1>
      <MyButton />
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
    </div>
  );
}

export default Card;
