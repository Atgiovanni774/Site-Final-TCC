 const slider = document.getElementById("sliderPerfil");
  const opcoes = document.querySelectorAll("#opcoesPerfil span");

  slider.addEventListener("input", function () {
    const valor = parseInt(this.value);
    opcoes.forEach((span) => {
      span.classList.remove("ativo");
    });
    const selecionado = document.querySelector(`#opcoesPerfil span[data-index="${valor}"]`);
    if (selecionado) {
      selecionado.classList.add("ativo");
    }
  });

