const inputMetros = document.getElementById("metros")
const btn = document.getElementById("btnConverter")
const saida = document.getElementById("saida")

btn.addEventListener("click", () => {
    const m = Number(inputMetros.value);

    if (!inputMetros.value || Number.isNaN(m)) {
        saida.textContent = "Informe um numero válido"
        return;
    }

    const cm = m * 100;
    const mm = m * 1000;

    saida.textContent = `${m} m = ${cm} = ${mm} mm`;
})