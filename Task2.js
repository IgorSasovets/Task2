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
	
	function Start()
	{
	     let names = [];
         let fighters_power = [];
		 let fighters_health = [];
		 let checking_result;
		 
		 GetData(names, fighters_power, fighters_health);
		 checking_result = EmptyFieldCheck(names, fighters_power, fighters_health);
		 
		 if (checking_result)
		 {
		     checking_result = CheckValues(names, fighters_power, fighters_health);
			 
			 if (checking_result)
			 {
                 GetData(names, fighters_power, fighters_health);	
                 ClearTextFields();				 
			 }
			 
			 else
			     alert ("Incorrect data!Try again!");
		 }
		 
		 else
			 alert ("Input data!"); 
	}
	
	function CheckValues(names, fighters_power, fighters_health)
	{
		 let nameExp = new RegExp("[ ]{0,}[a-zA-z]+[']{0,1}[-]{0,1}[a-zA-z]+[ ]{0,}", "g");
		 let otherExp = new RegExp("[1-9]{1}[0-9]{0,}", "g");
		 
		 for (let i = 0; i < names.length; i++)
		 {
			 names[i] = names[i].replace(nameExp, " ");
			 fighters_power[i] = fighters_power[i].replace(otherExp, " ");
			 fighters_health[i] = fighters_health[i].replace(otherExp, " ");
			 
			 if (names[i] != " " || fighters_power[i] != " " || fighters_health[i] != " ")
				 return false;
		 }	 

         return true;		 
	}
	
	function EmptyFieldCheck(names, fighters_power, fighters_health)
	{
		 for (let i = 0; i < names.length; i++)
			 if (names[i] == "" || fighters_power[i] == "" || fighters_health[i] == "")
				 return false;

		 return true;
	}
	
	function GetData(names, fighters_power, fighters_health)
	{
	     names[0] = document.getElementById("first_fighter_name").value;
 		 names[1] = document.getElementById("second_fighter_name").value;
		 
		 fighters_power[0] = document.getElementById("first_fighter_power").value;
		 fighters_power[1] = document.getElementById("second_fighter_power").value;
		 
		 fighters_health[0] = document.getElementById("first_fighter_health").value;
		 fighters_health[1] = document.getElementById("second_fighter_health").value;
	}
	
	function ClearTextFields()
	{
	     document.getElementById("first_fighter_name").value = '';
 		 document.getElementById("second_fighter_name").value = '';
		 
		 document.getElementById("first_fighter_power").value = '';
		 document.getElementById("second_fighter_power").value = '';
		 
		 document.getElementById("first_fighter_health").value = '';
		 document.getElementById("second_fighter_health").value = '';
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