document.addEventListener("DOMContentLoaded", () => {
    fetchMessages(); // fetches all existing messages and renders them to DOM
    createSearchInput();
    document.getElementById('post-form').addEventListener('submit', handleNewPost);
})

function fetchMessages() {
    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(messages => {
        for (const message of messages) {
            let m = new Post(message.id, message.title, message.content, message.created_at);
            m.renderMessage();
            if (message.comments) {
                let comments = message.comments;
                for (let element of comments) {
                    let c = new Comment(element.id, m.id, element.content, element.created_at);
                    c.renderComment();
                }
            } 
        }
    })
}

function handlePostComment(e) {
    e.preventDefault();
    console.log('form submitted')
    let content = e.target.firstElementChild.value;

    if (content !== "") {
        let idArr = e.target.id.split("-");
        let postId = parseFloat(idArr[2]);
        let comment = {
            post_id: postId,
            content
        }
        e.target.reset()
        fetch('http://localhost:3000/comments', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(resp => {
            if (!resp.ok){
                return resp.json().then(e => {throw(e)})
            }
            return resp.json()})
        .then(comment => {
            let c = new Comment(comment.id, comment.post_id, comment.content, comment.created_at);
            c.renderComment();
        })
        .catch(e => {
            console.error(e)
        });
    }

    else {
        return alert("You didn't enter a comment!");
    }

    let idArr = e.target.id.split("-");
    let postId = parseFloat(idArr[2]);
    let comment = {
        post_id: postId,
        content
    }
    e.target.reset()
    fetch('http://localhost:3000/comments', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
    .then(resp => {
        if (!resp.ok){
            return resp.json().then(e => {throw(e)})
        }
        return resp.json()})
    .then(comment => {
        let c = new Comment(comment.id, comment.post_id, comment.content, comment.created_at);
        c.renderComment();
    })
    .catch(e => {
        console.error(e)
    });
}

function handleNewPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;

    let content = document.getElementById('content').value;

    if (title !== "" || content !== "" ) {
        let post = {
            title: title,
            content: content
        }
    
        e.target.reset();
        
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
        
            let p = new Post(post.id, post.title, post.content, post.created_at);
            p.renderMessage();
        });
    }

    else {
        return alert("You did not enter a title or content.")
    }
    
}

function handleAdminDelete(e) {
    e.preventDefault();
    let el = e.target.parentElement.parentElement;
    let postIdArr = e.target.parentElement.parentElement.parentElement.id.split("-");
    let postId = parseFloat(postIdArr[1]);
    let commentIdArr = e.target.parentElement.id.split("-");
    let commentId = parseFloat(commentIdArr[1]);

    fetch(`http://localhost:3000/comments/${commentId}`, {
        method: "DELETE"
    });
    el.remove();
}

function createSearchInput() {
    let div = document.createElement('div');
    let input = document.createElement('input');
    input.id = "search-input";
    let button = document.createElement('button');
    button.setAttribute("type", "submit");
    button.innerHTML = "Submit";
    button.addEventListener("click", handleSearchInput);
    div.appendChild(input);
    div.appendChild(button);
    document.body.appendChild(div);
}

function handleSearchInput() {

    let userSearch = document.getElementById('search-input').value; 
    let messageBoard = document.getElementById('message-board-container');

    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(messages => {
        messageBoard.innerHTML = "";
        for (const message of messages) {
            if (message.title.includes(userSearch)) {
                let m = new Post(message.id, message.title, message.content, message.created_at);
                m.renderMessage();
                if (message.comments) {
                    let comments = message.comments;
                    for (let element of comments) {
                        let c = new Comment(element.id, m.id, element.content, element.created_at);
                        c.renderComment();
                    }
                }
            }
        }
    })

}
