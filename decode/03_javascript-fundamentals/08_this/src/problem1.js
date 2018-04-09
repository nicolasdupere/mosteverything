'use strict';
function whatsMyAgeAgain() {
    // returns this.age unless this is not defined. If this is not defined, return 18
   if(this !== undefined) {
    return this.age
   }
    return 18;
}

module.exports = whatsMyAgeAgain;