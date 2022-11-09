function sumStr(a,b) {
    if (a == "" && b == "") {
      return '0';
    } else if (a == "") {
      return b + '';
    } else if (b == "") {
      return a + '';
    } else {
      return parseInt(a) + parseInt(b) + '';
    }
  }