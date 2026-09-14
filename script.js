// Sample Menu Data
const menuData = [
    {
        id: 1,
        title: "ბურგერი ჩიზბურგერი",
        desc: "საქონლის ხორცი, ჩედარის ყველი, მწნილი, სპეციალური სოუსი",
        price: 18.50,
        category: "mains",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300"
    },
    {
        id: 2,
        title: "პიცა მარაგერიტა",
        desc: "ტომატის სოუსი, მოცარელა, ახალი ბაზილიკი",
        price: 22.00,
        category: "mains",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300"
    },
    {
        id: 3,
        title: "ფრი კარტოფილი",
        desc: "ხრაშუნა კარტოფილი ფრი კეტჩუპთან ერთად",
        price: 7.00,
        category: "starters",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300"
    },
    {
        id: 4,
        title: "ცივი ყავა ლატე",
        desc: "ესპრესო, ცივი რძე, ყინული",
        price: 8.50,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300"
    }
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