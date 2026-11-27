function showPosts(posts) {
  const container = document.getElementById("posts");

  container.innerHTML = "";

  posts.forEach(function (post) {
    container.innerHTML += `
      <div class="bg-white p-4 rounded shadow">
        <p class="text-sm text-blue-500">Post# ${post.id}</p>
        <h2 class="font-bold text-lg">${post.title}</h2>
        <p class="text-gray-600">${post.body}</p>
      </div>
    `;
  });
}

async function getPosts(){
    const status = document.getElementById("status");
    status.textContent = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const tenPosts = data.slice(0,10);
        showPosts(tenPosts);
        status.textContent = "";
    } catch(error) {
        console.log("Something went wrong", error);
        status.textContent = "Oops! Could not load posts. Try again.";
        status.className = "text-center text-red-500 mb-4";
    }
}

getPosts();

const reloadBtn = document.getElementById("reload");

reloadBtn.addEventListener("click", getPosts);