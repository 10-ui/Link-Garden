import { Routes, Route } from "react-router-dom";
import Home from './routes/Home.jsx';
import Bluetooth from './routes/Bluetooth.jsx';
import Items from './routes/Get.jsx';
import Result from './routes/Result.jsx';
import Camera from './routes/Camera.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="/Bluetooth" element={ < Bluetooth /> } />
        <Route path="/Getitem" element={ < Items /> } />
        <Route path="/Result" element={ < Result /> } />
        <Route path="/Nuriecamera" element={ <Camera /> } />
      </Routes>
    </>
  )
}

export default App
