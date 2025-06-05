const { useState } = React;

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'login' && <LoginPage navigate={navigate} />}
    </div>
  );
}
