const footer = document.createElement('div');
footer.id = 'footer';
const footerFlag = new Image();
footerFlag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/255px-Flag_of_North_Korea.svg.png"
for (let i = 0; i < 20; i++) {
	footer.appendChild(footerFlag.cloneNode());
}

document.body.appendChild(footer);