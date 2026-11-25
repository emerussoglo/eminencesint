import fs from 'fs';
const path = 'C:/Users/hp/Documents/PROJETS/eminencesinternationaales/i18n/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
let fixed = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  const originalLine = line;

  // Replace all unescaped apostrophes in single-quoted strings in this line
  // We need to be careful to only replace apostrophes inside '...' not inside "..."
  // Strategy: find all single-quoted string literals and fix apostrophes inside them

  let newLine = '';
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let escapeNext = false;

  for (let j = 0; j < line.length; j++) {
    const ch = line[j];
    const nextCh = line[j+1] || '';

    if (escapeNext) {
      newLine += ch;
      escapeNext = false;
      continue;
    }

    if (ch === '\\') {
      newLine += ch;
      escapeNext = true;
      continue;
    }

    if (ch === "'" && !inDoubleQuote) {
      inSingleQuote = !inSingleQuote;
      newLine += ch;
    } else if (ch === '"' && !inSingleQuote) {
      inDoubleQuote = !inDoubleQuote;
      newLine += ch;
    } else if (ch === "'" && inSingleQuote && !inDoubleQuote) {
      // This is an apostrophe inside a single-quoted string - escape it
      newLine += "\\'";
      fixed++;
    } else {
      newLine += ch;
    }
  }

  lines[i] = newLine;
}

if (fixed > 0) {
  content = lines.join('\n');
  fs.writeFileSync(path, content, 'utf8');
  console.log('Fixed', fixed, 'unescaped apostrophes');
} else {
  console.log('No unescaped apostrophes found');
}