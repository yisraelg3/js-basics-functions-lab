// Code your solution in this file!
function distanceFromHqInBlocks (destination) {
    const Hq = 42
    const distanceInBlocks = Math.abs(Hq - parseInt(destination));
    return distanceInBlocks;
}

function distanceFromHqInFeet (blocks) {
    const amountOfFeet = distanceFromHqInBlocks(blocks) * 264;
    return amountOfFeet;
}

function distanceTravelledInFeet (block1, block2) {
    const distanceInBlocks = Math.abs(parseInt(block1) - parseInt(block2));
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}

function calculatesFarePrice (block1, block2) {
    const distanceInFeet = distanceTravelledInFeet(block1, block2);
    if (distanceInFeet <= 400) {
        return 0;
    }  else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * 2 / 100);
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500 ) {
        return 25;
    } else if ( distanceInFeet > 2500) {
        return 'cannot travel that far';
    }
}