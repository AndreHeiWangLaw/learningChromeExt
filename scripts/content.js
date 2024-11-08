const article = document.querySelector("article");

// may return null if no match selector
if (article){
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);

    // matchAll returns an iterator, so convert to array to find word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount/200);
    const badge = document.createElement("p");

    // use same style as current web
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `${readingTime} min read`;

    // support for API reference docs
    const heading = article.querySelector("h1");

    // support for article docs with date
    const date = article.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend", badge);


}