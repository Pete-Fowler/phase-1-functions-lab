function distanceFromHqInBlocks(street) {
  let blocks = street - 42;
  if(blocks <= 0) {
    blocks *= -1;
  }
  return blocks;
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(a, b) {
  let dist = (a - b) * 264;
  if(dist <= 0) {
    dist *= -1;
  }
  return dist;
}

function calculatesFarePrice(a, b) {
  const feet = distanceTravelledInFeet(a, b);
  if(feet < 400) {
      return 0;
  } else if(feet <= 2000) {
      return Math.round((.02 * feet - 8) * 100) / 100;
  } else if(feet < 2500) {
      return 25;
  } else {
    return 'cannot travel that far';
  }
}