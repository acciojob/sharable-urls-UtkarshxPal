const form = document.getElementById("form") ; 


form.addEventListener("submit" , (e)=>{
	e.preventDefault();
	const name = document.getElementById("name").value ; 
const year = document.getElementById("year").value;
let baseUrl = " https://localhost:8080/"
	
const updatedUrl = `${baseUrl}?${name ? `name=${name}` : ""}${name && year ? "&" : ""}${year ? `year=${year}` : ""}`;


	const h3 = document.getElementById("url") ; 
	h3.textContent = updatedUrl ; 
	
})
