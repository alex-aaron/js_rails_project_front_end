
class Post {
    constructor(id, title, content, createdAt) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
    }

    renderMessage() {
        let messageBoard = document.getElementById("message-board-container");
        let div = document.createElement('div');
        let postedDate = this.createdAt;
        let postedDateStr = postedDate.toString();
        let date = new Date(postedDateStr);
        div.setAttribute("class", "message-container");
        div.id = `message-${this.id}`;
        let messageDiv = document.createElement('div');
        messageDiv.setAttribute("class", "message");
        messageDiv.innerHTML = `
            <p class="message-title"><strong>${this.title}</strong></p>
            <p class="message-created-date">Posted: ${date}</p><br><hr>
            <p class="message-content">${this.content}</p>
        `;
        div.appendChild(messageDiv);
        let br = document.createElement('br');
        div.appendChild(br);
        let form = document.createElement('form');
        form.className = 'comment-form';
        form.id = `comment-form-${this.id}`
        form.innerHTML = 
        `
            <textarea class="comment-text-area" rows="2" cols="40" placeholder="Enter comment"></textarea><br>
            <input class="comment-submit" type="submit" value="Enter Comment"><br><br>
        `;
        form.addEventListener('submit', handlePostComment)
        div.append(form);
        messageBoard.appendChild(div);

    }
}