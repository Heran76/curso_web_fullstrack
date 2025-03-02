let articles = document.querySelector(".layout__articles");

let post = [
  {
    title: "Articulo 1",
    date: "02/03/2025",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sit necessitatibus nihil, laborum voluptas excepturi. Illo eveniet quia, non at maiores aperiam aut alias dignissimos reprehenderit quis quas nisi quibusdam.",
  },
  {
    title: "Articulo 2",
    date: "8/02/2025",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sit necessitatibus nihil, laborum voluptas excepturi. Illo eveniet quia, non at maiores aperiam aut alias dignissimos reprehenderit quis quas nisi quibusdam.",
  },
  {
    title: "Articulo 3",
    date: "04/02/2025",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sit necessitatibus nihil, laborum voluptas excepturi. Illo eveniet quia, non at maiores aperiam aut alias dignissimos reprehenderit quis quas nisi quibusdam.",
  },
  {
    title: "Articulo 4",
    date: "18/01/2025",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sit necessitatibus nihil, laborum voluptas excepturi. Illo eveniet quia, non at maiores aperiam aut alias dignissimos reprehenderit quis quas nisi quibusdam.",
  },
];

post.forEach((article) => {
  articles.innerHTML += `
    <article class="articles__article">
      <h3 class="article__title">${article.title}</h3>
      <span class="article_date">${article.date}</span>
      <p class="article__body">
        ${article.body}
      </p>
      <a href="#" class="article__btn">Saber más</a>
    </article>
  `;
});