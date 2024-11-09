function createChocolate(){
    const chocolate = document.createElement('div');
    chocolate.classList.add('chocolate');

    const isHeart = Math.random() < 0.5;
    if(isHeart){
        chocolate.classList.add('heart');
    }else{
        chocolate.classList.add('square');
    }

    chocolate.style.left = `${Math.random() * window.innerWidth}px`;
    
    const duration = Math.random() * 5 + 3;
    chocolate.style.animationDuration = `${duration}s`;


    document.querySelector('.chocolate-rain').appendChild(chocolate);

    setTimeout(() =>{
        chocolate.remove();
    },
    duration * 1000);
}

setInterval(createChocolate,200);