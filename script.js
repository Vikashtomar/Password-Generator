 // Lets start making password generator

     function lowerChar()
     {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
     }

     function upperChar()
     {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
     }
     function randomNum()
     {
        return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
     }
     function getRandomSymbol(){
        const symbol = "!@#$%^&*()[]"
        return symbol[Math.floor(Math.random() * symbol.length )]
     }
    // console.log(getRandomSymbol())
    const lengthEl = document.getElementById("length")
    const uppercaseEl = document.getElementById("uppercase")
    const lowercaseEl = document.getElementById("lowercase")
    const numberEl = document.getElementById("number")
    const symbolEl = document.getElementById("symbols")
    const generateEl = document.getElementById("generate")
    const clipboardEl = document.getElementById("clipboard")


    const randomFunc = {
        lower: lowerChar,
        upper: upperChar,
        number: randomNum,
        symbol: getRandomSymbol
    };


    generateEl.addEventListener("click",()=>{
        const length = Number(lengthEl.value);
        const hasLower = lowercaseEl.checked;
        const hasUpper = uppercaseEl.checked;
        const hasnumber = numberEl.checked;
        const hassymbol = symbolEl.checked;
        console.log( length, hasLower , hasUpper, hasnumber , hassymbol)

    })
