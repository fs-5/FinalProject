import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = () => {
    // Gantilah URL_API dengan URL sesuai API Anda
    const URL_API = 'https://655cb05b25b76d9884fdcad6.mockapi.io/users';

    // Menggunakan fetch untuk mengambil data pengguna dari API
    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data Pengguna:', data);
        // Contoh sederhana autentikasi
        const user = data.find((user) => user.username === username && user.password === password);

        if (user) {
          setLoggedIn(true);
          setError('');
        
          // Simpan nama pengguna di localStorage
          localStorage.setItem('username', username);
        
          // Lakukan navigasi ke halaman home setelah login berhasil
          navigate('/');
        } else {
          setLoggedIn(false);
          setError('Username atau password salah.');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setError('Terjadi kesalahan saat mengambil data pengguna.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
