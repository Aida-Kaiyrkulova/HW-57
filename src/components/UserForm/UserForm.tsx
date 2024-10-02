import React, { useState } from 'react';

interface UserFormProps {
  addUser: (user: { name: string; email: string; active: boolean; role: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [active, setActive] = useState(false);
  const [role, setRole] = useState('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({ name, email, active, role });
    setName('');
    setEmail('');
    setActive(false);
    setRole('user');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Имя</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Активен</label>
        <input className="m-md-1"
          type="checkbox"
          checked= {active}
          onChange={(e) => setActive(e.target.checked)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Роль</label>
        <select
          className="form-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">Пользователь</option>
          <option value="editor">Редактор</option>
          <option value="admin">Администратор</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Создать пользователя</button>
    </form>
  );
};

export default UserForm;