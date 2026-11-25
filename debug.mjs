import fs from 'fs';
const path = 'C:/Users/hp/Documents/PROJETS/eminencesinternationaales/i18n/translations.ts';
let content = fs.readFileSync(path, 'utf8');

// Find the specific line
const lines = content.split('\n');
const line = lines[941]; // line 942

console.log('Line:', line);
console.log();

let inSingleQuote = false;
let inDoubleQuote = false;
let inTemplateLiteral = false;
let escapeNext = false;

for (let i = 0; i < line.length; i++) {
  const ch = line[i];
  const prevCh = i > 0 ? line[i-1] : '';

  if (escapeNext) {
    console.log(`Pos ${i}: ${ch} (escaped) - inSingle: ${inSingleQuote}, inDouble: ${inDoubleQuote}, inTemplate: ${inTemplateLiteral}`);
    escapeNext = false;
    continue;
  }

  if (ch === '\\') {
    console.log(`Pos ${i}: ${ch} (backslash) - inSingle: ${inSingleQuote}, inDouble: ${inDoubleQuote}, inTemplate: ${inTemplateLiteral}`);
    escapeNext = true;
    continue;
  }

  if (ch === "'" && !inDoubleQuote && !inTemplateLiteral) {
    if (inSingleQuote) {
      if (prevCh === '\\') {
        console.log(`Pos ${i}: ${ch} (escaped closing quote) - inSingle: ${inSingleQuote}`);
      } else {
        console.log(`Pos ${i}: ${ch} (closing quote) - inSingle: ${inSingleQuote} -> false`);
        inSingleQuote = false;
      }
    } else {
      console.log(`Pos ${i}: ${ch} (opening quote) - inSingle: ${inSingleQuote} -> true`);
      inSingleQuote = true;
    }
  } else if (ch === '"' && !inSingleQuote && !inTemplateLiteral) {
    if (inDoubleQuote) {
      if (prevCh === '\\') {
        console.log(`Pos ${i}: ${ch} (escaped closing dquote)`);
      } else {
        console.log(`Pos ${i}: ${ch} (closing dquote) - inDouble: ${inDoubleQuote} -> false`);
        inDoubleQuote = false;
      }
    } else {
      console.log(`Pos ${i}: ${ch} (opening dquote) - inDouble: ${inDoubleQuote} -> true`);
      inDoubleQuote = true;
    }
  } else if (ch === '`' && !inSingleQuote && !inDoubleQuote) {
    if (inTemplateLiteral) {
      if (prevCh === '\\') {
        console.log(`Pos ${i}: ${ch} (escaped closing backtick)`);
      } else {
        console.log(`Pos ${i}: ${ch} (closing backtick) - inTemplate: ${inTemplateLiteral} -> false`);
        inTemplateLiteral = false;
      }
    } else {
      console.log(`Pos ${i}: ${ch} (opening backtick) - inTemplate: ${inTemplateLiteral} -> true`);
      inTemplateLiteral = true;
    }
  } else if (ch === "'" && inSingleQuote && !inDoubleQuote && !inTemplateLiteral) {
    console.log(`Pos ${i}: ${ch} (APOSTROPHE INSIDE SINGLE QUOTE!) - inSingle: ${inSingleQuote}`);
  } else {
    if (ch === "'" || ch === '"' || ch === '`') {
      console.log(`Pos ${i}: ${ch} (other quote-like) - inSingle: ${inSingleQuote}, inDouble: ${inDoubleQuote}, inTemplate: ${inTemplateLiteral}`);
    }
  }
}