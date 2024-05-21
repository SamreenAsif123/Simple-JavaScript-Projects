// Temperature in Kelvin
const kelvin = 293;

// Convert Kelvin to Celsius
const celsius = kelvin - 273;

// Convert Celsius to Fahrenheit
const fahrenheit = celsius * (9 / 5) + 32;

// Convert Celsius to Newton
let newton = celsius * (33 / 100);

// Round down Newton value
newton = Math.floor(newton);

console.log(`Temperature in Celsius = ${celsius}`);
console.log(`Temperature in Fahrenheit = ${fahrenheit}`);
console.log(`Temperature in degrees Newton = ${newton}`);
