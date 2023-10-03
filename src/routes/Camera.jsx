import UIs from './Camera/UIs.jsx';
import Begin from './Camera/Begin.jsx';
import Decide from './Camera/Decide.jsx';
import Delete from './Camera/Delete.jsx';
import Pickup from './Camera/Pickup.jsx';
import Found from './Camera/Found.jsx';
import UItest from './Camera/UIstest.jsx';
import UIArr from './Camera/UIArr.jsx';
// import Beacon from './Camera/Beacon.jsx';


function Camera() {

  return (
    <>
      <div className="camera_img">
        <video id="camera" className='fixed z-[-1]' autoPlay muted playsInline width="390" height="844"></video>
        <canvas className='hidden' id="canvas" wcrossorigin="anonymous"></canvas>
      </div>

      {/* この中にimgがはいる */}
      <article className="fixed top-0 left-0 h-[754px] w-[calc(100dvw)]" id="content_area"></article>
      <div className="border-btntext borders hidden absolute top-[9%] left-[15%] w-[270px] h-[450px] border-solid border-[4px]" id="border"></div>
      <div className="border-btntext borders hidden absolute top-[4%] left-[5%] w-[40px] h-[35px] border-solid border-[4px]" id="border_marker"></div>

      <p className='text-btntext text-center w-[68%] borders font-bold text-base fixed left-1/2 top-[45%] translate-x-[-50%]'>ワクの中にぬりえをおさめてね！</p>
      <p className='text-btntext w-[90%] borders text-center font-bold text-lg fixed left-1/2 top-[80%] translate-x-[-50%]'>上手く読み込めない場合は、<br/>お近くのスタッフにお声がけください。</p>
      
      <Begin/>
      <Pickup/>
      <Decide/>
      <Delete/>
      {/* <Beacon/> */}
      {/* <UIs/> */}
      <UItest/>
      <UIArr/>
      <Found/>
      </>
  );
}

export default Camera