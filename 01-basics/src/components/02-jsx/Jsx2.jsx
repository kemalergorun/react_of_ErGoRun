export default function Jsx2() {
  const isLoading = false;
  const user = {
    name: "John",
    role: "admin",
  };

  return (
    //   Classical if statements are not working in JSX. We have to use either ternary operators or short circuit evaluation (and, or operators) to create conditional statements:
    <div>
      <h2>Conditional Statements</h2>
      <h3>Ternary Operators ? :</h3>
      {isLoading ? <p>Fetching data...</p> : <p>Data is fetched.</p>}
      {user.role === "admin" ? (
        <div>
          <h4>Welcome Admin {user.name}</h4>
          <p>You have access to all the features</p>
        </div>
      ) : (
        <div>
          <h4>Welcome, {user.name}</h4>
          <p>You have limited access</p>
        </div>
      )}

      <h3>Short Circuit Evaluation</h3>

      {isLoading && <p>Still loading</p>}

      {isLoading || <p>Already loaded</p>}

      {user.role === "admin" && (
        <button type="button" title="Delete User">
          DELETE
        </button>
      )}
    </div>
  );
}
