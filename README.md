# reverseString
A javascript project that returns the reverse of the string provided.

The reverseString function works by initiallizing a local variable, reversearg, which holds the reverse of the input string.
The input string is reversed by looping over and adding the the characters of the input string starting from the last character (this is achieved with .charAt(arg.length - i)) and concatinating it to the intitialized reversearg.

The input string and the reversearg is then compared to see if the iput string is a palindrome (in which case the input string and reversearg will be the same) and a value of 'true' is returned. If the input string is not a palindrome, the reversearg is returned instead.