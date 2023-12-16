let imageInsinde = document.querySelector('.imageInsinde');
let plus = document.querySelectorAll('#plus');

plus.forEach(ele => {
    ele.onclick=()=>{
        let className = ele.className ;
        console.log(className);
        let imgSrc=`assets/img/burger atoms/${className}.png`
        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = className;
        img.id = className
        imageInsinde.appendChild(img);
        
    }
});

let total = document.querySelector('.total');
total.onclick = ()=>{
    let up = document.querySelector('footer .imageBox .up img');
    let middle = document.querySelectorAll('footer .imageBox .imageInsinde img');
    let down = document.querySelector('footer .imageBox .down img');
    
    let cheese = document.querySelectorAll('#cheese');
    let mayo = document.querySelectorAll('#mayo');
    let cucumber = document.querySelectorAll('#cucumber');

    up.style.marginBottom ="-25px";
    middle.forEach(ele => {
        ele.style.marginBottom ="-27px";
    });  

    cheese.forEach(ele => {
        ele.style="margin-bottom : -45px";
    });

    mayo.forEach(ele => {
        ele.style="margin-bottom : -35px";
    });

    cucumber.forEach(ele => {
        ele.style="margin-top : -5px ;margin-bottom : -27px;transform: rotate(-1deg);";
    });

    down.style.marginBottom ="-13px";
    
}
