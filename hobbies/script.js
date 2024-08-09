window.addEventListener('load',(e)=>{
    const parent = document.getElementById("hobbies");
         var myobj = 
      
         for(let x=0;x<myobj.length;x++){
            const day = document.createElement('div');
            day.className = "day";
            const daycount = document.createElement('span');
            daycount.className = "daycount";
            const codetitle = document.createElement('span');
            codetitle.className = "codetitle";
            let textNode2 = document.createTextNode(myobj[x][0]);
            codetitle.appendChild(textNode2);
            const iframe = document.createElement("iframe");
            iframe.className="embed-responsive-item";
            iframe.allowFullscreen = true;
            iframe.src = myobj[x][1];
            const date = document.createElement("span");
            date.className = "date";
            let textNode3 = document.createTextNode(myobj[x][2]);
            date.appendChild(textNode3);
            day.appendChild(daycount);
            day.appendChild(codetitle);
            day.appendChild(iframe);
            day.appendChild(date);
            codings[0].appendChild(day);
         }});