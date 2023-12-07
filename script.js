//your JS code here. If required.
let para = document.querySelector('#status')
document.querySelector('#enterBtn').addEventListener("click",()=>{
	para.innerText='';
	let h1 = document.createElement('h1');
	h1.innerText ='Entered Metaverse';
	para.appendChild(h1);
	
})