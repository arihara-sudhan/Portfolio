document.addEventListener('DOMContentLoaded', function() {
    const tagsElement = document.getElementById("tags");
    const div = document.getElementById("contents");
    let tagSelected = "";
    const tagColors = ["lightgreen", "lightblue", "yellow", "pink", "orange"];
    let color_idx = 0;

    function createTagBanner(tags, container) {
        tags.forEach(tag => {
            const tagElement = document.createElement("h2");
            tagElement.innerText = tag;
            tagElement.style.backgroundColor = tagColors[color_idx];
            if(color_idx+1==tagColors.length)
                color_idx=0
            else
                color_idx+=1;
            tagElement.addEventListener("click", () => {
                tagSelected = tag;
                updateContent();
            });
            container.appendChild(tagElement);
        });
    }

    function updateContent() {
        fetch("https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/main/books/meta.json")
            .then(resp => resp.json())
            .then(data => {
                let innerContents = '';
                data.forEach(book => {
                    if (tagSelected === "" || book.tag === tagSelected) {
                        innerContents += `
                            <div class="book" onclick="window.open('${book.url}', '_blank');">
                                <img src="${book.cover}" alt="Book cover couldn't load">
                                <h3>${book.name}</h3>
                            </div>`;
                    }
                });
                div.innerHTML = innerContents;
            })
            .catch(error => console.error('Error fetching the JSON file:', error));
    }

    const tags = ["web", "machine-learning", "tamizh", "general", "biology"] 
    createTagBanner(tags, tagsElement);
    updateContent();
});
