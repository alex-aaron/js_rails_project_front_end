class Post {
    constructor(title, content, userId) {
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    //instance method to render posts to DOM
    renderMessage() {
        let messageBoard = document.getElementById("message-board-container");
        messageBoard.innerHTML += 
        `
        <div class="message-container">
            <p class="message-title"><strong>${this.title}</strong></p><hr>
            <p class="message-content">${this.content}</p>
        </div><br>
        `
    }
}