import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm.tsx';
import Users from './components/Users/Users.tsx';

interface User {
  name: string;
  email: string;
  active: boolean;
  role: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <UserForm addUser={addUser} />
        </div>
        <div className="col-md-6">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};

export default App
