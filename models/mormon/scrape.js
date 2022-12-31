// https://www.churchofjesuschrist.org/media/collection/book-of-mormon-all-gospel-art-images?lang=eng

const items = [];
document.querySelectorAll(".ldasMY").forEach((el) => {
  const img = el.querySelectorAll("img")[1];
  const srs = img.getAttribute("srcset");
  const alt = img.getAttribute("alt");
  const src = srs
    .split(",")
    .map((s) => {
      const [url, strSize] = s.trim().split(" ");
      const size = parseInt(strSize.replace("w", ""));
      return { url, size };
    })
    .sort((a, b) => b.size - a.size);
  const srcUrl = src[0].url;

  const desc = el.querySelectorAll(".kvTcXC")[0]?.innerText;

  items.push({ alt, srcUrl, desc });
});

console.log(JSON.stringify(items, null, 2));
