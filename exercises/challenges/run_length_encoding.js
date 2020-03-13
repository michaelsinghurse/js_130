// run_length_encoding.js

function decode(code) {
  if (!code) return '';
  
  let run = '';
  let countString = '';
  
  for (let index = 0; index < code.length; index += 1) {
    let char = code[index];
    
    if (Number.isNaN(Number(char)) || char === ' ') {
      run += char.repeat(countString === '' ? 1 : Number(countString));
      countString = '';
    } else {
      countString += char;
    }
  }
  
  return run;
}

function encode(run) {
  if (!run) return '';
  
  let code = '';
  let sequence = '';
  
  function addSequenceToCode() {
    code += `${sequence.length === 1 ? '' : sequence.length}${sequence[0]}`;
  }
  
  for (let index = 0; index < run.length; index += 1) {
    let char = run[index];
    
    if (index === 0) {
      sequence = char;
    } else if (char === sequence[0]) {
      sequence += char;
    } else {
      addSequenceToCode();
      sequence = char;
    }
    
    if (index === run.length - 1) {
      addSequenceToCode();
    }
  }
  
  return code;
}

module.exports = {
  encode,
  decode
};