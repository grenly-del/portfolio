const span = document.querySelector('.home .container .content .nama')
const box = document.querySelectorAll('.about .content .right .section .box')
const card = document.querySelectorAll('.about .content .right .section .box .card')
const btnInfo = document.querySelectorAll('.about .content .right .section .box .btn-info')
const close = document.querySelectorAll('.about .content .right .section .box .card .close')
const menu = document.querySelector('.humberger')
const navbar = document.querySelector('.navbar')
const navMenu = document.querySelectorAll('.navbar .menu li')
const manu = document.querySelector('.manu')
const home = document.querySelector('#home.home')
const about = document.querySelector('.about')
const main = document.querySelector('.main')
const email = document.querySelector('.email')
const copyBtn = document.querySelector('i.btncopy')
const copyBtn2 = document.querySelector('.footer .btncopy')
const row = document.querySelectorAll('.skils row')
console.log(email)




// ======== SKILS BAR ANIMASI =========


document.addEventListener('aos:in', ({detail}) => {
  let element = detail.children[0]
  let data
  let persen
  let firstPersen = 0

  try {

  	if( element.classList.contains('row') ) {
	  	element.classList.add('active')
	  	persen = element.children[0].children[0].dataset.persen
	  	data = element.children[1].children[0]
	  	

	  	setInterval(function(e){

	  		if( firstPersen == persen ) {
	  			clearInterval()
	  		} else {
	  			firstPersen++
	  			data.innerHTML = `${firstPersen}%`
	  		}

	  	}, 20)



	  } else {
	  	console.log('sorry')
	  }




  }catch (e){
  	console.log(`class tidak terdeteksi`)
  }

});







// ========COPY TEXT CLIPBOARD=========

function copying(element) {
	if(!element) {
		return
	}

	let text = element.innerText

	let elementNew = document.createElement('input')
	elementNew.setAttribute('value', text)
	document.body.appendChild(elementNew)

	elementNew.select()

	document.execCommand('copy')

	elementNew.parentNode.removeChild(elementNew)

	if( document.execCommand('copy') ) {
		alert('Email Sudah Tercopy!!!')
	}
}


copyBtn.addEventListener('click', (e) => {
	copying(email)
})

copyBtn2.addEventListener('click', (e) => {
	copying(email)
})




// ======SCROLL KE ELEMENT TERTENTU=======

navMenu.forEach(e => {
	e.addEventListener('click', function(e) {
		let id = this.textContent
		let element = document.getElementById(id)
		element.scrollIntoView({
			behavior : "smooth",
			block: "start"
		})
	})
})




// =======MENU TOGGLE / HUMBERGER MENU========

menu.addEventListener('click', (e) => {
	navbar.classList.toggle('active')
	manu.classList.toggle('active')
})	




// =======CARD ELEMENT========

btnInfo.forEach(function(e) {
	e.addEventListener('click', function(e) {
		this.parentElement.classList.add('active-card')
		let cardElement = this.nextElementSibling
		close.forEach(e => {
			e.addEventListener('click', function() {
				let parent = this.parentElement.parentElement.parentElement
				parent.classList.remove('active-card')
			})
		})
	})
})





// ======TEXT TYPING=======


const arrNama = ['GRANTLY ', 'ANTONIO ', 'EDWARD ', 'SORONGAN '];
let i = 0;
let h = 0;
let erase = false;
let arrNew = []
let selesai = false
let time = 0
let cloneArr



function loop() {


if( i < arrNama.length ) {
	selesai = false
	span.textContent = arrNew.join('')
	cloneArr = arrNama[i].length + 1
		
		if( !erase && h < arrNama[i].length) {
			let newName = arrNama[i][h]
			arrNew.push(newName)
			time = 500
			h++
			
		} 



		if( erase  && h <= arrNama[i].length ) {
			arrNew.pop(arrNama[i][h])
			time = 300
			h--
		}

		if( h == arrNama[i].length ) {
			time = 1200

			selesai = true
			erase = true

			
		}

		if( erase && h == 0 ) {
			arrNew = []
			erase = false
			selesai = false
			time = 500
			i++
			if( i == arrNama.length ) {
				i = 0
			}
		}

		



		
	}

	// let waktu = if( selesai ) {
	// 	return 700
	// } else if( erase ) {
	// 	return 300
	// } else if( h == arrNama[i].length ) {
	// 	return 1000
	// } else {
	// 	return 500
	// }

	// time = selesai ? 1000 : erase ? 300 : 500
	setTimeout(loop, time)


}


loop()