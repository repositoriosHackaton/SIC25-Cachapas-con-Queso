const chatButton = document.getElementById("chat-button");
const chatWindow = document.getElementById("chat-window");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");
const $flecha = document.getElementById("flecha");

const arregloLocales = [
  {
    nombre: "Mercado 1",
    productos: [
      "levadura nutricional",
      "tomate",
      "miel de abeja",
      "flores de calabaza",
      "col",
      "carne",
      "salsa de chile rojo",
      "macarrones",
      "melaza",
      "jugo de limón verde",
      "jamón",
      "pumpkin pie spice",
      "frutos secos",
      "chirivías",
      "banana",
      "english muffin",
      "salsa de soya",
      "clavo",
      "pimientos",
      "aceite",
      "ajo",
      "papa blanca",
      "pepino",
      "pimiento dulce rojo",
      "rábanos",
      "clavo de olor",
      "parsnips",
      "pavo molido",
      "leche",
      "bok choy",
      "melón",
      "queso ricota",
      "champiñones",
      "salsa de barbacoa",
      "cuscús de trigo integral",
      "orégano",
      "queso gratinado",
      "cereal de avena",
      "sopa de crema de pollo",
      "duraznos",
      "judías verdes",
      "penne",
      "pepper jack",
      "salchichón polaco",
      "fresas",
      "arándanos rojos",
      "condimento para tacos",
      "huevos",
      "buttermilk",
      "aceite vegetal",
      "cebolla",
      "crema",
      "chile rojo",
      "tortillas de maíz",
      "almendras",
      "hielo",
      "queso feta",
      "choclo",
      "hojas de mostaza",
      "sandía",
      "harina masa",
      "condimento para pastel de calabaza",
      "okra",
      "hojuelas de chile rojo",
      "plátanos",
      "nueces de la india",
      "col china",
      "cerdo",
      "chícharos",
      "fruta",
      "arroz",
      "lentejas",
      "chives",
      "queso crema",
      "semillas de sésamo",
      "calabacitas",
      "manzanas",
      "salvia",
    ],
  },
  {
    nombre: "Mercado 2",
    productos: [
      "camote",
      "camarones",
      "cornmeal",
      "espinacas",
      "pimienta cayena",
      "nueces",
      "suero de leche",
      "azúcar moreno",
      "hojuelas de pimienta roja",
      "mantequilla",
      "calabaza",
      "vinagre de sidra",
      "agua",
      "leche en polvo",
      "pimientos dulces",
      "pasta manicotti",
      "salsa de tomates",
      "panecillo",
      "consomé de pollo",
      "dill weed",
      "consomé de vegetal",
      "aderezo italiano",
      "pescado",
      "crema agria",
      "pacanas",
      "manzana",
      "chile campana verde",
      "cayenne",
      "aceitunas",
      "higos",
      "cacao",
      "fruta seca",
      "albahaca",
      "calabacín",
      "puré de fruta",
      "mantequilla de cacahuate",
      "marionberries",
      "habichuelas",
      "arroz integral",
      "bayas",
      "zanahorias",
      "queso monterey jack",
      "bellota",
      "caldo de verduras",
      "fruta deshidratada",
      "col forrajera",
      "perejil",
      "chile morrón",
      "curry en polvo",
      "frijoles negros",
      "cebolla blanca",
      "papa",
      "pasta rotini",
      "pretzels",
      "condimento criollo",
      "panecillos ingleses",
      "cereal integral",
      "huevo",
      "aceite de sésamo",
      "calabacita",
      "pasta ramen",
      "chiles verdes",
      "walnuts",
      "lechuga",
      "consomé",
    ],
  },
  {
    nombre: "Mercado 3",
    productos: [
      "polvos de hornear",
      "cereal de arroz tostado",
      "acelga",
      "menta",
      "arroz moreno",
      "maicena",
      "caldo vegetal",
      "arándanos",
      "esencia de vainilla",
      "coliflor",
      "pasas",
      "betabeles",
      "puerros",
      "aceite de maíz",
      "tortillas de trigo integral",
      "coco",
      "puré de calabaza",
      "jengibre",
      "comino",
      "elote",
      "salmón",
      "ajo en polvo",
      "polvo de hornear",
      "leche de soya",
      "cerezas",
      "huachinango",
      "bicarbonato de soda",
      "aceite de canola",
      "arándanos azules",
      "pimienta negra",
      "bananas",
      "tofu",
      "salsa de chili",
      "harina de maíz",
      "aderezo para ensalada",
      "epazote",
      "condimento",
      "yogur",
      "canela",
      "tomate guisado",
      "nueces de castilla",
      "gorda",
      "carne molida",
      "pimiento morrón",
      "espaguetis",
      "repollo",
      "yogur de limón",
      "pasta para lasaña",
      "romero",
      "arándanos secos",
      "espárragos",
      "apio",
      "repollo morado",
      "kielbasa",
      "queso",
      "kale",
      "arvejas",
      "condimento cajún",
      "sustituto de huevo",
      "tabasco",
      "remolachas",
      "espinaca",
      "pechuga de pollo",
      "fideos ramen",
      "cuscús",
      "hierbas italianas",
      "sopa de crema de hongos",
      "limón",
      "crema de cacahuate",
    ],
  },
  {
    nombre: "Mercado 4",
    productos: [
      "pasta integral",
      "cebollines",
      "hojas verdes",
      "salsa",
      "tortilla de harina integral",
      "queso mozarela",
      "tomillo",
      "zanahoria",
      "chile morrón verde",
      "yogur griego",
      "cúrcuma",
      "pimiento dulce",
      "caracoles",
      "pasta",
      "caldo de vegetales",
      "cereal de hojuelas de maíz",
      "queso monterrey jack",
      "macarrón",
      "salsa de espagueti",
      "miel",
      "peras",
      "páprika",
      "cranberries",
      "azúcar blanca",
      "honeydew",
      "semillas",
      "polvo para hornear",
      "chile jalapeño",
      "crema de maní",
      "frijoles lima",
      "pimiento",
      "granola",
      "consomé de vegetales",
      "queso cottage",
      "filete de pescado",
      "mantequilla de maní",
      "harina",
      "berenjena",
      "salsa de tomate",
      "chiles rojos",
      "jugo de manzana",
      "ralladura de limón",
      "tocino",
      "cilantro",
      "jugo de limón",
      "delicata",
      "chile verde",
      "aceite de oliva",
      "queso mozzarella",
      "yogurt",
      "queso cheddar",
      "sal sazonada",
      "extracto de almendras",
      "castañas de agua",
      "carne de cerdo",
      "coles de bruselas",
      "queso suizo",
      "azúcar morena",
      "melón verde",
      "aceite de ajonjolí",
      "pimientos morrones",
      "nuez moscada",
      "claras de huevo",
      "chile serrano",
      "leche de almendras",
      "salsa picante",
      "chile molido",
      "pan",
      "castañas de cajú",
      "aderezo ranch",
      "pasta penne",
      "frijoles pintos",
      "cebolla verde",
      "pasta de concha",
    ],
  },
  {
    nombre: "Mercado 5",
    productos: [
      "tomates",
      "pimiento morrón verde",
      "salsa para pasta",
      "margarina",
      "frijoles blancos",
      "tilapia",
      "puré de manzana",
      "pimientos morrón verdes",
      "arándanos rojos secos",
      "mayonesa",
      "salsa de arándanos rojos",
      "pasta de tahini",
      "frijoles rojos",
      "espagueti de trigo integral",
      "salsa de pepinillo",
      "guisantes",
      "ejotes",
      "camotes",
      "harina integral",
      "maíz",
      "plátano",
      "tahini",
      "jugo de mango",
      "curry",
      "jugo de naranja",
      "aceitunas negras",
      "naranjas",
      "clavos de olor",
      "vinagre",
      "pimientos rojos",
      "arroz blanco",
      "eneldo",
      "chile campana",
      "ají en polvo",
      "pimentón",
      "col rizada",
      "apio de campo",
      "brócoli",
      "frijoles refritos",
      "pavo",
      "sal",
      "hojas de wantán",
      "migajas de pan",
      "cubitos de pan",
      "vinagre de arroz",
      "cebollín",
      "pera",
      "carne molida de res",
      "quinoa",
      "pollo",
      "arroz salvaje",
      "pepinos",
      "caldo de pollo",
      "frambuesas",
      "kiwi",
      "pimiento morrón rojo",
      "collard greens",
      "salsa para enchiladas",
      "puerro",
      "bicarbonato de sodio",
      "avena",
      "chiles",
      "pan integral",
      "pimientas de jamaica",
      "cebolla en polvo",
      "kiwis",
    ],
  },
  {
    nombre: "Mercado 6",
    productos: [
      [
        "atún",
        "semillas de girasol",
        "jugo de lima",
        "pasta de tomate",
        "tortillas de harina",
        "butternut",
        "cebollas",
        "queso parmesano",
        "orzo",
        "kidney",
        "piña",
        "azúcar",
        "harina blanca",
        "pepinillo",
        "mostaza",
        "pimiento verde",
        "tortillas",
        "verdura",
        "hongos",
        "filetes de bacalao",
        "betarragas",
        "pasta de semillas de sésamo",
        "harina de trigo integral",
        "condimento italiano",
        "pimienta",
        "jugo de piña",
        "salsa de pizza",
        "pechugas de pollo",
        "cheddar",
        "queso oaxaca",
        "sopa de pollo",
        "pimienta de cayena",
        "frijoles",
        "chirivía",
        "pico de gallo",
        "swiss chard",
        "pimienta roja",
        "cebolla roja",
        "verduras",
        "berza",
        "leche evaporada",
        "hojuelas de cereal",
        "garbanzos",
        "pimiento rojo",
        "vainilla",
        "carne de res",
        "migas de pan",
        "zucchini",
        "naranja",
        "consomé vegetal",
        "cáscara de limón",
        "frijoles mung",
        "lomo de res",
        "frijoles de ojo negro",
        "calabacines",
        "ñame",
        "papas",
        "vegetales",
        "bacalao",
        "chile pimiento",
        "mango",
        "jengibre en polvo",
        "mandarinas",
        "hortalizas verdes",
        "guineo",
        "frijoles kidney",
        "cebada",
        "moras",
        "cayena",
        "aguacate",
        "pasta de huevo",
        "filetes de pescado",
        "yogur de piña colada",
        "caldo",
        "chicharos",
        "chile en polvo",
        "rotini",
        "trigo bulgur",
      ],
    ],
  },
];

