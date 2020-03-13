// protein_translation.js

const CODON_TO_ACID = {
  AUG: "Methionine",
  UUU: "Phenylalanine", 
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine", 
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP", 
  UGA: "STOP", 
};

function translate(rna) {
  if (!rna) return [];
  
  const CODON_LENGTH = 3;
  
  let proteins = [];
  
  while (rna.length > 0) {
    let codon = rna.slice(0, CODON_LENGTH);
    rna = rna.slice(CODON_LENGTH);
    
    let protein = CODON_TO_ACID[codon];
    
    if (!protein) {
      throw new Error("Invalid codon");
    } else if (protein === "STOP") {
      break;
    } else {
      proteins.push(protein);
    }
  }
  
  return proteins;
}

module.exports = translate;
