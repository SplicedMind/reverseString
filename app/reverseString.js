module.exports = {
 
   reverseString: function(arg) {
     var reversearg = '';
     //Creates a reverse of the argument
     for (var i = 1; i <= arg.length; ++i)
     {
         reversearg += arg.charAt(arg.length - i);
     }
     //Check if the arg is empty and return null if it is
     if(arg.length === 0)
     {
      return null;
     }
     //Check if the arg is a palindrome and return true if it is
     else if(arg === reversearg)
     {
      return true;
     }
     //Return the reverse of the argument if argument is neither null nor palindrome
     else
     {
      return reversearg;
     }
   }
}
