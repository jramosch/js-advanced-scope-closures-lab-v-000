function produceDrivingRange(range) {
  return function(block1, block2) {
    let blockRange = Math.abs(parseInt(block1, 10) - parseInt(block2, 10));
    if (blockRange < range) {
      return `within range by ${range - blockRange}`;
    } else {
      return `${blockRange - range} blocks out of range`
    };
  };
}

function produceTipCalculator(tip) {
  return function(subtotal) {
    return subtotal * tip;
  };
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
