/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let i=0; i<preferences.length; i++){
   let j = preferences[i];
   let k = preferences[j-1];
   if (preferences[k-1]==i+1)
   counter++; 
  }
   return (Math.floor(counter/3));
};

