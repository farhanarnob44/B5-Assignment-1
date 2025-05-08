## Explain the difference between any, unknown and never types in TypeScript.

=> "any" , "unknown" and "never" types has diiferenet roles in typescript. 

1. Any: This type allows any type which have no restricttions. This is very much flexible which can be used at the time of convertion of typescript to javascript. It is pretty much risky beacause it disables type checking. Typescript will not catch errors.

2. Unknown: This is unknown type which requires checks before use. If we don't know the type we should use it. It is safer than any because it checks type beafore usage.

3. Never: Indicates value that should never occur. It is used for error error throwing functions. It helps to catch impossible cases.

## Provide an example of using union and intersection types in TypeScript.

=> 
1. Union Types: A union type means a value can be one of multiple types. It allows flexibility. It is usefull data can be in different forms. In example: data can be ID/Number/String.

function printId(id: string | number) {
    console.log("ID:", id);
}

printId(101);          // number
printId("A102");       // string

2. Intersection Types : It means a value must have All the properties from multiple types combined. It allows us to combine multiple types into one.

type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type EmployeeProfile = Person & Employee;

const emp: EmployeeProfile = {
    name: "Alice",
    employeeId: 1234,
};

console.log(emp);



