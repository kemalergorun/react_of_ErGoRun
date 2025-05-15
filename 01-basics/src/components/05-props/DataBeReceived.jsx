export default function DataBeReceived({ firstName, lastName }) {
  console.log(firstName, lastName);

  return (
    <div>
      <p>
        Hello, My Name is {firstName} {lastName}
      </p>
    </div>
  );
}
