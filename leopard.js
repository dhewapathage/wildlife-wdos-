document.addEventListener("DOMContentLoaded", function () {
    // Fetching data from JSON 
    fetch('leopard.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('network respond doesnt work');
            }
            return response.json();
        })
        .then(content => {
            localStorage.setItem("leopardpage", JSON.stringify(content));
  
            const data = JSON.parse(localStorage.getItem("leopardpage"));
            console.log(data);

            document.getElementById("intro").innerHTML =
            data.body.sections[1].content.h1;
            document.getElementById("jsp").innerHTML =
            data.body.sections[0].content.h1;
            document.getElementById("intro12").innerHTML =
            data.body.sections[1].content.p;
            const index456_image1 = data.body.sections[2].content.img.src;
            document.getElementById("yala-pic").src = `./${index456_image1}`;
            document.getElementById("text").innerHTML =
            data.body.sections[2].content.sub.h1;
            document.getElementById("text1").innerHTML =
            data.body.sections[2].content.sub.p;
            const index456_image2 = data.body.sections[3].content.img.src;
            document.getElementById("yala-pic1").src = `./${index456_image2}`;
            document.getElementById("text2").innerHTML =
            data.body.sections[3].content.sub1.h1;
            document.getElementById("text3").innerHTML =
            data.body.sections[3].content.sub1.p;
            const index456_image3= data.body.sections[4].content.img.src;
            document.getElementById("yala-pic2").src = `./${index456_image3}`;
            document.getElementById("text4").innerHTML =
            data.body.sections[4].content.sub2.h1;
            document.getElementById("text5").innerHTML =
            data.body.sections[4].content.sub2.p;
            const index456_image4= data.body.sections[6].content.img.src;
            document.getElementById("threat-section").src = `./${index456_image4}`;
            document.getElementById("threat-head").innerHTML =
            data.body.sections[5].h1;
            document.getElementById("threat-head1").innerHTML =
            data.body.sections[5].p;
            document.getElementById("sub1dis").innerHTML =
            data.body.sections[6].content.sub3.h2;
            document.getElementById("sub1dis1").innerHTML =
            data.body.sections[6].content.sub3.p;
            document.getElementById("sub1dis2").innerHTML =
            data.body.sections[6].content.sub3.p1;
            const index456_image5= data.body.sections[7].content.img.src;
            document.getElementById("threat-section1").src = `./${index456_image5}`;
            document.getElementById("sub1dis3").innerHTML =
            data.body.sections[7].content.sub4.h2;
            document.getElementById("sub1dis4").innerHTML =
            data.body.sections[7].content.sub4.p;
            document.getElementById("sub1dis5").innerHTML =
            data.body.sections[7].content.sub4.p1;
            const index456_image6= data.body.sections[8].content.img.src;
            document.getElementById("threat-section2").src = `./${index456_image6}`;
            document.getElementById("sub1dis6").innerHTML =
            data.body.sections[8].content.sub5.h2;
            document.getElementById("sub1dis7").innerHTML =
            data.body.sections[8].content.sub5.p;
            document.getElementById("sub1dis8").innerHTML =
            data.body.sections[8].content.sub5.p1;
            
            
            
            
        
        
        


  
           
  
        })
        .catch(error => {
            console.error('There was a error with the fetch :', error);
        });
   });