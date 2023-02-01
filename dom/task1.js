const slider = document.querySelector(".slider");
const boxesContainer= document.querySelector(".boxes");

slider.addEventListener("input",function(){
    boxesContainer.innerHTML="";
    for (let i=0; i<slider.value;i++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor=`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        boxesContainer.appendChild(box);

    }
})