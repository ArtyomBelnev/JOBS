const checkPass = document.getElementById('checkPass')
const password = document.getElementById('password')

window.onkeydown = function (e) {
  console.log(1222)
  // disable F12 key
  if (e.keyCode == 123) {
    return false
  }

  // disable I key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false
  }

  // disable J key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    return false
  }

  // disable U key
  if (e.ctrlKey && e.keyCode == 85) {
    return false
  }

  // disable P key
  if (e.ctrlKey && e.keyCode == 80) {
    return false
  }
}

document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById('page__preloader')

    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }
  }, 1000)
}

window.onscroll = () => {
  window.pageYOffset > 10 ? header.classList.add('header_fixed') : header.classList.remove('header_fixed')
}

let isPass = function () {
  if (checkPass.value === '123452021') {
    checkPass.removeEventListener('keydown', isPass)
    checkPass.removeEventListener('keyup', isPass)

    password.style.opacity = '0'
    password.style.visibility = 'hidden'
    password.style.transition = '1s all'
  }
}

checkPass.focus()
checkPass.addEventListener('keydown', isPass)
checkPass.addEventListener('keyup', isPass)

let ins_vl1 = document.getElementById('ins_vl-1')
let ins_vl2 = document.getElementById('ins_vl-2')
let ins_vl3 = document.getElementById('ins_vl-3')
let ins_vl4 = document.getElementById('ins_vl-4')
let ins_vl5 = document.getElementById('ins_vl-5')
let ins_vl6 = document.getElementById('ins_vl-6')
let ins_vl7 = document.getElementById('ins_vl-7')
let val_vl1 = document.getElementsByClassName('vl-1_all')
let val_vl2 = document.getElementsByClassName('vl-2_all')
let val_vl3 = document.getElementsByClassName('vl-3_all')
let val_vl4 = document.getElementsByClassName('vl-4_all')
let val_vl5 = document.getElementsByClassName('vl-5_all')
let val_vl6 = document.getElementsByClassName('vl-6_all')
let val_vl7 = document.getElementsByClassName('vl-7_all')
let int_all = document.getElementsByClassName('temp_int')

let button_cancel = document.getElementById('button_cancel'),
  button_ok = document.getElementById('button_ok'),
  inputs = document.querySelector('.inputs'),
  buttons = document.querySelector('.buttons'),
  animation = document.querySelector('.animation'),
  wraper = document.querySelector('.wraper'),
  button_return = document.getElementById('button_return'),
  rezult = document.querySelector('.rezult')

let p_in = document.getElementById('p_in')
;(p_out = document.getElementById('p_out')),
  (t_in = document.getElementById('t_in')),
  (t_out = document.getElementById('t_out')),
  (p_n = document.getElementById('p_n')),
  (n_st = document.getElementById('n_st')),
  (p_0 = document.getElementById('p_0')),
  (Q_pr = document.getElementById('Q_pr')),
  (Q_1n = document.getElementById('Q_1n')),
  (N_i = document.getElementById('N_i')),
  (E_i = document.getElementById('E_i')),
  (a = 30.64),
  (count = 0),
  (b_enter = false),
  (b_esc = false)

const info = document.getElementById('btn_popup'),
  popup = document.querySelector('.popup'),
  popup__content = document.querySelector('.popup__content'),
  popup__close = document.querySelector('.popup__close')

info.addEventListener('click', p_d)
popup__close.addEventListener('click', pc_d)
popup.addEventListener('click', pc_d)

function p_d() {
  popup.classList.add('popup__disabled')
  popup__content.classList.add('popup__content_disabled')
}

function pc_d(e) {
  if (e.target.className == 'popup__body') {
    popup.classList.remove('popup__disabled')
    popup__content.classList.remove('popup__content_disabled')
  }
  if (e.target.className == 'popup__close') {
    popup.classList.remove('popup__disabled')
    popup__content.classList.remove('popup__content_disabled')
  }
}

