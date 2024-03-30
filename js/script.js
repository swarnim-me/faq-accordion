window.addEventListener("DOMContentLoaded", () => {
    const plusBtn = Array.from(document.querySelectorAll(".question img"));
    plusBtn.forEach((btn) => {
        const answer = btn.parentElement.parentElement.children[1];
        const containerHeight = answer.clientHeight;
        answer.style.height = "0px";
        btn.addEventListener("click", () => {
            console.log(btn.parentElement.children[1]);
            if (answer.style.height == "0px") {
                answer.style.height = containerHeight + "px";
                btn.setAttribute("src", "../assets/images/icon-minus.svg");
            }
            else {
                answer.style.height = "0px";
                btn.setAttribute("src", "../assets/images/icon-plus.svg");
            }
        })
    })
})