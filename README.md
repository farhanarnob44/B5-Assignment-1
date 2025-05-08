## Explain the difference between any, unknown and never types in TypeScript.

=> "any" , "unknown" and "never" types has diiferenet roles in typescript. 

1. Any: This type allows any type which have no restricttions. This is very much flexible which can be used at the time of convertion of typescript to javascript. It is pretty much risky beacause it disables type checking. Typescript will not catch errors.

2. Unknown: This is unknown type which requires checks before use. If we don't know the type we should use it. It is safer than any because it checks type beafore usage.

3. Never: Indicates value that should never occur. It is used for error error throwing functions. It helps to catch impossible cases.



