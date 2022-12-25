let navOpen = document.getElementById('navtabs');
let openbtn = document.getElementById('open');
let closebtn = document.getElementById('close');
let form = document.getElementById('form');
const blury = document.getElementById('blur');
const confirmed = document.getElementById('registration-confirmed');
let counter = 1; 
let count = 1; 
let countdown = 1;
const sections = document.querySelectorAll('.section');
const triggerPoint = window.innerHeight/5*4;
const imageObj = {
    'image1': 'background: url(/images/pexels-eva-bronzini-6261272.jpg); backgroundRepeat: no-repeat; background-position: center; background-size: cover;',
    'image2': 'background: url(/images/pexels-taryn-elliott-4099234.jpg); backgroundRepeat: no-repeat; background-position: center; background-size: cover;',
    'image3': 'background: url(/images/pexels-pixabay-33265.jpg); backgroundRepeat: no-repeat; background-position: center; background-size: cover;',
    'image4': 'background: url(/images/pexels-joonas-kääriäinen-239466.jpg); backgroundRepeat: no-repeat; background-position: center; background-size: cover;'
} 

function regbtn() {
    document.getElementById('form').classList.toggle('active')
    document.getElementById('blur').classList.toggle('active')
}

function toggle() {
    blury.classList.toggle('active');
    form.classList.toggle('active');
};


function toggleSub() {
    blury.classList.remove('active');
    form.classList.toggle('active');
    confirmed.classList.toggle('active');
};
function counter2() {
    setInterval(() => {
    document.getElementById('radio' + counter).checked= true;
    counter++;

    if (counter > 7) {
        counter = 1;
    }
}, 3000);
}


function counterz() {
    setInterval(() => {
        document.getElementById('change' + count).checked = true;
        count++;
        if (count > 4) {
            count = 1;
        }
    }, 5000);
}

function countz() {
    setInterval(() => {
        document.getElementById('changeImage').style= imageObj['image' + countdown];
        countdown++;
    
        if (countdown > 4) {
            countdown = 1;
        }
        
    }, 5000);
}


function sectionboxes() {
    window.addEventListener('scroll', (sectionboxes) => {
        
            sections.forEach( section => {
                
                const sectionTop = section.getBoundingClientRect().top;

                if (sectionTop < triggerPoint) {
                    section.classList.add('show');
                } else {
                    section.classList.remove('show');
                }

            })
        } 
    
    );
}
    
sectionboxes();


function openNav() {
navOpen.style.display='block'
openbtn.style.display="none"
closebtn.style.display='block'
};

function closeNav() {
navOpen.style.display='none'
openbtn.style.display="block"
closebtn.style.display='none'
};

function navtabClose(){
navOpen.style.display='none'
closebtn.style.display='none'
openbtn.style.display="block"
}

function tab(){
navOpen.style.display='none'
closebtn.style.display='none'
openbtn.style.display="block"
}
