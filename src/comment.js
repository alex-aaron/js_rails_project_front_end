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
        div.innerHTML = 
        `
        <br>
        <div class="comment-container">
            <p>${this.content}</p>
        </div>
        `
        messageDiv.append(div);
    }
}