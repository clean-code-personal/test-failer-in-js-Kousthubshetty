const {expect} = require('chai');

function size(cms) {
    if (cms>0 && cms < 38) {
        return 'S';
    } else if (cms >= 38 && cms < 42) {
        return 'M';
    } else if (cms >= 42 && cms <= 142){
        return 'L';
    }else{
        return 'Invalid cms';
    }
}

expect(size(37)).equals('S');
expect(size(40)).equals('M');
expect(size(43)).equals('L');

expect(size(38)).equals('M');
expect(size(-1)).equals('Invalid cms');
expect(size(143)).equals('Invalid cms');

console.log('All is well');
