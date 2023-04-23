let str="madam";

let rev="";

for(let i=str.length-1;i>=0;i++)
{
  rev=rev+str[i];
}
if(rev==str)
  console.log("It is a Palindrome");
else
  console.log("It is not a Palindrome");
