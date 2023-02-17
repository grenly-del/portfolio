const span = document.querySelector('.home .container .content .nama');
const box = document.querySelectorAll('.about .content .right .section .box')
const card = document.querySelectorAll('.about .content .right .section .box .card')
const btnInfo = document.querySelectorAll('.about .content .right .section .box .btn-info')
const close = document.querySelectorAll('.about .content .right .section .box .card .close')
const arrNama = ['GRANTLY ', 'ANTONIO ', 'EDWARD ', 'SORONGAN '];


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

let i = 0;
let h = 0;
let erase = false;
let arrNew = []
let selesai = false
let time = 0

function loop() {


if( i < arrNama.length ) {
	selesai = false
	span.textContent = arrNew.join('')
		if( !erase && h < arrNama[i].length ) {
			let newName = arrNama[i][h]
			arrNew.push(newName)


			h++
			// console.log(h)

		} 

		if( erase  && h <= arrNama[i].length ) {
			arrNew.pop(arrNama[i][h])

			h--
		}

		if( h == arrNama[i].length ) {
			// console.log(`nama ${arrNama[i]} sudah selesai`)

			selesai = true
			erase = true

			
		}

		if( erase && h == 0 ) {
			arrNew = []
			erase = false
			selesai = false
			i++
			if( i == arrNama.length ) {
				i = 0
			}
		}

		



		
	}

	

	time = selesai ? 700 : erase ? 300 : 500
	// console.log(time)
	setTimeout(loop, time)


}


loop()