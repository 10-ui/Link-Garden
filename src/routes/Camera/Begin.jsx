import shatter from '../../assets/icon/mark_shatter.svg'

function Begin() {

  const cameraWidth = 390;
  const cameraHeight = 840;
  
  function cameraInitSmartphoneSupport() {

    const der = document.querySelectorAll('.der');
      der[0].classList.remove("hidden");
      der[1].classList.remove("hidden");
    
    const video = document.getElementById("camera");
    
    // カメラ映像関連
    const cameraSetting = {
      audio: false,
      video: {
      //スマホの場合は縦横を逆に設定する
      width: cameraWidth,
      height: cameraHeight,
      facingMode: "environment",
      }
    }

    navigator.mediaDevices.getUserMedia(cameraSetting)
    .then((mediaStream) => {
    video.srcObject = mediaStream;
    })
    .catch((err) => {
    console.log(err.toString());
    });

    const back = [...document.querySelectorAll('.backs')];
    back[0].classList.add('hidden');
    back[1].classList.add('hidden');
    back[2].classList.add('hidden');
    const reset = document.getElementById('content_area');
    reset.classList.add('fixed');
    
  }

  return (
    <>
    <div className="backs bg-btntext h-[844px] w-[390px]"></div>
    <p className='backs fixed left-1/2 top-[30%] translate-x-[-50%]'><span className='text-xl font-sans'>\</span>タップしてカメラを起動<span className='font-sans text-xl'>/</span></p>
    <img className='backs fixed z-[200] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]' src={shatter} alt='撮影ボタン' onClick={() => cameraInitSmartphoneSupport() }/>
    </>
  )
};

export default Begin