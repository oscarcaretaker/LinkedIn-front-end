const icons = document.querySelectorAll(".icon");
icons.forEach(icon =>{
   icon.addEventListener("click", ()=>{

       icons.forEach(icon =>{
           icon.style.color = "";

       })

           icon.style.color = "black";


   })
});

const likeyDivs = document.querySelectorAll(".likey");
likeyDivs.forEach((likey) => {
    let count = 0; // Each div has its own count
    likey.addEventListener("click", () => {
        if (count === 0) {
            likey.style.color = "#378FE9"; // Change color to indicate "liked"
            count = 1; // Update state to "liked"
        } else {
            likey.style.color = ""; // Reset color to default
            count = 0; // Update state to "not liked"
        }
    });
});


document.querySelector(".see_more1").addEventListener("click", function () {
    const extraText =
        " forward. <br>We value your experience, skills, and potential, and are committed to providing an inclusive environment for your success.";


    const parentParagraph = this.parentElement;
    parentParagraph.innerHTML = parentParagraph.innerHTML.replace(
        '<span class="see_more1">...more</span>',
        extraText
    );
});
document.querySelector(".see_more2").addEventListener("click", function () {
    const extraText =
        " <br><br>Through this project, I’ve refined my skills in HTML, CSS, and JavaScript, focusing on creating dynamic, user-friendly experiences. It's a great way for me to improve my front-end development skills while replicating the functionality and aesthetics of a major platform.";


    const parentParagraph = this.parentElement;
    parentParagraph.innerHTML = parentParagraph.innerHTML.replace(
        '<span class="see_more2">...more</span>',
        extraText
    );
});
document.querySelector(".see_more3").addEventListener("click", function () {
    const extraText =
        " <br>This month, we explore Microsoft Copilot capabilities, and new experiences for Copilot+ PCs and Windows 11. We also highlight two reports on how we’re working to safeguard your data, as well as advance Microsoft’s commitment to diversity and inclusion.";


    const parentParagraph = this.parentElement;
    parentParagraph.innerHTML = parentParagraph.innerHTML.replace(
        '<span class="see_more3">...more</span>',
        extraText
    );
});