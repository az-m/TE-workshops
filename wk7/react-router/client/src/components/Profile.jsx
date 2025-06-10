import { Link } from "react-router";

export default function Profile() {
  return (
    <>
      <h2>Profile</h2>
      <Link to=":dynamic">Something dynamic</Link>{" "}
      <Link to="static">Something static</Link>
    </>
  );
}
