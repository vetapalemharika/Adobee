function LoginPage({ navigate }) {
  return (
    <div className="page login-page">
      <h1>Login Page</h1>
      <input type="text" placeholder="Username" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button onClick={() => alert('Login clicked!')}>Login</button>
      <button onClick={() => navigate('home')}>Back to Home</button>
    </div>
  );
}
