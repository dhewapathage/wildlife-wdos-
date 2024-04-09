document.addEventListener("DOMContentLoaded", function () {
    // Fetching data from JSON
    fetch('DOWC.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('network respond doesnt work');
            }
            return response.json();
        })
        .then(content => {
            if (!localStorage.getItem("dowc")) { localStorage.setItem("dowc", JSON.stringify(content)); }
  
            const data = JSON.parse(localStorage.getItem("dowc"));
            console.log(data);
            
            
            const dowc_image = data.sections[0].content.image;
            document.getElementById("main-img-DOWC").src = `./${dowc_image}`;
            document.getElementById("header2").innerHTML =
        data.sections [0].content.heading;
        document.getElementById("introdowc1").innerHTML =
        data.sections [0].content.paragraph;
        document.getElementById("introdowc2").innerHTML =
        data.sections [0].content.paragraph1;
        document.getElementById("introdowc3").innerHTML =
        data.sections [0].content.paragraph2;
        document.getElementById("areas-text").innerHTML =
        data.sections [1].heading;

        const dowc_image1 = data.sections[1].protected_areas[0].image;
            document.getElementById("dowcimg").src = `./${dowc_image1}`;
        document.getElementById("box1").innerHTML =
        data.sections [1].protected_areas[0].name;
        const dowc_image2 = data.sections[1].protected_areas[1].image;
            document.getElementById("dowcimg1").src = `./${dowc_image2}`;
        document.getElementById("box12").innerHTML =
        data.sections [1].protected_areas[1].name;
        const dowc_image3 = data.sections[1].protected_areas[2].image;
            document.getElementById("dowcimg2").src = `./${dowc_image3}`;
        document.getElementById("box13").innerHTML =
        data.sections [1].protected_areas[2].name;
        const dowc_image4 = data.sections[1].protected_areas[3].image;
            document.getElementById("dowcimg3").src = `./${dowc_image4}`;
        document.getElementById("box14").innerHTML =
        data.sections [1].protected_areas[3].name;
        const dowc_image5 = data.sections[1].protected_areas[4].image;
            document.getElementById("dowcimg4").src = `./${dowc_image5}`;
        document.getElementById("box15").innerHTML =
        data.sections [1].protected_areas[4].name;
        
        

        
        

  
           
  
        })
        .catch(error => {
            console.error('There was a error with the fetch :', error);
        });
   });