function validateCPF(cpf: string): boolean {
    // Remove any non-digit characters from the CPF
    cpf = cpf.replace(/\D/g, '');
  
    // Check if the CPF length is 11 characters
    if (cpf.length !== 11) return false;
  
    // Check if all digits are the same (e.g., 000.000.000-00)
    if (/^(\d)\1{10}$/.test(cpf)) return false;
  
    // Calculate the first verification digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i);
    }
    let firstDigit = (sum * 10) % 11;
    if (firstDigit === 10) firstDigit = 0;
  
    // Check the first verification digit
    if (firstDigit !== parseInt(cpf[9])) return false;
  
    // Calculate the second verification digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf[i]) * (11 - i);
    }
    let secondDigit = (sum * 10) % 11;
    if (secondDigit === 10) secondDigit = 0;
  
    // Check the second verification digit
    return secondDigit === parseInt(cpf[10]);
}

export {validateCPF}