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
        if(seatLeftMinus < 36){
            alert("You can no longer purchase seats!")
            return;
        }
        setInnerText('seats-left', seatLeftMinus);

        // seat-count 
        const seatCount = setConvertValue('seat-count');
        const seatCoutnUpdate = seatCount + 1;
        if (seatCoutnUpdate > 4) {
            alert("You can no longer purchase seats!")
            return;
        };
        setInnerText('seat-count', seatCoutnUpdate);
        // set the seat price div
        const seatContainer = document.getElementById('selected-seat-container');
        
        const div = document.createElement('div');
        div.classList.add('setInnerText-div');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = event.target.innerText;
        p2.innerText = 'Economoy';
        p3.innerText = '550';

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        seatContainer.appendChild(div);

        // total price update
        const price = 550;
        updateTotalCost(price)

    });
};

function updateTotalCost(price){
    const totalPrice = document.getElementById('total-price').innerText;
    const convertTotalPrice = parseInt(totalPrice);
    const sum = convertTotalPrice + price;
    document.getElementById('total-price').innerText = sum;
};


function setConvertValue(id) {
    const element = document.getElementById(id).innerText;
    const convertValue = parseInt(element);
    return convertValue;
}

function setInnerText(id, value) {
    const element = document.getElementById(id).innerText = value;
    return element;
}