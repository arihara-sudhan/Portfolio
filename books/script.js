const div = document.getElementById("contents");
let innerContents = '';

fetch("https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/main/books/meta.json")
    .then(resp => resp.json())
    .then(data => {
        data.forEach(book => {
            innerContents += `<div class="book" onclick="window.load('${book.url}', '_blank');">
            					<img src=${book.cover} alt="Book coudn't load">
                                <h3>${book.name}</h3>
                              </div>`;
        });
        div.innerHTML = innerContents;
    });
