const allBtns = document.getElementsByClassName('btns');

for(const btn of allBtns){
    btn.addEventListener('click', function(event){
        event.target.style.backgroundColor = ['#1DD100'];
        event.target.style.color = ['#fff'];
        
    });
};