import flags from './model/flags.js';

var flagNum = 0;
const flagsLenght = flags.length;


displayFlags();


function displayFlags()
{
    var count=0;
    while(flagNum != flagsLenght && count < 50)
    {
        const row = document.querySelector('.my-row');
        const element = loadFlag(flags[flagNum]);
        row.insertAdjacentHTML('beforeend', element);
        flagNum++;
        count++;
    }
    console.log(flagNum);
}

function loadFlag(flag)
{
    const text = `<div class="flag col-2 my-2 text-center">
        <img src="https://www.countryflags.io/${flag.id}/flat/64.png" alt=${flag.name}>
        <p>${flag.name}</p>
    </div>`;

  return text;
}

var listener = function() { 
    const percentageHeight = (window.scrollY + window.innerHeight) / document.body.scrollHeight; 
    if ( percentageHeight >= 0.99) {
        displayFlags(); 
    }

    if (flagNum == flagsLenght) {
        window.removeEventListener("scroll", listener, false);
    }
};

window.addEventListener("scroll", listener);