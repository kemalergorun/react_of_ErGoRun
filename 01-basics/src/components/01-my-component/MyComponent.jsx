// If there is a default statement, then we can import it without curly brackets {}
export default function MyComponent() {
  return <div>My Component 1</div>;
}

// If there is only export statement, then we can import it with curly brackets {}
export function MyComponent2() {
  return <div>My Component 2</div>;
}
