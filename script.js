 // Lets start making password generator

     function lowerChar()
     {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
     }

     function capitalChar()
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
    console.log(getRandomSymbol())