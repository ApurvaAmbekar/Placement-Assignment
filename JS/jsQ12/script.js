const POSTS_STORAGE_KEY_NAME = "POSTS_STORAGE_KEY";
const container = document.querySelector(".container");
const savePostEl = document.getElementById('save-post');
const closeSavePostBtn = document.getElementById("close-modal-btn");
let posts;

function addPost() {
    const title = document.getElementById("blog-title").value;
    const body = document.getElementById("blog-content").value;
    const id = posts.length + 1;
    const post = {
        id,
        title,
        body
    };
    posts.push(post);
    setLocalStorage(POSTS_STORAGE_KEY_NAME, posts);
    addCard(id, title, body);

    for (const elem of [title, body]) {
        elem.value = '';
    }
    closeSavePostBtn.click();
}

function addCard(id, title, body) {
    const card = document.createElement("div")
    card.className = "card";
    card.style.width = "18rem";
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${body}</p>
        </div>
    `;
    card.addEventListener('click', function () {
        window.open(`/posts/${id}`);
    });
    container.append(card);
}

function setLocalStorage(keyname, value) {
    // ...
    localStorage.setItem(keyname, JSON.stringify(value));
}

function getLocalStorage(keyname) {
    const value = localStorage.getItem(keyname) // string
    return JSON.parse(value); // object
}

async function getPostsFromSource() {
    const api_url = "https://jsonplaceholder.typicode.com/posts";

    const resp = await fetch(api_url);
    const jsonData = await resp.json();
    setLocalStorage(POSTS_STORAGE_KEY_NAME, jsonData);
    return jsonData;
}

async function loadPosts() {
    // first check if the posts are stored in localStorage

    if (getLocalStorage(POSTS_STORAGE_KEY_NAME)) {
        posts = await getLocalStorage(POSTS_STORAGE_KEY_NAME);
        console.log("loaded from storage");
    } else {
        console.log("calling apis");
        // call api provided and set it in localStorage
        posts = await getPostsFromSource();
    }
    for (const post of posts) {
        addCard(post.id, post.title, post.body);
    }
}


loadPosts();
savePostEl.addEventListener('click', addPost);