"Use strict";

let numbersOfFilms ;
const  app = {
	personalData:[
		{name:"Armen"},
		{surname:"Shadoyan"},
		{age:20},
		{telNumber:"xx-yy-xxx"}],
	count:[],
	geners:[],
	private:false,


filmsCount (){
	numbersOfFilms = parseInt(prompt("Քանի ֆիլմ եք դիտել այսօր",""));

	while(numbersOfFilms == "" || numbersOfFilms == null || isNaN(numbersOfFilms)){
		numbersOfFilms = parseInt(prompt("Քանի ֆիլմ եք դիտել այսօր",""));
	 }app.count.push(numbersOfFilms);
},//filmsCount (){

//function rememberMyFilms (){	 	
//}

detectUserPersonalLevel(){
	if(numbersOfFilms === 0){
		console.log("Դուք ոչ մի ֆիլմ չեք դիտել");
	} else if(numbersOfFilms < 10){
		console.log("Դուք դիտել եք բավականին քիչ ֆիլմեր");
	} else if (numbersOfFilms < 30){
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numbersOfFilms >= 30) {
		console.log("Դուք կինոման եք !!")
	} else {
		console.log("Տեղի է ունեցել անհայտ խնդիր")
	}
},

showMyDB (privatee){
	if(privatee){
		console.log(app.personalData);
	}else{
		console.log("account closed");
	}
}, //showMyDB(account.personalData[4].private);


yourFavoriteGeners(){
		for(let i = 0; i <= 2; i++){
			const geners = prompt(`Ձեր Նախնտրելի ժանրը ${i + 1}`);
		while(true){
			const geners = prompt(`Ձեր Նախնտրելի ժանրը ${i + 1}`);
			if(geners.trim() != "" && geners != null && geners.length <= 20){
				break;
			}app.geners[i] = geners;
		}
    }
}

};//start()
  //showMyDB(account.personalData[4].private);
  //yourFavoriteGeners()




  //_________
//
  const cars = ["car1","car2","car3"];
  const [bmw,mb,audi] = cars;
  console.log(bmw,mb,audi); //"car1","car2","car3"
//
  const fruits = ["apple","banana","apricot"];
  const [red,yellow,orange] = fruits;
  console.log(fruits[1]);//banana
//
  const fc = ["Real Madrid","Barcelona","Atletico Madrid"];
  const [fcb,rm,atm] = fc;
  console.log(fcb,rm,atm);//"Real Madrid","Barcelona","Atletico Madrid"
//
  const colours = {
	dark:["black","grey"],
	light:["yellow","blue"]
  }
  const [dark] = colours.dark;
  const [light ]= colours.light;
console.log(dark,light);//black,yellow
//
  const day = ["8:30","14:30","20:30"];
  const [breakfast,lunch,supper] = day;
  console.log(breakfast,lunch,supper);

//
  const peoples = {
	mens:30,
	womens:25,
  };const {mens,womens} = peoples;
  let all = mens + womens;
  console.log(all);//55

//
const persinf = {
	lastname:"Armen",
	surname:"Shadoyan",
	age:"20"
};const {lastname,surname,age} = persinf;
console.log(`my name is ${lastname} ${surname} i am ${age}`);
//my name is Armen Shadoyan i am 20
//
const parametrs = {
	width:200,
	height:400,
	weight:{
		kg:20,
		g:20000
	}
};const {kg,g} = parametrs.weight;
console.log(`${kg} kg ${g} g`);//20 kg 20000g


