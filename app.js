let sliders=document.querySelectorAll('.slider');
let backGround=document.querySelector('.body');
let colorName=document.querySelector('.rgb-color-name');

        let color1=0;
        let color2=0;
        let color3=0;
        let color=`rgb(${color1},${color2},${color3})`;
        backGround.style.backgroundColor=color;

for(let i=0;i<sliders.length;i++){
    sliders[i].addEventListener('input',function(){

        let redval;
        let greenVal;
        let blueVal;
        
        if(this.classList.contains('red')){
            redval=parseInt(sliders[i].value)
            color1=redval;
        } else if(this.classList.contains('green')){
           greenVal=parseInt(sliders[i].value)
            color2=greenVal;
        } else if(this.classList.contains('blue')){
            blueVal=parseInt(sliders[i].value); 
            color3=blueVal;        
        }
        
        color=`rgb(${color1},${color2},${color3})`;
        backGround.style.backgroundColor=color;
        colorName.textContent=color;
    })
}

