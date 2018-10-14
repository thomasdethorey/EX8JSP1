function ex8(){
  var ag = document.getElementById('age').value;
  if(isNaN(ag) || ag < 1){
  alert('En chiffre !')
}else{
  if (ag.length >= 4) {
    alert('petit farceur');
  } else if (ag >= 18) {
    alert('Vous êtes majeur :)');
  }
  else {
    alert('Vous êtes mineur :(');
  }
}
}
