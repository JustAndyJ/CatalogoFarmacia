const products = [
  { description: "Crema solar de alta protección diseñada para bloquear rayos UVB y UVA, incluso ultralargos.", 
    type: "proteccion-Solar", price: 25, name: "La Roche Posay Anthelios Uvmune 400 FPS50 50ml", 
    image: "imagenes/piel/roche.png" },

  { description: "Limpia e hidrata pieles secas y sensibles, aliviando tirantez e irritación.", 
    type: "cuidado-piel", price: 30, name: "Aceite de Ducha Bioderma Atoderm 1", 
    image: "imagenes/piel/atoderm.png" },

  { description: "Gel limpiador purifica y reduce exceso de grasa, ideal para pieles mixtas a grasas propensas a imperfecciones.", 
    type: "limpiadores", price: 30, name: "Vichy Normaderm Purifying 400ml", 
    image: "imagenes/piel/normaderm.png" },

  { description: "Gel limpiador suave para pieles sensibles. Limpia sin resecar, ayudando a mantener la barrera cutánea y dejando la piel suave.", 
    type: "limpiadores", price: 25, name: "La Roche-Posay Lipikar Gel Lavant 400ml", 
    image: "imagenes/piel/rocheblue.png" },

  { description: "Para piel grasa, reduce el brillo y controla exceso de sebo, proporciona un efecto matificante y ayudando a prevenir imperfecciones.", 
    type: "cuidado-piel", price: 30, name: "Eucerin DermoPure Oil 50ml", 
    image: "imagenes/piel/dermopure.png" },

  { description: "Protección contra sudor y malos olores, seca rápidamente y no deja manchas en la ropa. Suave y delicado para la piel.", 
    type: "desodorantes", price: 25, name: "Desodorante en barra Dove invisible dry 50g", 
    image: "imagenes/piel/dovedry.png" },

  { description: "proporciona protección duradera contra sudor y malos olores, mientras ayuda a unificar el tono de la piel.", 
    type: "desodorantes", price: 25, name: "Desodorante Dove Tono Orquidea Uniforme 50g", 
    image: "imagenes/piel/dovetono.png" },

  { description: "Proporciona protección duradera contra sudor y malos olores. Su textura cremosa asegura una aplicación suave y efectiva.", 
    type: "desodorantes", price: 25, name: "Desodorante Antitranspirante Crema Etiquet 75g", 
    image: "imagenes/piel/etiquet.png" },
    
  { description: "Con aceite de coco, nutre la piel mientras potencia el bronceado, dejándola suave y con un aroma tropical.", 
    type: "bronceador", price: 30, name: "Aceite Bronceador Hawaiian Tropic FPS 4 240ml", 
    image: "imagenes/piel/coco.png" },

  { description: "Crema Corporal que va más allá de las Ceramidas para Piel Seca y Extremadamente Seca", 
    type: "cuidado-piel", price: 25, name: "Eucerin PH5 Advance Repair Crema Corporal", 
    image: "imagenes/piel/eucerin.png" },

  { description: "Agua micelar de Bioderma ideal para limpiar y desmaquillar pieles sensibles, dejando la piel fresca y sin irritación.", 
    type: "cuidado-piel", price: 25, name: "Bioderma Créaline TS H2O 500ml", 
    image: "imagenes/piel/bioderma.png" },

  { description: "Nutre e hidrata profundamente el cabello, dejándolo suave, brillante y manejable. Ideal para cabello seco o dañado.", 
    type: "cuidado-cabello", price: 25, name: "Aceite Argan 4 Oils 120ml", 
    image: "imagenes/piel/arganoil.png" },

  { description: "Limpia a fondo y ayuda a reducir imperfecciones, regulando el exceso de grasa sin resecar la piel.", 
    type: "limpiadores", price: 25, name: "Cerave Blemish Control Cleanser 236 ml", 
    image: "imagenes/piel/CeraVe.png" },
  
  { description: "Gel limpiador espumoso que elimina suavemente el exceso de grasa y suciedad, ideal para pieles normales a grasas.", 
    type: "limpiadores", price: 25, name: "CeraVe Foaming Cleanser <br>473ml", 
    image: "imagenes/piel/seravefoaming.png" },

  { description: "Gel limpiador espumoso que elimina suavemente el exceso de grasa y suciedad, ideal para pieles normales a grasas.", 
    type: "limpiadores", price: 25, name: "CeraVe Foaming Cleanser <br>236ml", 
    image: "imagenes/piel/236ml.png" },

  ];

function renderProducts() {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="content">
      <div class="contentName">
      <h2>${product.name}</h2>
      </div>
      <p class="price">S/.${product.price}</p>
      <p class="code"> ${product.description}</p>
      <button onclick="copyCode('${product.name}  Precio: S/.${product.price}')">Copiar Nombre</button>
      </div>
    `;
    catalog.appendChild(productElement);
  });
}

function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    alert("Producto Copiado: " + code);
  });
}


// Inicializar la vista con todos los productos
renderProducts();