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
        imageInsinde.appendChild(img);
        
    }
});

let total = document.querySelector('.total');
total.onclick = ()=>{
    let up = document.querySelector('footer .imageBox .up img');
    let middle = document.querySelectorAll('footer .imageBox .imageInsinde img');
    let down = document.querySelector('footer .imageBox .down img');
    up.style.marginBottom ="-25px";
    middle.forEach(ele => {
        ele.style.marginBottom ="-27px";
    });   
    down.style.marginBottom ="-13px";
}
