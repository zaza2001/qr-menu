// 1. ინტერფეისის და კატეგორიების თარგმანები
const translations = {
    ka: {
        table: "მაგიდა #4",
        searchPlaceholder: "მოძებნე კერძი ან სასმელი...",
        cartTitle: "თქვენი შეკვეთა",
        total: "სულ:",
        checkout: "შეკვეთის გაგზავნა",
        noResults: "კერძი ვერ მოიძებნა",
        categories: {
            all: "ყველა",
            cold: "ცივი კერძები",
            salads: "სალათები",
            soups: "წვნიანი კერძები",
            hot: "ცხელი კერძები",
            pastry: "ცომეული",
            khinkali: "ხინკალი",
            fish: "თევზეული",
            sides: "გარნირი",
            sauces: "სოუსი",
            drinks: "გამაგრილებელი სასმელები"
        }
    },
    en: {
        table: "Table #4",
        searchPlaceholder: "Search food or drink...",
        cartTitle: "Your Order",
        total: "Total:",
        checkout: "Send Order",
        noResults: "No items found",
        categories: {
            all: "All",
            cold: "Cold Dishes",
            salads: "Salads",
            soups: "Soups",
            hot: "Hot Dishes",
            pastry: "Pastry",
            khinkali: "Khinkali",
            fish: "Fish",
            sides: "Side Dishes",
            sauces: "Sauces",
            drinks: "Cold Drinks"
        }
    },
    ru: {
        table: "Стол #4",
        searchPlaceholder: "Поиск блюд и напитков...",
        cartTitle: "Ваш заказ",
        total: "Итого:",
        checkout: "Отправить заказ",
        noResults: "Блюда не найдены",
        categories: {
            all: "Все",
            cold: "Холодные блюда",
            salads: "Салаты",
            soups: "Супы",
            hot: "Горячие блюда",
            pastry: "Выпечка",
            khinkali: "Хинкали",
            fish: "Рыбные блюда",
            sides: "Гарниры",
            sauces: "Соусы",
            drinks: "Прохладительные напитки"
        }
    }
};

// 2. კერძების ბაზა 3-ვე ენის მხარდაჭერით
const menuData = [
    // გამაგრილებელი სასმელები
    {
        id: 1, category: "drinks", price: 2.00, image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=300",
        ka: { title: "ბორჯომი (0.5)", desc: "მინერალური წყალი" },
        en: { title: "Borjomi (0.5L)", desc: "Mineral water" },
        ru: { title: "Боржоми (0.5л)", desc: "Минеральная вода" }
    },
    {
        id: 2, category: "drinks", price: 1.00, image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=300",
        ka: { title: "წყალი (0.5)", desc: "წყაროს წყალი" },
        en: { title: "Water (0.5L)", desc: "Spring water" },
        ru: { title: "Вода (0.5л)", desc: "Родниковая вода" }
    },
    {
        id: 3, category: "drinks", price: 2.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
        ka: { title: "კოკა-კოლა (0.5)", desc: "გამაგრილებელი სასმელი" },
        en: { title: "Coca-Cola (0.5L)", desc: "Soft drink" },
        ru: { title: "Кока-Кола (0.5л)", desc: "Безалкогольный напиток" }
    },

    // წვნიანი კერძები
    {
        id: 10, category: "soups", price: 9.00, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300",
        ka: { title: "ხარჩო", desc: "საქონლის ხორცი, ბრინჯი, სანელებლები" },
        en: { title: "Kharcho", desc: "Beef, rice, spices" },
        ru: { title: "Харчо", desc: "Говядина, рис, специи" }
    },
    {
        id: 11, category: "soups", price: 9.00, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300",
        ka: { title: "ჩაქაფული ხბოს ხორცით", desc: "ხბოს ხორცი, ტარხუნა, ტყემალი, ღვინო" },
        en: { title: "Veal Chakapuli", desc: "Veal, tarragon, green plum, wine" },
        ru: { title: "Чакапули из телятины", desc: "Телятина, тархун, ткемали, вино" }
    },

    // ცომეული
    {
        id: 19, category: "pastry", price: 7.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური იმერული", desc: "ტრადიციული იმერული ხაჭაპური" },
        en: { title: "Imeretian Khachapuri", desc: "Traditional cheese bread" },
        ru: { title: "Хачапури по-имеретински", desc: "Традиционный хачапури" }
    },
    {
        id: 20, category: "pastry", price: 10.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური მეგრული", desc: "ყველით შიგნით და თავზე" },
        en: { title: "Megrelian Khachapuri", desc: "With extra cheese on top" },
        ru: { title: "Хачапури по-мегрельски", desc: "С сыром внутри и сверху" }
    },

    // ხინკალი
    {
        id: 25, category: "khinkali", price: 0.70, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300",
        ka: { title: "ხინკალი", desc: "შერეული ხორცით (საქონელი/ღორი)" },
        en: { title: "Khinkali", desc: "Minced beef and pork" },
        ru: { title: "Хинкали", desc: "Фарш из говядины и свинины" }
    },

    // ცხელი კერძები
    {
        id: 43, category: "hot", price: 69.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ხორცის დაფა", desc: "სტეიკი, კუპატი, ქაბაბი, მწვადი, კარტოფილი, მწნილი" },
        en: { title: "Meat Board", desc: "Steak, kupati, kebab, BBQ, potatoes, pickles" },
        ru: { title: "Мясная доска", desc: "Стейк, купаты, кебаб, шашлык, картофель, соленья" }
    },
    {
        id: 57, category: "hot", price: 25.00, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300",
        ka: { title: "წიწილა შქმერული", desc: "წიწილა ნივრიან-ნაღების სოუსში" },
        en: { title: "Shkmeruli Chicken", desc: "Chicken in garlic cream sauce" },
        ru: { title: "Шкмерули", desc: "Цыпленок в чесночно-сливочном соусе" }
    }
];

