function randomSon() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let countInput = document.getElementById("count").value;

    let natija = document.getElementById("natija");
    let list = document.getElementById("list");

    // eski natijalarni tozalash
    list.innerHTML = "";
    natija.innerText = "";

    // min va max majburiy
    if (isNaN(min) || isNaN(max)) {
        alert("Minimal va maksimal sonni kiriting!");
        return;
    }

    if (min >= max) {
        alert("Minimal son maksimaldan kichik bo‘lsin!");
        return;
    }

    // count ixtiyoriy
    let count = countInput === "" ? 1 : parseInt(countInput);

    if (count <= 0) {
        alert("Sonlar soni 0 dan katta bo‘lsin!");
        return;
    }

    // 1 ta bo‘lsa → yuqorida chiqadi
    if (count === 1) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        natija.innerText = random;
        return;
    }

    // ko‘p bo‘lsa → pastda chiqadi
    for (let i = 0; i < count; i++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;

        let div = document.createElement("div");
        div.className = "son";
        div.innerText = random;

        list.appendChild(div);
    }
}