console.log("Connected");

document.getElementById('getText').addEventListener('click', getText);

function getText() {
    fetch('sample.txt')
        .then(res => res.text())
        .then(data => {
            document.getElementById('output').innerHTML = data
        })
        .catch(err => console.log("Error"))
}

