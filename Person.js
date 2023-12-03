class Person {
    constructor(firstName, lastName, age, email, phn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phone = phn;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getContactInfo() {
        return `Email: ${this.email} Phone No: ${this.phone}`;
    }
}

// Example usage
const personDet = new Person("Kausik", "M", 23, "kausik@example.com", 7656765453);

// Accessing properties
console.log(personDet.firstName); // Output: John
console.log(personDet.age); // Output: 30

// Using methods
console.log(personDet.getFullName()); // Output: John Doe
console.log(personDet.getContactInfo()); // Output: Email: john.doe@example.com
