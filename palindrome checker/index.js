const input = document.getElementById("input")

function reverse (str){
  return  str.split("").reverse().join("")

};

function checking(){
    const value = input.value
    const reversed = reverse(value);
    if(value === reversed ){
        alert ("this is palindrome")
    }else{
        alert("nice try kid")
    }
}