window.alert("salve salve")

document.getElementById('soma').addEventListener('click', function () {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    const somar = n1+n2
    const newElement = document.createElement('div');
    newElement.textContent = `O Valor da compra é: ${somar}`;
    document.body.appendChild(newElement);
});