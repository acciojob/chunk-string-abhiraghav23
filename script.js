function stringChop(str, size) {
  // Convert the size to a number (it may be entered as a string)
  size = Number(size);

  // Check if the input string is null, empty, or invalid size
  if (!str || size <= 0) {
    return [];
  }

  const result = [];

  // Loop through the string, taking chunks of 'size' length
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

