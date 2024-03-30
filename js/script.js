window.addEventListener("DOMContentLoaded", () => {
    const plusBtn = Array.from(document.querySelectorAll(".question img"));
    plusBtn.forEach((btn) => {
        const answer = btn.parentElement.parentElement.children[1];
        btn.addEventListener("click", () => {
            answer.classList.toggle("expanded");
            if (answer.classList.contains("expanded")) {
                btn.setAttribute("src", "../assets/images/icon-minus.svg");
            }
            else {
                btn.setAttribute("src", "../assets/images/icon-plus.svg");
            }
        })
    })
})