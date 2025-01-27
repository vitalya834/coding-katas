function filterApiData(apiData, mandatoryKeys) {
    // massiv       
  let result = [];

  // jaden obj in  apiData
  for (let i = 0; i < apiData.length; i++) {
      const obj = apiData[i]; //   this obj 
      let hasAllKeys = true; //   thisi  is key       gibt es 

      //  jeden key   aus  mandatoryKeys
      for (let j = 0; j < mandatoryKeys.length; j++) {
          const key = mandatoryKeys[j]; // this is key

          //   if key is keine  
          if (!(key in obj)) {
              hasAllKeys = false; //  select  flage  false
              break;  
          }
      }

      // add  key  
      if (hasAllKeys) {
          result.push(obj);
      }
  }

  return result; // !!
}