const arregloRecetasPreCargadas = [
  {
    cadena: "Receta de Ejemplo",
    categoria: "Desayuno",
    enlace:
      "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
    nombre: "Receta0",
    imagenURL: "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
    ingredientes:
      "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
    calorias: 5,
    grasa: 5,
    colesterol: 5,
    sodio: 5,
    carbohidratos: 5,
    proteina: 5,
    vitaminaA: 5,
    vitaminaC: 5,
    vitaminaD: 5,
    calcio: 555,
    hierro: 5,
    potasio: 555,
  },
  {
    cadena: "Receta de Ejemplo",
    categoria: "Desayuno",
    enlace:
      "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
    nombre: "Receta1",
    imagenURL: "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
    ingredientes:
      "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
    calorias: 5,
    grasa: 5,
    colesterol: 5,
    sodio: 5,
    carbohidratos: 5,
    proteina: 5,
    vitaminaA: 5,
    vitaminaC: 5,
    vitaminaD: 5,
    calcio: 555,
    hierro: 5,
    potasio: 555,
  },
];

function sendMessage() {
  const message = messageInput.value;
  if (message) {
    chatMessages.innerHTML += `<div class="user-message"><p >${message}</p></div>`;
    obtenerRecetaJson(message);
    messageInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function chatSystem() {
  chatButton.addEventListener("click", () => {
    // Chat window display flex y focus input
    chatWindow.style.display = "flex";
    messageInput.focus();
    if (!$flecha.classList.contains("display-none"))
      $flecha.classList.add("display-none");
  });
  // Cerrar Chad dando click afuera
  chatWindow.addEventListener("click", (event) => {
    // Chat window display none click afuera
    chatWindow.style.display = "none";
    event.stopPropagation();
  });
  // Stop Propagation
  chatMessages.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  messageInput.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  sendButton.addEventListener("click", (event) => {
    // Enviar mensaje click
    event.stopPropagation();
    sendMessage();
  });

  messageInput.addEventListener("keydown", (event) => {
    // Enviar mensaje enter
    if (event.key === "Enter") {
      sendMessage();
      event.preventDefault();
    }
  });
}

function cargaRecetas() {
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("history-msg")) {
      const idMensaje = event.target.id;
      const numeroID = parseInt(idMensaje.replace("receta-aside-", ""));
      cargarRecetaMain(idMensaje, numeroID);
    }
  });
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("tab")) {
      if (event.target.id !== "tab-noticias") {
        const idMensaje = event.target.id;
        const numeroID = parseInt(idMensaje.replace("tab-", ""));
        cargarRecetaMain(idMensaje, numeroID);
      } else {
        $viejaTab = document.querySelector(".focusTab");
        $nuevaTab = document.getElementById("tab-noticias");

        $viejaTab.classList.remove("focusTab");
        $nuevaTab.classList.add("focusTab");

        $contenedor = document.getElementById("main-content");
        if ($contenedor)
          $contenedor.innerHTML = `<div class="main-zone">
          <div class="main-left">
            <div class="bloque bloque-1">
              <h2>El intestino es el "segundo cerebro"</h2>
              <p>
                El intestino contiene una red compleja de neuronas y bacterias
                que influyen en nuestro estado de ánimo, sistema inmunológico y
                salud en general. Una dieta rica en fibra, probióticos y
                alimentos prebióticos puede promover un microbioma intestinal
                saludable y mejorar el bienestar mental y físico.
              </p>
            </div>
            <div class="bloque bloque-2">
              <h2>Los colores de los alimentos indican sus nutrientes</h2>
              <p>
                Las frutas y verduras de diferentes colores contienen diferentes
                vitaminas, minerales y antioxidantes. Por ejemplo, los alimentos
                rojos como los tomates y las fresas son ricos en licopeno, un
                antioxidante que puede proteger contra enfermedades cardíacas y
                cáncer. Los alimentos verdes como las espinacas y el brócoli son
                ricos en vitamina K, folato y luteína, que son importantes para
                la salud ocular y la función cognitiva.
              </p>
            </div>
          </div>
          <div class="main-right">
            <div class="bloque bloque-3">
              <h2>Las grasas saludables son esenciales</h2>
              <p>
                Contrario a la creencia popular, las grasas saludables son
                esenciales para una buena salud. Las grasas monoinsaturadas y
                poliinsaturadas, que se encuentran en alimentos como el
                aguacate, los frutos secos, las semillas y el pescado graso,
                pueden reducir el colesterol malo, proteger contra enfermedades
                cardíacas y mejorar la función cerebral.
              </p>
            </div>
            <div class="bloque bloque-4">
              <h2>La hidratación es clave</h2>
              <p>
                El agua es esencial para todas las funciones corporales,
                incluida la digestión, la absorción de nutrientes, la regulación
                de la temperatura y la eliminación de toxinas. Beber suficiente
                agua puede mejorar la energía, la concentración y la salud en
                general. La cantidad de agua que necesitas varía según tu peso,
                nivel de actividad y clima, pero una buena regla general es
                beber al menos 8 vasos de agua al día.
              </p>
            </div>
          </div>
        </div>`;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  chatSystem();
  cargaRecetas();
});

