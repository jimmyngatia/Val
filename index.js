
    const noBtn = document.getElementById("no");
    const question = document.getElementById("question");
    function moveNo() {
        // Once they hover, we switch it to fixed so it can fly anywhere on the screen
        noBtn.style.position = "fixed";
        
        // Calculate random coordinates
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }
    function celebrate() {
        question.innerHTML = "Yay! Best Day Ever! 💖🌹";
        noBtn.style.display = "none";
        document.getElementById("yes").style.transform = "scale(1.5)";
        
        for (let i = 0; i < 100; i++) {
            createConfetti();
        }
    }
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1', '#c9184a'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);
        setTimeout(() => { confetti.remove(); }, 5000);
    }
