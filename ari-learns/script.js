document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById('contents');
    let innerContents = '';

    fetch("https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/main/ari-learns/meta.json")
        .then(resp => resp.json())
        .then(data => {
            data.learning_records.forEach(rec => {
                innerContents += `
                    <a href="${rec.reference}" class="anchor">
                        <div class="kural">
                            <img src="${rec.img}" alt="">
                            <span>${rec.title}</span>
                            <span class="hoverElement" style="display: none;">${rec.description}</span>
                        </div>
                    </a>`;
            });
            div.innerHTML = innerContents;

            const anchors = document.querySelectorAll('.anchor');

            anchors.forEach(anchor => {
                const hoverElement = anchor.querySelector('.hoverElement');

                anchor.addEventListener('mouseover', () => {
                    hoverElement.style.display = "block"
                    hoverElement.style.fontSize = "1rem"
                    hoverElement.style.border = "0.08rem solid black"
                    hoverElement.style.padding = "0.5rem"
                    hoverElement.style.borderRadius = "1rem"
                });

                anchor.addEventListener('mouseout', () => {
                    hoverElement.style.display = 'none';
                });
            });
        });
});
