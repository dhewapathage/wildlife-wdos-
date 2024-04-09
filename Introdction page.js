document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('introduction page.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            localStorage.setItem("Intro", JSON.stringify(content));
  
            if (!localStorage.getItem("Intro")) { localStorage.setItem("Intro", JSON.stringify(content)); }
            console.log(content);
            const data = JSON.parse(localStorage.getItem("Intro"));
            
            document.getElementById("intro-1-text1").innerHTML =    
            data.sections [0].content.header;
            document.getElementById("text-1").innerHTML =
            data.sections [1].content.text;
            document.getElementById("foresttext").innerHTML =
            data.sections [2].content.forests[0].name;
            document.getElementById("foresttext1").innerHTML =
            data.sections [2].content.forests[0].description.intro_text;
            document.getElementById("foresttext2").innerHTML =
            data.sections [2].content.forests[0].description1.intro_text;
            document.getElementById("foresttext3").innerHTML =
            data.sections [2].content.forests[0].description2.intro_text;
            const will11_image = data.sections[2].content.forests[0].images[0];
            document.getElementById("two-images1").src = `./${will11_image}`;
            const will11_image1 = data.sections[2].content.forests[0].images[1];
            document.getElementById("two-images2").src = `./${will11_image1}`;
            document.getElementById("foresttext4").innerHTML =
            data.sections [2].content.forests[1].name;
            document.getElementById("foresttext5").innerHTML =
            data.sections [2].content.forests[1].description3.intro_text;
            document.getElementById("foresttext6").innerHTML =
            data.sections [2].content.forests[1].description5.intro_text;
            document.getElementById("foresttext7").innerHTML =
            data.sections [2].content.forests[1].description6.intro_text;
            const will11_image2 = data.sections[2].content.forests[1].images[0];
            document.getElementById("two-images3").src = `./${will11_image2}`;
            const will11_image3 = data.sections[2].content.forests[1].images[1];
            document.getElementById("two-images4").src = `./${will11_image3}`;

            
        
        


  
           
  
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
   });