document.onkeydown = function (event) {
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
    if (b_enter === true) {
      b_enter = false
      b_esc = true
      validInputs()
    }
  }

  if (event.code === 'Escape') {
    if (b_esc === true) {
      getReturn()
    }
  }
}

_addInValue(1)

button_ok.addEventListener('click', validInputs)
button_cancel.addEventListener('click', getCancel)
button_return.addEventListener('click', getReturn)

function getCancel() {
  b_esc = false
  button_cancel.setAttribute('disabled', 'disabled')

  for (let i = 0; i < int_all.length; i++) {
    int_all[i].value = ''
  }
}

function check() {
  let n = 0

  for (let i = 0; i < int_all.length; i++) {
    if (int_all[i].value) {
      n++
    }
  }

  if (n > 0) {
    button_cancel.removeAttribute('disabled')
    b_enter = true

    if (n == int_all.length) {
      button_ok.removeAttribute('disabled')
    } else {
      button_ok.setAttribute('disabled', 'disabled')
    }
  } else {
    button_cancel.setAttribute('disabled', 'disabled')
  }
}

function getReturn() {
  a = 30.64
  count = 0
  button_ok.setAttribute('disabled', 'disabled')
  getCancel()
  wraper.classList.remove('disabled')
  inputs.classList.remove('disabled')
  buttons.classList.remove('disabled')
  rezult.classList.add('disabled')
  button_return.classList.add('disabled')
}

function validInputs() {
  count = 0

  for (let vl of int_all) {
    let b = vl.value.replace(',', '.')

    if (typeof +b === 'number' && !isNaN(+b) && +b > 0 && !(b[0] === '.')) {
      count++
    } else {
      vl.classList.add('valid')
    }
  }

  if (int_all.length === count) {
    wraper.classList.add('disabled')
    inputs.classList.add('disabled')
    buttons.classList.add('disabled')
    animation.classList.remove('disabled')
    setTimeout(getRez, 2000)
  }
}

function getRez() {
  b_esc = true
  rezult.classList.remove('disabled')
  button_return.classList.remove('disabled')
  animation.classList.add('disabled')

  let Q_1x = 0,
    Q_2x = 0,
    Q_3x = 0,
    Q_4x = 0
  let n = val_vl1.length
  let count = 0

  for (let i = 1; i <= n; i++) {
    let AIR = +val_vl7[count].value.replace(',', '.') / 1.2044,
      R = 0.287 / AIR,
      Nsto = 8200,
      dP = +val_vl5[count].value.replace(',', '.')
    ;(P_IN = +val_vl1[count].value.replace(',', '.') + 0.1016), (P_OUT = +val_vl2[count].value.replace(',', '.') + 0.1016), (T_IN = +val_vl3[count].value.replace(',', '.') + 273.15), (T_OUT = +val_vl4[count].value.replace(',', '.') + 273.15)

    let Z1 = 1 - ((10.2 * P_IN - 6) * (0.345 * 0.01 * AIR - 0.446 * 0.001) + 0.015) * (1.3 - 0.0144 * (T_IN - 283.2)),
      Z2 = 1 - ((10.2 * P_OUT - 6) * (0.345 * 0.01 * AIR - 0.446 * 0.001) + 0.015) * (1.3 - 0.0144 * (T_OUT - 283.2)),
      P1n = (P_IN * 1000) / (Z1 * R * T_IN),
      Gn = (a * Math.sqrt(dP * 102 * P1n)) / 60,
      Q1n = (60 * Gn) / P1n,
      Qpr = Q1n * ((P_IN / 0.1016) * (293.15 / T_IN) * (1 / Z1)) * 0.00144,
      Zsr = (Z1 + Z2) / 2,
      Mt = Math.log10(T_OUT / T_IN) / Math.log10(P_OUT / P_IN),
      K = 4.16 + 0.0041 * ((+val_vl3[count].value.replace(',', '.') + +val_vl4[count].value.replace(',', '.')) / 2 - 10) + 3.93 * (AIR - 0.55) + 5 * (Mt - 0.3),
      N = K * Zsr * R * (+val_vl4[count].value.replace(',', '.') - +val_vl3[count].value.replace(',', '.')) * Gn,
      E = (P_OUT + 0.1016) / (P_IN + 0.1016),
      dNm = 100 * Math.pow(+val_vl6[count].value.replace(',', '.') / Nsto, 1.5),
      Ne = dNm + N

    Q_1x += Qpr
    Q_2x += Q1n
    Q_3x += Ne
    Q_4x += E
    count++
  }

  Q_pr.innerHTML = `${(Q_1x / n).toFixed(2).replace('.', ',')} млн.н.м<sup>3</sup>/cут.`
  Q_1n.innerHTML = `${(Q_2x / n).toFixed(1).replace('.', ',')} м<sup>3</sup>/мин`
  N_i.innerHTML = `${(Q_3x / n).toFixed(0).replace('.', ',')} кВт`
  E_i.innerHTML = `${(Q_4x / n).toFixed(2).replace('.', ',')}`
}

