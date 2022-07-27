import { useState } from "react";
import { useEffect } from "react";
//커스텀 훅 (데이터 페칭해서 state에 저장하는 기능.)
export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("/some-api");
      const data = await response.json();
      setUsers(data);
    };

    loadUsers();
  }, []);

  return users;
};
