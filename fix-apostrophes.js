const fs = require('fs');
const path = 'C:/Users/hp/Documents/PROJETS/eminencesinternationaales/i18n/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
let fixed = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Check if line is a single-quoted string (starts with ' and ends with ', or ',)
  if ((trimmed.startsWith("'") && trimmed.endsWith("',")) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    // Extract the inner content (without outer quotes)
    let inner = trimmed.slice(1, -1);
    if (trimmed.endsWith("',")) inner = trimmed.slice(1, -2);

    // Check if there are unescaped apostrophes
    // An apostrophe is unescaped if it's not preceded by backslash
    let newInner = '';
    for (let j = 0; j < inner.length; j++) {
      if (inner[j] === "'" && (j === 0 || inner[j-1] !== '\\')) {
        newInner += "\\'";
        fixed++;
      } else {
        newInner += inner[j];
      }
    }

    if (newInner !== inner) {
      // Reconstruct the line
      const prefix = line.substring(0, line.indexOf("'"));
      const suffix = trimmed.endsWith("',") ? "'," : "'";
      lines[i] = prefix + "'" + newInner + suffix;
    }
  }
}

if (fixed > 0) {
  content = lines.join('\n');
  fs.writeFileSync(path, content, 'utf8');
  console.log('Fixed', fixed, 'unescaped apostrophes');
} else {
  console.log('No unescaped apostrophes found');
}