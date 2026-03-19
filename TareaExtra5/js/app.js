// Consumir API de comidas
async function obtenerComidas() {
    try {
        const respuesta = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await respuesta.json();

        mostrarComidas(data.meals);
    } catch (error) {
        console.log("Error:", error);
    }
}

// Mostrar comidas en el menú
function mostrarComidas(comidas) {
    const contenedor = document.querySelector(".menu-restaurantes");
    contenedor.innerHTML = "";

    comidas.slice(0,6).forEach(comida => {
        const div = document.createElement("div");
        div.classList.add("restaurante");

        div.innerHTML = `
            <h4>${comida.strMeal}</h4>
            <img src="${comida.strMealThumb}">
            <p>${comida.strCategory}</p>
            <button onclick="agregarPedido('${comida.strMeal}')">Agregar al pedido</button>
        `;

        contenedor.appendChild(div);
    });
}

// Simular agregar al pedido
function agregarPedido(nombre) {
    const lista = document.querySelector("#pedido ul");

    const item = document.createElement("li");
    item.textContent = nombre;

    lista.appendChild(item);
}

// Ejecutar al cargar
obtenerComidas();