document.addEventListener('DOMContentLoaded', ()=> {
	document.querySelector('#form').onsubmit = () =>{
		const request = new XMLHttpRequest();
		const Username = document.querySelector("[name='email']").value;
        const Password = document.querySelector("[name='contrasena']").value;
		
		request.open('POST', '/logueado');
		
		request.onload = () => {
			const data= JSON.parse(request.responseText);
			alert(data.Credencial)
			if(data.success){
				window.location = window.location.href.replace("http://localhost:5000/login", "http://localhost:5000/productos");
			}
		} 
		
		const data = new FormData();
		data.append('Username', Username);
		data.append('Password', Password);
		
		request.send(data);
		return false;
	};	
});