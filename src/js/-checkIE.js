  function checkIE(){
    if (/MSIE 10/i.test(navigator.userAgent)) {
       return true;
    }
    if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
        return true;
    }
    if (/Edge\/\d./i.test(navigator.userAgent)){
       return true;
    }
    return false;
  }