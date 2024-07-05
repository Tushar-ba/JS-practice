const input = document.getElementById("input")

function reverse (str){
  return  str.split("").reverse().join("")
};

function checking(){
    const value = input.value
    const reversed = reverse(value);
    value === reversed ? alert("nice palin"):alert("nioce try kid")
}