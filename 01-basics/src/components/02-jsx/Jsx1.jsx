export default function Jsx1() {
  const person = {
    name: "John Doe",
    age: 28,
    job: "Frontend Developer",
  };

  const x = 20;

  //  Every component must have a root wrapping element.
  return (
    // All of the attributes are written with camelCase
    <div className="outer-container">
      <h2>JSX 1</h2>
      <p className="paragraph">This is a JSX Component</p>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Name" />

      <div className="person-container">
        <h3>Person</h3>
        {/* We can use JS with curly brackets inside of JSX part: */}
        <p>Name: {person.name} </p>
        <p>Age: {person.age} </p>
        <p>Job: {person.job} </p>
        <p>{x}</p>
      </div>
    </div>
  );
}
