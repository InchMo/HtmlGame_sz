			var cwidth = 400;
			var cheight = 300; 
			var dicex = 50;
			var dicey = 50;
			var dicewidth = 100; 
			var diceheight = 100; 
			var dotrad = 8;
			var ctx;
			var firstturn=true;
			var point;

			function draw1()
			{
				var dotx; 
				var doty;
				ctx.beginPath();
				dotx = dicex + 0.5*dicewidth;
				doty = dicey + 0.5*diceheight;
				ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
				ctx.closePath();

				ctx.fill();
			}

			function draw2()
			{
				var dotx; 
				var doty;

				ctx.beginPath();
				dotx = dicex+3*dotrad;
				doty = dicey+3*dotrad;
				ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
				ctx.closePath();

				dotx = dicex+dicewidth-3*dotrad;
				doty = dicey+diceheight-3*dotrad;
				ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
				ctx.closePath();

				ctx.fill();
			}

			function draw4()
			{
				var dotx; 
				var doty;

				ctx.beginPath();
				dotx = dicex+3*dotrad;
				doty = dicey+3*dotrad;
				ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
				ctx.closePath();

				dotx = dicex+dicewidth-3*dotrad;
				doty = dicey+diceheight-3*dotrad;
				ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
				ctx.closePath();

				dotx = dicex+3*dotrad;
				doty = dicey+diceheight-3*dotrad;
				ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
				ctx.closePath();

				dotx = dicex+dicewidth-3*dotrad;
				doty = dicey+3*dotrad;
				ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
				ctx.closePath();

				ctx.fill();
			}
			
			function draw2mid()
			{
				var dotx; 
				var doty;
				ctx.beginPath();
				dotx = dicex+3*dotrad;
				doty = dicey+0.5*diceheight;
				ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
				ctx.closePath();

				dotx = dicex+dicewidth-3*dotrad;
				doty = dicey+0.5*diceheight;
				ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
				ctx.closePath();

				ctx.fill();
			}

			function drawface(n){	
				//ctx = document.getElementById('myCanvas').getContext('2d');
				ctx.lineWidth = 5;	
				ctx.clearRect(dicex,dicey,dicewidth,diceheight);
				ctx.strokeRect(dicex,dicey,dicewidth,diceheight);	
				ctx.fillStyle="#ff0000";	
				switch(n){
					case 1:
						draw1();break;
					case 2:
						draw2();break;
					case 3:
						draw2();
						draw1();break;
					case 4:
						draw4();break;
					case 5:
						draw4();
						draw1();break;
					case 6:
						draw4();
						draw2mid();break;
				}
			}
		
			var init=function(){
				var sum;
				dicex = 50;
				dicey = 50;
				var ch = 1+Math.floor(Math.random()*6);
				drawface(ch);	
				sum=ch;
				dicex = 250;
				dicey = 50;
				var ch = 1+Math.floor(Math.random()*6);
				sum=sum+ch;
				drawface(ch);

				if(firstturn){
					switch(sum){
						case 7:
						case 11:
							document.f.outcome.value="you win!";break;
						case 2:
						case 3:
						case 12:
							document.f.outcome.value="you lose!";break;
						default:
							point=sum;
							document.f.pv.value=point;
							firstturn=false;
							document.f.stage.value="need follow-up throw.";
							document.f.outcome.value=" ";
					}
				}
				else{
					switch(sum){
						case point:
							document.f.outcome.value="you win!";
							document.f.stage.value="back to firstthrow.";
							document.f.pv.value=" ";
							firstturn= true;break;
						case 7:
							document.f.outcome.value="you lose!";
							document.f.stage.value="back to firstthrow.";
							document.f.pv.value=" ";
							firstturn=true;
					}
				}
			}
var myCanvas = document.createElement("canvas");
var ctx = myCanvas.getContext("2d");
myCanvas.width = 400;
myCanvas.height = 200;
myCanvas.style="border:5px solid #888888;"
document.body.appendChild(myCanvas);
//init();

