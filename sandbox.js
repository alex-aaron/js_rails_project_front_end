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
        //take in object in function and render to dom
    });
}