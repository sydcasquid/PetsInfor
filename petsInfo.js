// You know that arrays can store any objects, like objects containing information 
//about pets.

// Use this array of pet data objects,

const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];


function showInfo() {
    let input = document.getElementById("petNum");
    let petNum = parseInt(input.value); 

    if (!isNaN(petNum) && petNum > 0 && petNum <=petsData.length) {
        petNum = petNum - 1; 
        let displayPet = document.querySelector(".selectedPetInfo");
        displayPet.innerHTML = `The pet's name is ${petsData[petNum]["petName"]}. ${petsData[petNum]["petName"]} is a ${petsData[petNum]["age"]} year(s) old ${petsData[petNum]["breed"]} that weighs ${petsData[petNum]["weightInKilos"]}KG.`;

    } else {
        let displayPet = document.querySelector(".selectedPetInfo");
        displayPet.innerHTML = `That is not a valid number, please try again.`;

    }
    
    
}


// Tasks:
// 1. Add the animal information array to a javascript file, animals.js
// 2. Create a new Web document, animals.html, and populate this with basic tags
// 3. Add your own simple markup, a list of animals, and divs or paragraphs identified 
//      by either a class or an id, and
// 4. Add a mechanism to prompt the user to enter a number between 1 and ... the last 
//      animal's number.

//     Remember that 0 is the first index of the array, and the last valid index in this 
//array  is given by the length property, less 1. Never a good plan to hard-code numeric 
//literals!
//     For 2 through 4 above, you might have the following, where showInfo() is a 
//callback function.


// 3. Display the pet information (name, age, weight and breed) on your web page, in a 
// formatted string, by creating function showInfo(). showInfo function should use the number entered by the user to get the array element and display the content in the paragraph identified by selectedPetInfo.
// Example, if the user entered 2, then, in the paragraph you would see,
//              Mango the cat is 2 years old. This cat weighs 11 kilos and is a Persian 
//breed.
// Important : Upload your submission as text!!!! Include a link to your repo, which you 
//must check is public, and a link to your published web site.