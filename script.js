
const gallerySection = document.querySelector('.gallery');
const imageFilenames = [
    "photo 1.png", "photo 2.png", "photo 3.png", "photo 4.png", "photo 5.png",
    "photo 6.png", "photo 7.png", "photo 8.png", "photo 9.png", "photo 10.png",
    "photo 11.png", "photo 12.png"
];

imageFilenames.forEach(file => {
    const img = document.createElement('img');
    img.src = `assets/images/${file}`;
    img.alt = "";
    img.onclick = () => openModal(img.src);
    gallerySection.appendChild(img);
});

function openModal(src) {
    const modal = document.createElement('div');
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.background = "rgba(0,0,0,0.9)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.cursor = "pointer";
    modal.onclick = () => document.body.removeChild(modal);

    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    modal.appendChild(img);

    document.body.appendChild(modal);
}
