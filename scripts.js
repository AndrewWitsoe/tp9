// Javascript for TP7 
// Also working on tinkering with functions and adding more customization to the website. WORK IN PROGRESS

//function to load a file from the URL "fromfile" into the object identified by "whereto" 
function loadFileInto(recipeName, listName, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;
  
	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("ERROR " + this.responseText);
			}
		
	} 

	// initiate request and wait for response
	ajax.send();

}

// new recipe object constructor. Followed the instructional guide on Panopto, trying to include 

function Recipe(recipeName, contributorName, imageURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.recipeName;
    document.querySelector("#titleBanner").style.backgroundimage = "frenchtoast.jpg" + this.imageURL; 
    loadFileInto(this.recipe,"ingredients","#ingredients ul");
    loadFileInto(this.recipe,"equipment", "#equipment ul");
    loadFileInto(this.recipe,"directions","#directions ol");
  }
}

FrenchToast = new Recipe("French Toast", "Andrew Witsoe", "https://www.bing.com/images/blob?bcid=sy-KjsXVqeIE0kLrrGkXnjMcPlvX.....x0", "ingredients.html", "equipment.html", "directions.html");

LemonBars = new Recipe("Lemon Bars", "Coby Nelson", "", "LBingredients.html", "LBequipment.html", "LBdirections.html");

SugarCookies = new Recipe("Maple Brown Sugar Cookies", "Kailin Gilzow", "", "SCingredients.html", "SCequipment.html", "SCdirections.html");

window.onload = function() {
  
  document.querySelector("#first").onclick = function() {
    FrenchToast.displayRecipe();
  }
  document.querySelector("#second").onclick = function() {
    LemonBars.displayRecipe();
  }
  document.querySelector("#third").onclick = function() {
    SugarCookies.displayRecipe();
  }
}