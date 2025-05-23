import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";

export default function FetchCountries() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REST_COUNTRIES_API}/all`)
      .then((response) => {
        console.log(response);
        setCountriesData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSortByLetter = () => {
    const sortedCountries = [...countriesData].sort((a, b) =>
      a?.name?.common.localeCompare(b?.name?.common)
    );
    console.log(sortedCountries);
    setCountriesData(sortedCountries);
  };

  const handleSortPopulation = () => {
    const sortedCountries = [...countriesData].sort(
      (a, b) => b.population - a.population
    );

    setCountriesData(sortedCountries);
  };

  return (
    <Container>
      <h2 className="text-center text-primary">Countries List</h2>

      {/* Table */}
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>#</th>
            <th>Flag</th>
            <th onClick={handleSortByLetter}>Country Name</th>
            <th>Capital</th>
            <th onClick={handleSortPopulation}>Population</th>
            <th>Region</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {countriesData.map((item, index) => (
            <tr key={`${item.cca2} - ${index}`}>
              <td> {index + 1} </td>
              <td>
                {" "}
                <img
                  width="100px"
                  src={
                    item?.flags?.png ||
                    item?.flags?.svg ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/2560px-No_flag.svg.png"
                  }
                  alt={item?.flags?.alt}
                />
              </td>

              <td>{item?.name?.common || item?.name?.official}</td>

              <td>{item?.capital ? item?.capital?.join(" - ") : "N/A"}</td>

              <td>{item?.population}</td>

              <td>{item?.region}</td>

              <td>
                <a
                  href={item?.maps?.googleMaps || item?.maps?.openStreetMaps}
                  target="_blank"
                >
                  Maps
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
