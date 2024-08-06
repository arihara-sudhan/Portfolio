document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById("contents");
    let innerContents = '';

    fetch("https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/main/books/meta.json")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(book => {
                innerContents += `<div class="book" onclick="window.open('${book.url}', '_blank');">
                                    <img src="${book.cover}" alt="Book cover couldn't load">
                                    <h3>${book.name}</h3>
                                  </div>`;
            });
            div.innerHTML = innerContents;
        })
        .catch(error => console.error('Error fetching the JSON file:', error));
});
