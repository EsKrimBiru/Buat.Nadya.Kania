const clue = document.querySelector('.dua label')
const kotak = document.querySelector('.kotak')
// const kotakbsr = document.querySelector('.kotakbsr')
const form = document.querySelector('.dua')
const satu = document.querySelector('.satu')
const nama = document.getElementById('form')
const tekan = document.querySelector('.tekan')
const lanjut = document.querySelector('.lanjut')
const popup = document.querySelector('.popup')
const btn = document.querySelector('.popup button')
const p = document.querySelector('.popup p')
let ksmpt = 2
form.addEventListener('submit', function (e) {
  e.preventDefault()
  // alert('ok')
  klik()
  form.reset()
})

btn.addEventListener('click', function (e) {
  popup.classList.toggle('active')
  kotak.removeAttribute('style')
  nama.removeAttribute('disabled')
  tekan.removeAttribute('disabled')
})

const jwbn = 'Nadya Kania'
const jwbn1 = 'nadya kania'

function klik() {
  if (nama.value == jwbn || nama.value == jwbn1) {
    lanjut.style.display = 'flex'
    satu.style.display = 'none'
    form.innerHTML = '<div style="font-size:20px; margin-top:120px;">Tekan "Next"<br> Di pojok kanan bawah</div>'
    return
  }
  // else if (nama.value === jlk && ksmpt > 0) {
  //   ksmpt = 0
  //   popup.classList.toggle('active')
  //   kotak.style.filter = 'blur(10px)'
  //   // kotak.setAttribute('style', 'filter:blur(10px);')
  //   nama.setAttribute('disabled','disabled')
  //   tekan.setAttribute('disabled','disabled')
  //   p.innerHTML = 'MAKASIH UDAH DI BILANG GANTENG'
  //   clue.innerHTML = 'KODE YG BENER = "Nadya Kania"'
  //   return
  // }
  else if (nama.value !== jwbn && ksmpt > 0) {
    ksmpt--
    if (ksmpt === 1) {
      popup.classList.toggle('active')
      kotak.style.filter = 'blur(10px)'
      nama.setAttribute('disabled','disabled')
      tekan.setAttribute('disabled','disabled')
      p.innerHTML = 'YAH SALAH TUH MASUKINNYA'
      return
    }
    if (ksmpt === 0){
      popup.classList.toggle('active')
      kotak.style.filter = 'blur(10px)'
      nama.setAttribute('disabled','disabled')
      tekan.setAttribute('disabled','disabled')
      p.innerHTML = 'YAH SALAH LAGI '
      return
    }
  }
  
  else {
    popup.classList.toggle('active')
    kotak.style.filter = 'blur(10px)'
    clue.innerHTML = 'KODE YG BENER = "Nadya Kania"'
    return
  }
  
}


const typed = new Typed('.tulisan', {
  strings: ['Happy Birthday', 'Nadya Kania'],
  typeSpeed: 60,
  loop: true,
  backSpeed: 60,
  backDelay: 700,
  showCursor: false,
});
