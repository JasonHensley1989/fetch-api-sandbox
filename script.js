// This fetches a text file locally

const getText = () => {
    fetch('sample.txt')
        .then(res => res.text())
        .then(data => {
            document.getElementById('output').innerHTML = data
        })
        .catch(err => console.log("Error"))
}

// Fetches a local JSON file and converts to JS

const getUsers = () => {
    fetch('users.json')
        .then(res => res.json())
        .then(data => {
            let output = '<h2>Users</h2>';
            data.forEach((user) => {
                output += `
                    <ul> 
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
}
// Fetches a remote API and converts to JS

const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            let output = "<h2>Posts</h2>";
            data.forEach(post => {
                output += `
                    <div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
            })
            document.getElementById('output').innerHTML = output;
        })
}
// Event Listeners

document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getPosts').addEventListener('click', getPosts);