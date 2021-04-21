class Comment {
    constructor(id, postId, content, createdAt) {
        this.id = id;
        this.postId = postId;
        this.content = content;
        this.createdAt = createdAt;
    }

    renderComment() {
        let messageDiv = document.getElementById(`message-${this.postId}`);
        let div = document.createElement('div');
        let br = document.createElement('br');
        div.appendChild(br);
        let commentDiv = document.createElement('div');
        commentDiv.setAttribute("class", "comment-container");
        commentDiv.id = `comment-${this.id}`;
        let postedDate = this.createdAt;
        let postedDateStr = postedDate.toString();
        let date = new Date(postedDateStr);
        commentDiv.innerHTML = `
            <p>${this.content}</p>
            <p class="comment-posted-date"><i>${date}</i></p>
        `;
        let button = document.createElement('button');
        button.setAttribute("type", "submit");
        button.innerHTML = 'Admin Delete';
        button.addEventListener('click', handleAdminDelete);
        commentDiv.appendChild(button);
        div.appendChild(commentDiv);
        // div.innerHTML = 
        // `
        // <br>
        // <div class="comment-container">
        //     <p>${this.content}</p>
        // </div>
        // `
        messageDiv.append(div);
    }
}