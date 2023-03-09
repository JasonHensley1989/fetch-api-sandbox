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
            let output = '<h2 class="mb-4">Users</h2>';
            data.forEach((user) => {
                output += `
                    <ul class="list-group mb-4"> 
                        <li class="list-group-item mt-1">ID: ${user.id}</li>
                        <li class="list-group-item mt-1">Name: ${user.name}</li>
                        <li class="list-group-item mt-1">Email: ${user.email}</li>
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
            let output = "<h2 class='mb-4'>Posts</h2>";
            data.forEach(post => {
                output += `
                    <div class="card card-body mb-3">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
            })
            document.getElementById('output').innerHTML = output;
        })
}

const addPost = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "Post",
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-type": 'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then(data => console.log(data))
}
// Event Listeners

document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);