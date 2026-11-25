import fs from 'fs';
const path = 'C:/Users/hp/Documents/PROJETS/eminencesinternationaales/i18n/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
let fixed = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Find single-quoted string values in key-value pairs
  // Pattern: key: 'value',  or key: 'value'
  // The value part starts with ' and ends with ' or ',
  const match = trimmed.match(/^(\w+:\s*)'(.*)'(,?)$/);
  if (match) {
    const prefix = match[1]; // "key: "
    const inner = match[2];  // the string content
    const suffix = match[3] ? "'," : "'";

    // Check if there are unescaped apostrophes
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
      lines[i] = line.replace(/'(.*)'(,?)$/, "'" + newInner + "'" + (match[3] ? "," : ""));
    }
  }
  // Also handle lines that start directly with ' (like array elements)
  else if ((trimmed.startsWith("'") && trimmed.endsWith("',")) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    // Extract the inner content (without outer quotes)
    let inner = trimmed.slice(1, -1);
    if (trimmed.endsWith("',")) inner = trimmed.slice(1, -2);

    // Check if there are unescaped apostrophes
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