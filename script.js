// Navbar toggle
let navbar = document.getElementById("navbar");

const toggle = () => {
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
        navbar.style.textAlign = "left";
    } else {
        navbar.style.display = "none";
    }
};

// Carousel
function carousel() {
    let carouselSlider = document.querySelector(".carousel-slider");
    let list = document.querySelector(".carousel-list");
    let list2 = list.cloneNode(true); // Declare list2 and clone list

    const speed = 1;
    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    carouselSlider.appendChild(list2); // Append cloned list

    function moveFirst() {
        x -= speed;

        if (Math.abs(x) <= width) {
            list.style.left = `${x}px`;
        } else {
            x = 0;
        }
    }

    function moveSecond() {
        x2 -= speed;

        if (Math.abs(x2) <= width) {
            list2.style.left = `${x2}px`;
        } else {
            x2 = width;
        }
    }

    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }

    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);

    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover);
}

// toggle(); // Call the toggle function if needed
carousel(); // Start the carousel
