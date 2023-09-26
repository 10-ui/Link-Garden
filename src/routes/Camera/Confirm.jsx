function Confirm() {
  const canvas = document.getElementById("canvas");
  canvas.classList.toggle('fixed');
  canvas.classList.toggle('z-[90]');
  canvas.classList.toggle('left-1/2');
  canvas.classList.toggle('top-1/2');
  canvas.classList.toggle('translate-x-[-50%]');
  canvas.classList.toggle('translate-y-[-50%]');
}
export default Confirm