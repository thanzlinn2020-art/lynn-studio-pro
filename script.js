const API_KEY = "9344630249d247ec992f6a4d029063fe";
const newsContainer = document.getElementById("news-container");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

const closeBtn = document.getElementById("close");
const readMoreBtn = document.getElementById("readMore");

let articles = [];

// 🔥 Fetch Myanmar-related news
async function fetchNews() {
  const url = `https://newsapi.org/v2/everything?q=Myanmar&language=en&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    articles = data.articles;
    renderNews();
  } catch (err) {
    console.log("Error fetching news", err);
  }
}

// 📰 Render News List
function renderNews() {
  newsContainer.innerHTML = "";

  articles.forEach((news, index) => {
    let div = document.createElement("div");
    div.className = "news";

    div.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.source.name}</p>
    `;

    div.onclick = () => {
      modal.style.display = "block";
      modalTitle.innerText = news.title;
      modalBody.innerText = news.description || "No content available";

      // Save current article link
      readMoreBtn.onclick = () => {
        window.open(news.url, "_blank"); // real news
        setTimeout(() => {
          window.open(adsterra_link, "_blank"); // adsterra ad
        }, 1500);
      };
    };

    newsContainer.appendChild(div);
  });
}

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// 🔄 Auto  every 10 minutes
setInterval(fetchNews, 600000);

// First load
fetchNews();
