class Airplane {

    constructor(id, typeAir, flightAtt, pilots, buiSeats ,ecoSeats) {

		super();

		this.id = id;

		this.typeAir = typeAir;

		this.flightAtt = flightAtt;

		this.pilots = pilots;

		this.buiSeats = buiSeats;

		this.ecoSeats = ecoSeats;

	}

    addPilots() {};

    addFlightAtt(){};

    addPass(){};    

    getData() {};

}

const newAirplane = new Airplane();

newAirplane;

class Pilot extends Airplane{

    constructor(name, age, isSenior){

        super();

        this.name = name;

        this.age = age;

        this.isSenior= isSenior;

    }

    

    addPilots(name, age,isSenior){

                this.name= name;

		if (age !== null) {

			this.age= age;

		} else {

			this.age= null;

		} 

		if (isSenior !== null) {

			this.isSenior= isSenior;

		} else {

			this.isSenior= null;

		} 

         console.log(`Pilot = ${this.name} , ${this.age} , ${this.isSenior}` ) ;

    }
addFlightAtt(name, age){

                this.name= name;

		if (age !== null) {

			this.age= age;

		} else {

			this.age= null;

		} 

         console.log(`Flight attendant  = ${this.name} , ${this.age} `);

}

addPass(name, seat){

                this.name= name;

		if (seat !== null) {

			this.seat= seat;

		} else {

			this.seat= null;

		} 

    console.log(`(${name}, ${seat})`);

    }   

 }
 class Person  {

    constructor(name,age) {

		super();

		this.name = name;

		this.age = age;

		

	}

   }

class Crew extends Person{

    constructor(isSenior) {

		super();

		this.isSenior = isSenior;

	}

   }

class FlyAtt extends Person{

    constructor() {

		super();	

	}

   }

class Passanger extends Person{

    constructor() {

		super();	

	}

   }

