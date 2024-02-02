document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll('.container').forEach(function(container) {
        container.classList.add('active');
    });

   const hamburgerIcon = document.getElementById('hamburger-icon');
   const navLinks = document.querySelector('.nav-links');

   hamburgerIcon.addEventListener('click', function() {
       navLinks.classList.toggle('active');
   });

   const navLinksArray = Array.from(document.querySelectorAll('.nav-links a'));
   navLinksArray.forEach(function(link) {
       link.addEventListener('click', function() {
           navLinks.classList.remove('active');
       });
   });  
});



const blogIdentifier = window.location.href;

function likeBlog(blogId) {
    const likeCounter = document.getElementById(`likeCounter${blogId}`);
    let currentLikes = parseInt(likeCounter.textContent);
    currentLikes++;
    likeCounter.textContent = currentLikes;

    localStorage.setItem(`${blogIdentifier}Likes${blogId}`, currentLikes.toString());
}

function addComment(blogId) {
    const commentInput = document.getElementById(`commentInput${blogId}`).value;
    const commentsContainer = document.getElementById(`comments${blogId}`);

    if (commentInput.trim() !== "") {
        const comment = document.createElement('p');
        comment.textContent = commentInput;
        commentsContainer.appendChild(comment);

        const storedComments = JSON.parse(localStorage.getItem(`${blogIdentifier}Comments${blogId}`)) || [];
        storedComments.push(commentInput);
        localStorage.setItem(`${blogIdentifier}Comments${blogId}`, JSON.stringify(storedComments));

        document.getElementById(`commentInput${blogId}`).value = "";
    }
}

function clearLocalStorage(blogId) {
    localStorage.removeItem(`${blogIdentifier}Likes${blogId}`);
    localStorage.removeItem(`${blogIdentifier}Comments${blogId}`);

    document.getElementById(`likeCounter${blogId}`).textContent = "0";
    document.getElementById(`comments${blogId}`).innerHTML = "";
}

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 2; i++) {
        const likeCounter = document.getElementById(`likeCounter${i}`);
        const storedLikes = localStorage.getItem(`${blogIdentifier}Likes${i}`);
        if (storedLikes) {
            likeCounter.textContent = storedLikes;
        }

        const commentsContainer = document.getElementById(`comments${i}`);
        const storedComments = JSON.parse(localStorage.getItem(`${blogIdentifier}Comments${i}`)) || [];
        storedComments.forEach(comment => {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
        });
    }
});


function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    const themeStylesheet = document.getElementById('themeStyles');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode'); 
        themeIcon.innerHTML = '&#127769;'; 
        themeStylesheet.href = 'light-mode.css';
    } else {
        body.classList.add('dark-mode');
        themeIcon.innerHTML = '&#9728;'; 
        themeStylesheet.href = 'dark-mode.css';
    }
}


