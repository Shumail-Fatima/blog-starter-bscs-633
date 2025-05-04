export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${new Date(article.date).toLocaleString()}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}
