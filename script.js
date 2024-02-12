"Strict";

class SlotCl {
  slots = [];
  constructor(parkingSize) {
    const level1 = new Array(parkingSize).fill(null);
    const level2 = new Array(parkingSize).fill(null);
    const level3 = new Array(parkingSize).fill(null);

    this.slots.push(level1, level2, level3);
    console.log(this.slots[1]);
  }
}

const levelOne = new SlotCl(20);
