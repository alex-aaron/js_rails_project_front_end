
class Post {
    constructor(id, title, content, createdAt) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
    }

    //instance method to render posts to DOM
    renderMessage() {
        let messageBoard = document.getElementById("message-board-container");
        let div = document.createElement('div');
        let postedDate = this.createdAt;
        let postedDateStr = postedDate.toString();
        let date = new Date(postedDateStr);
        let button = document.createElement('button');
        button.innerHTML = 'Admin Delete';
        button.setAttribute("type", "submit");
        button.addEventListener('click', handleAdminDelete);
        div.setAttribute("class", "message-container");
        div.id = `message-${this.id}`;
        let messageDiv = document.createElement('div');
        messageDiv.setAttribute("class", "message");
        messageDiv.innerHTML = `
            <p class="message-title"><strong>${this.title}</strong></p>
            <p class="message-created-date">Posted: ${date}</p><br><hr>
            <p class="message-content">${this.content}</p>
        `;
        messageDiv.appendChild(button);
        div.appendChild(messageDiv);
        let br = document.createElement('br');
        div.appendChild(br);
        // div.innerHTML = 
        // `
        // <div class="message-container" id="message-${this.id}">
        //   <div class="message">
        //     <p class="message-title"><strong>${this.title}</strong></p>
        //     <p class="message-created-date">Posted: ${date}</p><br><hr>
        //     <p class="message-content">${this.content}</p>
        //   </div>
        // </div><br>
        let form = document.createElement('form');
        form.className = 'comment-form';
        form.id = `comment-form-${this.id}`
        form.innerHTML = 
        `
            <textarea class="comment-text-area" rows="2" cols="40" placeholder="Enter comment"></textarea><br>
            <input class="comment-submit" type="submit" value="Enter Comment"><br><br>
        `;
        //  form.addEventListener('submit', (e) => {
        //    e.preventDefault();
        //    console.log(e)
        //  });
        form.addEventListener('submit', handlePostComment)
        div.append(form);
        messageBoard.appendChild(div);

    }
}