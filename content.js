


var contador = 1;

       if(document.domain === 'facebook.com'){
		   // if (window.opener && window.opener !== window){
	if($("[aria-label='Curtir']")) {
		setTimeout(() => {
			$("[aria-label='Curtir']").click()
	}, getRandomSec222(3));


		setTimeout(function(){
			window.close();
 
			  },getRandomSec222(6)); 
	}else{console.log('falhou no curtir')}


			
	  // }else{console.log('falhou no window.opener')}
	   }else if(document.location.href == "https://addmefast.com/free_points/facebook_likes"){
		execBtnTrigger();

		function execBtnTrigger(){


				setTimeout(function(){
	
						if(typeof $(".single_like_button.btn3-wrap")[0] !== 'undefined'){
								 $(".single_like_button.btn3-wrap")[0].click();
								 console.log('Clicou no contador '+contador)
								 contador+=0.5;

								 if(contador === 11) {
									document.getElementsByClassName('menu_item_sub')[1].childNodes[3].click()
								 }
								 
						}else{console.log('falhou no btn')}
						execBtnTrigger();

	
				},getRandomSec222(12));
	
			}


	   }
		    




function getRandomSec222(sum){
let sec222 = (Math.random() * 4)+sum;
sec222 =  parseFloat(sec222.toFixed(3))*1000;
return sec222;
}