// 3. მდგომარეობის ცვლადები
let currentLang = 'ka';
let activeCategory = 'all';
let cart = [];

// DOM ელემენტები
const menuContainer = document.getElementById('menuContainer');
const categoriesContainer = document.getElementById('categoriesContainer');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const totalAmountElement = document.getElementById('totalAmount');
const cartCountElement = document.getElementById('cartCount');
const langSelect = document.getElementById('langSelect');

// 4. ენის ცვლილების ფუნქცია
function changeAppLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // ტექსტების განახლება
    document.getElementById('tableText').textContent = t.table;
    searchInput.placeholder = t.searchPlaceholder;
    document.getElementById('cartTitle').textContent = t.cartTitle;
    document.getElementById('totalText').textContent = t.total;
    document.getElementById('checkoutBtn').textContent = t.checkout;

    // კატეგორიის ღილაკების ტექსტების განახლება
    const categoryBtns = categoriesContainer.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        const catKey = btn.dataset.category;
        if (t.categories[catKey]) {
            btn.textContent = t.categories[catKey];
        }
    });

    // მენიუსა და კალათის ხელახლა დარენდერება არჩეულ ენაზე
    filterAndRenderMenu();
    updateCartUI();
}

// 5. მენიუს რენდერი
function renderMenu(items) {
    menuContainer.innerHTML = '';

    if (items.length === 0) {
        menuContainer.innerHTML = `<p style="text-align: center; color: #888; padding: 20px;">${translations[currentLang].noResults}</p>`;
        return;
    }

    items.forEach(dish => {
        const itemLangData = dish[currentLang] || dish['ka'];
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${itemLangData.title}" class="dish-img">
            <div class="dish-info">
                <div>
                    <h3 class="dish-title">${itemLangData.title}</h3>
                    <p class="dish-desc">${itemLangData.desc}</p>
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

// 6. ფილტრაცია (კატეგორია + ძებნა)
function filterAndRenderMenu() {
    const query = searchInput.value.toLowerCase();

    const filtered = menuData.filter(item => {
        const itemLangData = item[currentLang] || item['ka'];
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch = itemLangData.title.toLowerCase().includes(query) || 
                              itemLangData.desc.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    renderMenu(filtered);
}

// 7. კალათის ფუნქციონალი
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

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalCount;

    cartItemsContainer.innerHTML = '';
    let totalSum = 0;

    cart.forEach(item => {
        const itemLangData = item[currentLang] || item['ka'];
        totalSum += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div>
                <h4>${itemLangData.title}</h4>
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

function changeQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    updateCartUI();
}

// 8. Event Listener-ები
langSelect.addEventListener('change', (e) => {
    changeAppLanguage(e.target.value);
});

categoriesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        activeCategory = e.target.dataset.category;
        filterAndRenderMenu();
    }
});

searchInput.addEventListener('input', filterAndRenderMenu);

cartBtn.addEventListener('click', () => cartModal.classList.add('open'));
closeCart.addEventListener('click', () => cartModal.classList.remove('open'));

// საწყისი ჩატვირთვა
changeAppLanguage('ka');
// ტელეგრამის ბოტის მონაცემები
const TELEGRAM_BOT_TOKEN = '8668919731:AAG2D0G_BGaxuCVbk6cdsoriuxY-aldcfT4';
const TELEGRAM_CHAT_ID = '7033349411';

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("კალათა ცარიელია!");
        return;
    }

    // შეკვეთის ტექსტის აწყობა
    let message = `<b>🚨 ახალი შეკვეთა!</b>\n`;
    message += `<b>📌 მაგიდა:</b> #4\n\n`;
    message += `<b>🛒 შეკვეთილი კერძები:</b>\n`;

    let totalSum = 0;
    cart.forEach(item => {
        const itemLangData = item[currentLang] || item['ka'];
        const itemTotal = item.price * item.quantity;
        totalSum += itemTotal;
        message += `• ${itemLangData.title} x ${item.quantity} - ${itemTotal.toFixed(2)} ₾\n`;
    });

    message += `\n<b>💰 სულ გადასახდელი: ${totalSum.toFixed(2)} ₾</b>`;

    // Telegram API-ზე გაგზავნა
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("შეკვეთა წარმატებით გაიგზავნა!");
            cart = []; // კალათის გასუფთავება
            updateCartUI();
            cartModal.classList.remove('open');
        } else {
            alert("შეცდომა შეკვეთის გაგზავნისას.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("ქსელური შეცდომა.");
    });
});