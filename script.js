async function loadNews() {

const res = await fetch("https://api.allorigins.win/raw?url=https://api.currentsapi.services/v1/latest-news?apiKey=demo");
const data = await res.json();

const container = document.getElementById("newsList");

data.news.slice(0,10).forEach(n => {

const div = document.createElement("div");

div.className = "bg-white p-4 shadow rounded";

div.innerHTML = `
<h2 class="font-bold">${n.title}</h2>
<p>${n.description || ""}</p>
<button onclick='openPost(${JSON.stringify(n)})'
class="text-blue-500">Read More</button>
`;

container.appendChild(div);

});

}

function openPost(news) {
localStorage.setItem("news", JSON.stringify(news));
window.location.href = "post.html";
}

loadNews();
