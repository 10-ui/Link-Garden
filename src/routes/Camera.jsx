import UI from './Camera/UI.jsx';
import Test from './Camera/Lens.jsx';
import Start from './Camera/Start.jsx';
import Decide from './Camera/Decide.jsx';
import Delete from './Camera/Delete.jsx';
import Retry from './Camera/Retry.jsx';
function Camera() {

  return (
    <>
      <div className="camera_img fixed z-[-1]">
        <video id="camera" autoPlay muted playsInline width="390" height="840"></video>
        <canvas id="canvas" wcrossorigin="anonymous"></canvas>
      </div>

      {/* この中にimgがはいる */}
      <article className="fixed top-0 left-0 h-[754px] w-screen" id="content_area"></article>
      <div className="der hidden absolute top-[9%] left-[15%] w-[270px] h-[450px] border-solid border-[1px]" id="border"></div>
      <div className="der hidden absolute top-[4%] left-[5%] w-[40px] h-[35px] border-solid border-[1px]" id="border_marker"></div>

      <ul>
        <li><p id="text_brown">茶色</p></li>
        <li><p id="text_blue">水色</p></li>
        <li><p id="text_red">赤色</p></li>
        <li><p id="text_green">緑色</p></li>
        <li><p id="text_yellow">黄色</p></li>
      </ul>
  
      <div className="btns z-[100] fixed z-2 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        {/* <Lens/> */}
        <Start/>
        <Decide/>
        <Delete/>
        <Retry/>
        <Test/>
      </div>
      <UI/>
    </>
  );
}

export default Camera