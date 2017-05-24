{
	class Fighter
	{
	     constructor (name="fighter", health="100", power="25") {
		     this.name = name;
			 this.health = health;
			 this.power = power;
		 }
		 
		 getInfo() { 
			 return `fighter name: ${this.name}
			         health: ${this.health}
					 power: ${this.power}`;
		 }
	}
	
	let test = new Fighter("Ninja", 100, 20);
	console.log(test.getInfo());
}

function OverFightButton()
{
     var box = document.getElementById("start_button");
	 box.style.boxShadow = "0px 2px 3.0em #ffffff";
	 box.style.cursor = "pointer";
}