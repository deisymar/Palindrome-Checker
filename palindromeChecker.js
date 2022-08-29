function palindrome(str) {
    let regex= /[^a-z0-9]/ig;
    let strLower= str.toLowerCase().replace(regex,'');
    let strReverse= strLower.split('').reverse().join('');
    //console.log(strReverse===strLower);
    return (strReverse===strLower);
  }
  
  //palindrome("Eye");
  palindrome("2_A3*3#A2");