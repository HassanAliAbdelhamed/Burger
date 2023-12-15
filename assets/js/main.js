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
