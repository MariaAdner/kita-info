import useSWR from "swr";

export default function UserList() {
  const { data: users, isLoading } = useSWR("/api/user");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!users) {
    return;
  }

  return users.length ? (
    <ul>
      {users.map(({ _id, name, password }) => (
        <li key={_id}>
          <p>{name}</p>
          <p>{password}</p>
        </li>
      ))}
    </ul>
  ) : (
    "Keine Users"
  );
}
