const modal = document.getElementById("sizeModal");
const sizeContent = document.getElementById("sizeContent");
const closeBtn = document.querySelector(".close-size-modal");

const sizeData = {

  1: `
    <h2>LOOK 1</h2>
    <hr>
    <p><strong>AVAILABLE SIZE L</strong></p>

    <h3>SHIRT</h3>
    Chest : 118 cm<br>
    Length : 62 cm<br>
    Shoulder : 48 cm<br>
    Sleeve Length : 26 cm

    <h3>PANTS</h3>
    Waist : 102 cm<br>
    Hips : 110 cm<br>
    Length : 65 cm<br>
    Leg Opening : 62 cm
  `,

  2: `
    <h2>LOOK 2</h2>
<hr>
    <h3>SHIRT</h3>
    Chest : 118 cm<br>
    Length : 60 cm<br>
    Shoulder : 48 cm<br>
    Sleeve Length : 64 cm

    <h3>BLAZER</h3>
    Chest : 110 cm<br>
    Length : 52 cm<br>
    Shoulder : 48 cm<br>
    Sleeve Length : 50 cm

    <h3>PANTS</h3>
    Waist : 102 cm<br>
    Hips : 110 cm<br>
    Length : 104 cm<br>
    Leg Opening : 62 cm
  `,

  3: `
    <h2>LOOK 3</h2>
<hr>
    <h3>SHIRT</h3>
    Chest : 118 cm<br>
    Length : 62 cm<br>
    Shoulder : 48 cm<br>
    Sleeve Length 1 : 26 cm<br>
    Sleeve Length 2 : 64 cm

    <h3>PANTS</h3>
    Waist : 102 cm<br>
    Hips : 110 cm<br>
    Length : 65 cm<br>
    Leg Opening : 62 cm
  `,

  4: `
    <h2>LOOK 4</h2>
<hr>
    <h3>SHIRT</h3>
    Chest : 116 cm<br>
    Length : 69 cm<br>
    Shoulder : 48 cm<br>
    Sleeve Length : 64 cm

    <h3>BLAZER</h3>
    Chest : 110 cm<br>
    Length : 52 cm<br>
    Shoulder : 48 cm<br>
    Sleeve Length : 56 cm

    <h3>PANTS</h3>
    Waist : 102 cm<br>
    Hips : 110 cm<br>
    Length Long : 104 cm<br>
    Length Short : 65 cm<br>
    Leg Opening : 62 cm
  `,

  5: `
    <h2>LOOK 5</h2>
<hr>
    <h3>SHIRT</h3>
    Chest : 118 cm<br>
    Length : 65 cm<br>
    Shoulder : 48 cm<br>
    Sleeve Length : 64 cm

    <h3>PANTS</h3>
    Waist : 102 cm<br>
    Hips : 110 cm<br>
    Length : 65 cm<br>
    Leg Opening : 62 cm

    <h3>APRON</h3>
    All Size
  `,

  6: `
    <h2>LOOK 6</h2>
<hr>
    <h3>SHIRT</h3>
    Chest : 116 cm<br>
    Length : 69 cm<br>
    Shoulder : 48 cm<br>
    Sleeve Length : 64 cm

    <h3>PANTS</h3>
    Waist : 102 cm<br>
    Hips : 110 cm<br>
    Length : 104 cm<br>
    Leg Opening : 62 cm

    <h3>VEST</h3>
    All Size
  `
};

document.querySelectorAll(".size-guide-btn").forEach(btn => {

  btn.addEventListener("click", function() {

    const look = this.dataset.look;

    sizeContent.innerHTML = sizeData[look];

    modal.style.display = "flex";

  });

});

closeBtn.addEventListener("click", () => {

  modal.style.display = "none";

});

window.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.style.display = "none";

  }

});