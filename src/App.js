import Car from './Car';
import './App.css';
import h from './h.png';
import r from './r.jpg';
import b from './b.jpg';
import m from './m.jpg';

function App() {
  return (
    <div className="App">
    <div className="container1">
    <div >
     <Car  img={m} brand="Mercedes" model="2024" color="Black" disc="Mercedes-Benz is focussing on higher-priced luxury vehicles to increase profitability. It also plans to upgrade its product portfolio and speed up electrification." />
     </div>
     <div>
     <Car  img={h} brand="Honshi" model="2024" color="#990f4b" disc="Keyless entering, multiple remote-control functions and easy operation with mobile phone" />
     </div>
     </div>
     <div className="container2">
     <div >
     <Car  img={r} brand="Range Rover" model="2024" color="Gold" disc="An exquisite interpretation of Range Rover luxury and personalization" />
     </div>
     <div >
     <Car  img={b} brand="BMW" model="2024" color="Black" disc="This is the i7, BMW’s sixth pure electric car although it’s wrapped up in the guise of the all-new 7 Series." />
     </div>
     </div>
    </div>
  )
}
export default App;
