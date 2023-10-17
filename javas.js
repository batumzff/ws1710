// function areAnagrams(str1, str2) {
//     const cleanedStr1 = cleanAndNormalize(str1);
//     const cleanedStr2 = cleanAndNormalize(str2);
//     if (cleanedStr1.length !== cleanedStr2.length) {
//       return false;
//     }
//     const sortedStr1 = sortString(cleanedStr1);
//     const sortedStr2 = sortString(cleanedStr2);
//     return sortedStr1 === sortedStr2;
//   }
//   function cleanAndNormalize(str) {
//     let cleanedStr = "";
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i].toLowerCase();
//       if (char !== "\t" && char !== "\n" && char !== "\r") {
//         cleanedStr += char;
//       }
//     }
//     return cleanedStr;
//   }
//   function sortString(str) {
//     return str.split("").sort().join("");
//   }
//   console.log(areAnagrams("ali", "silent"));

//   function kaldir(arr) {
//     const yeniKüme = [];
//     for (const item of arr) {
//       if (!yeniKüme.includes(item)) {
//         yeniKüme.push(item);
//       }
//     }
//     return yeniKüme;
//   }
  
//   const sayKümesi = [1, 2, 2, 3, 4, 4, 5];
//   const yeniKüme = kaldir(sayKümesi);

//   function kümeKesişim(arr1, arr2) {
//     const kesişim = [];
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//           kesişim.push(arr1[i]);
//           break; 
//         }
//       }
//     }
//     return kesişim;
//   }
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [3, 4, 5, 6, 7];
//   const sonuç = kümeKesişim(array1, array2);
//   console.log(sonuç);