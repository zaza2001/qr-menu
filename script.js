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

// 2. კერძების სრული ბაზა 3-ვე ენის მხარდაჭერით
const menuData = [
    // --- ცივი კერძები (COLD DISHES) ---
    {
        id: 1, category: "cold", price: 9.50, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
        ka: { title: "ბადრიჯნის ფხალი", desc: "ბადრიჯანი ნიგვზით" },
        en: { title: "Eggplant Pkhali", desc: "Eggplant with walnuts" },
        ru: { title: "Пхали из баклажан", desc: "Баклажаны с грецкими орехами" }
    },
    {
        id: 2, category: "cold", price: 9.00, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
        ka: { title: "ისპანახის ფხალი", desc: "ისპანახი ნიგვზით" },
        en: { title: "Spinach Pkhsali", desc: "Spinach with walnuts" },
        ru: { title: "Пхали из шпината", desc: "Шпинат с грецкими орехами" }
    },
    {
        id: 3, category: "cold", price: 8.00, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
        ka: { title: "წითელი ფხალი", desc: "ჭარხალი ნიგვზით" },
        en: { title: "Beetroot Pkhali", desc: "Beetroot with walnuts" },
        ru: { title: "Пхали из свеклы", desc: "Свекла с грецкими орехами" }
    },
    {
        id: 4, category: "cold", price: 7.00, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
        ka: { title: "სტაფილოს ფხალი", desc: "სტაფილო ნიგვზით" },
        en: { title: "Carrot Pkhali", desc: "Carrot with walnuts" },
        ru: { title: "Пхали из моркови", desc: "Морковь с грецкими орехами" }
    },
    {
        id: 5, category: "cold", price: 12.00, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
        ka: { title: "ყველი სულგუნი", desc: "სულგუნი" },
        en: { title: "Sulguni Cheese", desc: "Sulguni cheese" },
        ru: { title: "Сыр сулугуни", desc: "Сыр сулугуни" }
    },
    {
        id: 6, category: "cold", price: 9.00, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
        ka: { title: "ყველი იმერული", desc: "იმერული ყველი" },
        en: { title: "Imeretian Cheese", desc: "Imeretian cheese" },
        ru: { title: "Сыр имеретинский", desc: "Сыр имеретинский" }
    },
    {
        id: 7, category: "cold", price: 21.00, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
        ka: { title: "ყველის ასორტი", desc: "სულგუნი, შებოლილი სულგუნი, იმერული ყველი" },
        en: { title: "Cheese assortment", desc: "Sulguni, smoked sulguni, Imeretian cheese" },
        ru: { title: "Сырное ассорти", desc: "Сулугуни, копченый сулугуни, имеретинский сыр" }
    },

    // --- სალათები (SALADS) ---
    {
        id: 8, category: "salads", price: 9.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        ka: { title: "სალათი კიტრი-პომიდვრის", desc: "კიტრი, პომიდორი, მწვანილი, ხახვი" },
        en: { title: "Vegetable salad", desc: "Cucumbers, tomatoes, herbs, onions" },
        ru: { title: "Овощной салат", desc: "Огурцы, помидоры, зелень, лук" }
    },
    {
        id: 9, category: "salads", price: 11.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        ka: { title: "სალათი კიტრი-პომიდვრის ნიგვზით", desc: "კიტრი, პომიდორი, მწვანილი, ხახვი, ნიგოზი" },
        en: { title: "Vegetable salad with nuts", desc: "Cucumbers, tomatoes, herbs, onions, walnuts" },
        ru: { title: "Овощной салат с орехами", desc: "Огурцы, помидоры, зелень, лук, грецкий орех" }
    },
    {
        id: 10, category: "salads", price: 8.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        ka: { title: "მწვანე სალათი", desc: "სალათის ფურცლები, კიტრი, მწვანე ხახვი, ზეთისხილი" },
        en: { title: "Green salad", desc: "Lettuce, cucumber, green onion, olive oil" },
        ru: { title: "Зеленый салат", desc: "Листья салата, огурец, зеленый лук, маслины" }
    },
    {
        id: 11, category: "salads", price: 15.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        ka: { title: "სალათი ქართული", desc: "კიტრი, პომიდორი, სალათის ფურცლები, ხახვი, სულგუნი, ნიგოზი" },
        en: { title: "Georgian Salad", desc: "Cucumber, tomato, lettuce, onions, sulguni, walnuts" },
        ru: { title: "Салат Грузинский", desc: "Огурцы, помидоры, салат, лук, сулугуни, грецкий орех" }
    },
    {
        id: 12, category: "salads", price: 14.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        ka: { title: "სალათი ქათმის", desc: "ქათმის ფილე, ბულგარული, ხახვი, მაიონეზი" },
        en: { title: "Chicken Salad", desc: "Chicken breasts, peppers, onions, mayonnaise" },
        ru: { title: "Куриный салат", desc: "Куриное филе, болг. перец, лук, майонез" }
    },
    {
        id: 13, category: "salads", price: 15.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        ka: { title: "სალათი ტიფლისი", desc: "ქათმის ფილე, სულგუნი, პომიდორი, სალათის ფურცლები, მაიონეზი" },
        en: { title: "Tiflisi Salad", desc: "Chicken breasts, sulguni, tomato, lettuce, mayonnaise" },
        ru: { title: "Салат Тифлиси", desc: "Куриное филе, сулугуни, помидор, салат, майонез" }
    },

    // --- წვნიანი კერძები (SOUPS) ---
    {
        id: 14, category: "soups", price: 14.00, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300",
        ka: { title: "ხარჩო", desc: "საქონლის ხორცი, ბრინჯი, სანელებლები" },
        en: { title: "Xarcho", desc: "Beef, rice, spices" },
        ru: { title: "Харчо", desc: "Говядина, рис, приправы" }
    },
    {
        id: 15, category: "soups", price: 14.00, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300",
        ka: { title: "ჩაქაფული ხბოს ხორცით", desc: "ხბოს ხორცი, ტარხუნა, ტყემალი, მწვანილი, ღვინო" },
        en: { title: "Chakapuli with calf meat", desc: "Calf meat, tarragon, tkemali, greens, wine" },
        ru: { title: "Чакапули из теленка", desc: "Мясо теленка, тархун, ткемали, зелень, вино" }
    },
    {
        id: 16, category: "soups", price: 13.00, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300",
        ka: { title: "ჩიხირთმა", desc: "ქათმის ხორცი, კვერცხი, მწვანილი, ძმარი" },
        en: { title: "Chickirtma", desc: "Chicken, eggs, greens, vinegar" },
        ru: { title: "Чихиртма", desc: "Куриное мясо, яйцо, зелень, уксус" }
    },
    {
        id: 17, category: "soups", price: 13.00, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300",
        ka: { title: "ქათმის წვნიანი", desc: "ქათმის ფილე, ბოსტნეული" },
        en: { title: "Chicken Soup", desc: "Chicken breast, vegetables" },
        ru: { title: "Суп куриный", desc: "Куриное филе, овощи" }
    },
    {
        id: 18, category: "soups", price: 13.00, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300",
        ka: { title: "სოკოს წვნიანი", desc: "სოკო, ბოსტნეული" },
        en: { title: "Mushroom Soup", desc: "Mushrooms, vegetables" },
        ru: { title: "Суп грибной", desc: "Грибы, овощи" }
    },
    {
        id: 19, category: "soups", price: 9.50, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300",
        ka: { title: "ბოსტნეულის წვნიანი", desc: "კარტოფილი, სტაფილო, ბულგარული, მწვანილი" },
        en: { title: "Vegetable soup", desc: "Potatoes, carrots, bulg. pepper, greens" },
        ru: { title: "Овощной суп", desc: "Картофель, морковь, болг. перец, зелень" }
    },

    // --- ცხელი კერძები (HOT DISHES) ---
    {
        id: 20, category: "hot", price: 149.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ხორცის დაფა", desc: "მწვადი ხბოს, ქათმის, ღორის, კუპატი, ქაბაბი, კარტოფილი, ბოსტნეული" },
        en: { title: "Meatboard", desc: "Barbecue veal, chicken, pork, kupati, kebab, potatoes, vegetables" },
        ru: { title: "Мясная доска", desc: "Шашлык телятина, курица, свинина, купаты, кебаб, картофель, овощи" }
    },
    {
        id: 21, category: "hot", price: 77.00, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300",
        ka: { title: "მწვადის მიქსი", desc: "ხბო, ღორი, ქათამი, კარტოფილი" },
        en: { title: "Barbecue mix", desc: "Veal, pork, chicken, potatoes" },
        ru: { title: "Шашлычный микс", desc: "Телятина, свинина, курица, картофель" }
    },
    {
        id: 22, category: "hot", price: 43.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ხბოს ხორცი თავადურად", desc: "ხბოს ხორცი, კარტოფილი, სოკო, სულგუნი" },
        en: { title: "Lord Veal Meat", desc: "Veal meat, mushrooms, sulguni, potatoes" },
        ru: { title: "Мясо теленка по-Княжески", desc: "Мясо теленка, грибы, сулугуни, картофель" }
    },
    {
        id: 23, category: "hot", price: 35.00, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300",
        ka: { title: "ხბოს მწვადი (350 გრ)", desc: "ხბოს მწვადი" },
        en: { title: "Veal Barbecue (350g)", desc: "Veal BBQ" },
        ru: { title: "Телячий шашлык (350г)", desc: "Шашлык из телятины" }
    },
    {
        id: 24, category: "hot", price: 26.00, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300",
        ka: { title: "ღორის მწვადი (350 გრ)", desc: "ღორის მწვადი" },
        en: { title: "Pork Barbecue (350g)", desc: "Pork BBQ" },
        ru: { title: "Свиной шашлык (350г)", desc: "Шашлык из свинины" }
    },
    {
        id: 25, category: "hot", price: 23.00, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300",
        ka: { title: "ქათმის მწვადი (350 გრ)", desc: "ქათმის მწვადი" },
        en: { title: "Chicken Barbecue (350g)", desc: "Chicken BBQ" },
        ru: { title: "Куриный шашлык (350г)", desc: "Шашлык из курицы" }
    },
    {
        id: 26, category: "hot", price: 39.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ოჯახური ხბოს ხორცით", desc: "ხბოს ხორცი, კარტოფილი, ბოსტნეული" },
        en: { title: "Ojakhuri with Veal", desc: "Veal, potatoes, vegetables" },
        ru: { title: "Оджахури с мясом теленка", desc: "Мясо теленка, картофель, овощи" }
    },
    {
        id: 27, category: "hot", price: 26.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ოჯახური ღორის ხორცით", desc: "ღორის ხორცი, კარტოფილი, ბოსტნეული" },
        en: { title: "Ojakhuri with Pork", desc: "Pork, potatoes, vegetables" },
        ru: { title: "Оджахури с мясом свинины", desc: "Мясо свинины, картофель, овощи" }
    },
    {
        id: 28, category: "hot", price: 23.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ოჯახური ქათმის ხორცით", desc: "ქათმის ხორცი, კარტოფილი, ბოსტნეული" },
        en: { title: "Ojakhuri with Chicken", desc: "Chicken, potatoes, vegetables" },
        ru: { title: "Оджахури с куриным мясом", desc: "Куриное мясо, картофель, овощи" }
    },
    {
        id: 29, category: "hot", price: 21.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ოჯახური სოკოთი", desc: "სოკო, კარტოფილი, ბოსტნეული" },
        en: { title: "Ojakhuri with Mushrooms", desc: "Mushrooms, potatoes, vegetables" },
        ru: { title: "Оджахури с грибами", desc: "Грибы, картофель, овощи" }
    },
    {
        id: 30, category: "hot", price: 15.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ხბოს ოსტრი", desc: "ხბოს ხორცი" },
        en: { title: "Ostri Calfs", desc: "Veal meat" },
        ru: { title: "Остри из теленка", desc: "Мясо теленка" }
    },
    {
        id: 31, category: "hot", price: 12.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ღორის კუჭმაჭი კეცზე", desc: "ღორის კუჭმაჭი" },
        en: { title: "Pork Kuchmachi on a pan", desc: "Pork kuchmachi" },
        ru: { title: "Кучмачи свиной (на кеци)", desc: "Свиной кучмачи" }
    },
    {
        id: 32, category: "hot", price: 14.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "კუპატი", desc: "კუპატი" },
        en: { title: "Kupati", desc: "Georgian sausage" },
        ru: { title: "Купаты", desc: "Купаты" }
    },
    {
        id: 33, category: "hot", price: 15.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ქაბაბი", desc: "ქაბაბი" },
        en: { title: "Kebab", desc: "Kebab" },
        ru: { title: "Кебаб", desc: "Кебаб" }
    },
    {
        id: 34, category: "hot", price: 26.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ქართული კოტლეტი", desc: "კოტლეტი, კარტოფილის პიურე, ბოსტნეული" },
        en: { title: "Georgian cutlet", desc: "Beef cutlet, potato puree, vegetables" },
        ru: { title: "Котлета по-грузински", desc: "Котлета говяжья, картофельное пюре, овощи" }
    },
    {
        id: 35, category: "hot", price: 39.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ჩახოხბილი", desc: "წიწილა, ბოსტნეულის სოუსი, ნიგოზი" },
        en: { title: "Chakhokhbili", desc: "Chick, vegetables, spices, walnut" },
        ru: { title: "Чахохбили", desc: "Цыпленок, овощной соус, грецкий орех" }
    },
    {
        id: 36, category: "hot", price: 41.00, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300",
        ka: { title: "წიწილა შქმერული", desc: "წიწილა, ნაღები, სანელებლები" },
        en: { title: "Chick Shkmeruli", desc: "Chick, sour cream" },
        ru: { title: "Цыпленок по-Шкмерски", desc: "Цыпленок, сливки, специи" }
    },
    {
        id: 37, category: "hot", price: 43.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "საცივი", desc: "წიწილა, ნიგოზი, სანელებლები" },
        en: { title: "Satsivi", desc: "Chick, walnuts, spices" },
        ru: { title: "Сациви", desc: "Цыпленок, грецкие орехи, специи" }
    },
    {
        id: 38, category: "hot", price: 27.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "მწყერი (შემწვარი 3 ც.)", desc: "შემწვარი მწყერი" },
        en: { title: "Quail (fried 3 piece)", desc: "Fried quail" },
        ru: { title: "Перепелка (жареная 3 шт.)", desc: "Жареная перепелка" }
    },
    {
        id: 39, category: "hot", price: 14.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "სოკო კეცზე", desc: "შემწვარი სოკო" },
        en: { title: "Mushrooms on a pan", desc: "Baked mushrooms" },
        ru: { title: "Грибы запеченные на кеци", desc: "Запеченные грибы" }
    },
    {
        id: 40, category: "hot", price: 16.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "სოკო სულგუნით კეცზე", desc: "სოკო, სულგუნი" },
        en: { title: "Mushrooms with sulguni on a pan", desc: "Mushrooms with sulguni" },
        ru: { title: "Грибы с сулугуни на кеци", desc: "Грибы с сулугуни" }
    },
    {
        id: 41, category: "hot", price: 14.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "სულგუნი კეცზე", desc: "შემწვარი სულგუნი" },
        en: { title: "Sulguni on a pan", desc: "Melted sulguni" },
        ru: { title: "Сулугуни на кеци", desc: "Запеченный сулугуни" }
    },
    {
        id: 42, category: "hot", price: 18.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ლობიო ქოთანში", desc: "ლობიო, მწნილი" },
        en: { title: "Beans in a pot", desc: "Beans, pickles" },
        ru: { title: "Фасоль в горшочке", desc: "Фасоль, соленья" }
    },
    {
        id: 43, category: "hot", price: 18.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "აჯაფსანდალი ქოთანში", desc: "აჯაფსანდალი, ყველი" },
        en: { title: "Ajaphsandali in a pot", desc: "Eggplants, potatoes, carrots, tomatoes, herbs, cheese" },
        ru: { title: "Аджапсандали в горшочке", desc: "Баклажаны, картофель, морковь, помидоры, зелень, сыр" }
    },

    // --- სტეიკი (STEAK) ---
    {
        id: 44, category: "hot", price: 69.00, image: "https://images.unsplash.com/photo-1558030006-450675393462?w=300",
        ka: { title: "საქონლის სტეიკი", desc: "კარტოფილი ფრი, ბოსტნეული, სოუსი" },
        en: { title: "Beef steak", desc: "French fries, fruit, sauce" },
        ru: { title: "Говяжий стейк", desc: "Картофель фри, овощи, соус" }
    },
    {
        id: 45, category: "hot", price: 48.00, image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300",
        ka: { title: "ღორის სტეიკი", desc: "კარტოფილი ფრი, ბოსტნეული, სოუსი" },
        en: { title: "Pork steak", desc: "French fries, vegetables, sauce" },
        ru: { title: "Свиной стейк", desc: "Картофель фри, овощи, соус" }
    },
    {
        id: 46, category: "hot", price: 43.00, image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=300",
        ka: { title: "ქათმის სტეიკი", desc: "კარტოფილი ფრი, ბოსტნეული, სოუსი" },
        en: { title: "Chicken steak", desc: "French fries, vegetables, sauce" },
        ru: { title: "Куриный стейк", desc: "Картофель фри, овощи, соус" }
    },

    // --- თევზეული (FISH DISHES) ---
    {
        id: 47, category: "fish", price: 24.00, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300",
        ka: { title: "კალმახი (შემწვარი)", desc: "შემწვარი კალმახი" },
        en: { title: "Trout (fried)", desc: "Fried trout" },
        ru: { title: "Форель (жареная)", desc: "Жареная форель" }
    },
    {
        id: 48, category: "fish", price: 41.00, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300",
        ka: { title: "ორაგულის სტეიკი", desc: "კარტოფილი ფრი, სოკო, ბოსტნეული" },
        en: { title: "Oraguli steak", desc: "French fries, mushrooms, vegetables" },
        ru: { title: "Стейк из Орагули", desc: "Картофель фри, грибы, овощи" }
    },

    // --- ხინკალი (KHINKALI) ---
    {
        id: 49, category: "khinkali", price: 1.70, image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=300",
        ka: { title: "ხინკალი \"ქალაქური\"", desc: "საქონლის ხორცი" },
        en: { title: "Khinkali \"Kalakuri\"", desc: "Beef" },
        ru: { title: "Хинкали \"Калакури\"", desc: "Говядина" }
    },
    {
        id: 50, category: "khinkali", price: 1.95, image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=300",
        ka: { title: "ხინკალი \"თუშური\"", desc: "ცხვრის ხორცი, დაკეპილი" },
        en: { title: "Khinkali \"Tushuri\"", desc: "Sheep, chopped" },
        ru: { title: "Хинкали \"Тушури\"", desc: "Баранина, рубленая" }
    },
    {
        id: 51, category: "khinkali", price: 1.75, image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=300",
        ka: { title: "ხინკალი ყველის", desc: "ყველი" },
        en: { title: "Khinkali with cheese", desc: "Cheese" },
        ru: { title: "Хинкали с сыром", desc: "Сыр" }
    },

    // --- გარნირი (SIDE DISHES) ---
    {
        id: 52, category: "sides", price: 8.00, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
        ka: { title: "კარტოფილი ფრი", desc: "კარტოფილი ფრი" },
        en: { title: "French Fries", desc: "French fries" },
        ru: { title: "Картофель фри", desc: "Картофель фри" }
    },
    {
        id: 53, category: "sides", price: 15.00, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
        ka: { title: "კარტოფილი მექსიკურად", desc: "მექსიკური კარტოფილი" },
        en: { title: "Mexican Potatoes", desc: "Mexican style potatoes" },
        ru: { title: "Картофель по-мексикански", desc: "Картофель по-мексикански" }
    },
    {
        id: 54, category: "sides", price: 12.00, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
        ka: { title: "კარტოფილი ოჯახურად", desc: "ოჯახური კარტოფილი" },
        en: { title: "Potatoes in a family", desc: "Home style potatoes" },
        ru: { title: "Картофель по домашнему", desc: "Картофель по-домашнему" }
    },

    // --- საუზმე (BREAKFAST) ---
    {
        id: 55, category: "hot", price: 24.00, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300",
        ka: { title: "საუზმე მიქსი", desc: "კვერცხი, ყველი, ბოსტნეული, კარტოფილი, ქათმის ფილე" },
        en: { title: "Breakfast mix", desc: "Eggs, cheese, vegetables, potatoes, chicken breasts" },
        ru: { title: "Завтрак микс", desc: "Яйцо, сыр, овощи, картофель, куриное филе" }
    },
    {
        id: 56, category: "hot", price: 11.00, image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=300",
        ka: { title: "ომლეტი", desc: "ომლეტი" },
        en: { title: "Omlet", desc: "Omelette" },
        ru: { title: "Омлет", desc: "Омлет" }
    },
    {
        id: 57, category: "hot", price: 9.00, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300",
        ka: { title: "გლაზუნია", desc: "ერბოკვერცხი" },
        en: { title: "Glazunia (Egg)", desc: "Fried eggs" },
        ru: { title: "Глазунья", desc: "Яичница глазунья" }
    },

    // --- სოუსები (SAUCES) ---
    {
        id: 58, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "ტყემალი", desc: "ტყემალი" },
        en: { title: "Tkemali", desc: "Tkemali sauce" },
        ru: { title: "Ткемали", desc: "Соус Ткемали" }
    },
    {
        id: 59, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "საწერბელი", desc: "პომიდვრის სოუსი" },
        en: { title: "Tomatoe Sauce", desc: "Satsebeli sauce" },
        ru: { title: "Сацебели", desc: "Соус Сацебели" }
    },
    {
        id: 60, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "კეტჩუპი", desc: "კეტჩუპი" },
        en: { title: "Ketchup", desc: "Ketchup" },
        ru: { title: "Кетчуп", desc: "Кетчуп" }
    },
    {
        id: 61, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "მაიონეზი", desc: "მაიონეზი" },
        en: { title: "Mayonnaise", desc: "Mayonnaise" },
        ru: { title: "Майонез", desc: "Майонез" }
    },
    {
        id: 62, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "არაჟანი", desc: "არაჟანი" },
        en: { title: "Sour cream", desc: "Sour cream" },
        ru: { title: "Сметана", desc: "Сметана" }
    },

    // --- ცომეული (PASTRY) ---
    {
        id: 63, category: "pastry", price: 18.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური იმერული", desc: "იმერული ხაჭაპური" },
        en: { title: "Imeretiankhachapuri", desc: "Imeretian Khachapuri" },
        ru: { title: "Хачапури по-имеретински", desc: "Хачапури по-имеретински" }
    },
    {
        id: 64, category: "pastry", price: 22.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური \"მეგრული\"", desc: "მეგრული ხაჭაპური" },
        en: { title: "Megreliankhachapuri", desc: "Megrelian Khachapuri" },
        ru: { title: "Хачапури по-мегрелски", desc: "Хачапури по-мегрельски" }
    },
    {
        id: 65, category: "pastry", price: 26.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური \"ლაზური\"", desc: "ლაზური ხაჭაპური" },
        en: { title: "Khachapuri \"Lazuri\"", desc: "Lazuri Khachapuri" },
        ru: { title: "Хачапури \"Лазури\"", desc: "Хачапури \"Лазури\"" }
    },
    {
        id: 66, category: "pastry", price: 20.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური შამფურზე", desc: "ხაჭაპური შამფურზე" },
        en: { title: "Khachapuri on a spit", desc: "Khachapuri on a spit" },
        ru: { title: "Хачапури на шампуре", desc: "Хачапури на шампуре" }
    },
    {
        id: 67, category: "pastry", price: 19.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "აჭარული ხაჭაპური", desc: "აჭარული ხაჭაპური" },
        en: { title: "Adjaretian khachapuri", desc: "Adjarian Khachapuri" },
        ru: { title: "Хачапури по-аджарски", desc: "Хачапури по-аджарски" }
    },
    {
        id: 68, category: "pastry", price: 16.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ლობიანი", desc: "ლობიანი" },
        en: { title: "Lobiani", desc: "Lobiani" },
        ru: { title: "Лобиани", desc: "Лобиани" }
    },
    {
        id: 69, category: "pastry", price: 2.50, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
        ka: { title: "პური \"შოთი\"", desc: "შოთის პური" },
        en: { title: "Bread \"Shoti\"", desc: "Shoti bread" },
        ru: { title: "Хлеб \"Шоти\"", desc: "Хлеб \"Шоти\"" }
    },
    {
        id: 70, category: "pastry", price: 2.50, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
        ka: { title: "მჭადი", desc: "მჭადი" },
        en: { title: "Mchadi (corn cake)", desc: "Cornbread" },
        ru: { title: "Мчади (кукурузная лепешка)", desc: "Кукурузная лепешка" }
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

    // ტექსტების უსაფრთხო განახლება (თუ ელემენტი არსებობს DOM-ში)
    const tableEl = document.getElementById('tableText');
    if (tableEl) tableEl.textContent = t.table;

    const cartTitleEl = document.getElementById('cartTitle');
    if (cartTitleEl) cartTitleEl.textContent = t.cartTitle;

    const totalTextEl = document.getElementById('totalText');
    if (totalTextEl) totalTextEl.textContent = t.total;

    const checkoutBtnEl = document.getElementById('checkoutBtn');
    if (checkoutBtnEl) checkoutBtnEl.textContent = t.checkout;

    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    // კატეგორიების ღილაკების დინამიური დარენდერება
    renderCategoryButtons();

    // მენიუსა და კალათის ხელახლა დარენდერება
    filterAndRenderMenu();
    updateCartUI();
}

