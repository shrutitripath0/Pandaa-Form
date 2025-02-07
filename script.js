document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const eyeL = document.querySelector(".eyeball-l");
    const eyeR = document.querySelector(".eyeball-r");
    const handL = document.querySelector(".hand-l");
    const handR = document.querySelector(".hand-r");
    const pandaFace = document.querySelector(".panda-face");

    const setStyle = (el, styles) => Object.assign(el.style, styles);

    const normalEyeStyle = () => {
        setStyle(eyeL, { left: "0.6em", top: "0.6em" });
        setStyle(eyeR, { left: "0.6em", top: "0.6em" });
    };

    const normalHandStyle = () => {
        setStyle(handL, { height: "2.81em", top: "8.4em", left: "7.5em", transform: "rotate(0deg)" });
        setStyle(handR, { height: "2.81em", top: "8.4em", right: "7.5em", transform: "rotate(0deg)" });
    };

    username.addEventListener("focus", () => {
        setStyle(eyeL, { left: "0.75em", top: "1.12em" });
        setStyle(eyeR, { left: "0.75em", top: "1.12em" });
        normalHandStyle();
    });

    password.addEventListener("focus", () => {
        setStyle(handL, { height: "6.56em", top: "3.87em", left: "11.75em", transform: "rotate(-155deg)" });
        setStyle(handR, { height: "6.56em", top: "3.87em", right: "11.75em", transform: "rotate(155deg)" });
        normalEyeStyle();
    });

    document.addEventListener("click", (e) => {
        if (![username, password].includes(e.target)) {
            normalEyeStyle();
            normalHandStyle();
        }
    });

    // Cursor Tracking for Eye Movement (Improved Control)
    document.addEventListener("mousemove", (e) => {
        let rect = pandaFace.getBoundingClientRect();
        let x = ((e.clientX - (rect.left + rect.width / 2)) / rect.width) * 1.5;
        let y = ((e.clientY - (rect.top + rect.height / 2)) / rect.height) * 1.5;
        
        x = Math.max(-0.5, Math.min(0.5, x)); // Restrict movement range
        y = Math.max(-0.5, Math.min(0.5, y));
        
        setStyle(eyeL, { transform: `translate(${x}em, ${y}em)` });
        setStyle(eyeR, { transform: `translate(${x}em, ${y}em)` });
    });
});
