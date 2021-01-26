document.body.onload = function() {

    setTimeout(function() {
        let preloader  = document.getElementById('page__preloader');
                   
           if(!preloader.classList.contains('done')) {
               preloader.classList.add('done');
           }
    },1000);
}

let int = document.querySelectorAll('.temp_post'),
    inputs = document.querySelector('.inputs'),
    buttons = document.querySelector('.buttons'),
    animation = document.querySelector('.animation'),
    wraper = document.querySelector('.wraper'),
    rezult = document.querySelector('.rezult'),
    button_ok = document.getElementById('button_ok'),
    button_cancel = document.getElementById('button_cancel'),
    button_check = document.getElementById('button_check'),
    button_return = document.getElementById('button_return'),
    header = document.querySelector('.header');

let p_in = document.getElementById('p_in');
    p_out = document.getElementById('p_out'),
    t_in = document.getElementById('t_in'),
    t_out = document.getElementById('t_out'),
    p_n = document.getElementById('p_n'),
    n_st = document.getElementById('n_st'),
    p_0 = document.getElementById('p_0'),
    Q_pr = document.getElementById('Q_pr'),
    Q_1n = document.getElementById('Q_1n'),
    N_i = document.getElementById('N_i'),
    E_i = document.getElementById('E_i'),
    out_Pin = document.getElementById('out_Pin'),
    out_Pout = document.getElementById('out_Pout'),
    out_Tin = document.getElementById('out_Tin'),
    out_Tout = document.getElementById('out_Tout'),
    out_Pk = document.getElementById('out_Pk'),
    out_n = document.getElementById('out_n'),
    out_p = document.getElementById('out_p'),
    a = 30.64,
    count = 0,
    b_enter = false,
    b_esc = false;


window.onscroll = () => {
    window.pageYOffset > 10 ? header.classList.add('header_fixed') : header.classList.remove('header_fixed');    
}

button_ok.addEventListener('click', validInputs);
button_cancel.addEventListener('click', getCancel);
// button_check.addEventListener('click', getCheck);
button_return.addEventListener('click', getReturn);

inputs.onclick = function(e) {
   if(e.target.classList.contains('valid')) {
    e.target.classList.remove('valid')
   }
}

// function getCheck() {
//     button_check.checked ? a = 43.95 : a = 30.64;
// }

function getReturn() {
    a = 30.64;
    count = 0;
    button_ok.setAttribute('disabled', 'disabled');
    getCancel();
    wraper.classList.remove('disabled');
    inputs.classList.remove('disabled');
    buttons.classList.remove('disabled');
    rezult.classList.add('disabled');
    button_return.classList.add('disabled');
}

function getCancel() {
    p_in.value = '';
    p_out.value = '';
    t_in.value = '';
    t_out.value = '';
    p_n.value = '';
    n_st.value = '';
    p_0.value = '';
    b_esc = false;
    button_cancel.setAttribute('disabled', 'disabled');
}

