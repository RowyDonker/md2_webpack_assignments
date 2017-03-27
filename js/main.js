/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
 * Je mag me bij elke opdracht om hulp vragen
 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 * 
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 * 
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
 */
var Test = 42;    
var Test = 'bar'; 
var Test = true;  
var Test2 = 45;    
var Test2 = 'Kel'; 
var Test2 = false; 
var Test3 = 20;    
var Test3 = 'Hoi'; 
var Test3 = true; 
var Test4 = 9;    
var Test4 = 'Kees'; 
var Test4 = false; 
var Test5 = 81;    
var Test5 = 'Kevin'; 
var Test5 = true; 
/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
 */
var gamegenres = ["Action", "Adventure", "Horror","RPG"]; 
console.log (gamegenres)
/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */
var fruits = [];
fruits.push('Melon','Banana');
console.log (fruits);
/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */
var names = ['Kevin','Micheal','Lebron','Rachelle'];
console.log (names,"Dit is de array zonder splicing")
names.splice(0,1);
names.splice(1,1);
console.log (names);
/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
 */
var Mobile = {
    MobileBrand : "Iphone",
    MobileCompany  : "Apple",
    Price      : 599,
    Color  : "blue,pink,gold and silver"   
};
console.log (" The " + Mobile.MobileBrand + " costs " + Mobile.Price + " Dollars " + "And is made by " + Mobile.MobileCompany + " it's sold in various colors like:" + Mobile.Color);
/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
 * console.log( value * multiplier)
 */
function multiply(value,multiplier){
    return value*multiplier;
}
function divide(value,multiplier){
    return value/multiplier;
}
function plus(value,value2){
    return value+value2;
}
function minus(value,value2){
    return value-value2;
}



console.log(multiply(3,4));
console.log(minus(12,8));
console.log(divide(4,2));
console.log(plus(4,2));
/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
 * roep deze functie aan en console.log() de waarde
 */
function name(firstname,lastname){
 return firstname+lastname;
}
console.log(name(Rowy,Donker));
/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
 */

/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien
 */

