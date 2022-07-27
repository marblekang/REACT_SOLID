import { useUsers } from "./useUsers";
import { getOnlyActive } from "./getOnlyActive";
import UserItem from "./UserItem";
import { useMemo } from "react";

const useActiveUsers = () => {
  const users = useUsers();
  const activeUsers = useMemo(() => {
    return getOnlyActive(users);
  }, [users]); // users 라는 값이 바뀌었을 때만 gotOnlyActive 함수를 실행한다. 바뀌지 않으면 이전의 연산을 통해 나온 값을 그대로 사용한다.
  return activeUsers;
};

function ActiveUsersList() {
  const activeUsers = useActiveUsers(users);

  return (
    <ul>
      {activeUsers.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  );
}

export default ActiveUsersList;
