(function () {
    var bt = document.getElementById('calc');
    bt.onclick = function () {
        let salary = getSalary();
        if (salary) {
            getData(salary);
        } else {
            alert('Salário inválido.');
        }
    };

    function getSalary() {
        let input = document.getElementById('salary');
        return parseFloat(input.value);
    }

    function getData(salary) {
        $.ajax({
            method: 'GET',
            url: '/calculate?salary=' + salary
        }).done(data => {
            printData(data);
        });
    }

    function printData(data) {
        printINSS(data.inss.toFixed(2));
        printIRPF(data.irpf.toFixed(2));
        printLiquid(data.liquid.toFixed(2));
    }

    function printINSS(inss) {
        var span = document.getElementById('inss');
        span.innerHTML = inss;
    }

    function printIRPF(irpf) {
        var span = document.getElementById('irpf');
        span.innerHTML = irpf;
    }

    function printLiquid(liquid) {
        var span = document.getElementById('liquidSalary');
        span.innerHTML = liquid;
    }
})();

