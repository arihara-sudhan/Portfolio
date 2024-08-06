document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById('contents');
    const tags = document.getElementById("tags");
    let tag_selected = "";
    const tagColors = ["lightgreen", "lightblue", "yellow", "orange", "tomato"]
    let color_idx = 0;

    function createTagBar(text) {
        const text_element = document.createElement("h2");
        text_element.innerText = text;
        text_element.style.backgroundColor = tagColors[color_idx];
        if(color_idx+1==tagColors.length)
            color_idx=0
        else
            color_idx+=1;
        
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
                                <div class="item" onclick="window.open('${rec.pagelink}', '_blank')">
                                    <img src="${rec.img}" alt="">
                                    <span class="">${rec.title}</span>
                                    <span class="hoverElement" style="display: none;">${rec.description}</span>
                                </div>`;
                        recordsFound = true;
                    }
                });

                div.innerHTML = innerContents;

                const anchors = document.querySelectorAll('.item');

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

    const tags_list = ["html", "js", "react","html", "js", "react","html", "js", "react","html", "js", "react","html", "js", "react","html", "js", "react","html", "js", "react","html", "js", "react","html", "js", "react",];
    tags_list.forEach(createTagBar);
    updateContent();
});
