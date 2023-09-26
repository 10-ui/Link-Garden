function Delete() {

    // img タグを削除
  function img_remove() {
    const element = document.querySelector('#animals');
    element.remove();
    const canvas = document.getElementById("canvas");
    canvas.classList.add("hidden");
  }


  return (
    <>
      <input type="button" value="img削除" onClick={() => img_remove() }/>
    </>
  )
}

export default Delete