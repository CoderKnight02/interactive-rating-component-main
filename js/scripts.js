const butt = document.getElementById('submit'),
list = document.getElementById('rating-list'),
main = document.getElementById('main-card'),
secondary = document.getElementById('secondary'),
output = document.getElementById('output');

let before = undefined, rate = 0;

list.addEventListener('click', (e)=>{

    // console.log(e.target);
    if(before !== undefined && before != e.target) before.classList.remove('rate');
    e.target.classList.toggle('rate');
    if(before == e.target && rate == before.innerText) rate = 0;
    else rate = e.target.innerText;
    before = e.target;
    console.log(rate);
});

butt.addEventListener('click', ()=>{
    // console.log('Hola mundo');
    secondary.classList.replace('not-visible', 'visible' );
    main.classList.replace('visible', 'not-visible');
    output.innerText = `You selected ${rate} out of 5`
});


