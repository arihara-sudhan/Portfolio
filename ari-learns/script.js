const div = document.getElementById("contents");
let innerContents = '';

fetch("https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/main/kural/meta.json")
    .then(resp => resp.json())
    .then(data=>{
        data.kural_records.forEach(rec=>{
            innerContents += `<a href="${rec.link}"><div class="kural"><img src="${rec.img}" alt=""><span>${rec.kural_name}</span></div></a>`
        })
        div.innerHTML = innerContents;
        console.log(innerContents)
})
