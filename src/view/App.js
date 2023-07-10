import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          List Sales Information
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
