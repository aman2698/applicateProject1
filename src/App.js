import logo from './logo.svg';
import './App.css';
import Row1 from './Components/Row1';
import Row2 from './Components/Row2';
import Row3 from './Components/Row3';
import Row4 from './Components/Row4';
import Row5 from './Components/Row5';


function App() {
  return (
    <div className="App">
    <div className="row1"> <Row1/> </div>
    <div className="row2" ><Row2/> </div>
    <div className="row3">
      <Row3/>
    </div>
    <div className="row4">
      <Row4/>
    </div>
    <div className="row5">
      <Row5/>
    </div>
    </div>
  );
}

export default App;
