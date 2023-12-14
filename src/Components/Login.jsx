import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../authSlice';
const Login = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
  
    const [credentials, setCredentials] = useState({
      email: '',
      password: '',
});
const handleSubmit = () => {
    dispatch(loginAsync(credentials));
  };

  return (
    <div>
        <form
        className="max-w-[400px] w-full max-auto bg-green-200 p-8 px-8 rounded-lg border-solid border-2 border-indigo-400"
        onSubmit={handleSubmit}
      >
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;