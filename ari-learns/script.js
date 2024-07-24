const div = document.getElementById("contents");
let innerContents = '';

fetch("https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/main/ari-learns/meta.json")
    .then(resp => resp.json())
    .then(data=>{
        data.learning_records.forEach(rec=>{
            innerContents += `<a href="${rec.reference}"><div class="kural"><img src="${rec.img}" alt=""><span>${rec.title}</span></div></a>`
        })
        div.innerHTML = innerContents;
        console.log(innerContents)
})