// 5. კატეგორიების ღილაკების შექმნა დინამიურად
function renderCategoryButtons() {
    if (!categoriesContainer) return;
    categoriesContainer.innerHTML = '';
    const cats = translations[currentLang].categories;

    Object.keys(cats).forEach(catKey => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${catKey === activeCategory ? 'active' : ''}`;
        btn.dataset.category = catKey;
        btn.textContent = cats[catKey];
        categoriesContainer.appendChild(btn);
    });
}

// 6. მენიუს რენდერი
function renderMenu(items) {
    if (!menuContainer) return;
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
                    <p class="dish-desc">${itemLangData.desc || ''}</p>
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

// 7. ფილტრაცია (კატეგორია + ძებნა)
function filterAndRenderMenu() {
    const query = searchInput ? searchInput.value.toLowerCase() : '';

    const filtered = menuData.filter(item => {
        const itemLangData = item[currentLang] || item['ka'];
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        
        const titleMatch = itemLangData.title ? itemLangData.title.toLowerCase().includes(query) : false;
        const descMatch = itemLangData.desc ? itemLangData.desc.toLowerCase().includes(query) : false;

        return matchesCategory && (titleMatch || descMatch);
    });

    renderMenu(filtered);
}

// 8. კალათის ფუნქციონალი
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
    if (cartCountElement) cartCountElement.textContent = totalCount;

    if (!cartItemsContainer) return;
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

    if (totalAmountElement) totalAmountElement.textContent = `${totalSum.toFixed(2)} ₾`;
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

// 9. Event Listener-ები
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        changeAppLanguage(e.target.value);
    });
}

if (categoriesContainer) {
    categoriesContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            activeCategory = e.target.dataset.category;
            filterAndRenderMenu();
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('input', filterAndRenderMenu);
}

if (cartBtn && cartModal) {
    cartBtn.addEventListener('click', () => cartModal.classList.add('open'));
}

if (closeCart && cartModal) {
    closeCart.addEventListener('click', () => cartModal.classList.remove('open'));
}

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