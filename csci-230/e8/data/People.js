export class People {
    #name
    #address
    #phone_number
    #email
    #date_of_birth
    #gender

    constructor(name, address, phone_num, email, dob, gender){
        this.#name = name
        this.#address = address
        this.#phone_number = phone_num
        this.#email = email
        this.#date_of_birth = dob
        this.#gender = gender
    }

    get name() {
        return this.#name;
    }

    get address() {
        return this.#address;
    }

    get phoneNumber() {
        return this.#phone_number;
    }

    get email() {
        return this.#email;
    }

    get dateOfBirth() {
        return this.#date_of_birth;
    }

    get gender() {
        return this.#gender;
    }
}