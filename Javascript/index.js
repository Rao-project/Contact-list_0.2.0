document.getElementsByClassName("contact")[0].addEventListener('click', function (event) 
{
    window.location.href="index.html";
    console.log("clicked");
}); 
 
document.getElementsByClassName("edit")[0].addEventListener('click', function (event) 
{
    window.location.href="pro.html";
    console.log("clicked");
}); 
document.getElementsByClassName("fav_list")[0].addEventListener('click', function (event) 
{
    window.location.href="fav.html";
    console.log("clicked");

}); 
  
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) 
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) 
      {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function menu(){
  var hide = document.getElementById("column");
  if (hide.style.display === "none"){
      hide.style.display = "block";
  }else{
      hide.style.display = "none";
  }
}