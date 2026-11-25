import fs from 'fs';
const path = 'C:/Users/hp/Documents/PROJETS/eminencesinternationaales/i18n/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
const line = lines[941]; // line 942
console.log('Line 942:', line);
console.log('Length:', line.length);

// Check each character
for (let j = 0; j < line.length; j++) {
  const ch = line[j];
  const code = ch.charCodeAt(0);
  if (code > 32 && code < 127 && ch !== ' ' || code > 127) {
    // Just print all non-trivial chars around the error
    if (j > 40 && j < 90) {
      console.log('Pos', j, ':', ch, '0x'+code.toString(16).toUpperCase().padStart(2,'0'));
    }
  }
}