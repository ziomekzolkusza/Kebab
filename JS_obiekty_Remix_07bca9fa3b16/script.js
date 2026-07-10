const yamaha = {
  producent: "Yamaha",
  kolor: "niebieski",
  predkosc_max: 120,
  hamuj:function(){
    return "Hamuję!";
  },
  przyspiesz:function(predkosc_max){
    if (predkosc<=this.prendkosc_max){
    return ("Przyspieszam do " + predkosc + "km/h");
  }
  else{
    return ("Przyspieszam do maksymalnej prędkości"
      + predkosc_max + " km/h");
 

  }
}
};


alert(yamaha.hamuj());
alert(yamaha.przyspiesz(150));