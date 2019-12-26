export default function move(){
	moveTimer();
}

function moveTimer(){
	setInterval(()=>{
		document.body.classList.add("is-moving");
		setTimeout(() => {
			document.body.classList.remove("is-moving");
		}, 400);
	  },5000);
	  document.addEventListener("mousemove",()=>{

	})
}
