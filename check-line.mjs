import fs from 'fs';
const path = 'C:/Users/hp/Documents/PROJETS/eminencesinternationaales/i18n/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
const line = lines[676]; // line 677
console.log('Line 677:', line);
console.log('Trimmed:', line.trim());
console.log('Starts with single quote:', line.trim().startsWith("'"));
console.log('Ends with \",:', line.trim().endsWith("',"));
console.log('Ends with single quote:', line.trim().endsWith("'"));

// Check for apostrophes
const trimmed = line.trim();
if (trimmed.startsWith("'")) {
  const inner = trimmed.slice(1, -2); // remove ' and ',
  console.log('Inner:', inner);
  for (let j = 0; j < inner.length; j++) {
    if (inner[j] === "'") {
      console.log('Found apostrophe at pos', j, 'prev char:', inner[j-1]);
    }
  }
}