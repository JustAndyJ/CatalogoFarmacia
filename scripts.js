const products = [
  { description: "Black lace bodysuit with sexy appeal  with sexy appeal   with sexy appeal with sexy appeal with sexy appeal with sexy appeal with sexy appeal with sexy appeal with sexy appeal with sexy appeal with sexy appealwith sexy appeal  with sexy appeal v with sexy appeal", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6129.png" },
  { description: "Elegant bodysuit with floral patterns", type: "body-sexy", price: 30, name: "Body Sexy", image: "imagenes/BodySexy/6154.png" },
  { description: "Sleeveless lace bodysuit with deep neckline", type: "body-sexy", price: 30, name: "Body Sexy", image: "imagenes/BodySexy/61116.png" },
  { description: "Classic sexy bodysuit with soft mesh details", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6188.png" },
  { description: "Strapless bodysuit in bold colors", type: "body-sexy", price: 30, name: "Body Sexy", image: "imagenes/BodySexy/6141.png" },
  { description: "Full lace bodysuit with floral accentjjjjjjjjjjjjjjjjjjjjjjjjjjjjs", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6147.png" },
  { description: "Seductive bodysuit with plunging neckline", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6591.png" },
  { description: "Mesh bodysuit with elegant lace sleeves", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/65737.png" },
  { description: "Bodysuit with intricate lace details", type: "body-sexy", price: 30, name: "Body Sexy", image: "imagenes/BodySexy/60240Z.png" },
  { description: "Lace bodysuit with a delicate design", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/61124.png" },
  { description: "Classic bodysuit with subtle elegance", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/65925.png" },
  { description: "Lace bodysuit with contemporary flair", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6159.png" },
  { description: "Feminine bodysuit with soft, comfortable lace", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6164.png" },
  ];

function renderProducts() {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p class="price">S/.${product.price}</p>
      <p class="code">Código: ${product.description}</p>
      <button onclick="copyCode('${product.name}  Código: ${product.id}  Precio: S/.${product.price}')">Copiar Código</button>
    `;
    catalog.appendChild(productElement);
  });
}

function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    alert("Código copiado: " + code);
  });
}


// Inicializar la vista con todos los productos
renderProducts();