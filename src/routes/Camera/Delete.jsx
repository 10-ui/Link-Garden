function Delete() {

    // img タグを削除
  function img_remove() {
    const element = document.querySelector('#Nurie');
    element.remove();
    
  }


  return (
    <>
      <input type="button" value="img削除" onClick={() => img_remove() }/>
    </>
  )
}

export default Delete