function cargarRecetaMain(cadenaTexto, numeroID) {
  const $tabs = document.querySelectorAll(".tab");

  let band = true;
  for (let i = 0; i < $tabs.length; i++) {
    const $tab = $tabs[i];
    const id = parseInt($tab.id.replace("tab-", ""));
    if (numeroID === id) {
      band = false;
      break;
    }
  }

  if (band) {
    console.log("No existe");
    // Si no existe una Tab
    const datos = arregloRecetasPreCargadas[numeroID];

    crearTab("tabs-head", datos.nombre, numeroID, datos);
    cargarJsonMain("main-content", datos);
    focusTab(numeroID);
    agregarNegocios(datos.ingredientes);

    return datos;
  } else {
    console.log("Existe");
    // Si existe una tab
    cargarJsonMain("main-content", arregloRecetasPreCargadas[numeroID]);
    focusTab(numeroID);
  }
}

function cargarJsonMain(idContenedor, recetaJson) {
  $contenedor = document.getElementById(idContenedor);
  if ($contenedor)
    $contenedor.innerHTML = `<div class="main-zone">
          <div class="main-left">
            <div class="img-container">
              <img src="${recetaJson.imagenURL}" alt="" />
            </div>
            <div class="history-msg main-nutri-card">
              <div class="nutri-values">
                <div class="values">
                  <span class="total-cal">${recetaJson.calorias}Kcal</span>
                  <span class="fw-big"
                    ><span>Prot</span> <span>${recetaJson.proteina}gr</span></span
                  >
                  <span class="fw-big"
                    ><span>Carbs</span> <span>${recetaJson.carbohidratos}gr</span></span
                  >
                  <span class="fw-big"
                    ><span>Grasa</span> <span>${recetaJson.grasa}gr</span></span
                  >
                  <span><span>Colesterol</span> <span>${recetaJson.colesterol}mg</span></span>
                  <span><span>Sodio</span> <span>${recetaJson.sodio}mg</span></span>
                  <span><span>Vitamina A</span> <span>${recetaJson.vitaminaA}mcg</span></span>
                  <span><span>Vitamina C</span> <span>${recetaJson.vitaminaC}mg</span></span>
                  <span><span>Vitamina D</span> <span>${recetaJson.vitaminaD}mcg</span></span>
                  <span><span>Calcio</span> <span>${recetaJson.calcio}mg</span></span>
                  <span><span>Hierro</span> <span>${recetaJson.hierro}mg</span></span>
                  <span><span>Potasio</span> <span>${recetaJson.potasio}mg</span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="main-right">
            <h2>${recetaJson.nombre}</h2>
            <ul id="ingredientes">
            </ul>
            <ul id="negocios"></ul>
          </div>
          <a class="boton-receta"  href="${recetaJson.enlace}" target="_blank" rel="noopener noreferrer">Ir a ver la receta</a>
        </div>
      </div>`;

  $ingredientes = document.getElementById("ingredientes");

  let listaIngredientes = "";

  ingredientes = recetaJson.ingredientes.split("|");

  ingredientes.forEach((ingrediente) => {
    listaIngredientes += `<li>${ingrediente}</li>`;
  });

  $ingredientes.innerHTML = listaIngredientes;
}

