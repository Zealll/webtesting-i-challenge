module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item >= 20) {
    return 20
  }
  return item + 1;
}

function fail(item) {
  if(item.enhancement < 15) {
    return item.durability - 5
  } else if (item.enhancement == 15 || item.enhancement == 16) {
    return item.durability - 10
  } else if (item.enhancement > 16) {
    return item.durability - 1
  }
}

function repair(item) {
  if(item.durability !== 100) {
    return 100
  };
}

function get(item) {
  return { ...item };
}
