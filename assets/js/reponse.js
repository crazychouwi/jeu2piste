//nouvelle fonction pour faire DEL sur les cases
// var nb = 0;
// $( document ).ready(function() {
//   $('.case').keydown(function(e){
//     console.log("1 nb= "+nb+" "+e.keyCode);
//     if (e.keyCode == '08') {
//       e.preventDefault();
//       console.log("2 nb= "+nb);
//       if (nb == 1) {
//         //previous.focus();
//         nb = 0;
//       }else{
//         $(this).val(" ");
//         nb = 1;
//      }}});});

//basculement d'un champ a l'autre================
function Autotab(texte, next){
    if (texte.value.length ==! 0) {
        $("#"+next).focus();
    }
}
//test résultat et d'affichage rep + redirection===
function resultat(indice, rep, numIndice){
  if(rep.toLowerCase()=== indice){
    $(".case").css("color","#09cb09");
    $(".case").css("font-weight","bold");
    window.location.href = "./indice"+numIndice+".html";
    // window.open("./indice"+numIndice+".html")
  }else{
    $(".case").css("color","red");
    $(".case").css("font-weight","bold");
  }
}
// création des indice/reponse==================
var indice1 = "nichoir";
var indice2 = "mouly";
var indice3 = "ocean";
var indice4 = "papi";
var indice5 = "guille";
var indice6 = "domitienne";
var indice7 = "typhonechidna";
// ONCLICK PART===============================
$("#valid").click(function (){
// récup réponse et mise en chaine============
  var lettre=[
    $("#1").val(), $("#2").val(),
    $("#3").val(), $("#4").val(),
    $("#5").val(), $("#6").val(),
    $("#7").val(), $("#8").val(),
    $("#9").val(), $("#10").val(),
    $("#11").val(), $("#12").val(),
    $("#13").val()];
  var rep = lettre.join("");
  // recup numero de l'indice===================
  var nIndice = $("#valid").attr("name");
  var numI = parseInt(nIndice.substring(nIndice.length - 1));
  console.log("nombre de l'indice:"+numI);
  console.log("reponse user: "+rep);
  //comparaison de l'indice et envoi du resultat===
  switch (numI) {
  case 1:
    console.log("cas 1");
    resultat(indice1, rep, 2);
    break;
  case 2:
    resultat(indice2, rep, 3);
    break;
  case 3:
    resultat(indice3, rep, 4);
    break;
  case 4:
    resultat(indice4, rep, 5);
    break;
  case 5:
    resultat(indice5, rep, 6);
    break;
  case 6:
    resultat(indice6, rep, "Final");
    break;
  case 7:
    resultat(indice7, rep, "Bravo");
    break;
}
});