function getRez() {
    b_esc = true;
    rezult.classList.remove('disabled');
    button_return.classList.remove('disabled');
    animation.classList.add('disabled');

    let AIR = +p_0.value/1.2044,
        R = 0.287 / AIR,
        Nsto = 8200,
        dP = +p_n.value,
        P_IN = +p_in.value + 0.1016,
        P_OUT = +p_out.value + 0.1016, 
        T_IN = +t_in.value + 273.15,   
        T_OUT = +t_out.value + 273.15;    

    let Z1 = 1-((10.2*P_IN-6)*(0.345*0.01*AIR-0.446*0.001)+0.015)*(1.3-0.0144*(T_IN-283.2)),
        Z2 = 1-((10.2*P_OUT-6)*(0.345*0.01*AIR-0.446*0.001)+0.015)*(1.3-0.0144*(T_OUT-283.2)),
        P1n = (P_IN*1000) / (Z1 * R * T_IN),
        Gn = (a*Math.sqrt(dP*102*P1n))/60,
        Q1n = (60*Gn) / P1n,
        Q1n_pr = (Q1n*Nsto) / (+n_st.value),
        Qpr = (Q1n_pr*(P_IN/0.1016)*(293.15/T_IN)*(1/Z1))*0.00144,
        Zsr = (Z1 + Z2) / 2,
        Mt = (Math.log10(T_OUT/T_IN))/(Math.log10(P_OUT/P_IN)),
        K = 4.16 + 0.0041*(((+t_in.value)+(+t_out.value))/2-10)+3.93*(AIR - 0.55)+5*(Mt-0.3),
        N = K*Zsr*R*((+t_out.value)-(+t_in.value))*Gn,
        E = P_OUT/P_IN,
        dNm = 100*Math.pow((+n_st.value/Nsto),1.5),
        Ne = (dNm + N) * 1.032;
        
        Q_pr.innerHTML = `${(Qpr.toFixed(2)).replace('.',',')} млн.н.м<sup>3</sup>/cут.`;
        Q_1n.innerHTML = `${(Q1n.toFixed(1)).replace('.',',')} м<sup>3</sup>/мин`;
        N_i.innerHTML = `${(Ne.toFixed(0)).replace('.',',')} кВт`;
        E_i.innerHTML= `${(E.toFixed(2)).replace('.',',')}`;

     
}

function validInputs() { 
    count = 0;

    for (let vl of int) {
        let b = (vl.value).replace(',','.');

        if((typeof +b === 'number') && (!isNaN(+b) && (+b > 0)) && !(b[0] === '.')) {
            count++;
        } else {
            vl.classList.add('valid');
        }
    }
    
    if (count == 7) {
        p_in.value = (p_in.value).replace(',','.');
        p_out.value = (p_out.value).replace(',','.');
        t_in.value = (t_in.value).replace(',','.');
        t_out.value = (t_out.value).replace(',','.');
        p_n.value = (p_n.value).replace(',','.');
        n_st.value = (n_st.value).replace(',','.');
        p_0.value = (p_0.value).replace(',','.');

        wraper.classList.add('disabled');
        inputs.classList.add('disabled');
        buttons.classList.add('disabled');
        animation.classList.remove('disabled');
        setTimeout(getRez, 2000);
    };
}

function check() {
    if(p_in.value || p_out.value || t_in.value || t_out.value || p_n.value || n_st.value || p_0.value  ) {
        button_cancel.removeAttribute('disabled');
        b_enter = true;
    } else {
        button_cancel.setAttribute('disabled', 'disabled');
    }

    if(p_in.value && p_out.value && t_in.value && t_out.value && p_n.value && n_st.value && p_0.value) {
        button_ok.removeAttribute('disabled');
    } else {
        button_ok.setAttribute('disabled', 'disabled');
    }  
}


const info = document.getElementById('btn_popup'),
    popup = document.querySelector('.popup'),
    popup__content = document.querySelector('.popup__content'),
    popup__close = document.querySelector('.popup__close');

info.addEventListener('click', p_d);
popup__close.addEventListener('click', pc_d);
popup.addEventListener('click', pc_d);

function p_d() {
   popup.classList.add('popup__disabled');
   popup__content.classList.add('popup__content_disabled');
}

function pc_d(e) {
        if (e.target.className == 'popup__body')  {
        popup.classList.remove('popup__disabled');
        popup__content.classList.remove('popup__content_disabled');
    }
    if (e.target.className == 'popup__close')  {
        popup.classList.remove('popup__disabled');
        popup__content.classList.remove('popup__content_disabled');
    }
}


document.onkeydown = function(event) {

  if((event.code === 'Enter') || (event.code === 'NumpadEnter')) {
      if(b_enter === true) {
        b_enter = false;
        b_esc = true;
        validInputs();
      }
  }

  if(event.code === 'Escape') {
    if(b_esc === true) {
        getReturn();
    }
  }
}




        


