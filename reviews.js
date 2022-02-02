const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'WEB DEVELOPER',
        URL: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Oditeligendi hic, facere corporis reiciendis vel! Reiciendis velit velautem sapiente laudantium architecto quaerat odio facilis doloremque sint porro excepturi sunt voluptatibus rerum, sequiamet repellendus temporibus animi, culpa iure esse veniam? Aperiam quos, at est atque iusto maxime repudiandae fugit!",
    },
    {
        id: 2,
        name: 'Wendy Poland',
        job: 'UX DESIGNER',
        URL: "https://th.bing.com/th/id/OIP.7_g8jCQY03o1sa4rxApBbwHaKw?w=185&h=269&c=7&r=0&o=5&pid=1.7",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. corporis reiciendis vel! Reiciendis velit velautem sapiente laudantium architecto quaerat odio facilis doloremque sint porro excepturi sunt voluptatibus rerum, sequiamet repellendus temporibus animi, culpa iure esse veniam? Aperiam quos, at est atque iusto maxime repudiandae fugit!",
    },
    {
        id: 3,
        name: 'Lucas Morgan',
        job: 'NURSE',
        URL: "https://th.bing.com/th/id/OIP.vy1kp-MmCePvfMK5FsWs9QHaLT?w=185&h=282&c=7&r=0&o=5&pid=1.7",
        text: 'The list below shows a recommended list of common topics a Backend developer should master in any programming language of choice.',
    },
    {
        id: 4,
        name: 'Jeniffer Anderson',
        job: 'DEVELOPER',
        URL: "https://th.bing.com/th/id/OIP.OZ4H-rkCEA3F36MofD8hpwHaKx?w=185&h=269&c=7&r=0&o=5&pid=1.7",
        text: 'Understands the goals of the software and comes up with effective solutions. Understands the goals of the software and comes up with effective solutions.',
    }
];

const URL = document.getElementById('person-img');
const name = document.getElementById('name');
const occupation = document.getElementById('occupation');
const description = document.getElementById('description');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

// load current item
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
    
});

// show person based on item
function showPerson () {
    const item = reviews[currentItem];
    URL.src = item.URL;
    name.textContent = item.name;
    occupation.textContent = item.job;
    description.textContent = item.text;
}

// show person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson()
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();

});
