// Sample Menu Data
const menuData = [
    // გამაგრილებელი სასმელები
    { id: 1, title: "ბორჯომი (0.5)", desc: "Borjomi (0.5)", price: 2.00, category: "drinks", image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=300" },
    { id: 2, title: "წყალი (0.5)", desc: "Water (0.5)", price: 1.00, category: "drinks", image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=300" },
    { id: 3, title: "კოკა-კოლა (0.5)", desc: "Coca-Cola (0.5)", price: 2.00, category: "drinks", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300" },
    { id: 4, title: "ფანტა (0.5)", desc: "Fanta (0.5)", price: 2.00, category: "drinks", image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=300" },
    { id: 5, title: "სპრაიტი (0.5)", desc: "Sprite (0.5)", price: 2.00, category: "drinks", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 6, title: "ლიმონათი (0.5)", desc: "Limonade (0.5)", price: 2.00, category: "drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300" },
    { id: 7, title: "წვენი (1 ლ)", desc: "Juice (1 L)", price: 6.00, category: "drinks", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300" },
    { id: 8, title: "წვენი (0.250 ლ)", desc: "Juice (0.250 L)", price: 2.50, category: "drinks", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300" },
    { id: 9, title: "ხილის კომპოტი (1 ლ)", desc: "Fruit compote (1 L)", price: 7.00, category: "drinks", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300" },

    // წვნიანი კერძები
    { id: 10, title: "ხარჩო", desc: "საქონლის ხორცი, ბრინჯი, სანელებლები", price: 9.00, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" },
    { id: 11, title: "ჩაქაფული ხბოს ხორცით", desc: "Chakapuli in cov meat", price: 9.00, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" },
    { id: 12, title: "ჩიხირთმა", desc: "ქათმის ხორცი, კვერცხი, მწვანილი", price: 9.00, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" },
    { id: 13, title: "ქათმის წვნიანი", desc: "ქათმის ფილე, ბოსტნეული", price: 8.00, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" },
    { id: 14, title: "სოკოს წვნიანი", desc: "სოკო, ბოსტნეული", price: 8.00, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" },
    { id: 15, title: "ბოსტნეულის წვნიანი", desc: "კარტოფილი, ჭარხალი, სტაფილო, მწვანილი", price: 6.00, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" },
    { id: 16, title: "საზაფხულო წვნიანი ცივი", desc: "კიტრი, კარტოფილი, კვერცხი, არაჟანი", price: 8.00, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" },

    // ცომეული
    { id: 17, title: "პური შოთი", desc: "Georgian Bread", price: 1.00, category: "pastry", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300" },
    { id: 18, title: "მჭადი", desc: "Mchadi", price: 1.00, category: "pastry", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300" },
    { id: 19, title: "ხაჭაპური იმერული", desc: "Imeretian khachapuri", price: 7.00, category: "pastry", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300" },
    { id: 20, title: "ხაჭაპური მეგრული", desc: "Megrelian khachapuri", price: 10.00, category: "pastry", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300" },
    { id: 21, title: "ხაჭაპური მეფურად", desc: "Royal khachapuri", price: 15.00, category: "pastry", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300" },
    { id: 22, title: "ხაჭაპური შამფურზე", desc: "Khachapuri on a spit", price: 15.00, category: "pastry", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300" },
    { id: 23, title: "აჭარული ხაჭაპური", desc: "Adjaretian khachapuri", price: 10.00, category: "pastry", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300" },
    { id: 24, title: "ლობიანი", desc: "Lobiani", price: 6.00, category: "pastry", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300" },

    // ხინკალი
    { id: 25, title: "ხინკალი", desc: "Khinkali", price: 0.70, category: "khinkali", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300" },
    { id: 26, title: "ხინკალი ყველით", desc: "Khinkali with cheese", price: 0.70, category: "khinkali", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300" },

    // თევზეული
    { id: 27, title: "ორაგულის სტეიკი", desc: "ორაგული, ბოსტნეული გრილზე", price: 22.00, category: "fish", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300" },
    { id: 28, title: "კალმახი", desc: "Trout", price: 12.00, category: "fish", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300" },
    { id: 29, title: "კალმახი ფარშირებული", desc: "ბრინჯი, ბოსტნეული", price: 16.00, category: "fish", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300" },

    // გარნირი
    { id: 30, title: "კარტოფილი ფრი", desc: "French Fries", price: 5.00, category: "sides", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300" },
    { id: 31, title: "კარტოფილი მექსიკურად", desc: "Mexican Potatoes", price: 7.00, category: "sides", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300" },
    { id: 32, title: "კარტოფილი ოჯახურად", desc: "Potatoes in a family", price: 7.00, category: "sides", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300" },
    { id: 33, title: "ახალი კარტოფილი", desc: "New potatoes", price: 7.00, category: "sides", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300" },
    { id: 34, title: "ბოსტნეული გრილზე", desc: "სტაფილო, ბულგარული, სოკო, პომიდორი", price: 10.00, category: "sides", image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a8c?w=300" },
    { id: 35, title: "ომლეტი", desc: "Omlet", price: 6.00, category: "sides", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300" },
    { id: 36, title: "გლაზუნია", desc: "Glazunia (Egg)", price: 6.00, category: "sides", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300" },
    { id: 37, title: "ომლეტი მიქსი", desc: "Omlet (Mix)", price: 12.00, category: "sides", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300" },

    // სოუსი
    { id: 38, title: "ტყემალი", desc: "Tkemali", price: 1.00, category: "sauces", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300" },
    { id: 39, title: "საწერბელი", desc: "Tomatoe Sauce", price: 1.00, category: "sauces", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300" },
    { id: 40, title: "ბაჟე", desc: "Bajhe", price: 3.00, category: "sauces", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300" },
    { id: 41, title: "კეტჩუპი", desc: "Ketchup", price: 1.00, category: "sauces", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300" },
    { id: 42, title: "მაიონეზი", desc: "Mayonnaise", price: 1.00, category: "sauces", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300" },

    // ცხელი კერძები
    { id: 43, title: "ხორცის დაფა", desc: "სტეიკი, კუპატი, ქაბაბი, მწვადი, კარტოფილი, მწნილი", price: 69.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 44, title: "ხბოს ხორცი მეფურად", desc: "ხბოს ხორცი, სოკო, სულგუნი, პომიდორი", price: 22.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 45, title: "ხბოს მწვადი კეცზე", desc: "Veal barbecue on a pan", price: 15.00, category: "hot", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 46, title: "ღორის მწვადი შამფურზე", desc: "Pork barbecue on a spit", price: 12.00, category: "hot", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 47, title: "ქათმის მწვადი შამფურზე", desc: "Chicken barbecue on a spit", price: 10.00, category: "hot", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 48, title: "ოჯახური ღორის ხორცით", desc: "ღორის ხორცი, კარტოფილი", price: 14.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 49, title: "ოჯახური ხბოს ხორცით", desc: "ხბოს ხორცი, კარტოფილი", price: 16.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 50, title: "ოჯახური ქათმის ხორცით", desc: "ქათმის ხორცი, კარტოფილი", price: 14.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 51, title: "ოჯახური სოკოთი", desc: "სოკო, კარტოფილი", price: 12.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 52, title: "ხბოს ოსტრი", desc: "Ostri calfs", price: 9.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 53, title: "სოკოს ჩაშუშული", desc: "Braised mushroom", price: 9.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 54, title: "ღორის კუჭმაჭი კეცზე", desc: "Pork Kuchmachi on a pan", price: 10.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 55, title: "კუპატი კეცზე", desc: "Kupati on a pan", price: 9.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 56, title: "ქაბაბი", desc: "Kebab", price: 9.00, category: "hot", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 57, title: "წიწილა შქმერული", desc: "წიწილა, ნაღები", price: 25.00, category: "hot", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300" },
    { id: 58, title: "ჩახოხბილი", desc: "წიწილა, ბოსტნეული, სანელებლები, ნიგოზი", price: 26.00, category: "hot", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300" },
    { id: 59, title: "სოკო კეცზე", desc: "Mushrooms on a pan", price: 9.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 60, title: "სოკო სულგუნით კეცზე", desc: "Mushrooms with sulguni on a pan", price: 11.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 61, title: "ლობიო ქოთანში", desc: "ლობიო, მჭადი, მწნილი", price: 10.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 62, title: "აჯაფსანდალი ქოთანში", desc: "აჯაფსანდალი, მჭადი, ყველი", price: 10.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 63, title: "ბოსტნეულის მწვადი", desc: "სოკო, ბულგარული, პომიდორი, ბადრიჯანი", price: 12.00, category: "hot", image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a8c?w=300" },
    { id: 64, title: "კიევური კოტლეტი", desc: "კოტლეტი, კარტოფილის ფრი, ბოსტნეული", price: 17.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 65, title: "ბეფსტროგანოვი", desc: "ხბოს ხორცი, სოკო, ნაღები", price: 17.00, category: "hot", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },

    // სალათები
    { id: 66, title: "სალათი კიტრი-პომიდვრის", desc: "Cucumber-tomatoes Salad", price: 6.00, category: "salads", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 67, title: "სალათი კიტრი-პომიდვრის ნიგვზით", desc: "Cucumber-tomatoes Salad with walnuts", price: 8.00, category: "salads", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 68, title: "სალათი \"ცეზარი\"", desc: "ქათმის ფილე, სალათის ფურცელი, პარმეზანი, სოუსი", price: 12.00, category: "salads", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=300" },
    { id: 69, title: "სალათი ბერძნული", desc: "კიტი, პომიდორი, ბულგარული, ზეთისხილის", price: 8.00, category: "salads", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 70, title: "სალათი ქათმის", desc: "ქათმის ფილე, ბულგარული, ხახვი, მაიონეზი", price: 8.00, category: "salads", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 71, title: "სალათი \"ფახიტასი\"", desc: "ქათმის ხორცი, ბოსტნეული, სოუსი", price: 14.00, category: "salads", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 72, title: "სალათი \"რეტრო\"", desc: "ქათმის ფილე, ლორი, ძეხვი, კვერცხი, მაიონეზი", price: 11.00, category: "salads", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 73, title: "სალათი \"თავადური\"", desc: "ვაშლი, ქიშმიში, ჭარხალი, ქლიავის ჩირი, არაჟანი", price: 8.00, category: "salads", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },

    // ცივი კერძები
    { id: 74, title: "ისპანახის ფხალი", desc: "Spinach Pkhsali", price: 7.00, category: "cold", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 75, title: "სტაფილოს ფხალი", desc: "Carrot Pkhali", price: 6.00, category: "cold", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 76, title: "წითელი ფხალი", desc: "Beetroot Pkhali", price: 6.00, category: "cold", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 77, title: "ბადრიჯნის ფხალი", desc: "Eggplant Pkhali", price: 7.00, category: "cold", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 78, title: "ფხალის ასორტი", desc: "Pkhali assort", price: 9.00, category: "cold", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 79, title: "მწნილის ასორტი", desc: "Pickles assort", price: 7.00, category: "cold", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
    { id: 80, title: "ყველი სულგუნი", desc: "Sulguni Cheese", price: 7.00, category: "cold", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300" },
    { id: 81, title: "ყველი იმერული", desc: "Imeretian Cheese", price: 6.00, category: "cold", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300" },
    { id: 82, title: "ყველის ასორტი", desc: "სულგუნი, შებოლილი სულგუნი, იმერული ყველი", price: 10.00, category: "cold", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300" }
];

let cart = [];

// DOM Elements
const menuContainer = document.getElementById('menuContainer');
const categoriesContainer = document.getElementById('categoriesContainer');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const totalAmountElement = document.getElementById('totalAmount');
const cartCountElement = document.getElementById('cartCount');

// Render Menu Items
function renderMenu(items) {
    menuContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuContainer.innerHTML = `<p style="text-align: center; color: #888; padding: 20px;">კერძი ვერ მოიძებნა</p>`;
        return;
    }

    items.forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${dish.title}" class="dish-img">
            <div class="dish-info">
                <div>
                    <h3 class="dish-title">${dish.title}</h3>
                    <p class="dish-desc">${dish.desc}</p>
                </div>
                <div class="dish-bottom">
                    <span class="dish-price">${dish.price.toFixed(2)} ₾</span>
                    <button class="add-btn" onclick="addToCart(${dish.id})">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        menuContainer.appendChild(dishCard);
    });
}

// Add to Cart
function addToCart(id) {
    const dish = menuData.find(item => item.id === id);
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...dish, quantity: 1 });
    }

    updateCartUI();
}

// Update Cart UI & Totals
function updateCartUI() {
    // Total Items Count
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalCount;

    // Cart Modal List
    cartItemsContainer.innerHTML = '';
    let totalSum = 0;

    cart.forEach(item => {
        totalSum += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div>
                <h4>${item.title}</h4>
                <small>${item.price.toFixed(2)} ₾</small>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    totalAmountElement.textContent = `${totalSum.toFixed(2)} ₾`;
}

// Change Quantity in Cart
function changeQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    updateCartUI();
}

// Category Filter Event
categoriesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        const category = e.target.dataset.category;
        if (category === 'all') {
            renderMenu(menuData);
        } else {
            const filtered = menuData.filter(item => item.category === category);
            renderMenu(filtered);
        }
    }
});

// Search Input Event
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = menuData.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query)
    );
    renderMenu(filtered);
});

// Cart Open/Close Events
cartBtn.addEventListener('click', () => cartModal.classList.add('open'));
closeCart.addEventListener('click', () => cartModal.classList.remove('open'));

// Initial Render
renderMenu(menuData);