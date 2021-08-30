import './App.css';
import ProfilePhoto from "./Component/Profile/ProfilePhoto"
import FullName from "./Component/Profile/FullName"
import Address from "./Component/Profile/Address"
function App() {
  return (
    <div className="App">
    <div className="first"><FullName/></div> 
    <div className="sec"><Address/></div>
    <div className="third"><ProfilePhoto/></div>
    </div>
  );
}

export default App;
