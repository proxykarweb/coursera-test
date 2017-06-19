
var homeHtmlUrl = "snippets/home-snippet.html";
var allCategoriesUrl = "json/category.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtmlToPick = "snippets/category-snippet.html"; 


var menuItemsUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
var menuItemsTitleHtml = "snippets/menu-items-title.html";
var menuItemHtml = "snippets/menu-item.html";

function getRequestObject(){
    if (window.XMLHttpRequest) {
      return (new XMLHttpRequest());
    } 
    else if (window.ActiveXObject) {
      // For very old IE browsers (optional)
      return (new ActiveXObject("Microsoft.XMLHTTP"));
    } 
    else {
      global.alert("Ajax is not supported!");
      return(null); 
    }
  }


function parsed(){


              var xmlHttpRe = getRequestObject(); 
           


              xmlHttpRe.onreadystatechange = function(){
                    if(xmlHttpRe.readyState == 4 && xmlHttpRe.status == 200){
                          
                          //return (xmlHttpRe.responseText); 
                    } 


              };

              request.open("GET", allCategoriesUrl, false);
              request.send(); // for POST only
}

//var parse = parsed();


window.onload = function(){
console.log("before new xMLHttpRequest");   
parsed();

function getObject(requestUrl) {
  console.log("before new xMLHttpRequest");   
 
    
    var request = getRequestObject();
    console.log("made a xmlHttpRequestObject"); 
    
   
    request.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
        console.log("readyState=4Status=200"); 
      
       document.getElementById("main-content").innerHTML =  insertProperty(this.responseText, "short_name", parse);
    }
  };

    console.log("before open"); 
    request.open("GET", requestUrl, false);
    console.log("afteropen"); 
    request.send(null); // for POST only
};





console.log("in start");
// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  
  html += "<img src='images/ajax-loader.gif'></div>";
  console.log("in showloading"); 
  getObject(categoryHtmlToPick);
  console.log("after htmlgetObject"); 
  //insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  
  string = string.replace(propToReplace, propValue);
  return string;
};

showLoading("#main-content");
console.log("END");

//var doc = document.getElementById("main-content"); 
//make tag for htmlhome
     //make tag for container for menu to load
   //ajax load the contents for the container


}
