

function Delete() {

    // imgを削除
  function img_remove() {
    const retry = document.querySelector('.retry');
    retry.classList.add('hidden');

    const decide = document.querySelector('.decide');
    decide.classList.add('hidden');

    const borders = [...document.querySelectorAll('.borders')];
    for(let i = 0; i < borders.length; i++){
      borders[i].classList.remove("hidden");
    }

    const shoot = document.querySelector('.shoot');
    shoot.classList.remove('hidden');

    const screen = document.querySelector('.backscreen');
    screen.classList.add('hidden');

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
      <p className="text-btntext font-bold fixed top-[93%] right-[44%] hidden retry text-[18px]"  onClick={() => img_remove() }>やり直し</p>
    </>
  )
}

export default Delete