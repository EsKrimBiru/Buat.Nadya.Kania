const btn = document.querySelector('.tiga button')
const popup = document.querySelector('.popup')
const popup1 = document.querySelector('.popup1')
const kotak = document.querySelector('.kotak')
const tekan = document.querySelector('.tekan')
const iya = document.querySelector('.iya')
const engga = document.querySelector('.engga')
const lanjut = document.querySelector('.lanjut')
const ok = document.querySelector('.ok')
const satu = document.querySelector('.satu')
const dua = document.querySelector('.dua')
const tiga = document.querySelector('.tiga')
const p = document.querySelector('.popup p')


btn.addEventListener('click', function () {
  klik()
  p.innerHTML = 'Udh di Scan Blom Maniezz'
})

iya.addEventListener('click', function () {
  klikoff()
  klik1()
})

engga.addEventListener('click', function () {
  klikoff()
})

ok.addEventListener('click', function () {
  lanjut.style.display = 'flex'
  klikoff1()
  satu.style.display = 'none'
  tiga.style.display = 'none'
  dua.innerHTML = '<div style="font-size:20px; margin-top:0px;">Tekan "Next"<br> Di pojok kanan bawah</div>'
})

function klik() {
  popup.classList.toggle('active')
  kotak.style.filter = 'blur(10px)'
  tekan.setAttribute('disabled','disabled')
}

function klik1() {
  popup1.classList.toggle('active')
  kotak.style.filter = 'blur(10px)'
  tekan.setAttribute('disabled','disabled')
}

function klikoff() {
  popup.classList.toggle('active')
  kotak.removeAttribute('style')
  tekan.removeAttribute('disabled')
}

function klikoff1() {
  popup1.classList.toggle('active')
  kotak.removeAttribute('style')
  tekan.removeAttribute('disabled')
}
