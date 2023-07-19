class UserSchema{
    constructor(){
        this.firstName='';
        this.lastName='';
        this.password='';
        this.email='';
        this.phone='';
    }
}

const User = new UserSchema();

User.firstName = 'John';
User.lastName = 'Cene';
User.password = '1234';
User.email = 'abc@gmail.com';
User.phone = '9876543210';