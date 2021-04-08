document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchMessages(); // fetches all existing messages and renders them to DOM
    document.getElementById('user-form').addEventListener('submit', handleNewUser);
    document.getElementById('post-form').addEventListener('submit', handleNewPost);
    // create new user
    // create post
    // delete post
})

const BASE_URL = "google.com";

function fetchMessages() {
    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(messages => {
        for (const message of messages) {
            let m = new Post(message.title, message.content, message.userId);
            m.renderMessage();
        }
    })
}

// function fetchUsers() {
//     fetch(BASE_URL)
//     .then(resp => resp.json())
//     .then(users => {

//     })
// }

function createForm() {
    let userForm = document.getElementById('user-form');
    userForm.innerHTML += 
    `
    <form>
        <label for="username">Username:</label>
        <input type="text" name="username" id="username">
        
        <label for="email">Email:</label>
        <input type="text" name="email" id="email">

        <input type="submit" value="Submit" id="user-form-submit">
    </form>
    `
}

function handleNewUser(e) {
    e.preventDefault();
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value

    let user = {
        username: userName,
        email: email
    }

    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user => {
        let u = new User(user.id, user.username, user.email);
    });
}

function handleNewPost(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    let post = {
        title: title,
        content: content,
        user_id: "???"
    }

    fetch('http://localhost:3000/posts', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    .then(resp => resp.json())
    .then(post => {
        let p = new User(user.id, user.username, user.email);
    });
}
