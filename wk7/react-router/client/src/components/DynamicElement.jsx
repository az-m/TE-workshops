import { Link } from "react-router";

export default function DynamicElement() {
  return (
    <>
      <h2>Some dynamic data</h2>
      <Link to="/profile">Back to profile</Link>
    </>
  );
}
