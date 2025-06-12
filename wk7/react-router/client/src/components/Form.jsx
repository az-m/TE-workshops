import { useState, useEffect } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({ name: "", cheese: "" });
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/get_data");
      const data = await response.json();
      setItems(data);
    }
    fetchData();

    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8080/add_record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    setFormValues({ name: "", cheese: "" });
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <label htmlFor="cheese">Favourite cheese</label>
        <input
          type="text"
          id="cheese"
          name="cheese"
          value={formValues.cheese}
          onChange={handleChange}
        />

        <button type="submit" id="submit">
          Submit
        </button>
      </form>

      {items.map((item) => (
        <p key={item.id}>
          {item.name} {item.cheese}
        </p>
      ))}
    </>
  );
}
