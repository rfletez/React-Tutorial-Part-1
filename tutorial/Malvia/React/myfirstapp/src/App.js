import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  const userInfo = {
    firstName: "John",
    lastName: "Doe"
  };

  return (
    <div>
      <div>Hello World!</div>
      <div> <Welcome user={userInfo} /> </div>
      {/* <div> <Welcome user="Tom"/> </div>
      <div> <Welcome user="Sarah"/> </div> */}
    </div>
  );
}

export default App;
