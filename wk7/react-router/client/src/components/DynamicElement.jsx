import { Link, Outlet, useParams } from "react-router";

export default function DynamicElement() {
  let { dynamic } = useParams();
  let QS = "?sort=asc";

  return (
    <>
      <h2>Some dynamic data for:</h2>
      <p>{dynamic}</p>
      <Link to="/profile">Back to profile</Link> |{" "}
      <Link to={`posts${QS}`}>See posts</Link>
      <Outlet />
    </>
  );
}
