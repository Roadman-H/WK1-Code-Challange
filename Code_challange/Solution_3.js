function calculatePAYE(income) {
    let tax = 0;
    if (income <= 24000) {
        tax = 0;
    } else if (income <= 40000) {
        tax = (income - 24000) * 0.1;
    } else if (income <= 60000) {
        tax = (16000 * 0.1) + (income - 40000) * 0.15;
    } else if (income <= 80000) {
        tax = (16000 * 0.1) + (20000 * 0.15) + (income - 60000) * 0.2;
    } else if (income <= 120000) {
        tax = (16000 * 0.1) + (20000 * 0.15) + (20000 * 0.2) + (income - 80000) * 0.25;
    } else {
        tax = (16000 * 0.1) + (20000 * 0.15) + (20000 * 0.2) + (40000 * 0.25) + (income - 120000) * 0.3;
    }
    return tax;
}

function calculateNHIF(salary) {
    let nhif = 0;
    if (salary <= 5999) {
        nhif = 150;
    } else if (salary <= 7999) {
        nhif = 300;
    } else if (salary <= 11999) {
        nhif = 400;
    } else if (salary <= 14999) {
        nhif = 500;
    } else if (salary <= 19999) {
        nhif = 600;
    } else if (salary <= 24999) {
        nhif = 750;
    } else if (salary <= 29999) {
        nhif = 850;
    } else if (salary <= 34999) {
        nhif = 900;
    } else if (salary <= 39999) {
        nhif = 950;
    } else if (salary <= 44999) {
        nhif = 1000;
    } else if (salary <= 49999) {
        nhif = 1100;
    } else if (salary <= 59999) {
        nhif = 1200;
    } else if (salary <= 69999) {
        nhif = 1300;
    } else if (salary <= 79999) {
        nhif = 1400;
    } else if (salary <= 89999) {
        nhif = 1500;
    } else {
        nhif = 1700;
    }
    return nhif;
}

function calculateNSSF(salary) {
    const nssfRate = 0.06;
    return salary * nssfRate;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    const tax = calculatePAYE(grossSalary);

    const nhif = calculateNHIF(grossSalary);

    const nssf = calculateNSSF(basicSalary);

    const netSalary = grossSalary - tax - nhif - nssf;

    return {
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}

const basicSalary = 50000;
const benefits = 10000;

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Tax (PAYE):", salaryDetails.tax);
console.log("NHIF Deductions:", salaryDetails.nhif);
console.log("NSSF Deductions:", salaryDetails.nssf);
console.log("Net Salary:", salaryDetails.netSalary);