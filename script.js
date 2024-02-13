"Strict";

class ParkingLot {
  slots = [];
  constructor(parkingSize) {
    const slots = new Array(parkingSize).fill(null);
    this.slots = slots;

    console.log(this.slots);
  }

  park(carId, cartype) {
    console.log(`Parking Vehicle: ${carId}`);
    if (this.slots.every((slot) => slot !== null)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === null && i + 1 === 1 && cartype.toLowerCase() == "bike") {
        this.slots[i] = carId;
        console.log(
          `A ${cartype} with ID ${
            this.slots[i]
          } has been succesfully parked in the slot ${i + 1}`
        );
        return true;
      } else if (
        slot === null &&
        i + 1 === 2 &&
        cartype.toLowerCase() === "truck"
      ) {
        this.slots[i] = carId;
        console.log(
          `A ${cartype} with ID ${
            this.slots[i]
          } has been succesfully parked in the slot ${i + 1}`
        );
        return true;
      } else if (
        slot === null &&
        i + 1 >= 3 &&
        cartype.toLowerCase() === "car"
      ) {
        this.slots[i] = carId;
        console.log(
          `A ${cartype} with ID ${
            this.slots[i]
          } has been succesfully parked in the slot ${i + 1}`
        );
        return true;
      }
    }
  }

  unpark(carId) {
    console.log(`Leaving car: ${carId}`);
    if (this.slots.every((slot) => slot !== carId)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === carId) {
        this.slots[i] = null;
        console.log(
          `A vehicle with ID ${slot} has been removed from the garage`
        );
        return true;
      }
    }
  }

  getAvailable() {
    const availableSlots = this.slots.filter((s) => s === null).length;
    console.log(`Available parking slots: ${availableSlots}`);
    return availableSlots;
  }
  DisplayOpenSLots(type) {
    if (type.toLowerCase() === "car") {
      const newSlot = [...this.slots];
      const availableSlots = newSlot.splice(2).filter((s) => s === null).length;
      console.log(`Available Car parking slots: ${availableSlots}`);
      return availableSlots;
    }
    if (type.toLowerCase() === "bike") {
      const newSlot = [...this.slots];
      const availableSlots = newSlot
        .splice(0, 1)
        .filter((s) => s === null).length;
      console.log(`Available Bike parking slots: ${availableSlots}`);
      return availableSlots;
    }

    if (type.toLowerCase() === "truck") {
      const newSlot = [...this.slots];
      const availableSlots = newSlot
        .splice(1, 1)
        .filter((s) => s === null).length;
      console.log(`Available Truck parking slots: ${availableSlots}`);
      return availableSlots;
    }
  }
}

const levelOne = new ParkingLot(10);
levelOne.park("Mercedes12/WR", "Car");
levelOne.park("Nissan32/UI", "Bike");
levelOne.park("Toyota10/FT", "Car");
levelOne.park("Nissan11/TR", "Truck");
levelOne.park("Mercedes16/OP", "Car");
console.log(levelOne.slots);
levelOne.unpark("Mercedes12/WR");
console.log(levelOne.slots);
levelOne.DisplayOpenSLots("Car");
levelOne.DisplayOpenSLots("Bike");

// levelOne.DisplayOpenSLots("car");
// levelOne.DisplayOpenSLots("bike");
// levelOne.DisplayOpenSLots("truck");
// levelOne.park("Bajaj14/ED", "BiKe");
// // levelOne.park("Mercedes17/BK", "bike");
// // levelOne.park("Toyota24/IB", "Car");
// levelOne.park("Pegeout24/AB", "Car");
// levelOne.park("Nissan24/TR", "Truck");
// levelOne.unpark("Nissan24/TR");
// levelOne.park("Nissan12/OB", "Truck");
// console.log(levelOne.slots);
// // levelOne.getAvailable();
// levelOne.DisplayOpenSLots("car");
// levelOne.DisplayOpenSLots("bike");
// levelOne.DisplayOpenSLots("truck");
