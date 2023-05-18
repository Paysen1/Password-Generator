keyGen = {
    //declaring global variables within the keygen tag
    special: ["!", "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~" ],
    uppers: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    numbers: ["1","2","3","4","5","6","7","8","9"],
    lowers: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    characters: [],

    passwordLength: 0,
    validLength: false,
    validKeys: false,
    bSpecial: true,
    bUppers: true,
    bNumbers: true,
    bLowers: true,
    genPass: "",
    numbersExist: false,
    specialExist: false,
    lowerExist: false,
    upperExist: false,
    genSuccess: false,

    keyGenerator: function(){
        //set method function to loop genoration of the key
        this.passwordLength = 0
        this.validLength = false
        this.validKeys = false
        this.bSpecial = true
        this.bUppers = true
        this.bNumbers = true
        this.bLowers = true
        this.genSuccess = false
        //reastablishing the variables so the loop can see them in the function
        while(!this.validLength){
            this.passwordLength = prompt("Enter a desired password length between 8 and 128")
            if (this.passwordLength <= 128 && this.passwordLength >= 8){
                this.validLength = true
            }
            else{
                alert("Please enter a number between 8 and 128")
            }
        }
        //infinate loop that breaks once criteria is meet

        

        while(!this.validKeys){
            this.bUppers = confirm("Hey! Would you like uppercase letters?")
            this.bLowers = confirm("Hey! Would you like lowercase letters?")
            this.bSpecial = confirm("Hey! Would you like symbols?")
            this.bNumbers = confirm("Hey! Would you like numbers?")
            if (this.bUppers || this.bLowers || this.bSpecial || this.bNumbers){
                this.validKeys = true
                break
            }
            alert("Not possible, please put at least one keytype.")
        }
        //infinate loop that breaks once at least 1 key is true

        this.characters = []
        this.characters = this.numbers.concat(this.special)
        if(this.bSpecial) {
            this.characters = this.characters.concat(this.special)
        }
        if(this.bNumbers) {
            this.characters = this.characters.concat(this.numbers)
        }
        if(this.bUppers) {
            this.characters = this.characters.concat(this.uppers)
        }
        if(this.bLowers) {
            this.characters = this.characters.concat(this.lowers)
        }
        //series of if statments that concatinate different arrays based on selection.
        while(!this.genSuccess){
            for (index = 0; index < this.passwordLength; index++) {
                this.genPass += this.characters[Math.floor((Math.random()*this.characters.length))];
            }
            this.numbersExist = false
            this.specialExist = false
            this.lowerExist = false
            this.upperExist = false
            for (index = 0; index < this.genPass.length; index++) {
                if (this.numbers.includes(this.genPass[index])){
                    this.numbersExist = true
                }
                if (this.special.includes(this.genPass[index])){
                    this.specialExist = true
                }
                if (this.uppers.includes(this.genPass[index])){
                    this.upperExist = true
                }
                if (this.lowers.includes(this.genPass[index])){
                    this.lowerExist = true
                }
            }
            if ((this.numbersExist === this.bNumbers) && (this.specialExist === this.bSpecial) && (this.lowerExist === this.bLowers) && (this.upperExist === this.bUppers)){
                this.genSuccess = true
                break
            }
            this.genPass = ""
        }
        //very large infinate loop that breaks once then correct length/keys are genorated within the #password id
        document.getElementById("password").value=this.genPass
    }//adding genPass value to the id password if loop breaks
}