document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
    const message = `Halo! Saya berminat dengan produk ${product_name} - ${product_price}! Pesan ini dikirim dari end point Whatsapp dalam rangka pembelajaran`;
    const whatsapp = `https://wa.me/6287771374185?text=${message}`;
    location.href = whatsapp;
}

function chat() {
    alert("Halo min bolehkah saya bertanya seputar produk BILEKSHOP");
}