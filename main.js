const BASE_URL = "https://mongodb-and-postman-authentication.onrender.com";

console.log("Heyyy");

// elements
const postDiv = document.getElementById("posts");

window.onload = getAllPosts();

async function getAllPosts() {
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

getPosts();