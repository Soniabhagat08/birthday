// =========================================
//        SCREEN 1 (index.html)
// =========================================

const openBtn = document.getElementById("openBtn");
const giftScreen = document.getElementById("giftScreen");
const giftOpenBtn = document.getElementById("giftOpenBtn");
const giftBox = document.getElementById("giftBox");

// ===============================
// RIPPLE EFFECT
// ===============================
function createRipple(event) {

    if (!openBtn) return;

    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const diameter = Math.max(openBtn.clientWidth, openBtn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = diameter + "px";
    circle.style.height = diameter + "px";

    circle.style.left =
        event.clientX - openBtn.getBoundingClientRect().left - radius + "px";

    circle.style.top =
        event.clientY - openBtn.getBoundingClientRect().top - radius + "px";

    openBtn.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 600);
}

// ===============================
// SCREEN 1 → SCREEN 2 (SHOW GIFT)
// ===============================

if (openBtn && giftScreen) {

    openBtn.addEventListener("click", (event) => {

        createRipple(event);

        openBtn.disabled = true;
        openBtn.innerText = "Opening Gift... 🎁";

        setTimeout(() => {

            // SHOW GIFT SCREEN (same page)
            giftScreen.classList.add("active");

        }, 1200);
    });
}

// ===============================
// GIFT BOX HOVER EFFECT
// ===============================

if (giftBox) {

    giftBox.addEventListener("mouseenter", () => {
        giftBox.style.transform = "translateY(-10px) scale(1.05)";
        giftBox.style.transition = ".4s ease";
    });

    giftBox.addEventListener("mouseleave", () => {
        giftBox.style.transform = "translateY(0) scale(1)";
    });
}

// ===============================
// OPEN GIFT → MESSAGE PAGE
// ===============================

if (giftOpenBtn && giftBox) {

    let opened = false;

    giftOpenBtn.addEventListener("click", () => {

        if (opened) return;
        opened = true;

        giftBox.classList.add("open");

        giftOpenBtn.disabled = true;
        giftOpenBtn.innerText = "✨ Opening Surprise...";

        setTimeout(() => {
            giftOpenBtn.innerText = "🎉 Surprise Ready";
        }, 1500);

        // GO TO MESSAGE PAGE
        setTimeout(() => {
            window.location.href = "message.html";
        }, 2500);
    });

    // click box also opens
    giftBox.addEventListener("click", () => {
        giftOpenBtn.click();
    });

    // keyboard support
    giftBox.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            giftOpenBtn.click();
        }
    });
}




// ===============================
// DEBUG
// ===============================
console.log("🎉 Birthday Flow Ready: index → gift → message");