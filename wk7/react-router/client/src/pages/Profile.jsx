import { Link } from "react-router";

export default function Profile() {
  const user = "Spongebob";
  return (
    <>
      <h2>Profile</h2>
      <Link to={`${user}`}>Something dynamic</Link>{" "}
      <Link to="static">Something static</Link>
    </>
  );
}
