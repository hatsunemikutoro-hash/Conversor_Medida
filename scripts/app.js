const metros_input = document.getElementById("metros")
 
const saida = document.getElementById("saida")
const converterBtn = document.getElementById("btnConverter")

converterBtn.addEventListener("click", () => {
    if (metros_input.value) {
        if (metros_input.value < 0) {
            saida.innerText = "Numeros negativos nao são permitidas!"
        } else {
            let metros = metros_input.value
            let cm =  metros * 100
            saida.innerText = "Convertido para " + cm.toFixed(2) + " cm"
        }
        
    } else {
        saida.innerText = "Não pode estar vazio!"
    }
    
})