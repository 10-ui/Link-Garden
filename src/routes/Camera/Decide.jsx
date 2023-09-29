function Decide() {
    // カメラ映像の大きさ
    const cameraWidth = 390;
    const cameraHeight = 840;
  // img タグに入れる
  function photo_view() {

    const box = document.querySelector('.animalbox');
    box.classList.remove('hidden');
    box.classList.add('grid');

    const borders = [...document.querySelectorAll('.borders')];
    for(let i = 0; i < borders.length; i++){
      borders[i].classList.add("hidden");
    }
    
    const decide = document.querySelector('.decide');
    decide.classList.add('hidden');

    const screen = document.querySelector('.backscreen');
    screen.classList.add('hidden');

    const retry = document.querySelector('.retry');
    retry.classList.add('hidden');
    
    const UI = document.querySelector(".UI");
    const canvas = document.getElementById("canvas");
    canvas.style.display = 'block'
    //描画用オブジェクトを取得
    const ctx = canvas.getContext("2d",{
      willReadFrequently: true
    });
    // JPGにする場合 (第2引数は品質)
    let dataURI = canvas.toDataURL("image/jpeg", 0.75);
    console.log(dataURI)
    
    // img タグの生成
    const img_area = document.getElementById("content_area");
    const img_element = document.createElement("img")
    
    img_area.appendChild(img_element)
    
    // データURIは直接img要素のsrc属性に指定できる
    img_element.src = dataURI;
    img_element.id = 'Nurie';
    img_element.classList.add("absolute");
    img_element.classList.add("z-[95]")
    img_element.classList.add("w-[50%]");
    img_element.classList.add("h-[40%]");
    img_element.classList.toggle('left-1/2');
    img_element.classList.toggle('top-1/2');
    img_element.classList.toggle('translate-x-[-50%]');
    img_element.classList.toggle('translate-y-[-50%]');
    img_element.style.display = 'none'

    // const animal = document.getElementById('animals');
    // animal.setAttribute('src',dataURI);

    // canvas の削除
    ctx.clearRect(0, 0, 1000, 1000);
    canvas.classList.add("hidden");
    canvas.style.display = "none";
    UI.classList.remove("hidden");
  }
  
  return (
    <>
      <input className="rounded border-main border-2 px-[4px] py-[2px] border-solid fixed decide top-[91%] right-[5%] hidden" type="button" value="続ける" onClick={() => photo_view() }/>
    </>
  )
}

export default Decide