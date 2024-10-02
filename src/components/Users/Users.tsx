import React from 'react';
import UserItem from '../UserItem/UserItem.tsx';

interface UsersProps {
  users: { name: string; email: string; active: boolean; role: string }[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h3>Список пользователей</h3>
      <ul className="list-group">
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default Users;