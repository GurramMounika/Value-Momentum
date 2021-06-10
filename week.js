function weekDay(){
var Day;
var day=document.getElementById("myInput").value;
switch (day){
    case "0":
      Day = "Sunday";
      break;
    case "1":
      Day = "Monday";
      break;
    case "2":
       Day = "Tuesday";
      break;
    case "3":
      Day = "Wednesday";
      break;
    case "4":
      Day = "Thursday";
      break;
    case "5":
      Day = "Friday";
      break;
    case "6":
      Day = "Saturday";
      break;
      default:
      Day:"Not Found";
  }
  document.getElementById("demo").innerHTML=Day;
}