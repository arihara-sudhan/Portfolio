document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById('contents');
    const tags = document.getElementById("tags");
    let tag_selected = "";

    function createTagBar(text) {
        const text_element = document.createElement("h2");
        text_element.innerText = text;
        text_element.addEventListener("click", () => {
            tag_selected = text;
            updateContent();
        });
        tags.appendChild(text_element);
    }

    function updateContent() {
        fetch("https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/main/ari-learns/meta.json")
            .then(resp => resp.json())
            .then(data => {
                let innerContents = '';
                let recordsFound = false;

                data.learning_records.forEach(rec => {
                    if (tag_selected === "" || rec.tag === tag_selected) {
                        innerContents += `
                            <a href="${rec.pagelink}" class="anchor" target="_blank">
                                <div class="kural">
                                    <img src="${rec.img}" alt="">
                                    <span>${rec.title}</span>
                                    <span class="hoverElement" style="display: none;">${rec.description}</span>
                                </div>
                            </a>`;
                        recordsFound = true;
                    }
                });

                if (!recordsFound) {
                    alert("No records found for the selected tag.");
                }

                div.innerHTML = innerContents;

                const anchors = document.querySelectorAll('.anchor');

                anchors.forEach(anchor => {
                    const hoverElement = anchor.querySelector('.hoverElement');

                    anchor.addEventListener('mouseover', () => {
                        hoverElement.style.display = "block";
                        hoverElement.style.fontSize = "1rem";
                        hoverElement.style.border = "0.08rem solid black";
                        hoverElement.style.padding = "0.5rem";
                        hoverElement.style.borderRadius = "1rem";
                    });

                    anchor.addEventListener('mouseout', () => {
                        hoverElement.style.display = 'none';
                    });
                });
            });
    }

    const tags_list = ["html", "js", "react", "redux"];
    tags_list.forEach(createTagBar);

    // Initial content load
    updateContent();
});
