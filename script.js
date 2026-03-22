const newsContainer = document.getElementById("news-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close");
const readMoreBtn = document.getElementById("readMore");

let newsData = [
  {
    title: "မြန်မာ နိုင်ငံရေး နောက်ဆုံးအခြေအနေ",
    content: "ဒီနေ့ မြန်မာနိုင်ငံတွင် နိုင်ငံရေးအခြေအနေများ တိုးတက်ပြောင်းလဲနေသည်..."
  },
  {
    title: "စီးပွားရေး အခြေအနေ ပြောင်းလဲမှု",
    content: "စီးပွားရေးကဏ္ဍတွင် အပြောင်းအလဲများ ဖြစ်ပေါ်နေပြီး..."
  }
];

function renderNews() {
  newsData.forEach(news => {
    let div = document.createElement("div");
    div.className = "news";

    div.innerHTML = `<h3>${news.title}</h3>`;

    div.onclick = () => {
      modal.style.display = "block";
      modalTitle.innerText = news.title;
      modalBody.innerText = news.content;
    };

    newsContainer.appendChild(div);
  });
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

// 👉 Ad trigger (2nd click)
readMoreBtn.onclick = () => {
  window.open(adsterra_link, "_blank");
};

renderNews();
