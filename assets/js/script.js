var bannerVideo = document.querySelector(".myVideo");
bannerVideo.addEventListener("timeupdate", () => {
    if (bannerVideo.currentTime < 0 || bannerVideo.currentTime > 88) {
        bannerVideo.currentTime = 0;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const configureSplide = (e) => {
        const splide = new Splide(e, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            gap: 20,
        });
        splide.mount();

        const option = () => {
            const newOptions = {
                type: "loop",
                perMove: 1,
                autoplay: true,
                interval: 3000,
                gap: 20,
            };

            if (window.innerWidth < 768) {
                newOptions.perPage = 1;
            } else {
                newOptions.perPage = 3;
            }

            splide.options = newOptions;
        };

        window.addEventListener("resize", option);

        option();
    };

    configureSplide(".splide");
    configureSplide(".splide2");
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("scrollToTopBtn");
    let progressValue = document.querySelector("#scrollToTopBtn i");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 1) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#00DBDE ${scrollValue}%, #fff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

const tutorials = document.querySelectorAll(".tutorial-item");

tutorials.forEach((item) => {
    const desc = item.querySelector(".tutorial__desc");
    const heading = item.querySelector("h3");
    const icon = item.querySelector("i");

    item.addEventListener("click", () => {
        tutorials.forEach((item2) => {
            const desc2 = item2.querySelector(".tutorial__desc");
            const heading2 = item2.querySelector("h3");
            const icon2 = item2.querySelector("i");
            if (item2 !== item) {
                desc2.classList.add("hidden");
                heading2.classList.remove("heading-bold");
                icon2.classList.add("fa-plus");
                icon2.classList.remove("fa-minus", "border-item");
            }
        });
        desc.classList.toggle("hidden");
        heading.classList.toggle("heading-bold");
        icon.classList.toggle("fa-minus");
        icon.classList.toggle("border-item");
        icon.classList.toggle("fa-plus");
    });
});

// dark mode

const btnDarkMode = document.querySelector(".btnDarkMode");
const checkDarkMode = document.querySelector("#switch");
const darkTheme = document.querySelector("body");

btnDarkMode.addEventListener("click", () => {
    darkTheme.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", darkTheme.classList.contains("dark-mode"));
});
const darkMode = localStorage.getItem("darkMode");

const isDarkMode = darkMode === "true";

if (isDarkMode) {
    darkTheme.classList.add("dark-mode");
    checkDarkMode.checked = true;
} else {
    darkTheme.classList.remove("dark-mode");
    checkDarkMode.checked = false;
}

const cursor = document.querySelector(".cursor");
var timeout;
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStop() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStop, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
