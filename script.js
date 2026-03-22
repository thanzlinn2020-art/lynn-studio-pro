const newsContainer = document.getElementById("news-container");
const loadMoreBtn = document.getElementById("loadMore");

// Demo News Data (later API replace)
let newsData = [
  { title: "မြန်မာ နိုင်ငံရေး အခြေအနေ နောက်ဆုံးသတင်း", content: "အသေးစိတ်ဖတ်ရန်နှိပ်ပါ..." },
  { title: "စီးပွားရေး ပြောင်းလဲမှု အခြေအနေ", content: "အသေးစိတ်ဖတ်ရန်နှိပ်ပါ..." },
  { title: "နည်းပညာသတင်း အသစ်များ", content: "အသေးစိတ်ဖတ်ရန်နှိပ်ပါ..." },
  { title: "ကျန်းမာရေး သတင်းများ", content: "အသေးစိတ်ဖတ်ရန်နှိပ်ပါ..." }
];

function renderNews() {
  newsData.forEach(news => {
    let div = document.createElement("div");
    div.className = "news";

    div.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.content}</p>
    `;

    // 👉 Adsterra Smartlink trigger
    div.onclick = () => {
      window.open(adsterra_link, "_blank");
    };

    newsContainer.appendChild(div);
  });
}

loadMoreBtn.onclick = () => {
  renderNews();
};

renderNews();
