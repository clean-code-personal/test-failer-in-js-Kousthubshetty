const {expect} = require('chai')

var colorPairs=[]
function printColorMap() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            let pairNumber = i * 5 + j
            let colorPair={}
            colorPair[pairNumber] = [majorColors[i],minorColors[j]]
            colorPairs.push(colorPair)
            console.log(`${pairNumber} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

result = printColorMap();
expect(result).equals(25);

let colorPair=[ 'Violet', 'Green' ]
expect(Object.values(colorPairs.find(obj => obj[23]))[0]).to.deep.equal(colorPair)

console.log('All is well');
