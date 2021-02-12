import './App.css';

function App() {
  const mainHeader = () => {
    return (
      <div className='main-image d-flex jsutify-content-center align-items-center flex-column'>
        <div className="filter"></div>
      </div>
    )
  }
  return (
    <div>
      {mainHeader()}
    </div>
  );
}

export default App;
