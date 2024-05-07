var bannerVideo = document.querySelector(".myVideo");
bannerVideo.addEventListener("timeupdate", () => {
    if (bannerVideo.currentTime < 0 || bannerVideo.currentTime > 88) {
        bannerVideo.currentTime = 0;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const configureSplide = (e) => {
        console.log(e);
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
