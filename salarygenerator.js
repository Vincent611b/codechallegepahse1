const readline = require('readline');

const Salary = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Salary.question('Enter basic salary: ', (basicSalary) => {
Salary.question('Enter benefits: ', (benefits) => {
    // Convert input strings to numbers
    basicSalary = parseFloat(basicSalary);
    benefits = parseFloat(benefits);

    // Tax calculation
    const taxRate = 0.3; // 30% tax rate
    const tax = (basicSalary + benefits) * taxRate;

    // NHIF deduction calculation
    const nhifRate = 0.05; // 5% NHIF rate
    const nhifDeductions = basicSalary * nhifRate;

    // NSSF deduction calculation
    const nssfRate = 0.06; // 6% NSSF rate
    const nssfDeductions = basicSalary * nssfRate;

    // Gross salary calculation
    const grossSalary = basicSalary + benefits;

    // Net salary calculation
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Output the results
    console.log(`Tax: ${tax}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Net Salary: ${netSalary}`);

    Salary.close();
  });
});
