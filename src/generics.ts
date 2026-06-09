
// Generics example in TypeScript.
// Generics allow you to create reusable components that can work with any data type. They provide a way to create flexible and type-safe code.
function PrintArray<T>(arr: T[]): void {
	arr.forEach(element => {
		console.log(element);
	});
}