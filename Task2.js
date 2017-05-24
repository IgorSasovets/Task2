{
	class Fighter
	{
	     constructor (name="fighter", health=100, power=25) {
		     this.name = name;
			 this.health = health;
			 this.power = power;
		 }
		 
		 setDamage(damage) {
			 this.health = this.health - damage;  
			 let display = () => console.log(`health: ${this.health}`);
			 display();
		 }
		 
		 hit(enemy, point) {
		     	 let damage = this.power * point;
			 enemy.setDamage(damage);			 
		 }
		 
		 getInfo() { 
			 return `Fighter:
 			         - name: ${this.name}
			         - health: ${this.health}
					 - power: ${this.power}`;
		 }
	}
	
	class ImprovedFighter extends Fighter
	{		 
		 setDamage(damage) {
		     super.setDamage(damage);
		 }
		 
		 doubleHit(enemy, point) {
		     point = point * 2;
			 super.hit(enemy, point);
		 }
		 
		 getInfo() { 
			 return super.getInfo();
		 }
	}
	
	function fight(fighter, improved_fighter, ...point)
	{
	     let round_number = 1;
		 
	     do {
		     if (round_number % 2 > 0)
		         fighter.hit(improved_fighter, point[0]);	
             	     else 
                         improved_fighter.doubleHit(fighter, point[1]);	
             	     round_number++;				 
		 } while (fighter.health > 0 && improved_fighter.health > 0);
		 
		 if (fighter.health > 0)
		 {
		     console.log(`Fighter ${fighter.name} won! Number of round: ${round_number - 1}.`);
			 alert(`Fighter ${fighter.name} won! Number of round: ${round_number - 1}.`);
		 }
		 
		 else
		 {
		     console.log(`Improved fighter ${improved_fighter.name} won! Number of round: ${round_number - 1}.`); 
		     alert(`Improved fighter ${improved_fighter.name} won! Number of round: ${round_number - 1}.`); 
		 }
	}
	
	function Start()
	{
	     let names = [];
         let fighters_power = [];
		 let fighters_health = [];
		 let fighters_point = [];
		 let checking_result;
		 
		 GetData(names, fighters_power, fighters_health, fighters_point);
		 checking_result = EmptyFieldCheck(names, fighters_power, fighters_health, fighters_point);
		 
		 if (checking_result)
		 {
		     checking_result = CheckValues(names, fighters_power, fighters_health, fighters_point);
			 
			 if (checking_result)
			 {
                 GetData(names, fighters_power, fighters_health, fighters_point);
				 let fighter = new Fighter(names[0], fighters_health[0], fighters_power[0]);
	             let improved_fighter = new ImprovedFighter(names[1], fighters_health[1], fighters_power[1]);
				 fight(fighter, improved_fighter, fighters_point[0], fighters_point[1]);
                 
				 if (confirm(`Clear text fields?`))
					 ClearTextFields();				 
			 }
			 
			 else
			     alert ("Incorrect data!Try again!");
		 }
		 
		 else
			 alert ("Input data!"); 
	}
	
	function CheckValues(names, fighters_power, fighters_health, fighters_point)
	{
		 let nameExp = new RegExp("[ ]{0,}[a-zA-z]+[']{0,1}[-]{0,1}[a-zA-z]+[ ]{0,}", "g");
		 let otherExp = new RegExp("[1-9]{1}[0-9]{0,}", "g");
		 
		 for (let i = 0; i < names.length; i++)
		 {
			 names[i] = names[i].replace(nameExp, " ");
			 fighters_power[i] = fighters_power[i].replace(otherExp, " ");
			 fighters_health[i] = fighters_health[i].replace(otherExp, " ");
			 fighters_point[i] = fighters_point[i].replace(otherExp, " ");
			 
			 if (names[i] != " " || fighters_power[i] != " ") 
				 return false;
			 else if (fighters_point[i] != " " || fighters_health[i] != " ")
			     return false;
		 }	 

         return true;		 
	}
	
	function EmptyFieldCheck(names, fighters_power, fighters_health, fighters_point)
	{
		 for (let i = 0; i < names.length; i++)
			 if (names[i] == "" || fighters_power[i] == "") 
				 return false;
			 else if (fighters_point[i] == '' || fighters_health[i] == "")
			     return false;

		 return true;
	}
	
	function GetData(names, fighters_power, fighters_health, fighters_point)
	{
	     names[0] = document.getElementById("first_fighter_name").value;
 		 names[1] = document.getElementById("second_fighter_name").value;
		 
		 fighters_power[0] = document.getElementById("first_fighter_power").value;
		 fighters_power[1] = document.getElementById("second_fighter_power").value;
		 
		 fighters_health[0] = document.getElementById("first_fighter_health").value;
		 fighters_health[1] = document.getElementById("second_fighter_health").value;
		 
		 fighters_point[0] = document.getElementById("first_fighter_point").value;
		 fighters_point[1] = document.getElementById("second_fighter_point").value;
	}
	
	function ClearTextFields()
	{
	     document.getElementById("first_fighter_name").value = '';
 		 document.getElementById("second_fighter_name").value = '';
		 
		 document.getElementById("first_fighter_power").value = '';
		 document.getElementById("second_fighter_power").value = '';
		 
		 document.getElementById("first_fighter_health").value = '';
		 document.getElementById("second_fighter_health").value = '';
		 
		 document.getElementById("first_fighter_point").value = '';
		 document.getElementById("second_fighter_point").value = '';
	}
}

{
	function OverFightButton()
	{
		 var box = document.getElementById("start_button");
		 box.style.boxShadow = "0px 2px 3.0em #ffffff";
		 box.style.cursor = "pointer";
	}
}
