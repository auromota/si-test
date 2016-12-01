function calculateSalary(salary) {
    let inss = calculateINSS(salary);
    let irpf = calculateIRPF(salary - inss);
    let liquid = salary - inss - irpf;
    var response = {
        inss: inss,
        irpf: irpf,
        liquid: liquid
    };
    return response;
}

function calculateIRPF(salary) {
    if (salary < 1903.98) {
        return 0;
    }
    if (salary < 2826.65) {
        return salary * 0.075 - 142.80;
    }
    if (salary < 3751.05) {
        return salary * 0.15 - 354.80;
    }
    if (salary < 4664.68) {
        return salary * 0.225 - 636.13;
    }
    return salary * 0.275 - 869.36;
}

function calculateINSS(salary) {
    if (salary < 1399.12) {
        return salary * 0.08;
    }
    if (salary < 2331.88) {
        return salary * 0.09;
    }
    if (salary < 4663.75) {
        return salary * 0.11;
    }
    return 513.02;
}

module.exports = calculateSalary;