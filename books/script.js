const div = document.getElementById("contents");
let innerContents = '';

fetch("https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/main/books/meta.json")
    .then(resp => resp.json())
    .then(data => {
        data.forEach(book => {
            innerContents += `<div class="book">
                                <iframe src="${book.source}" width="100%" height="100%">
                                </iframe>
                                <h3>${book.name}</h3>
                              </div>`;
        });
        div.innerHTML = innerContents;
    });
