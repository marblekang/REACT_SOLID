import React from "react";
// 컴포넌트 분리
export default function UserItem({ user }) {
  return (
    <li key={user.id}>
      <img src={user.avatarUrl} />
      <p>{user.fullName}</p>
      <small>{user.role}</small>
    </li>
  );
}
