function IsStartAndEndSame(str) {
    return str[0] === str[str.length - 1];
}

console.log(IsStartAndEndSame("hello")); // false
console.log(IsStartAndEndSame("helloh")); // true

// ** In Typescript **
// function IsStartAndEndSame(str: string): boolean {
//     return str[0] === str[str.length - 1];
//   }
  
