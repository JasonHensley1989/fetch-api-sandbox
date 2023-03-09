const getText = () => {
    fetch('sample.txt')
        .then(res => res.text())
        .then(data => {
            document.getElementById('output').innerHTML = data
        })
        .catch(err => console.log("Error"))
}

const getUsers = () => {
    fetch('users.json')
        .then(res => res.json())
        .then(data => {
            let output = '<h2>Users</h2>';
            console.log(data);
        })
}

// Event Listeners

document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getText').addEventListener('click', getText);