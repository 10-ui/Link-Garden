

function Delete() {

    // img タグを削除
  function img_remove() {
    const der = document.querySelectorAll('.der');
    der[0].classList.remove("hidden");
    der[1].classList.remove("hidden");
    der[2].classList.add("hidden");
    der[3].classList.add("hidden");
    const element = document.querySelector('#animals');
    element.classList.remove();
    const canvas = document.getElementById("canvas");
    canvas.classList.add("fixed");
    canvas.style.display = "none";
  }


  return (
    <>
      <input className="hidden" type="button" value="やり直し" onClick={() => img_remove() }/>
    </>
  )
}

export default Delete