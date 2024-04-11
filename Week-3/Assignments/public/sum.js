
document.getElementById('submitButton').addEventListener('click', function() {
    const inputNumber = document.getElementById('inputNumber').value;

    fetch(`http://localhost:3000/data/?number=${inputNumber}`)
    .catch(error => {
        console.error(error);
    });
});