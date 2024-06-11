const pantalla = document.querySelector(".pantalla");
const btn = document.querySelectorAll(".btn");
console.log(btn);

btn.forEach((boton) => {
  boton.addEventListener("click", () => {
    //console.log(boton.textContent);
    const bntPresionado = boton.textContent;
    console.log(bntPresionado);

    if (boton.id === "c") {
      pantalla.textContent = "000";
      return;
    }

    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent.length === "Error"
      ) {
        pantalla.textContent = "000";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }

      return;
    }

    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error";
      }

      return;
    }

    if (pantalla.textContent === "000" || pantalla.textContent === "Error") {
      pantalla.textContent = bntPresionado;
    } else {
      pantalla.textContent += bntPresionado;
    }
    console.log(pantalla.textContent);
  });
});
