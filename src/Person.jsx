const Person = ({ name = "No Name", age = 0, isStudent = false }) => {
  return (
    <div>
      <p>Student Name :{name} </p>
      <p>Age: {age}</p>
      <p>isStudent: {isStudent ? "Stduent" : "Working Professional"}</p>
    </div>
  );
};
export default Person;
