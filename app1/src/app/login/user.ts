export class User {
    constructor(
        public name: string,
        public password: string,
        public remember: boolean
    ){
        this.name = name;
        this.password = password;
        this.remember = remember;
    }
}
