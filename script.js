// Menu
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.onclick = () => nav.classList.toggle("active");

// Dark Mode
const toggle = document.getElementById("toggle");

toggle.onclick = () => {
document.body.classList.toggle("light");
};

// Typing
const text = ["Front-End Developer","Web Designer"];
let i=0,j=0,current="",del=false;

function type(){
current=text[i];

if(del){j--;}else{j++;}

document.getElementById("typing").textContent=current.substring(0,j);

if(!del && j==current.length){del=true;setTimeout(type,1000);return;}
if(del && j==0){del=false;i=(i+1)%text.length;}

setTimeout(type,del?50:100);
}

type();