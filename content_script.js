var allText = [...document.body.getElementsByTagName('*')];

allText.forEach(element =>{
	element.childNodes.forEach(child =>{
		if(child.nodeType == 3) {
			child.nodeValue = child.nodeValue.replace(/soccer/g, 'football')
			child.nodeValue = child.nodeValue.replace(/Soccer/g, 'Football')
			child.nodeValue = child.nodeValue.replace(/SOCCER/g, 'FOOTBALL')
			child.nodeValue = child.nodeValue.replace(/apartment/g, 'flat')
			child.nodeValue = child.nodeValue.replace(/candy/g, 'sweets')
			child.nodeValue = child.nodeValue.replace(/cell phone/g, 'mobile phone')
			child.nodeValue = child.nodeValue.replace(/chips/g, 'crisps')
			child.nodeValue = child.nodeValue.replace(/pants/g, 'trousers')
			child.nodeValue = child.nodeValue.replace(/sneakers/g, 'trainers')
			child.nodeValue = child.nodeValue.replace(/ass/g, 'arse')
			child.nodeValue = child.nodeValue.replace(/cell phone/g, 'mobile phone')
			child.nodeValue = child.nodeValue.replace(/diaper/g, 'nappy')

		}
	})
})














/*
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')



for(let i=0; i < text.length; i++) {
	if(text[i].innerHTML.includes('soccer')) {
		//alert(text[i].innerHTML);
		text[i].innerHTML = text[i].innerHTML.replace('soccer', 'football');
		//alert(text[i].innerHTML);
	}
}



const newText = document.querySelectorAll('div')

for(let i=0; i < newText.length; i++) {
	if(newText[i].innerHTML.includes('soccer')) {
		//alert(newText[i].innerHTML);
		newText[i].innerHTML = newText[i].innerHTML.replace('soccer', 'football');
		//alert(newText[i].innerHTML);
	}
} */
