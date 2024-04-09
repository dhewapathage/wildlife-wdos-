document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('yala page.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            if (!localStorage.getItem("yala")) { localStorage.setItem("yala", JSON.stringify(content)); }
  
            const data = JSON.parse(localStorage.getItem("yala"));
            console.log(content);


            const will1_image = data.main_content.image.src;
            document.getElementById("main-imgqw").src = `./${will1_image}`;
            document.getElementById("header1zx").innerHTML =
            data.main_content.header.text;
            document.getElementById("intro3-text58").innerHTML =
            data.main_content.sections[0].content.intro_text;
            document.getElementById("intro3-text65").innerHTML =
            data.main_content.sections[0].content3.intro_text;
            const will2_image1 = data.main_content.sections[0].images[0].src;
            document.getElementById("containerhn").src = `./${will2_image1}`;
            const will3_image2 = data.main_content.sections[0].images[1].src;
            document.getElementById("containerlk").src = `./${will3_image2}`;
            const will4_image3 = data.main_content.sections[1].content.image.src;
            document.getElementById("569").src = `./${will4_image3}`;
            document.getElementById("gallery12,").innerHTML =
            data.main_content.sections[2].content.heading;
            const will4_image4 = data.main_content.sections[2].content.images[0].src;
            document.getElementById("mg-row9").src = `./${will4_image4}`;
            const will4_image5 = data.main_content.sections[2].content.images[1].src;
            document.getElementById("mg-row10").src = `./${will4_image5}`;
            const will4_image6 = data.main_content.sections[2].content.images[2].src;
            document.getElementById("mg-row11").src = `./${will4_image6}`;
            const will4_image7 = data.main_content.sections[2].content.images[3].src;
            document.getElementById("mg-row12").src = `./${will4_image7}`;
            const will4_image8 = data.main_content.sections[2].content.images[4].src;
            document.getElementById("mg-row13").src = `./${will4_image8}`;
            const will4_image9 = data.main_content.sections[2].content.images[5].src;
            document.getElementById("mg-row14").src = `./${will4_image9}`;
            const will4_image10 = data.main_content.sections[2].content.images[6].src;
            document.getElementById("mg-row15").src = `./${will4_image10}`;
            const will4_image11 = data.main_content.sections[2].content.images[7].src;
            document.getElementById("mg-row16").src = `./${will4_image11}`;




            
        
        
        


  
           
  
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
   });