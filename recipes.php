<?

/* recipe loader tp8. Created by following along with the instructional video on Panopto
and afterwards using the knowledge gained to distribute the code to the other
two recipes from the previous tiny project. */

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];

if ($name == "French Toast") {
  
  if($list == "ingredients") {
    include "ingredients.html";
    
  } elseif ($list == "equipment") {
    include "equipment.html";
    
  } elseif ($list == "directions") {
    include "directions.html";
    
  } else {
    echo "1";
  }
  
} elseif ($name == "Lemon Bars") {
  
  if ($name == "Lemon Bars") {
  
  if($list == "ingredients") {
    include "LBingredients.html";
    
  } elseif ($list == "equipment") {
    include "LBequipment.html";
    
  } elseif ($list == "directions") {
    include "LBdirections.html";
    
  } else {
    echo "1";
  }
  
} elseif ($name == "Sugar Cookies") {
      if ($name == "Sugar Cookies") {
  
  if($list == "ingredients") {
    include "SCingredients.html";
    
  } elseif ($list == "equipment") {
    include "SCequipment.html";
    
  } elseif ($list == "directions") {
    include "SCdirections.html";
    
  } else {
    echo "1";
  }
  
}