function crearTab(idContenedor, titulo, numeroID, recetaJson) {
  const $contenedor = document.getElementById(idContenedor);

  if ($contenedor) {
    const nuevoTab = document.createElement("div");
    nuevoTab.className = "tab";

    const tituloTab = document.createElement("h2");
    tituloTab.textContent = titulo;

    nuevoTab.id = `tab-${numeroID}`;

    nuevoTab.appendChild(tituloTab);
    $contenedor.appendChild(nuevoTab);

    arregloRecetasPreCargadas[numeroID] = recetaJson;
  } else {
    console.error(`No se encontró el contenedor con ID: ${idContenedor}`);
  }
}

function focusTab(numeroID) {
  $viejaTab = document.querySelector(".focusTab");
  $nuevaTab = document.getElementById(`tab-${numeroID}`);

  $viejaTab.classList.remove("focusTab");
  $nuevaTab.classList.add("focusTab");
}

function crearHistoryMsg(numeroID, recetaJson) {
  const $aside = document.querySelector("aside");

  $aside.innerHTML += `
      <div id="receta-aside-${numeroID}" class="history-msg">
        <div class="history-title-box">
          <h3>${recetaJson.nombre}</h3>
        </div>
        <div class="nutri-values">
          <div class="values">
            <span class="total-cal">${recetaJson.calorias}KCal</span>
            <span>Prot ${recetaJson.proteina}gr</span>
            <span>Carbs ${recetaJson.carbohidratos}gr</span>
            <span>Gras ${recetaJson.grasa}gr</span>
            <span>...</span>
          </div>
        </div>
      </div>`;

  arregloRecetasPreCargadas.push(recetaJson);
}

