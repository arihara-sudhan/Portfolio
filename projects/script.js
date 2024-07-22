window.addEventListener('load',(e)=>{
    var codings = document.getElementsByClassName("codings");
    var myobj = [
       [
           "Image Segmentation",
           "https://www.youtube.com/embed/m59BVAFKsXg",
           "Python - K Means Clustering"
       ],			 
       [
           "Personal Blog Page",
           "https://www.youtube.com/embed/JrAx6S09Fh0",
           "MERN Stack"
       ],			 

       [
           "CUBE into Monitor Lizard - 3D Model",
           "https://www.youtube.com/embed/uJdiDXQmMWo",
           "Blender - Low Poly Modelling"
       ],			 
       [
           "TAMIZH HandWritten Vowles",
           "https://www.youtube.com/embed/9zwWLPQ4JVM",
           "Python - CNN & Triplet Loss"
       ],			 
       [
           "Sentiment Analysis",
           "https://www.youtube.com/embed/nbK24ZEPz6U",
           "Python - HuggingFace Transformers"
       ],			 
       [
           "MNIST-HandWritten Digit Recognition",
           "https://www.youtube.com/embed/kO-2t13f3SA",
           "Python - CNN"
       ],			 
       [
           "CRUD App | Dynamic Page",
           "https://www.youtube.com/embed/6JDMa82gn5E",
           "Python - Django"
       ],
       [
           "Fire Dino Game",
           "https://www.youtube.com/embed/XwC48mzk384",
           "Python - Pygame"
       ],
       [
           "Desert Run",
           "https://www.youtube.com/embed/Ge1aILNF5Qs",
           "GDevelop Game Engine"
       ],
       [
           "Speech Recognition based Calculator",
           "https://www.youtube.com/embed/ptMLLKaTEm8",
           "Python - Google API"
       ],
       [
           "Speech Recognition based WebDev",
           "https://www.youtube.com/embed/LN-BP5-yny0",
           "Python - Google API"
       ],
       [ 
           "WhatsApp Frontend",
           "https://www.youtube.com/embed/yK6e6g2IDDM",
           "ReactJS"
       ],
       [
           "Space Shooter Game",
           "https://www.youtube.com/embed/69ww4z3AY5I",
           "Ruby - Gosu"
       ],
       [
           "Elephant - 3D Modeling",
           "https://www.youtube.com/embed/-H_F2d3kqyE",
           "Blender"
       ],
       [
           "Rodent - 3D Modelling",
           "https://www.youtube.com/embed/3QU-pV1xSPs",
           "Blender"
       ],
       [
           "Bateriophage - 3D Modelling",
           "https://www.youtube.com/embed/KqPV6D6FBFI",
           "Blender"
       ],
       [
           "Dinosaur - 3D Modelling",
           "https://www.youtube.com/embed/yg6W_j2ZVNE",
           "Blender"
       ],
       [
           "Pig - 3D Modelling",
           "https://www.youtube.com/embed/gavHWPWJV84",
           "Blender"
       ],
       [
           "2D Animated WindMill",
           "https://www.youtube.com/embed/JVZDJyqV_Pg",
           "Python - Turtle"
       ],
       [
           "Fruits' Website - Frontend",
           "https://www.youtube.com/embed/WSS3BEmKsYU",
           "Bootstrap3"
       ],
       [
           "Virtual Quiz Application",
           "https://www.youtube.com/embed/2eeOpg8Yh7M",
           "Python - Mediapipe,OpenCV"
       ],
       [
           "Counting Tom",
           "https://www.youtube.com/embed/3bKUkOegiYY",
           "Python - Mediapipe,OpenCV"
       ],
       [
           "Virtual Pattern Lock",
           "https://www.youtube.com/embed/n790TFD36Kk",
           "Python - Mediapipe,OpenCV"
       ],
       [
           "Hand Controlled Car Game",
           "https://www.youtube.com/embed/ZxMbdxOkCfc",
           "Python - Mediapipe,Pygame,OpenCV"
       ],
       [
           "Car Game",
           "https://www.youtube.com/embed/ZjJKM_wrrcU",
           "Python - Pygame"
       ],
       [
           "Reversing A Video",
           "https://www.youtube.com/embed/rkEIg353VcE",
           "Python - OpenCV"
       ],
       [
           "Web Piano",
           "https://www.youtube.com/embed/dTgIzay9mDc",
           "HTML + CSS + JS"
       ],
       [
           "Instagram Profile - Frontend",
           "https://www.youtube.com/embed/NwowTqXROpU",
           "ReactJS"
       ],
       [
           "YouTube - Frontend",
           "https://www.youtube.com/embed/zhllr6WRN3E",
           "ReactJS"
       ],
       [
           "YouTube Video Downloader",
           "https://www.youtube.com/embed/haD58ogVC9I",
           "Python - Misc"
       ],
       [
           "Dinosaur Game",
           "https://www.youtube.com/embed/VmNrZFfxJKU",
           "Python - Pygame"
       ],
       [
           "Drawing Shinchan",
           "https://www.youtube.com/embed/EDg6Dt1cz0g",
           "Python - Turtle"
       ],
       [
           "Parrot Astrology",
           "https://www.youtube.com/embed/CSXqt2Qe5j4",
           "Python - WebScraping"
       ],
       [
           "Talking Tom",
           "https://www.youtube.com/embed/2VRp-cA4f9g",
           "Python - Misc"
       ],
       [
           "The Piano",
           "https://www.youtube.com/embed/X1P3kihA910",
           "Python - Misc"
       ],
       [
           "The Plane Game",
           "https://www.youtube.com/embed/jllgV1GX9lQ",
           "Python - Pygame"
       ],
       [
           "Face Detection",
           "https://www.youtube.com/embed/zY8jfTca90k",
           "Python - OpenCV , DL"
       ],
       [
           "MultiFace Detection",
           "https://www.youtube.com/embed/ds_8GRUP6Lc",
           "Python - OpenCV , DL"
       ],
       [
           "UI/UX Design",
           "https://www.youtube.com/embed/ikok_lK4wfE",
           "HTML+CSS+JS"
       ],
       [
           "UI/UX Design",
           "https://www.youtube.com/embed/CGgzc2rGXIQ",
           "WildLife Gifography - HTML+CSS+JS"
       ],
       [
           "Pupil Detection",
           "https://www.youtube.com/embed/mafTRpX3C0o",
           "Python - OpenCV"
       ],
       [
           "Music Player",
           "https://youtube.com/shorts/Rv2grOmTBrM?feature=share",
           "ReactJS"
       ]
    ]
    for(let x=0;x<myobj.length;x++){
       const day = document.createElement('div');
       day.className = "day";
       const daycount = document.createElement('span');
       daycount.className = "daycount";
       let textNode = document.createTextNode(`Project ${x+1}`);
       daycount.appendChild(textNode);
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