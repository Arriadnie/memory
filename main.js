const cards = $('.card')

let flipped = false;
let second = false;
let firstC, secondC;

let lock = false;

function flip() {
	console.log("Click")
	console.log($(this))
}


$('.card').click(function() {


	console.log("Click")

	if(lock) return;
	if(this === firstC) return;

	$(this).addClass('flip');

	if(!flipped) {
		//first click
		flipped = true;
		firstC = this;
	} else {
		//second click
		second = true;
		
		secondC = this;
	}

	console.log(firstC, secondC)


	if(second) {
		//match
		second = false
		if(firstC.dataset.name === secondC.dataset.name) {
			$(firstC).off("click", flip)
			$(secondC).off("click", flip)
			console.log("Yes")
			reset()
		}
		//console.log(secondC.dataset.name)
		else {
			//do not match
			lock = true;
			setTimeout( () => {
				$(firstC).removeClass('flip')
				$(secondC).removeClass('flip')
				reset()
			},1500)
			
		}
	}
})

function reset() {
	flipped = false
	lock = false
	firstC = null
	secondC = null

}

(function shuffle() {
	$('.card').each(function() {
		let random = Math.floor(Math.random()*12)
		$(this).css('order', random) 
		console.log("random")
		console.log($(this).css('order'))
	})
})();