// async function obtenerRecetaJson(cadenaTexto) {
//   const url = `/obtener_receta_json?cadena_texto=${encodeURIComponent(
//     cadenaTexto
//   )}`;

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const datos = await response.json();
//     // crearHistoryMsg()
//     return datos;
//   } catch (error) {
//     console.error("Error al obtener la receta:", error);
//     return null; // O puedes manejar el error de otra manera
//   }
// }

async function obtenerRecetaJson(cadenaTexto) {
  const url = `http://127.0.0.1:8000/obtener_receta_json?cadena_texto=${encodeURIComponent(
    cadenaTexto
  )}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const datos = await response.json();
    crearHistoryMsg(arregloRecetasPreCargadas.length, datos);
    console.log(datos);
  } catch (error) {
    console.error("Error al obtener la receta:", error);
    return null; // O puedes manejar el error de otra manera
  }
}

async function obtenerIngredientes(cadenaTexto) {
  const url = `http://127.0.0.1:8000/obtener_ingredientes?cadena_texto=${encodeURIComponent(
    cadenaTexto
  )}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const datos = await response.json();
    console.log(datos);
    return datos;
  } catch (error) {
    console.error("Error al obtener los ingredientes:", error);
    return null; // O puedes manejar el error de otra manera
  }
}

// async function obtenerRecetaJson(cadenaTexto) {
//   const url = `http://127.0.0.1:8000/obtener_receta_json`;
//   const arregloTitulos = extraerTitulosRecetas(arregloRecetasPreCargadas);

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ cadena: cadenaTexto, arreglo: arregloTitulos }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const datos = await response.json();
//     crearHistoryMsg(arregloRecetasPreCargadas.length, datos);
//     console.log(datos);
//   } catch (error) {
//     console.error("Error al obtener la receta:", error);
//     return null; // O puedes manejar el error de otra manera
//   }
// }

function extraerTitulosRecetas(arregloDeJsons) {
  const nombresExtraidos = [];

  for (const objeto of arregloDeJsons) {
    if (objeto.hasOwnProperty("nombre")) {
      nombresExtraidos.push(objeto["nombre"]);
    }
  }

  return nombresExtraidos;
}

async function agregarNegocios(cadena) {
  $negocios = document.getElementById("negocios");

  let listaNegocios = "";

  ingredientesArreglo = await obtenerIngredientes(cadena);

  ingredientesArreglo.forEach((ingrediente) => {
    for (let i = 0; i < arregloLocales.length; i++) {
      if (arregloLocales[i].productos.includes(ingrediente)) {
        listaNegocios += `<li>${arregloLocales[i].nombre}: ${ingrediente}</li>`;
      }
    }
  });

  $negocios.innerHTML = listaNegocios;
}
