let list = [5 , 2 , 1.5 , .5 , 1 , .5 , .5 , .5]

let done = document.querySelector('.done');
let imageInsinde = document.querySelector('.imageInsinde');
let plus = document.querySelectorAll('#plus');
let min = document.querySelectorAll('#min');
let totalSpan = document.querySelector('.totalSpan');
let total = document.querySelector('.total');


plus.forEach((ele , index) => {
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
        console.log(list[index]);
        totalSpan.textContent = parseFloat(totalSpan.textContent) +list[index];
    }
});


min.forEach((ele , index) => {
    ele.onclick = ()=>{
    let className = ele.className;    
    let images = document.querySelectorAll(`#${className}`);
    let para = document.getElementById(`${className}-p`)
    let lastIndex = images.length -1 ;
    imageInsinde.removeChild(images[lastIndex])
        if(para.textContentt =! "0" ){
                para.textContent = parseInt(para.textContent)- 1;
                totalSpan.textContent = parseFloat(totalSpan.textContent) -list[index];
        }

    }
});


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

    setTimeout(() => {
        done.style.display = "block";
    }, 2000);
}

done.onclick = ()=>{
    location.reload();
}