function _addInValue(vl) {
  ins_vl1.innerHTML += `<input type="text" class="vl-1_all temp_int" placeholder="0" size="3" onkeyup="check();">`
  ins_vl2.innerHTML += `<input type="text" class="vl-2_all temp_int" placeholder="0" size="3" onkeyup="check();">`
  ins_vl3.innerHTML += `<input type="text" class="vl-3_all temp_int" placeholder="0" size="3" onkeyup="check();">`
  ins_vl4.innerHTML += `<input type="text" class="vl-4_all temp_int" placeholder="0" size="3" onkeyup="check();">`
  ins_vl5.innerHTML += `<input type="text" class="vl-5_all temp_int" placeholder="0" size="3" onkeyup="check();">`
  ins_vl6.innerHTML += `<input type="text" class="vl-6_all temp_int" placeholder="0" size="3" onkeyup="check();">`
  ins_vl7.innerHTML += `<input type="text" class="vl-7_all temp_int" placeholder="0" size="3" onkeyup="check();">`
}

function _delInValue() {
  val_vl1[val_vl1.length - 1].remove()
  val_vl2[val_vl2.length - 1].remove()
  val_vl3[val_vl3.length - 1].remove()
  val_vl4[val_vl4.length - 1].remove()
  val_vl5[val_vl5.length - 1].remove()
  val_vl6[val_vl6.length - 1].remove()
  val_vl7[val_vl7.length - 1].remove()
}

let nGPA = document.getElementById('nGPA')
let nGPA_D = document.getElementById('nGPA_D')
let nGPA_U = document.getElementById('nGPA_U')

nGPA_U.addEventListener('click', addNumGPA)
nGPA_D.addEventListener('click', delNumGPA)

function addNumGPA() {
  button_cancel.setAttribute('disabled', 'disabled')
  button_ok.setAttribute('disabled', 'disabled')

  let n = +nGPA.innerHTML

  if (n < 3) {
    nGPA.innerHTML = n + 1
    _addInValue()
    nGPA_D.removeAttribute('disabled')
  }
}

function delNumGPA() {
  button_cancel.setAttribute('disabled', 'disabled')
  button_ok.setAttribute('disabled', 'disabled')

  let n = +nGPA.innerHTML

  if (n > 1) {
    nGPA.innerHTML = n - 1
    _delInValue()
    if (+nGPA.innerHTML == 1) {
      nGPA_D.setAttribute('disabled', 'disabled')
    }
  }
}

button_return.addEventListener('click', getReturn)

inputs.onclick = function (e) {
  if (e.target.classList.contains('valid')) {
    e.target.classList.remove('valid')
  }
}
