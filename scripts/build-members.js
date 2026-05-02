/**
 * Build script for lab members
 * Scans member folders and generates index.js
 * 
 * Run: npm run build:members
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const membersDir = path.join(projectRoot, 'src/data/members');

const categories = ['pi', 'postdoc', 'phd', 'alumni'];

function getJsFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.js') && f !== 'index.js' && !f.startsWith('_'))
    .sort();
}

function toVarName(filename) {
  return filename
    .replace('.js', '')
    .split('-')
    .map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

let imports = [];
let exports = [];

for (const category of categories) {
  const dir = path.join(membersDir, category);
  const files = getJsFiles(dir);
  
  if (files.length === 0) continue;
  
  imports.push(`// ${category.toUpperCase()}`);
  
  const varNames = [];
  for (const file of files) {
    const varName = toVarName(file);
    imports.push(`import ${varName} from './${category}/${file}';`);
    varNames.push(varName);
  }
  
  imports.push('');
  
  if (category === 'pi') {
    exports.push(`export const PI = ${varNames[0]};`);
  } else {
    const exportName = {
      'postdoc': 'POSTDOCS',
      'phd': 'GRAD_STUDENTS', 
      'alumni': 'ALUMNI'
    }[category];
    exports.push(`export const ${exportName} = [${varNames.join(', ')}];`);
  }
}

exports.push(`export const STAFF = [];`);
exports.push('');
exports.push(`// Helpers`);
exports.push(`const allMembers = [PI, ...POSTDOCS, ...GRAD_STUDENTS, ...STAFF, ...ALUMNI];`);
exports.push(`export const MEMBERS = Object.fromEntries(allMembers.map(m => [m.id, m]));`);
exports.push(`export function getMemberById(id) { return MEMBERS[id] || null; }`);
exports.push(`export function getCurrentMembers() { return [PI, ...POSTDOCS, ...GRAD_STUDENTS, ...STAFF]; }`);

const output = `/**
 * AUTO-GENERATED - DO NOT EDIT
 * Run: npm run build:members
 */

${imports.join('\n')}
${exports.join('\n')}
`;

fs.writeFileSync(path.join(membersDir, 'index.js'), output);
console.log('✓ Generated src/data/members/index.js');
console.log(`  PI: ${getJsFiles(path.join(membersDir, 'pi')).length}`);
console.log(`  Postdocs: ${getJsFiles(path.join(membersDir, 'postdoc')).length}`);
console.log(`  PhD: ${getJsFiles(path.join(membersDir, 'phd')).length}`);
console.log(`  Alumni: ${getJsFiles(path.join(membersDir, 'alumni')).length}`);
