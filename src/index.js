module.exports = function check(str, bracketsConfig) {
  // your solution

    let array = bracketsConfig.map(elem => elem.join(""));
    for (let i = 0 ; i < array.length; i++) {

         if (str.includes(array[i])) {

          str = str.replace(array[i], "");
           i = -1;

         }
    }
    return (str) ? false : true;

  };
