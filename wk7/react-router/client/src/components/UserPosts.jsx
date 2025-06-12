import { useSearchParams } from "react-router";

export default function UserPosts() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  return (
    <>
      <h2>User Posts</h2>
      <hr />
      sort: {sort}
    </>
  );
}
