  import shatter from '../../assets/icon/mark_shatter.svg'

function Begin() {


  const cameraWidth = 390;
  const cameraHeight = 840;
  
  function cameraInitSmartphoneSupport() {

    const der = document.querySelectorAll('.der');
      der[0].classList.remove("hidden");
      der[1].classList.remove("hidden");
    
    const video = document.getElementById("camera");
    
    //スマホからの閲覧かここら辺は気にしなくていいと思う（パソコンとスマホだとどっちが幅でどっちが高さかが違うみたい　知りたかったら聞いてくれ）
    const isMobile = navigator.userAgent.match(/iPhone|Android/);
    
    // カメラ映像関連
    const cameraSetting = {
      audio: false,
      video: {
      //スマホの場合は縦横を逆に設定する
      width: isMobile ? cameraHeight : cameraWidth,
      height: isMobile ? cameraWidth : cameraHeight,
      facingMode: "environment",
      }
    }

    const back = document.getElementById('back');
    back.classList.add('hidden');
    const reset = document.getElementById('content_area');
    reset.classList.add('fixed');
    
    navigator.mediaDevices.getUserMedia(cameraSetting)
    .then((mediaStream) => {
    video.srcObject = mediaStream;
    })
    .catch((err) => {
    console.log(err.toString());
    });
  }

  return (
    <>
    <div id="back" className="bg-btntext h-[844px] w-[390px]"></div>
    <img  className='fixed z-[200] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]' src={shatter} alt='撮影ボタン' onClick={() => cameraInitSmartphoneSupport() }/>
    </>
  )
};

export default Begin