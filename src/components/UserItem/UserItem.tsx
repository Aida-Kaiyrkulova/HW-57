import React from 'react';

interface UserItemProps {
  user: { name: string; email: string; active: boolean; role: string };
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li className="list-group-item">
      <h5>{user.name} ({user.role})</h5>
      <p>Email: {user.email}</p>
      <p>Активен: {user.active ? 'Да' : 'Нет'}</p>
    </li>
  );
};

export default UserItem;