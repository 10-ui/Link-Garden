function Start() {

  
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
      <input type="button" value="カメラ起動" onClick={() => cameraInitSmartphoneSupport() }/>
    </>
  )
};

export default Start