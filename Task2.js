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