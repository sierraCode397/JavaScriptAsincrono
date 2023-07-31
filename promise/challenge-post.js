import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Nunca pares de aprender",
    "price": 999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://alfaventas.com.mx/cdn/shop/products/image_f3cecfb2-e8db-4555-b3b8-7df269a0e8c8_900x.heic?v=1678732629"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then((data) => console.log('Success:', data));