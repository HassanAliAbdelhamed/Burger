let imageInsinde = document.querySelector('.imageInsinde');
let plus = document.querySelectorAll('#plus');
let min = document.querySelectorAll('#min');


plus.forEach(ele => {
    ele.onclick=()=>{
        let className = ele.className ;
        let imgSrc=`assets/img/burger atoms/${className}.png`
        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = className;
        img.id = className
        imageInsinde.appendChild(img);
        let para = document.getElementById(`${className}-p`)
        para.textContent = parseInt(para.textContent)+ 1;
        
    }
});
min.forEach(ele => {
    ele.onclick = ()=>{
    let className = ele.className;    
    let image = document.getElementById(className);
    imageInsinde.removeChild(image);
    let para = document.getElementById(`${className}-p`)
    para.textContent = parseInt(para.textContent)- 1;
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
