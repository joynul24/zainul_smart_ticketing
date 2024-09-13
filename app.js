function scrollToSection() {
    const element = document.getElementById('seat-section');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    };
};




const allBtns = document.getElementsByClassName('btns');

for (const btn of allBtns) {
    btn.addEventListener('click', function (event) {
        event.target.style.backgroundColor = ['#1DD100'];
        event.target.style.color = ['#fff'];
        // 40 seat left
        const seatLeft = setConvertValue('seats-left');
        const seatLeftMinus = seatLeft - 1;
        setInnerText('seats-left', seatLeftMinus);

        // seat-count 
        // const seatCount = setConvertValue('seat-count');
        const seatCount = setConvertValue('seat-count');
        const seatCoutnUpdate = seatCount + 1;
        setInnerText('seat-count', seatCoutnUpdate);

        // set tha seat price div
        
    });
};


function setConvertValue(id){
    const element = document.getElementById(id).innerText;
    const convertValue = parseInt(element);
    return convertValue;
}

function setInnerText(id, value){
    const element = document.getElementById(id).innerText = value;
    return element;
}