

function Delete() {

    // img タグを削除
  function img_remove() {
    const shoot = document.querySelector('.shoot');
    shoot.classList.remove('hidden');

    const element = document.querySelector('#animals');
    element.classList.remove();
    const canvas = document.getElementById("canvas");
    canvas.classList.add("fixed");
    canvas.style.display = "none";
  }


  return (
    <>
      <input type="button" value="やり直し" onClick={() => img_remove() }/>
    </>
  )
}

export default Delete