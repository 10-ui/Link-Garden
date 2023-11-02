import { Routes, Route } from "react-router-dom";
import Home from './routes/Home.jsx';
import Bluetooth from './routes/Bluetooth.jsx';
import Items from './routes/Get.jsx';
import Result from './routes/Result.jsx';
import Camera from './routes/Camera.jsx';
import Cushion from './routes/Cushion.jsx';
import House from './routes/House.jsx'
import Flamingo from "./routes/Flamingo.jsx";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="/House" element={< House />}/>
        <Route path="/Bluetooth" element={ < Bluetooth /> } />
        <Route path="/Getitem" element={ < Items /> } />
        <Route path="/Result" element={ < Result /> } />
        <Route path="/Nuriecamera" element={ <Camera /> } />
        <Route path="/Cushion" element={ <Cushion /> } />
        <Route path="/Found" element={ <Flamingo /> } />
      </Routes>
    </>
  )
}

export default App
