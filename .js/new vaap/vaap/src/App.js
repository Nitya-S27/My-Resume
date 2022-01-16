import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <ul>
      <li></a></li>
    </ul> */}
      <h1>Click to navigate to different components</h1>
      <ul>
        <li>
          <h2>
            <Link to="/login">Login screen</Link>
          </h2>
        </li>
      </ul>
    </div>
  );
}

export default App;
