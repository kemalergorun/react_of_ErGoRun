export default function Jsx3() {
  const names = ["John", "Sue", "Peter", "Anna", "Mary"];
  const cities = ["London", "Berlin", "Istanbul", "Paris", "Madrid"];

  return (
    <div>
      <h2>Loops</h2>

      <ul>
        {/* TODO explain key */}
        {names.map((name, index) => (
          <li key={index}> {name} </li>
        ))}
      </ul>

      <select name="cities" id="cities">
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      {Array.from({ length: 10 }).map((_, index) => {
        if (index === 2) {
          return <div key={index}>--</div>;
        }

        return <div key={index}> {index} </div>;
      })}
    </div>
  );
}
