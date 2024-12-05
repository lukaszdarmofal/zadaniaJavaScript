class ProductFilter {
    constructor(products) {
        this.products = products;
    }
  

    filterByCategory(category) {
        
        const filteredProducts = this.products.filter(product => product.category === category);
        this.displayProducts(filteredProducts);
    }

    filterByPrice(minPrice, maxPrice) {

        const filteredProducts = this.products.filter(product => product.price >= minPrice && product.price <= maxPrice);
        this.displayProducts(filteredProducts);
    }

    filterByCategoryAndPrice(category, minPrice, maxPrice) {
        
        const filteredProducts = this.products.filter(product => 
            product.category === category && product.price >= minPrice && product.price <= maxPrice
        );

        this.displayProducts(filteredProducts);
    }

    displayProducts(products) {

        if (products.length === 0) {
            console.log('Brak produktów spełniających kryteria.');
            return;
        }

        console.log('Wyniki filtracji:');
        products.forEach(({name, price, category}) => {
            console.log(`Nazwa: ${name}, Cena: ${price} PLN, Kategoria: ${category}`);
        });
    }
}
  
// Przykładowe produkty
const products = [
    { name: 'Laptop', price: 2500, category: 'Elektronika' },
    { name: 'Smartfon', price: 1500, category: 'Elektronika' },
    { name: 'Koszula', price: 120, category: 'Odzież' },
    { name: 'Buty', price: 350, category: 'Odzież' },
    { name: 'Kawa', price: 25, category: 'Spożywcze' },
    { name: 'Chleb', price: 4, category: 'Spożywcze' }
];
  
// Tworzenie obiektu klasy ProductFilter
const productFilter = new ProductFilter(products);
  
// Filtracja według kategorii "Elektronika"
productFilter.filterByCategory('Elektronika');
  
// Filtracja według zakresu cenowego od 100 do 500
productFilter.filterByPrice(100, 500);
 
// Filtracja według kategorii "Odzież" i zakresu cenowego od 100 do 500
productFilter.filterByCategoryAndPrice('Odzież', 100, 500);