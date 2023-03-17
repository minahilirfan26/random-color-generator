const getColor = () =>{
    //hex code
    const radomNumber = Math.floor(Math.random()* 15839248);
    const randomCode = "#" +radomNumber.toString(16);
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerHTML = randomCode;

    navigator.clipboard.writeText(randomCode)
}


//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
//initial call
getColor();
