const banner = document.querySelector(".banner-container");

banner.addEventListener("click", handleClick);
const url = "https://www.dreams.co.uk/sale/all-sale";

function handleClick() {
    document.location.href = url;
}