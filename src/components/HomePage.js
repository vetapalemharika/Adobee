function HomePage({ navigate }) {
  return (
    <div className="page home-page">
      <h1>Welcome to Home Page</h1>
      <button onClick={() => navigate('login')}>Go to Login</button>
    </div>
  );
}
