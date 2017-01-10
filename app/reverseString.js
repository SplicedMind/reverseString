module.exports = {
 
   reverseString: function(arg) {
     var reversearg = '';
     for (var i = 1; i <= arg.length; ++i)
     {
         reversearg += arg.charAt(arg.length - i);
     }
     if(arg.length === 0)
     {
      return null;
     }
     else if(arg === reversearg)
     {
      return true;
     }
     else
     {
      return reversearg;
     }
   }
}
