


window.addEventListener('load', function() {
   //retrieving planetary information
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then( function(json) {
         //picking a random planet
         const randomPlanet = json[Math.floor(Math.random() * json.length)];
         const div = document.getElementById("missionTarget");
         //inserting planetary information into the div
         div.innerHTML = `
            <ol>
               <li>Name: ${randomPlanet.name}</li>
               <li>Diameter: ${randomPlanet.diameter}</li>
               <li>Star: ${randomPlanet.star}</li>
               <li>Distance from Earth: ${randomPlanet.distance}</li>
               <li>Number of Moons: ${randomPlanet.moons}</li>
            </ol>
            <img src="${randomPlanet.image}">
         
         `;
      
      });
   });
	let form = document.querySelector('form');
	form.addEventListener('submit', function(event) {
		let pilotName = document.querySelector('input[name=pilotName]');
		let copilotName = document.querySelector('input[name=copilotName]');
		let fuelLevel = document.querySelector('input[name=fuelLevel]');
		let cargoMass = document.querySelector('input[name=cargoMass]');
      //validation for all input fields having an entry
		if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
			alert('All fields are required!');
         event.preventDefault();
      //validation for names entered not being a number
      } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false ) {
         alert('Please enter a valid name!');
         event.preventDefault();
      //validation for input entered only being a number
      } else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         alert('Please only enter a number!');
         event.preventDefault();
      }
      let faultyItems = document.getElementById("faultyItems");
      let h2Status = document.getElementById("launchStatus")
      let liPilot = document.getElementById("pilotStatus");
      let liCopilot = document.getElementById("copilotStatus");
      let liFuelStatus = document.getElementById("fuelStatus")
      let liCargoStatus = document.getElementById("cargoStatus")
      liPilot.innerHTML = (`${pilotName.value} Ready`);
      liCopilot.innerHTML = (`${copilotName.value} Ready`);
      //checking for a minimum fuel level
      if(fuelLevel.value < 10000) {
         faultyItems.style.visibility='visible';
         liFuelStatus.innerHTML = (`${fuelLevel.value} liters is not enough fuel for the journey`);
         h2Status.innerHTML = (`Shuttle not ready for launch`);
         h2Status.style.color = 'red';
         event.preventDefault();
      //checking for a maximum cargo mass
      } else if(cargoMass.value > 10000) {
         faultyItems.style.visibility='visible';
         liCargoStatus.innerHTML = (`${cargoMass.value} kilograms is too much mass for the shuttle to take off`);
         h2Status.innerHTML = (`Shuttle not ready for launch`);
         h2Status.style.color = 'red';
         event.preventDefault();
      } else {
         faultyItems.style.visibility='visible';
         h2Status.innerHTML = (`Shuttle is ready for launch`);
         h2Status.style.color = 'green';
         event.preventDefault();
      }

   });
   
   
});


