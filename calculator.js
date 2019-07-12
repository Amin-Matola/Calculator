 /****************************** Last Touched By: Amin Matola  ***********************************/
 /****************************** Last Modified  : 01/07/2019   ***********************************/
 
var table = document.querySelector('table');

table.addEventListener('click',function(e){
			var tag = e.target;
			var tagv= tag.innerText;
			if (tag.tagName.toLowerCase() != 'button'){

				return false
			}
			var place = document.querySelector('.innerd');
			if(tagv == '='){
				calculate();
			}
			else{
			if (tag.getAttribute('class') != 'innerd'){
				if(tagv == 'y3'){
					place.innerHTML += "^3";

				}
				else if (tagv=='c'){
					place.innerText = place.innerText.substring(0,place.innerText.length-1)
				}
				else if(tagv=='x2'){
					place.innerText += '^2'
				}
				else{	if(tagv=='x'){
					place.innerText += "*";
				}
				else{
						place.innerText += tagv;
					}
					}
		}
		}

			})

			function calculate(){
				place = document.querySelector('.innerd');
				data = place.innerText;
				y=data.split('\n')

				if(y.length > 1){
					data=y[1]
				}

				var log = data.split('log')

				if (log.length > 1){
					data = log[0]+"Math.log10"+log[1]
				}

				var sin = data.split('sin');
				if (sin.length > 1){
					data = sin[0]+"Math.sin"+sin[1]
				}

				var cos = data.split('cos');
				if (cos.length > 1){
					data = cos[0]+"Math.cos"+cos[1]
				}

				var tan = data.split('tan');
				if (tan.length > 1){
					data = tan[0]+"Math.tan"+tan[1]
				}
				var sqrt = data.split("√");
				if (sqrt.length > 1){
					try{
					data = sqrt[0]+"Math.sqrt("+sqrt[1]+")";
				}catch(e){
					alert(e.message)
				}
				}
				var cbrt = data.split("3√");
				if (cbrt.length > 1){
					try{
					data = cbrt[0]+"Math.cbrt("+cbrt[1]+")";
				}catch(e){
					alert(e.message)
				}
				}

				var power = data.split("^")
				if (power.length > 1){
					data = "Math.pow("+power[0]+","+power[1]+")";
				}




				results = eval(data);

			if(y.length <= 1){
				place.innerText += "\n"+results;
			}else{
				//alert(y[0])
				try{
				place.innerText=y[1]+"\n"+eval(y[1]);
			}catch(e){
				alert(e.message);

				// = y[0]+"\n"+eval(y[1]);
			}
			}

			}

