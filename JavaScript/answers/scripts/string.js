// String
// 1. Write a JavaScript program to create a new string adding "Hello" in front of a given string. If the given string begins with "Hello" then return the original string.
function string_check(str) {
    if (str === null || str === undefined || str.substring(0, 2) === 'Hello') {
        return str;
    }
    return "Hello" + str;
}

console.log(string_check("Hello World!"));
console.log(string_check("World!"));


// 2. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
function remove_character(str, characterPosition) {
    part1 = str.substring(0, characterPosition);
    part2 = str.substring(characterPosition + 1, str.length);
    return (part1 + part2);
}

console.log(remove_character("Hello World", 0));
console.log(remove_character("Hello World", 3));
console.log(remove_character("Hello World", 5));

// 3. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
function front_back(str) {
    first = str.substring(0, 1);
    return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));