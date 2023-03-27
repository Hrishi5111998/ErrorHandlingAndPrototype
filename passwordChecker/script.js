class User{

    constructor(username, password){
     this.username = username
     this.storedPassword = password
    }
    get password(){
        return this.storedPassword.replace(/./g, '*')
    }
    set password(newPassword){
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        if(passwordRegex.test(newPassword)){
            this.storedPassword = newPassword
        }else{
          console.error("Password must be at least 8 characters long and contain at least one number and one uppercase letter")
        }
    }
}

const user = new User('username', 'myPassword')
console.log(user.password);
// user.password = 'newPas'
// console.log(user.password);
