function zipStrings(strA, strB) {
let result = "";
let maxLength = Math.max(strA.length, strB.length);   // suchen max length
  for (let i=0; i <maxLength; i++) {
    if (i<strA.length) {  // check  gibt es noch ein Buchstabe in strA
      result += strA[i];   // addiere Buchstabe von strA
    }
    if (i<strB.length) {  // check  gibt es noch ein Buchstabe in strB
      result += strB[i];   // addiere Buchstabe von strB
    }


  }

  return result;

  // Your Code here
}
