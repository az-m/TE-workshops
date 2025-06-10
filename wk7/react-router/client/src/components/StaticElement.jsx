import { Link } from "react-router";

export default function StaticElement() {
  return (
    <>
      <h2>Some static stuff</h2>
      <Link to="/profile">Back to profile</Link>
    </>
  );
}
