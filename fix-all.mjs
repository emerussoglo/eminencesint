import fs from 'fs';
const path = 'C:/Users/hp/Documents/PROJETS/eminencesinternationaales/i18n/translations.ts';
let content = fs.readFileSync(path, 'utf8');

let fixed = 0;

// Process the entire content character by character
// Track whether we're inside a single-quoted string literal (not double-quoted)
let result = '';
let inSingleQuote = false;
let inDoubleQuote = false;
let inTemplateLiteral = false;
let escapeNext = false;

for (let i = 0; i < content.length; i++) {
  const ch = content[i];
  const prevCh = i > 0 ? content[i-1] : '';

  if (escapeNext) {
    result += ch;
    escapeNext = false;
    continue;
  }

  if (ch === '\\') {
    result += ch;
    escapeNext = true;
    continue;
  }

  if (ch === "'" && !inDoubleQuote && !inTemplateLiteral) {
    if (inSingleQuote) {
      // Check if this is an escaped quote
      if (prevCh === '\\') {
        result += ch;
      } else {
        // Closing single quote
        inSingleQuote = false;
        result += ch;
      }
    } else {
      // Opening single quote
      inSingleQuote = true;
      result += ch;
    }
  } else if (ch === '"' && !inSingleQuote && !inTemplateLiteral) {
    if (inDoubleQuote) {
      if (prevCh === '\\') {
        result += ch;
      } else {
        inDoubleQuote = false;
        result += ch;
      }
    } else {
      inDoubleQuote = true;
      result += ch;
    }
  } else if (ch === '`' && !inSingleQuote && !inDoubleQuote) {
    if (inTemplateLiteral) {
      if (prevCh === '\\') {
        result += ch;
      } else {
        inTemplateLiteral = false;
        result += ch;
      }
    } else {
      inTemplateLiteral = true;
      result += ch;
    }
  } else if (ch === "'" && inSingleQuote && !inDoubleQuote && !inTemplateLiteral) {
    // This is an apostrophe inside a single-quoted string - escape it
    result += "\\'";
    fixed++;
  } else {
    result += ch;
  }
}

if (fixed > 0) {
  fs.writeFileSync(path, result, 'utf8');
  console.log('Fixed', fixed, 'unescaped apostrophes');
} else {
  console.log('No unescaped apostrophes found');
}