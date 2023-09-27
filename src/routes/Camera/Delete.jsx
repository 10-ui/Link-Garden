

function Delete() {

    // imgを削除
  function img_remove() {
    const retry = document.querySelector('.retry');
    retry.classList.add('hidden');

    const shoot = document.querySelector('.shoot');
    shoot.classList.remove('hidden');

    const img_area = document.getElementById("content_area");
    img_area.classList.remove('hidden');

    const element = document.querySelector('#animals');
    element.classList.remove();
    const canvas = document.getElementById("canvas");
    canvas.classList.add("fixed");
    canvas.style.display = "none";
  }

  return (
    <>
      <input className="hidden retry" type="button" value="やり直し" onClick={() => img_remove() }/>
    </>
  )
}

export default Delete