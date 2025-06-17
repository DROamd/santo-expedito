
const userID = "magagi2";
const userPass = "@Rca0f88kenzie";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addForm");
    const productList = document.getElementById("productList");

    let products = JSON.parse(localStorage.getItem("products")) || [];

    const saveProducts = () => {
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
    };

    const renderProducts = () => {
        productList.innerHTML = "";
        products.forEach((product, index) => {
            const li = document.createElement("li");
            li.innerHTML = \`\${product.nome} - R$\${product.preco} 
                <button onclick="removeProduct(\${index})">Remover</button>\`;
            productList.appendChild(li);
        });
    };

    window.removeProduct = (index) => {
        if (confirm("Deseja realmente remover este produto?")) {
            products.splice(index, 1);
            saveProducts();
        }
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const preco = document.getElementById("preco").value;
        const descricao = document.getElementById("descricao").value;
        const imagem = document.getElementById("imagem").files[0];

        if (!imagem) {
            alert("Selecione uma imagem!");
            return;
        }

        const reader = new FileReader();
        reader.onload = function () {
            const imgData = reader.result;

            products.push({ nome, preco, descricao, imagem: imgData });
            saveProducts();
            form.reset();
        };
        reader.readAsDataURL(imagem);
    });

    renderProducts();
});

function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const loginError = document.getElementById("loginError");

    if (user === userID && pass === userPass) {
        document.getElementById("loginArea").style.display = "none";
        document.getElementById("adminArea").style.display = "block";
    } else {
        loginError.textContent = "ID ou senha incorretos!";
    }
}
