import fs from 'fs';
const path = 'C:/Users/hp/Documents/PROJETS/eminencesinternationaales/i18n/translations.ts';
let content = fs.readFileSync(path, 'utf8');

// This is a TypeScript file with object literals.
// String values are in single quotes: key: 'value', or 'value',
// A string ends at a ' followed by: , } ] ) or end of line (with whitespace)
// An apostrophe inside a string is a ' NOT followed by those terminators

let result = '';
let i = 0;
let fixed = 0;

while (i < content.length) {
  const ch = content[i];

  // Look for single-quoted string start
  if (ch === "'") {
    // Check if this is a string start (preceded by :, =, (, [, {, ,, or whitespace at start of value)
    // Actually, simpler: we're at a ', let's find the matching end quote
    // But we need to handle escaped quotes

    // Start of a single-quoted string
    let j = i + 1;
    let inString = true;
    let escapeNext = false;

    while (j < content.length && inString) {
      const c = content[j];
      if (escapeNext) {
        escapeNext = false;
      } else if (c === '\\') {
        escapeNext = true;
      } else if (c === "'") {
        // Potential end of string
        // Check what comes after (skipping whitespace)
        let k = j + 1;
        while (k < content.length && /\s/.test(content[k])) k++;

        const nextChar = k < content.length ? content[k] : '';

        // String ends if followed by , } ] ) or end of file
        if (nextChar === ',' || nextChar === '}' || nextChar === ']' || nextChar === ')' || nextChar === '' || nextChar === ';') {
          inString = false;
        } else {
          // This ' is an apostrophe inside the string - needs escaping
          // We'll handle this by marking it
        }
      }
      j++;
    }

    // Now we know the string spans from i to j-1
    // Process this string content, escaping apostrophes
    result += "'"; // opening quote
    let stringContent = content.substring(i+1, j-1);

    // Escape unescaped apostrophes in the content
    let newContent = '';
    for (let k = 0; k < stringContent.length; k++) {
      if (stringContent[k] === "'" && (k === 0 || stringContent[k-1] !== '\\')) {
        newContent += "\\'";
        fixed++;
      } else {
        newContent += stringContent[k];
      }
    }

    result += newContent;
    result += "'"; // closing quote

    // Add any whitespace and the terminator
    let k = j;
    while (k < content.length && /\s/.test(content[k])) {
      result += content[k];
      k++;
    }
    if (k < content.length && (content[k] === ',' || content[k] === '}' || content[k] === ']' || content[k] === ')' || content[k] === ';')) {
      result += content[k];
      k++;
    }

    i = k;
  } else {
    result += ch;
    i++;
  }
}

if (fixed > 0) {
  fs.writeFileSync(path, result, 'utf8');
  console.log('Fixed', fixed, 'unescaped apostrophes');
} else {
  console.log('No unescaped apostrophes found');
}