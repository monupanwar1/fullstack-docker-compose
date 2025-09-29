// src/App.tsx
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface UserInput {
  name: string;
  email: string;
  password: string;
}

interface ApiError {
  error: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [input, setInput] = useState<UserInput>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get<User[]>('http://localhost:3000/api/user');
      setUsers(res.data.length ? res.data : []); // if no users, set empty array
    } catch (err) {
      console.error(err);
      setUsers([]);
      setError('Failed to fetch users');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { name, email, password } = input;

    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    try {
      const res = await axios.post<User>(
        'http://localhost:3000/api/user',
        input,
      );
      setUsers((prev) => (prev ? [...prev, res.data] : [res.data]));
      setInput({ name: '', email: '', password: '' });
    } catch (err) {
      const axiosError = err as AxiosError<ApiError>;
      setError(axiosError.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>

      <form
        onSubmit={handleCreateUser}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4 mb-6"
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Create User
        </button>
      </form>

      <ul className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
        {users && users.length ? (
          users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between py-2 border-b last:border-b-0"
            >
              <span className="font-medium">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center py-2">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
