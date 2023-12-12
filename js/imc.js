const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura");
const btn = document.querySelector("form");
const p = document.querySelector("#paragrafo");
const tabl = [...document.querySelectorAll(".um")];

function categoria(result) {
tabl.map((e)=>{
    e.style.color="";
    e.style.backgroundColor="";
    e.style.borderRadius = '15px';

})    
    if (result < 18.5) {
        tabl[0].style.backgroundColor="red";
        tabl[0].style.color = "white";
        return '(Abaixo do Peso)';
    }
    if (result >= 18.5 && result <= 24.9) {
        tabl[1].style.backgroundColor="red";
        tabl[1].style.color = "white";
        return '(Peso Normal)';
    }
    if (result >= 25 && result <= 29.9) {
        tabl[2].style.backgroundColor="red";
        tabl[2].style.color = "white";
        return '(Sobrepeso)';

    }
    if (result >= 30 && result <= 34.9) {
        tabl[3].style.backgroundColor="red";
        tabl[3].style.color = "white";
        return '(Obesidade grau 1)';
    }
    if (result >= 35 && result <= 39.9) {
        tabl[4].style.backgroundColor="red";
        tabl[4].style.color = "white";
        return '(Obesidade grau 2)';
    } else {
        tabl[5].style.backgroundColor="red";
        tabl[5].style.color = "white";
        return '(Obesidade grau 3)';
    }

}

function pontoPeso() {
    if (peso.value.includes(",")) {
        const pesos = peso.value.replace(",", ".");
        console.log(pesos);
        return pesos;
    } else {
        return peso.value;
    }


}

function pontoAltura() {
    if (altura.value.includes(",")) {
        const alturas = altura.value.replace(",", ".");
        return alturas;
    } else {
        return altura.value;
    }
}


function calculoImc() {
    btn.addEventListener("submit", e => {
        console.log(peso.value)
        e.preventDefault();
        let pesoPonto = pontoPeso();
        let alturaPonto = pontoAltura();


        const numberPeso = parseFloat(pesoPonto);
        const numberAltura = parseFloat(alturaPonto);


        if (nan(numberPeso, numberAltura) || teste(alturaPonto, pesoPonto)) {
            p.innerHTML = "";
            p.style.backgroundColor = '';

        } else {
            const resultado = (numberPeso / (numberAltura ** 2));
            p.innerHTML = `Seu imc é ${resultado.toFixed(2)} ${categoria(resultado)}`;
            p.style.backgroundColor = 'var(--primary-color)';
            p.style.color = 'white';
            p.style.borderRadius = '15px';
        }
    });

}

function teste(alturaPonto, pesoPonto) {

    if (alturaPonto === "" || pesoPonto === "") {

        if (alturaPonto === "" && pesoPonto === "") {
            window.alert("Preencha os campos");
        } else {
            const vazio = (alturaPonto === "") ? window.alert("Preencha a altura ") : window.alert("Preencha a peso");
        }
        return true;
    }

    return false
}

function nan(numberPeso, numberAltura) {
    if (Number.isNaN(numberPeso) && Number.isNaN(numberAltura)) {
        console.log("entrou")
        window.alert("Campos inválidos");
        return true;

    }
    if (Number.isNaN(numberPeso) || Number.isNaN(numberAltura)) {
        const vazio = (Number.isNaN(numberAltura)) ? window.alert("Altura Inválida ") : window.alert("Peso inválido");
        return true;

    }
    if (numberPeso <= 25.5 || numberPeso > 400) {
        window.alert("Peso inválido");
        return true;

    }
    if (numberAltura > 2.50 || numberAltura < 1.10) {
        window.alert("Altura inválida");
        return true;
    }
    return false
}

calculoImc();