const products = [
    { name: 'Apple', inStock: true },
    { name: 'Mango', inStock: true },
    { name: 'Pineapple', inStock: false },
    { name: 'Strawberry', inStock: true },
    { name: 'Banana', inStock: false },
    { name: 'Orange', inStock: true },
];


document.getElementById('searchButton').onclick = () => {
 
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    products.forEach(product => {
        if (product.name.toLowerCase().includes(query)) {
 
            const button = document.createElement('button');
            button.textContent = `${product.name} - ${product.inStock ? 'In Stock' : 'Out of Stock'}`;
            button.className = 'product-button';
            if (!product.inStock) {
                button.classList.add('disabled');
                button.disabled = true;
            }
            productContainer.appendChild(button); 
        }
    });
};
