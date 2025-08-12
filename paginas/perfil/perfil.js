// Inicialização do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, updatePassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBL1AtsLZjLzsWcILFv9207QHir_n9OnlU",
    authDomain: "talky-cs.firebaseapp.com",
    projectId: "talky-cs",
    storageBucket: "talky-cs.firebasestorage.app",
    messagingSenderId: "123937502019",
    appId: "1:123937502019:web:f0912d9303b5a823ed75f6",
    measurementId: "G-4BXNE8E12J"
};

document.addEventListener("DOMContentLoaded", () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const modalSenha = document.getElementById("modal-senha");
    const btnSalvarSenha = document.getElementById("btn-salvar-senha");
    const btnFecharModal = document.getElementById("btn-fechar-modal");

    // Abrir modal (pode ter mais de um botão)
    const botoesAbrirModal = document.querySelectorAll("#botao-abrir-modal, #abrir-modal-senha-final");
    botoesAbrirModal.forEach(botao => {
        botao?.addEventListener("click", () => {
            modalSenha?.classList.remove("hidden");
        });
    });

    // Fechar modal
    btnFecharModal?.addEventListener("click", () => {
        modalSenha?.classList.add("hidden");
    });

    // Salvar nova senha
    btnSalvarSenha?.addEventListener("click", async () => {
        const novaSenha = document.getElementById("nova-senha").value.trim();

        if (!novaSenha || novaSenha.length < 6) {
            alert("A nova senha deve ter pelo menos 6 caracteres.");
            return;
        }

        const user = auth.currentUser;

        if (user) {
            try {
                await updatePassword(user, novaSenha);
                alert("Senha atualizada com sucesso!");
                modalSenha?.classList.add("hidden");
            } catch (error) {
                console.error("Erro ao atualizar a senha:", error);
                alert("Erro ao alterar senha: " + error.message);
            }
        } else {
            alert("Usuário não autenticado.");
        }
    });

    const camposUsuario = [
        "full-name",
        "display-name",
        "email",
        "phone",
        "bio",
        "location",
        "language"
    ];

    function carregarDadosUsuario() {
        const dadosSalvos = JSON.parse(localStorage.getItem("dadosPerfil"));
        if (dadosSalvos) {
            camposUsuario.forEach(id => {
                console.log(`Id: ${id}`)
                const campo = document.getElementById(id);
                console.log(`Id: ${id}\nCampo: ${campo}`)
                if (campo && dadosSalvos[id]) {
                    if (campo.tagName === "SELECT") {
                        campo.value = dadosSalvos[id];
                    } else {
                        campo.value = dadosSalvos[id];
                    }
                }
            });
        }
    }

    function salvarDadosUsuario() {
        const dados = {};
        camposUsuario.forEach(id => {
            const campo = document.getElementById(id);
            if (campo) {
                dados[id] = campo.value;
            }
        });
        localStorage.setItem("dadosPerfil", JSON.stringify(dados));
        alert("Alterações salvas com sucesso!");
    }

    const btnSalvar = document.querySelector(".btn-salvar");
    if (btnSalvar) {
        btnSalvar.addEventListener("click", salvarDadosUsuario);
    }

    const primeiroLogin = sessionStorage.getItem('primeiro-login');
    if (!primeiroLogin) {
        camposUsuario.forEach(id => {
            const campo = document.getElementById(id);
            if (campo && campo.tagName !== "SELECT") {
                campo.value = "";
            } else if (campo && campo.tagName === "SELECT") {
                campo.selectedIndex = 0;
            }
        });
        sessionStorage.setItem('primeiro-login', 'true');
    } else {
        carregarDadosUsuario();
    }


    // Slider de visibilidade
    const slider = document.getElementById("sliderPerfil");
    const opcoes = document.querySelectorAll("#opcoesPerfil span");

    if (slider) {
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
    }



    // Modo escuro
    const checkbox = document.getElementById("dark-mode");
    const darkModeStyle = document.getElementById("style-escuro");
    const paginaPerfil = document.getElementById("perfil");

    if (!paginaPerfil) return;

    const isDark = localStorage.getItem("modo-escuro") === "true";
    if (darkModeStyle) darkModeStyle.disabled = !isDark;

    paginaPerfil.classList.add("modo-transicao");
    checkbox.checked = isDark;

    checkbox.addEventListener("change", () => {
        const ativado = checkbox.checked;
        darkModeStyle.disabled = !ativado;
        localStorage.setItem("modo-escuro", ativado);
        paginaPerfil.classList.add("modo-transicao");
        setTimeout(() => {
            paginaPerfil.classList.remove("modo-transicao");
        }, 400);
    });

    console.log("abrirModalSenha:", window.abrirModalSenha);


    window.abrirModalSenha = function () {
        const modal = document.getElementById("modal-senha");
        if (modal) modal.classList.remove("hidden");
    };

    window.fecharModalSenha = function () {
        const modal = document.getElementById("modal-senha");
        if (modal) modal.classList.add("hidden");
    };

    window.salvarNovaSenha = async function () {
        const novaSenha = document.getElementById("nova-senha")?.value;
        if (!novaSenha || novaSenha.length < 6) {
            alert("A nova senha deve ter pelo menos 6 caracteres.");
            return;
        }

        const user = getAuth().currentUser;
        if (user) {
            try {
                await updatePassword(user, novaSenha);
                alert("Senha atualizada com sucesso!");
                fecharModalSenha();
            } catch (error) {
                console.error("Erro ao atualizar a senha:", error);
                alert("Erro ao alterar senha: " + error.message);
            }
        } else {
            alert("Usuário não autenticado.");
        }
    };


});
