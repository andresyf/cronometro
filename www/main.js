const reloj = document.querySelector('#reloj');
let milisegundos = 0;
let timer;

const empezarReloj = () => {
  reloj.classList.remove('paused');
  clearInterval(timer);
  timer = setInterval(()=>{ 
    milisegundos += 10;
    let dateTimer = new Date(milisegundos);
    reloj.innerHTML = 
      ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
  },10);
};

const pausarReloj = () => {
  reloj.classList.add('paused');
  clearInterval(timer);
};

const resetReloj = () => {
  reloj.classList.remove('paused');
  clearInterval(timer);
  milisegundos = 0;
  reloj.innerHTML= '00:00:00:00';
};

document.addEventListener('click', (e) =>{
  const element = e.target;
  if (element.id === 'start') empezarReloj();
  if (element.id === 'pause') pausarReloj();
  if (element.id === 'reset') resetReloj();
});