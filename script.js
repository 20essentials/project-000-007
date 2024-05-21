/* ======================= REFERENCIAS ======================= */
console.groupCollapsed("REFERENCE")
console.log(
  "img1 ->",
  "https://e7.pngegg.com/pngimages/2/610/png-clipart-drawing-pin-bulletin-board-paper-pushpin-s-red-button-pin-illustration-infographic-web-design-thumbnail.png"
);
console.log("img-1 ->", "https://wallhaven.cc/w/2k2gy9");
console.log("img-2 ->", "https://wallhaven.cc/w/396lmd");
console.log("img-3 ->", "https://wallhaven.cc/w/9mgjq1");
console.log("img-4 ->", "https://wallhaven.cc/w/0wv5xx");
console.log("img-5 ->", "https://wallhaven.cc/w/nzm8ky");
console.log("img-6 ->", "https://wallhaven.cc/w/ne83mo");
console.log("img-7 ->", "https://wallhaven.cc/w/zx1x1y");
console.log("img-8 ->", "https://wallhaven.cc/w/nzmqly");
console.log("img-9 ->", "https://wallhaven.cc/w/4g33dd");
console.log("img-10 ->", "https://wallhaven.cc/w/nmzox8");
console.log("img-11 ->", "https://wallhaven.cc/w/43yq6y");
console.log("img-12 ->", "https://wallhaven.cc/w/3kdvg6");
console.log("img-13 ->", "https://wallhaven.cc/w/p8d67m");
console.log("img-14 ->", "https://wallhaven.cc/w/nzw76y");
console.log("img-15 ->", "https://wallhaven.cc/w/73ewlo");
console.log("img-16 ->", "https://wallhaven.cc/w/4dm8oo");
console.log("img-17 ->", "https://wallhaven.cc/w/0pvog3");
console.log("img-18 ->", "https://wallhaven.cc/w/nrq25j");
console.log("img-19 ->", "https://wallhaven.cc/w/3k713v");
console.log("img-20 ->", "https://wallhaven.cc/w/4y3v6d");
console.log("img-21 ->", "https://wallhaven.cc/w/0j3lem");
console.log("img-22 ->", "https://wallhaven.cc/w/mdg3x1");
console.log("img-23 ->", "https://wallhaven.cc/w/gj2wge");
console.log("img-24 ->", "https://wallhaven.cc/w/j8em9w");
console.log("img-25 ->", "https://wallhaven.cc/w/4v7gxl");
console.groupEnd();

/* ======================= VARIABLES GLOBALES ======================= */

const d = document,
  $main = d.querySelector(".myMain"),
  $h2General = $main.querySelectorAll("h2"),
  $a = d.querySelectorAll("a"),
  $img = $main.querySelectorAll("img");

/* ======================= ARRAYS ======================= */

let arrayLimits = [
  [1, 10],
  [11, 20],
  [31, 40],
  [41, 50],
  [51, 60],
  [61, 70],
  [71, 80],
  [81, 90],
  [91, 100],
];

let keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let fotos = [
  "assets/fotos_with_reference_AVIF/img-1.avif",
  "assets/fotos_with_reference_AVIF/img-2.avif",
  "assets/fotos_with_reference_AVIF/img-3.avif",
  "assets/fotos_with_reference_AVIF/img-4.avif",
  "assets/fotos_with_reference_AVIF/img-5.avif",
  "assets/fotos_with_reference_AVIF/img-6.avif",
  "assets/fotos_with_reference_AVIF/img-7.avif",
  "assets/fotos_with_reference_AVIF/img-8.avif",
  "assets/fotos_with_reference_AVIF/img-9.avif",
  "assets/fotos_with_reference_AVIF/img-10.avif",
  "assets/fotos_with_reference_AVIF/img-11.avif",
  "assets/fotos_with_reference_AVIF/img-12.avif",
  "assets/fotos_with_reference_AVIF/img-13.avif",
  "assets/fotos_with_reference_AVIF/img-14.avif",
  "assets/fotos_with_reference_AVIF/img-15.avif",
  "assets/fotos_with_reference_AVIF/img-16.avif",
  "assets/fotos_with_reference_AVIF/img-17.avif",
  "assets/fotos_with_reference_AVIF/img-18.avif",
  "assets/fotos_with_reference_AVIF/img-19.avif",
  "assets/fotos_with_reference_AVIF/img-20.avif",
  "assets/fotos_with_reference_AVIF/img-21.avif",
  "assets/fotos_with_reference_AVIF/img-22.avif",
  "assets/fotos_with_reference_AVIF/img-23.avif",
  "assets/fotos_with_reference_AVIF/img-24.avif",
  "assets/fotos_with_reference_AVIF/img-25.avif",
];

/* ======================= DELEGACION DE EVENTOS ======================= */

d.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    let $anchorActivos = d.querySelectorAll(".anchor-activo");
    $anchorActivos.forEach((anchor) =>
      anchor.classList.remove("anchor-activo")
    );
    e.target.classList.add("anchor-activo");
    let $valor = Number(e.target.textContent);
    let $subArray = arrayLimits[$valor - 1];
    let unArray_ = generarArrayRandom();
    console.log(unArray_);
    for (let i = $subArray[0], a = 0; i <= $subArray[1], a < 10; i++, a++) {
      $h2General[a].textContent = "Image " + i;
      $img[a].src = fotos[unArray_[a]];
    }
  }
});

/* ======================= FUNCIONES ======================= */
function generarArrayRandom() {
  let arrayRandom = [];
  for (let i = 0; i < 10; i++) {
    do {
      valor = Math.floor(Math.random() * fotos.length);
    } while(arrayRandom.includes(valor));
    
    arrayRandom.push(valor);
  }

  return arrayRandom;
}

generarArrayRandom();