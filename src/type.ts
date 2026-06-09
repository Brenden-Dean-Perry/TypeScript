
// Type example in TypeScript.
// Types are used to define the shape of an object, function, or any other data structure. They help in providing type safety and better code readability.
type Person = {
    id: number;
    name: string;
    email: string;

    // Optional property
    age?: number;

    // Method to display person's information
    displayInfo(): void;

    // Method to update person's email
    updateEmail(newEmail: string): void;
};
