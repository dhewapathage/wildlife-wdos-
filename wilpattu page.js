document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('wilpattu page.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            if (!localStorage.getItem("wilpattu")) { localStorage.setItem("wilpattu", JSON.stringify(content)); }
  
            const data = JSON.parse(localStorage.getItem("wilpattu"));
            console.log(data);


            const will_image = data.main_content.image.src;
            document.getElementById("main-img").src = `./${will_image}`;
            document.getElementById("header12").innerHTML =
            data.main_content.header.text;
            document.getElementById("intro3-text").innerHTML =
            data.main_content.sections[0].content1.intro_text;
            document.getElementById("intro3-text12").innerHTML =
            data.main_content.sections[0].content2.intro_text;
            const will_image1 = data.main_content.sections[0].images[0].src;
            document.getElementById("container1").src = `./${will_image1}`;
            const will_image2 = data.main_content.sections[0].images[1].src;
            document.getElementById("container2").src = `./${will_image2}`;
            const will_image3 = data.main_content.sections[1].content.image.src;
            document.getElementById("12qw").src = `./${will_image3}`;
            document.getElementById("gallery1").innerHTML =
            data.main_content.sections[2].content.heading;
            const will_image4 = data.main_content.sections[2].content.images[0].src;
            document.getElementById("img-row1").src = `./${will_image4}`;
            const will_image5 = data.main_content.sections[2].content.images[1].src;
            document.getElementById("img-row2").src = `./${will_image5}`;
            const will_image6 = data.main_content.sections[2].content.images[2].src;
            document.getElementById("img-row3").src = `./${will_image6}`;
            const will_image7 = data.main_content.sections[2].content.images[3].src;
            document.getElementById("img-row4").src = `./${will_image7}`;
            const will_image8 = data.main_content.sections[2].content.images[4].src;
            document.getElementById("img-row5").src = `./${will_image8}`;
            const will_image9 = data.main_content.sections[2].content.images[5].src;
            document.getElementById("img-row6").src = `./${will_image9}`;
            const will_image10 = data.main_content.sections[2].content.images[6].src;
            document.getElementById("img-row7").src = `./${will_image10}`;
            const will_image11 = data.main_content.sections[2].content.images[7].src;
            document.getElementById("img-row8").src = `./${will_image11}`;




            
        
        
        


  
           
  
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
   });