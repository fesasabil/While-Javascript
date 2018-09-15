// Melakukan Looping Menggunakan While
var number = 2;
while (number <= 20) {
    console.log(number + " - I love coding");
    number +=2;
}
console.log("Looping kedua")
var number = 20;
while (number >= 2) {
    console.log(number + " - I will become fullstack developer");
    number -=2;
}


//Melakukan Looping Menggunakan For
for(var flag = 1; flag <= 20; flag +=1) {
    console.log(flag + " - I love coding");
}
console.log("Looping kedua")
for(var flag = 20; flag >=1; flag -=1) {
    console.log(flag + " - I will become fullstack developer");
}


//angka ganjil dan genap
var num = 1;
var akhir = 100;
    while( num <= akhir ) {
        if(num%2==0)
        {  console.log("genap");
        } else {
            console.log("ganjil");
        }
        num++;
    }
for(a=0;a<100;) {
    console.log((++a%3?'': '3 Kelipatan 3') + (++a%6?'': '6 Kelipatan 6') + (++a%10?'': '10 Kelipatan 10')||a);
}