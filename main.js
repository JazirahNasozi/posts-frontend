const BASE_URL = "https://mongodb-and-postman-authentication.onrender.com";

// elements

const postDiv = document.getElementById("posts");

async function getPosts() {
    const response = await fetch(`${BASE_URL}/post`);
    const data = await response.json();

    console.log(data)
    postDiv.innerHTML = data.post.map(post => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.message}</p>
        </div>
    `).join("");
}