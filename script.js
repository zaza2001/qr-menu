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
            steak: "სტეიკი",
            hot: "ცხელი კერძები",
            pastry: "ცომეული",
            khinkali: "ხინკალი",
            fish: "თევზეული",
            sides: "გარნირი",
            breakfest: "საუზმე",
            desserts: "დესერტი",
            pizza: "პიცა",
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
            steak: "Steak",
            soups: "Soups",
            hot: "Hot Dishes",
            pastry: "Pastry",
            khinkali: "Khinkali",
            fish: "Fish",
            sides: "Side Dishes",
            breakfest: "Breakfest",
            pizza: "pizza",
            desserts: "Desserts",
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
            steak: "ыевпщук"б
            pastry: "Выпечка",
            khinkali: "Хинкали",
            fish: "Рыбные блюда",
            sides: "Гарниры",
            breakfest: "аава",
            pizza: "фывфыв",
            desserts: "прр",
            sauces: "Соусы",
            drinks: "Прохладительные напитки"
        }
    }
};

// 2. კერძების სრული ბაზა 3-ვე ენის მხარდაჭერით
const menuData = [
    // --- ცივი კერძები (COLD DISHES) ---
    {
        id: 1, category: "cold", price: 9.50, image: "MENU FOTO/1 COLD DISHES/1.jpg",
        ka: { title: "ბადრიჯნის ფხალი", desc: "ბადრიჯანი ნიგვზით" },
        en: { title: "Eggplant Pkhali", desc: "Eggplant with walnuts" },
        ru: { title: "Пхали из баклажан", desc: "Баклажаны с грецкими орехами" }
    },
    {
        id: 2, category: "cold", price: 9.00, image: "MENU FOTO/1 COLD DISHES/2.jpg",
        ka: { title: "ისპანახის ფხალი", desc: "ისპანახი ნიგვზით" },
        en: { title: "Spinach Pkhsali", desc: "Spinach with walnuts" },
        ru: { title: "Пхали из шпината", desc: "Шпинат с грецкими орехами" }
    },
    {
        id: 3, category: "cold", price: 8.00, image: "MENU FOTO/1 COLD DISHES/3.jpg",
        ka: { title: "წითელი ფხალი", desc: "ჭარხალი ნიგვზით" },
        en: { title: "Beetroot Pkhali", desc: "Beetroot with walnuts" },
        ru: { title: "Пхали из свеклы", desc: "Свекла с грецкими орехами" }
    },
    {
        id: 4, category: "cold", price: 7.00, image: "MENU FOTO/1 COLD DISHES/4.jpg",
        ka: { title: "სტაფილოს ფხალი", desc: "სტაფილო ნიგვზით" },
        en: { title: "Carrot Pkhali", desc: "Carrot with walnuts" },
        ru: { title: "Пхали из моркови", desc: "Морковь с грецкими орехами" }
    },
    {
        id: 5, category: "cold", price: 12.00, image: "MENU FOTO/1 COLD DISHES/5.jpg",
        ka: { title: "ყველი სულგუნი", desc: "სულგუნი" },
        en: { title: "Sulguni Cheese", desc: "Sulguni cheese" },
        ru: { title: "Сыр сулугуни", desc: "Сыр сулугуни" }
    },
    {
        id: 6, category: "cold", price: 9.00, image: "MENU FOTO/1 COLD DISHES/6.jpg",
        ka: { title: "ყველი იმერული", desc: "იმერული ყველი" },
        en: { title: "Imeretian Cheese", desc: "Imeretian cheese" },
        ru: { title: "Сыр имеретинский", desc: "Сыр имеретинский" }
    },
    {
        id: 7, category: "cold", price: 21.00, image: "MENU FOTO/1 COLD DISHES/7.jpg",
        ka: { title: "ყველის ასორტი", desc: "სულგუნი, შებოლილი სულგუნი, იმერული ყველი" },
        en: { title: "Cheese assortment", desc: "Sulguni, smoked sulguni, Imeretian cheese" },
        ru: { title: "Сырное ассорти", desc: "Сулугуни, копченый сулугуни, имеретинский сыр" }
    },

    // --- სალათები (SALADS) ---
    {
        id: 8, category: "salads", price: 9.00, image: "MENU FOTO/2 SALADS/1.jpg",
        ka: { title: "სალათი კიტრი-პომიდვრის", desc: "კიტრი, პომიდორი, მწვანილი, ხახვი" },
        en: { title: "Vegetable salad", desc: "Cucumbers, tomatoes, herbs, onions" },
        ru: { title: "Овощной салат", desc: "Огурцы, помидоры, зелень, лук" }
    },
    {
        id: 9, category: "salads", price: 11.00, image: "MENU FOTO/2 SALADS/2.jpg",
        ka: { title: "სალათი კიტრი-პომიდვრის ნიგვზით", desc: "კიტრი, პომიდორი, მწვანილი, ხახვი, ნიგოზი" },
        en: { title: "Vegetable salad with nuts", desc: "Cucumbers, tomatoes, herbs, onions, walnuts" },
        ru: { title: "Овощной салат с орехами", desc: "Огурцы, помидоры, зелень, лук, грецкий орех" }
    },
    {
        id: 10, category: "salads", price: 8.00, image: "MENU FOTO/2 SALADS/3.jpg",
        ka: { title: "მწვანე სალათი", desc: "სალათის ფურცლები, კიტრი, მწვანე ხახვი, ზეთისხილი" },
        en: { title: "Green salad", desc: "Lettuce, cucumber, green onion, olive oil" },
        ru: { title: "Зеленый салат", desc: "Листья салата, огурец, зеленый лук, маслины" }
    },
    {
        id: 11, category: "salads", price: 15.00, image: "MENU FOTO/2 SALADS/4.jpg",
        ka: { title: "სალათი ქართული", desc: "კიტრი, პომიდორი, სალათის ფურცლები, ხახვი, სულგუნი, ნიგოზი" },
        en: { title: "Georgian Salad", desc: "Cucumber, tomato, lettuce, onions, sulguni, walnuts" },
        ru: { title: "Салат Грузинский", desc: "Огурцы, помидоры, салат, лук, сулугуни, грецкий орех" }
    },
    {
        id: 12, category: "salads", price: 14.00, image: "MENU FOTO/2 SALADS/5.jpg",
        ka: { title: "სალათი ქათმის", desc: "ქათმის ფილე, ბულგარული, ხახვი, მაიონეზი" },
        en: { title: "Chicken Salad", desc: "Chicken breasts, peppers, onions, mayonnaise" },
        ru: { title: "Куриный салат", desc: "Куриное филе, болг. перец, лук, майонез" }
    },
    {
        id: 13, category: "salads", price: 15.00, image: "MENU FOTO/2 SALADS/6.jpg",
        ka: { title: "სალათი ტიფლისი", desc: "ქათმის ფილე, სულგუნი, პომიდორი, სალათის ფურცლები, მაიონეზი" },
        en: { title: "Tiflisi Salad", desc: "Chicken breasts, sulguni, tomato, lettuce, mayonnaise" },
        ru: { title: "Салат Тифлиси", desc: "Куриное филе, сулугуни, помидор, салат, майонез" }
    },

    // --- წვნიანი კერძები (SOUPS) ---
    {
        id: 14, category: "soups", price: 14.00, image: "MENU FOTO/3 SOUPS/1.jpg",
        ka: { title: "ხარჩო", desc: "საქონლის ხორცი, ბრინჯი, სანელებლები" },
        en: { title: "Xarcho", desc: "Beef, rice, spices" },
        ru: { title: "Харчо", desc: "Говядина, рис, приправы" }
    },
    {
        id: 15, category: "soups", price: 14.00, image: "MENU FOTO/3 SOUPS/2.jpg",
        ka: { title: "ჩაქაფული ხბოს ხორცით", desc: "ხბოს ხორცი, ტარხუნა, ტყემალი, მწვანილი, ღვინო" },
        en: { title: "Chakapuli with calf meat", desc: "Calf meat, tarragon, tkemali, greens, wine" },
        ru: { title: "Чакапули из теленка", desc: "Мясо теленка, тархун, ткемали, зелень, вино" }
    },
    {
        id: 16, category: "soups", price: 13.00, image: "MENU FOTO/3 SOUPS/3.jpg",
        ka: { title: "ჩიხირთმა", desc: "ქათმის ხორცი, კვერცხი, მწვანილი, ძმარი" },
        en: { title: "Chickirtma", desc: "Chicken, eggs, greens, vinegar" },
        ru: { title: "Чихиртма", desc: "Куриное мясо, яйцо, зелень, уксус" }
    },
    {
        id: 17, category: "soups", price: 13.00, image: "MENU FOTO/3 SOUPS/4.jpg",
        ka: { title: "ქათმის წვნიანი", desc: "ქათმის ფილე, ბოსტნეული" },
        en: { title: "Chicken Soup", desc: "Chicken breast, vegetables" },
        ru: { title: "Суп куриный", desc: "Куриное филе, овощи" }
    },
    {
        id: 18, category: "soups", price: 13.00, image: "MENU FOTO/3 SOUPS/5.jpg",
        ka: { title: "სოკოს წვნიანი", desc: "სოკო, ბოსტნეული" },
        en: { title: "Mushroom Soup", desc: "Mushrooms, vegetables" },
        ru: { title: "Суп грибной", desc: "Грибы, овощи" }
    },
    {
        id: 19, category: "soups", price: 9.50, image: "MENU FOTO/3 SOUPS/6.jpg",
        ka: { title: "ბოსტნეულის წვნიანი", desc: "კარტოფილი, სტაფილო, ბულგარული, მწვანილი" },
        en: { title: "Vegetable soup", desc: "Potatoes, carrots, bulg. pepper, greens" },
        ru: { title: "Овощной суп", desc: "Картофель, морковь, болг. перец, зелень" }
    },

    // --- ცხელი კერძები (HOT DISHES) ---
    {
        id: 20, category: "hot", price: 149.00, image: "MENU FOTO/4 HOT DISHES/1.jpg",
        ka: { title: "ხორცის დაფა", desc: "მწვადი ხბოს, ქათმის, ღორის, კუპატი, ქაბაბი, კარტოფილი, ბოსტნეული" },
        en: { title: "Meatboard", desc: "Barbecue veal, chicken, pork, kupati, kebab, potatoes, vegetables" },
        ru: { title: "Мясная доска", desc: "Шашлык телятина, курица, свинина, купаты, кебаб, картофель, овощи" }
    },
    {
        id: 21, category: "hot", price: 77.00, image: "MENU FOTO/4 HOT DISHES/2.jpg",
        ka: { title: "მწვადის მიქსი", desc: "ხბო, ღორი, ქათამი, კარტოფილი" },
        en: { title: "Barbecue mix", desc: "Veal, pork, chicken, potatoes" },
        ru: { title: "Шашлычный микс", desc: "Телятина, свинина, курица, картофель" }
    },
    {
        id: 22, category: "hot", price: 43.00, image: "MENU FOTO/4 HOT DISHES/3.jpg",
        ka: { title: "ხბოს ხორცი თავადურად", desc: "ხბოს ხორცი, კარტოფილი, სოკო, სულგუნი" },
        en: { title: "Lord Veal Meat", desc: "Veal meat, mushrooms, sulguni, potatoes" },
        ru: { title: "Мясо теленка по-Княжески", desc: "Мясо теленка, грибы, сулугуни, картофель" }
    },
    {
        id: 23, category: "hot", price: 35.00, image: "MENU FOTO/4 HOT DISHES/4.jpg",
        ka: { title: "ხბოს მწვადი (350 გრ)", desc: "ხბოს მწვადი" },
        en: { title: "Veal Barbecue (350g)", desc: "Veal BBQ" },
        ru: { title: "Телячий шашлык (350г)", desc: "Шашлык из телятины" }
    },
    {
        id: 24, category: "hot", price: 26.00, image: "MENU FOTO/4 HOT DISHES/5.jpg",
        ka: { title: "ღორის მწვადი (350 გრ)", desc: "ღორის მწვადი" },
        en: { title: "Pork Barbecue (350g)", desc: "Pork BBQ" },
        ru: { title: "Свиной шашлык (350г)", desc: "Шашлык из свинины" }
    },
    {
        id: 25, category: "hot", price: 23.00, image: "MENU FOTO/4 HOT DISHES/6.jpg",
        ka: { title: "ქათმის მწვადი (350 გრ)", desc: "ქათმის მწვადი" },
        en: { title: "Chicken Barbecue (350g)", desc: "Chicken BBQ" },
        ru: { title: "Куриный шашлык (350г)", desc: "Шашлык из курицы" }
    },
    {
        id: 26, category: "hot", price: 39.00, image: "MENU FOTO/4 HOT DISHES/7.jpg",
        ka: { title: "ოჯახური ხბოს ხორცით", desc: "ხბოს ხორცი, კარტოფილი, ბოსტნეული" },
        en: { title: "Ojakhuri with Veal", desc: "Veal, potatoes, vegetables" },
        ru: { title: "Оджахури с мясом теленка", desc: "Мясо теленка, картофель, овощи" }
    },
    {
        id: 27, category: "hot", price: 26.00, image: "MENU FOTO/4 HOT DISHES/8.jpg",
        ka: { title: "ოჯახური ღორის ხორცით", desc: "ღორის ხორცი, კარტოფილი, ბოსტნეული" },
        en: { title: "Ojakhuri with Pork", desc: "Pork, potatoes, vegetables" },
        ru: { title: "Оджахури с мясом свинины", desc: "Мясо свинины, картофель, овощи" }
    },
    {
        id: 28, category: "hot", price: 23.00, image: "MENU FOTO/4 HOT DISHES/9.jpg",
        ka: { title: "ოჯახური ქათმის ხორცით", desc: "ქათმის ხორცი, კარტოფილი, ბოსტნეული" },
        en: { title: "Ojakhuri with Chicken", desc: "Chicken, potatoes, vegetables" },
        ru: { title: "Оджахури с куриным мясом", desc: "Куриное мясо, картофель, овощи" }
    },
    {
        id: 29, category: "hot", price: 21.00, image: "MENU FOTO/4 HOT DISHES/10.jpg",
        ka: { title: "ოჯახური სოკოთი", desc: "სოკო, კარტოფილი, ბოსტნეული" },
        en: { title: "Ojakhuri with Mushrooms", desc: "Mushrooms, potatoes, vegetables" },
        ru: { title: "Оджахури с грибами", desc: "Грибы, картофель, овощи" }
    },
    {
        id: 30, category: "hot", price: 15.00, image: "MENU FOTO/4 HOT DISHES/11.jpg",
        ka: { title: "ხბოს ოსტრი", desc: "ხბოს ხორცი" },
        en: { title: "Ostri Calfs", desc: "Veal meat" },
        ru: { title: "Остри из теленка", desc: "Мясо теленка" }
    },
    {
        id: 31, category: "hot", price: 12.00, image: "MENU FOTO/4 HOT DISHES/12.jpg",
        ka: { title: "ღორის კუჭმაჭი კეცზე", desc: "ღორის კუჭმაჭი" },
        en: { title: "Pork Kuchmachi on a pan", desc: "Pork kuchmachi" },
        ru: { title: "Кучмачи свиной (на кеци)", desc: "Свиной кучмачи" }
    },
    {
        id: 32, category: "hot", price: 14.00, image: "MENU FOTO/4 HOT DISHES/14.jpg",
        ka: { title: "კუპატი", desc: "კუპატი" },
        en: { title: "Kupati", desc: "Georgian sausage" },
        ru: { title: "Купаты", desc: "Купаты" }
    },
    {
        id: 33, category: "hot", price: 15.00, image: "MENU FOTO/4 HOT DISHES/15.jpg",
        ka: { title: "ქაბაბი", desc: "ქაბაბი" },
        en: { title: "Kebab", desc: "Kebab" },
        ru: { title: "Кебаб", desc: "Кебаб" }
    },
    {
        id: 34, category: "hot", price: 26.00, image: "MENU FOTO/4 HOT DISHES/16.jpg",
        ka: { title: "ქართული კოტლეტი", desc: "კოტლეტი, კარტოფილის პიურე, ბოსტნეული" },
        en: { title: "Georgian cutlet", desc: "Beef cutlet, potato puree, vegetables" },
        ru: { title: "Котлета по-грузински", desc: "Котлета говяжья, картофельное пюре, овощи" }
    },
    {
        id: 35, category: "hot", price: 39.00, image: "MENU FOTO/4 HOT DISHES/17.jpg",
        ka: { title: "ჩახოხბილი", desc: "წიწილა, ბოსტნეულის სოუსი, ნიგოზი" },
        en: { title: "Chakhokhbili", desc: "Chick, vegetables, spices, walnut" },
        ru: { title: "Чахохбили", desc: "Цыпленок, овощной соус, грецкий орех" }
    },
    {
        id: 36, category: "hot", price: 41.00, image: "MENU FOTO/4 HOT DISHES/18.jpg",
        ka: { title: "წიწილა შქმერული", desc: "წიწილა, ნაღები, სანელებლები" },
        en: { title: "Chick Shkmeruli", desc: "Chick, sour cream" },
        ru: { title: "Цыпленок по-Шкмерски", desc: "Цыпленок, сливки, специи" }
    },
    {
        id: 37, category: "hot", price: 43.00, image: "MENU FOTO/4 HOT DISHES/19.jpg",
        ka: { title: "საცივი", desc: "წიწილა, ნიგოზი, სანელებლები" },
        en: { title: "Satsivi", desc: "Chick, walnuts, spices" },
        ru: { title: "Сациви", desc: "Цыпленок, грецкие орехи, специи" }
    },
    {
        id: 38, category: "hot", price: 27.00, image: "MENU FOTO/4 HOT DISHES/20.jpg",
        ka: { title: "მწყერი (შემწვარი 3 ც.)", desc: "შემწვარი მწყერი" },
        en: { title: "Quail (fried 3 piece)", desc: "Fried quail" },
        ru: { title: "Перепелка (жареная 3 шт.)", desc: "Жареная перепелка" }
    },
    {
        id: 39, category: "hot", price: 14.00, image: "MENU FOTO/4 HOT DISHES/21.jpg",
        ka: { title: "სოკო კეცზე", desc: "შემწვარი სოკო" },
        en: { title: "Mushrooms on a pan", desc: "Baked mushrooms" },
        ru: { title: "Грибы запеченные на кеци", desc: "Запеченные грибы" }
    },
    {
        id: 40, category: "hot", price: 16.00, image: "MENU FOTO/4 HOT DISHES/22.jpg",
        ka: { title: "სოკო სულგუნით კეცზე", desc: "სოკო, სულგუნი" },
        en: { title: "Mushrooms with sulguni on a pan", desc: "Mushrooms with sulguni" },
        ru: { title: "Грибы с сулугуни на кеци", desc: "Грибы с сулугуни" }
    },
    {
        id: 41, category: "hot", price: 14.00, image: "MENU FOTO/4 HOT DISHES/23.jpg",
        ka: { title: "სულგუნი კეცზე", desc: "შემწვარი სულგუნი" },
        en: { title: "Sulguni on a pan", desc: "Melted sulguni" },
        ru: { title: "Сулугуни на кеци", desc: "Запеченный сулугуни" }
    },
    {
        id: 42, category: "hot", price: 18.00, image: "MENU FOTO/4 HOT DISHES/24.jpg",
        ka: { title: "ლობიო ქოთანში", desc: "ლობიო, მწნილი" },
        en: { title: "Beans in a pot", desc: "Beans, pickles" },
        ru: { title: "Фасоль в горшочке", desc: "Фасоль, соленья" }
    },
    {
        id: 43, category: "hot", price: 18.00, image: "MENU FOTO/4 HOT DISHES/25.jpg",
        ka: { title: "აჯაფსანდალი ქოთანში", desc: "აჯაფსანდალი, ყველი" },
        en: { title: "Ajaphsandali in a pot", desc: "Eggplants, potatoes, carrots, tomatoes, herbs, cheese" },
        ru: { title: "Аджапсандали в горшочке", desc: "Баклажаны, картофель, морковь, помидоры, зелень, сыр" }
    },

    // --- სტეიკი (STEAK) ---
    {
        id: 44, category: "steak", price: 69.00, image: "MENU FOTO/5 STEAK/1.jpg",
        ka: { title: "საქონლის სტეიკი", desc: "კარტოფილი ფრი, ბოსტნეული, სოუსი" },
        en: { title: "Beef steak", desc: "French fries, fruit, sauce" },
        ru: { title: "Говяжий стейк", desc: "Картофель фри, овощи, соус" }
    },
    {
        id: 45, category: "steak", price: 48.00, image: "MENU FOTO/5 STEAK/2.jpg",
        ka: { title: "ღორის სტეიკი", desc: "კარტოფილი ფრი, ბოსტნეული, სოუსი" },
        en: { title: "Pork steak", desc: "French fries, vegetables, sauce" },
        ru: { title: "Свиной стейк", desc: "Картофель фри, овощи, соус" }
    },
    {
        id: 46, category: "steak", price: 43.00, image: "MENU FOTO/5 STEAK/3.jpg",
        ka: { title: "ქათმის სტეიკი", desc: "კარტოფილი ფრი, ბოსტნეული, სოუსი" },
        en: { title: "Chicken steak", desc: "French fries, vegetables, sauce" },
        ru: { title: "Куриный стейк", desc: "Картофель фри, овощи, соус" }
    },

    // --- თევზეული (FISH DISHES) ---
    {
        id: 47, category: "fish", price: 24.00, image: "MENU FOTO/6 FISH/1.jpg",
        ka: { title: "კალმახი (შემწვარი)", desc: "შემწვარი კალმახი" },
        en: { title: "Trout (fried)", desc: "Fried trout" },
        ru: { title: "Форель (жареная)", desc: "Жареная форель" }
    },
    {
        id: 48, category: "fish", price: 41.00, image: "MENU FOTO/6 FISH/2.jpg",
        ka: { title: "ორაგულის სტეიკი", desc: "კარტოფილი ფრი, სოკო, ბოსტნეული" },
        en: { title: "Oraguli steak", desc: "French fries, mushrooms, vegetables" },
        ru: { title: "Стейк из Орагули", desc: "Картофель фри, грибы, овощи" }
    },

    // --- ხინკალი (KHINKALI) ---
    {
        id: 49, category: "khinkali", price: 1.70, image: "MENU FOTO/7 XINKALI/khinkali.jpg",
        ka: { title: "ხინკალი \"ქალაქური\"", desc: "საქონლის ხორცი" },
        en: { title: "Khinkali \"Kalakuri\"", desc: "Beef" },
        ru: { title: "Хинкали \"Калакури\"", desc: "Говядина" }
    },
    {
        id: 50, category: "khinkali", price: 1.95, image: "MENU FOTO/7 XINKALI/download.jpg",
        ka: { title: "ხინკალი \"თუშური\"", desc: "ცხვრის ხორცი, დაკეპილი" },
        en: { title: "Khinkali \"Tushuri\"", desc: "Sheep, chopped" },
        ru: { title: "Хинкали \"Тушури\"", desc: "Баранина, рубленая" }
    },
    {
        id: 51, category: "khinkali", price: 1.75, image: "MENU FOTO/7 XINKALI/images.jpg",
        ka: { title: "ხინკალი ყველის", desc: "ყველი" },
        en: { title: "Khinkali with cheese", desc: "Cheese" },
        ru: { title: "Хинкали с сыром", desc: "Сыр" }
    },

    // --- გარნირი (SIDE DISHES) ---
    {
        id: 52, category: "sides", price: 8.00, image: "MENU FOTO/8 SIDE DISHES/1.jpg",
        ka: { title: "კარტოფილი ფრი", desc: "კარტოფილი ფრი" },
        en: { title: "French Fries", desc: "French fries" },
        ru: { title: "Картофель фри", desc: "Картофель фри" }
    },
    {
        id: 53, category: "sides", price: 15.00, image: "MENU FOTO/8 SIDE DISHES/2.jpg",
        ka: { title: "კარტოფილი მექსიკურად", desc: "მექსიკური კარტოფილი" },
        en: { title: "Mexican Potatoes", desc: "Mexican style potatoes" },
        ru: { title: "Картофель по-мексикански", desc: "Картофель по-мексикански" }
    },
    {
        id: 54, category: "sides", price: 12.00, image: "MENU FOTO/8 SIDE DISHES/3.jpg",
        ka: { title: "კარტოფილი ოჯახურად", desc: "ოჯახური კარტოფილი" },
        en: { title: "Potatoes in a family", desc: "Home style potatoes" },
        ru: { title: "Картофель по домашнему", desc: "Картофель по-домашнему" }
    },

    // --- საუზმე (BREAKFAST) ---
    {
        id: 55, category: "breakfest", price: 24.00, image: "MENU FOTO/9 BREAKFAST/1.jpg",
        ka: { title: "საუზმე მიქსი", desc: "კვერცხი, ყველი, ბოსტნეული, კარტოფილი, ქათმის ფილე" },
        en: { title: "Breakfast mix", desc: "Eggs, cheese, vegetables, potatoes, chicken breasts" },
        ru: { title: "Завтрак микс", desc: "Яйцо, сыр, овощи, картофель, куриное филе" }
    },
    {
        id: 56, category: "breakfest", price: 11.00, image: "MENU FOTO/9 BREAKFAST/2.jpg",
        ka: { title: "ომლეტი", desc: "ომლეტი" },
        en: { title: "Omlet", desc: "Omelette" },
        ru: { title: "Омлет", desc: "Омлет" }
    },
    {
        id: 57, category: "breakfest", price: 9.00, image: "MENU FOTO/9 BREAKFAST/3.jpg",
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
        id: 63, category: "pastry", price: 18.00, image: "MENU FOTO/10 PASTRY/1.jpg",
        ka: { title: "ხაჭაპური იმერული", desc: "იმერული ხაჭაპური" },
        en: { title: "Imeretiankhachapuri", desc: "Imeretian Khachapuri" },
        ru: { title: "Хачапури по-имеретински", desc: "Хачапури по-имеретински" }
    },
    {
        id: 64, category: "pastry", price: 22.00, image: "MENU FOTO/10 PASTRY/2.jpg",
        ka: { title: "ხაჭაპური \"მეგრული\"", desc: "მეგრული ხაჭაპური" },
        en: { title: "Megreliankhachapuri", desc: "Megrelian Khachapuri" },
        ru: { title: "Хачапури по-мегрелски", desc: "Хачапури по-мегрельски" }
    },
    {
        id: 65, category: "pastry", price: 26.00, image: "MENU FOTO/10 PASTRY/3.jpg",
        ka: { title: "ხაჭაპური \"ლაზური\"", desc: "ლაზური ხაჭაპური" },
        en: { title: "Khachapuri \"Lazuri\"", desc: "Lazuri Khachapuri" },
        ru: { title: "Хачапури \"Лазури\"", desc: "Хачапури \"Лазури\"" }
    },
    {
        id: 66, category: "pastry", price: 20.00, image: "MENU FOTO/10 PASTRY/4.jpg",
        ka: { title: "ხაჭაპური შამფურზე", desc: "ხაჭაპური შამფურზე" },
        en: { title: "Khachapuri on a spit", desc: "Khachapuri on a spit" },
        ru: { title: "Хачапури на шампуре", desc: "Хачапури на шампуре" }
    },
    {
        id: 67, category: "pastry", price: 19.00, image: "MENU FOTO/10 PASTRY/5.jpg",
        ka: { title: "აჭარული ხაჭაპური", desc: "აჭარული ხაჭაპური" },
        en: { title: "Adjaretian khachapuri", desc: "Adjarian Khachapuri" },
        ru: { title: "Хачапури по-аджарски", desc: "Хачапури по-аджарски" }
    },
    {
        id: 68, category: "pastry", price: 16.00, image: "MENU FOTO/10 PASTRY/6.jpg",
        ka: { title: "ლობიანი", desc: "ლობიანი" },
        en: { title: "Lobiani", desc: "Lobiani" },
        ru: { title: "Лобиани", desc: "Лобиани" }
    },
    {
        id: 69, category: "pastry", price: 2.50, image: "MENU FOTO/10 PASTRY/7.jpg",
        ka: { title: "პური \"შოთი\"", desc: "შოთის პური" },
        en: { title: "Bread \"Shoti\"", desc: "Shoti bread" },
        ru: { title: "Хлеб \"Шоти\"", desc: "Хлеб \"Шоти\"" }
    },
    {
        id: 70, category: "pastry", price: 2.50, image: "MENU FOTO/10 PASTRY/8.jpg",
        ka: { title: "მჭადი", desc: "მჭადი" },
        en: { title: "Mchadi (corn cake)", desc: "Cornbread" },
        ru: { title: "Мчади (кукурузная лепешка)", desc: "Кукурузная лепешка" }
    },

    // --- პიცა (PIZZA) ---
    {
        id: 71, category: "pizza", price: 21.00, image: "MENU FOTO/11 PIZZA/1.jpg",
        ka: { title: "პიცა „პეპერონი“", desc: "ტომატის სოუსი, ძეხვი, პომიდორი, ყველი" },
        en: { title: "Pepperoni Pizza", desc: "Tomato sauce, sausage, tomato, cheese" },
        ru: { title: "Пицца Пепперони", desc: "Томатный соус, колбаса, помидор, сыр" }
    },
    {
        id: 72, category: "pizza", price: 20.00, image: "MENU FOTO/11 PIZZA/2.jpg",
        ka: { title: "პიცა „მარგარიტა“", desc: "ტომატის სოუსი, პომიდორი, ყველი" },
        en: { title: "Margarita Pizza", desc: "Tomato sauce, tomato, cheese" },
        ru: { title: "Пицца Маргарита", desc: "Томатный соус, помидор, сыр" }
    },
    {
        id: 73, category: "pizza", price: 24.00, image: "MENU FOTO/11 PIZZA/3.jpg",
        ka: { title: "პიცა „რეჯინა“", desc: "ნივრის სოუსი, ლორი, სოკო, მჟავე კიტრი, ყველი" },
        en: { title: "Regina Pizza", desc: "Garlic sauce, ham, mushrooms, pickled cucumber, cheese" },
        ru: { title: "Пицца Реджина", desc: "Чесночный соус, ветчина, грибы, соленый огурец, сыр" }
    },
    {
        id: 74, category: "pizza", price: 24.00, image: "MENU FOTO/11 PIZZA/4.jpg",
        ka: { title: "პიცა „კრემონა“", desc: "ნაღების სოუსი, ქათმის ხორცი, პომიდორი, სოკო" },
        en: { title: "Cremona Pizza", desc: "Cream sauce, chicken, tomato, mushrooms" },
        ru: { title: "Пицца Кремона", desc: "Сливочный соус, курица, помидор, грибы" }
    },
    {
        id: 75, category: "pizza", price: 19.00, image: "MENU FOTO/11 PIZZA/5.jpg",
        ka: { title: "პიცა „პრიმავერა“", desc: "ტომატის სოუსი, პომიდორი, სოკო, ბულგარული" },
        en: { title: "Primavera Pizza", desc: "Tomato sauce, tomato, mushrooms, bell pepper" },
        ru: { title: "Пицца Примавера", desc: "Томатный соус, помидор, грибы, болгарский перец" }
    },

    // --- დესერტი (DESSERTS) ---
    {
        id: 76, category: "desserts", price: 9.00, image: "MENU FOTO/12 DESSERTS/1.jpg",
        ka: { title: "ნამცხვარი „ბრაუნი“", desc: "ბრაუნი" },
        en: { title: "Brownie Cake", desc: "Brownie cake" },
        ru: { title: "Пирожное Брауни", desc: "Брауни" }
    },
    {
        id: 77, category: "desserts", price: 8.00, image: "MENU FOTO/12 DESSERTS/2.jpg",
        ka: { title: "ნამცხვარი „ლეტიცია“", desc: "ლეტიცია" },
        en: { title: "Leticia Cake", desc: "Leticia cake" },
        ru: { title: "Пирожное Летиция", desc: "Летиция" }
    },
    {
        id: 78, category: "desserts", price: 7.00, image: "MENU FOTO/12 DESSERTS/3.jpg",
        ka: { title: "ნამცხვარი „ფახლავა“", desc: "ფახლავა" },
        en: { title: "Baklava Cake", desc: "Baklava" },
        ru: { title: "Пахлава", desc: "Пахлава" }
    },
    {
        id: 79, category: "desserts", price: 7.00, image: "MENU FOTO/12 DESSERTS/4.jpg",
        ka: { title: "ნამცხვარი „ზღაპარი“", desc: "ზღაპარი" },
        en: { title: "Fairy Tale Cake", desc: "Fairy tale cake" },
        ru: { title: "Пирожное Сказка", desc: "Сказка" }
    },
    {
        id: 80, category: "desserts", price: 6.00, image: "MENU FOTO/12 DESSERTS/5.jpg",
        ka: { title: "ნაყინი", desc: "ნაყინი" },
        en: { title: "Ice Cream", desc: "Ice cream" },
        ru: { title: "Мороженое", desc: "Мороженое" }
    },
    {
        id: 81, category: "desserts", price: 8.00, image: "MENU FOTO/12 DESSERTS/6.jpg",
        ka: { title: "ნაყინი შოკოლადით", desc: "ნაყინი შოკოლადით" },
        en: { title: "Ice Cream with Chocolate", desc: "Ice cream with chocolate" },
        ru: { title: "Мороженое с шоколадом", desc: "Мороженое с шоколадом" }
    },

    // --- ცხელი სასმელები (HOT DRINKS) ---
    {
        id: 82, category: "hot_drinks", price: 3.50, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი (შავი)", desc: "შავი ჩაი" },
        en: { title: "Black Tea", desc: "Black tea" },
        ru: { title: "Черный чай", desc: "Черный чай" }
    },
    {
        id: 83, category: "hot_drinks", price: 4.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ლიმონით", desc: "ჩაი ლიმონით" },
        en: { title: "Tea with Lemon", desc: "Tea with lemon" },
        ru: { title: "Чай с лимоном", desc: "Чай с лимоном" }
    },
    {
        id: 84, category: "hot_drinks", price: 4.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი მწვანე", desc: "მწვანე ჩაი" },
        en: { title: "Green Tea", desc: "Green tea" },
        ru: { title: "Зеленый чай", desc: "Зеленый чай" }
    },
    {
        id: 85, category: "hot_drinks", price: 4.50, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ხილის", desc: "ხილის ჩაი" },
        en: { title: "Fruit Tea", desc: "Fruit tea" },
        ru: { title: "Фруктовый чай", desc: "Фруктовый чай" }
    },
    {
        id: 86, category: "hot_drinks", price: 14.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ჩაიდნით (შავი)", desc: "შავი ჩაი ჩაიდნით" },
        en: { title: "Teapot (Black)", desc: "Black tea pot" },
        ru: { title: "Чай в чайнике (черный)", desc: "Черный чай в чайнике" }
    },
    {
        id: 87, category: "hot_drinks", price: 15.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ჩაიდნით (შავი ბერგამოტით)", desc: "ბერგამოტის ჩაი ჩაიდნით" },
        en: { title: "Teapot (Earl Grey)", desc: "Black tea with bergamot" },
        ru: { title: "Чай в чайнике (бергамот)", desc: "Черный чай с бергамотом" }
    },
    {
        id: 88, category: "hot_drinks", price: 15.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ჩაიდნით (მწვანე)", desc: "მწვანე ჩაი ჩაიდნით" },
        en: { title: "Teapot (Green)", desc: "Green tea pot" },
        ru: { title: "Чай в чайнике (зеленый)", desc: "Зеленый чай в чайнике" }
    },
    {
        id: 89, category: "hot_drinks", price: 17.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ჩაიდნით (ქართული კენკრა)", desc: "კენკრის ჩაი ჩაიდნით" },
        en: { title: "Teapot (Georgian Berry)", desc: "Georgian berry tea pot" },
        ru: { title: "Чай в чайнике (грузинские ягоды)", desc: "Грузинский ягодный чай" }
    },
    {
        id: 90, category: "hot_drinks", price: 3.50, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300",
        ka: { title: "ყავა (უალი)", desc: "ხსნადი ყავა" },
        en: { title: "Coffee (Instant)", desc: "Instant coffee" },
        ru: { title: "Растворимый кофе", desc: "Растворимый кофе" }
    },
    {
        id: 91, category: "hot_drinks", price: 5.00, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300",
        ka: { title: "ყავა ესპრესო", desc: "ესპრესო" },
        en: { title: "Espresso", desc: "Espresso" },
        ru: { title: "Эспрессо", desc: "Эспрессо" }
    },
    {
        id: 92, category: "hot_drinks", price: 5.00, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300",
        ka: { title: "ყავა ამერიკანო", desc: "ამერიკანო" },
        en: { title: "Americano", desc: "Americano" },
        ru: { title: "Американо", desc: "Американо" }
    },
    {
        id: 93, category: "hot_drinks", price: 9.00, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300",
        ka: { title: "ყავა ცივი", desc: "ცივი ყავა" },
        en: { title: "Iced Coffee", desc: "Iced coffee" },
        ru: { title: "Холодный кофе", desc: "Холодный кофе" }
    },
    {
        id: 94, category: "hot_drinks", price: 11.00, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300",
        ka: { title: "ყავა ცივი, ნაყინით", desc: "ცივი ყავა ნაყინით" },
        en: { title: "Iced Coffee with Ice Cream", desc: "Iced coffee with ice cream" },
        ru: { title: "Холодный кофе с мороженым", desc: "Холодный кофе с мороженым" }
    },

    // --- გამაგრილებელი სასმელები (REFRESHING DRINKS) ---
    {
        id: 95, category: "drinks", price: 4.00, image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=300",
        ka: { title: "ბორჯომი (0.5 ლ)", desc: "მინერალური წყალი" },
        en: { title: "Borjomi (0.5 l)", desc: "Mineral water" },
        ru: { title: "Боржоми (0.5 л)", desc: "Минеральная вода" }
    },
    {
        id: 96, category: "drinks", price: 2.50, image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=300",
        ka: { title: "წყალი (0.5 ლ)", desc: "წყაროს წყალი" },
        en: { title: "Water (0.5 l)", desc: "Spring water" },
        ru: { title: "Вода (0.5 л)", desc: "Родниковая вода" }
    },
    {
        id: 97, category: "drinks", price: 4.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
        ka: { title: "კოკა-კოლა (0.5 ლ)", desc: "კოკა-კოლა" },
        en: { title: "Coca-Cola (0.5 l)", desc: "Coca-Cola" },
        ru: { title: "Кока-Кола (0.5 л)", desc: "Кока-Кола" }
    },
    {
        id: 98, category: "drinks", price: 4.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
        ka: { title: "ფანტა (0.5 ლ)", desc: "ფანტა" },
        en: { title: "Fanta (0.5 l)", desc: "Fanta" },
        ru: { title: "Фанта (0.5 л)", desc: "Фанта" }
    },
    {
        id: 99, category: "drinks", price: 4.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
        ka: { title: "სპრაიტი (0.5 ლ)", desc: "სპრაიტი" },
        en: { title: "Sprite (0.5 l)", desc: "Sprite" },
        ru: { title: "Спрайт (0.5 л)", desc: "Спрайт" }
    },
    {
        id: 100, category: "drinks", price: 5.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
        ka: { title: "ლიმონათი (0.5 ლ)", desc: "ქართული ლიმონათი" },
        en: { title: "Lemonade (0.5 l)", desc: "Georgian lemonade" },
        ru: { title: "Лимонад (0.5 л)", desc: "Грузинский лимонад" }
    },
    {
        id: 101, category: "drinks", price: 18.00, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300",
        ka: { title: "წვენი (1 ლ)", desc: "ნატურალური წვენი" },
        en: { title: "Juice (1 l)", desc: "Natural juice" },
        ru: { title: "Сок (1 л)", desc: "Натуральный сок" }
    },
    {
        id: 102, category: "drinks", price: 4.50, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300",
        ka: { title: "წვენი (0.250 ლ)", desc: "ნატურალური წვენი" },
        en: { title: "Juice (0.25 l)", desc: "Natural juice" },
        ru: { title: "Сок (0.25 л)", desc: "Натуральный сок" }
    },
    {
        id: 103, category: "drinks", price: 18.00, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300",
        ka: { title: "ხილის კომპოტი (1 ლ)", desc: "სახლის კომპოტი" },
        en: { title: "Fruit Compote (1 l)", desc: "Homemade compote" },
        ru: { title: "Фруктовый компот (1 л)", desc: "Домашний компот" }
    },

    // --- ლუდი (BEER) ---
    {
        id: 104, category: "beer", price: 7.00, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „ნატახტარი“ (0.5 ლ)", desc: "ბოთლის ლუდი" },
        en: { title: "Natakhtari Beer (0.5 l)", desc: "Bottled beer" },
        ru: { title: "Пиво Натахтари (0.5 л)", desc: "Бутылочное пиво" }
    },
    {
        id: 105, category: "beer", price: 7.50, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „ქარვა“ (0.5 ლ)", desc: "ბოთლის ლუდი" },
        en: { title: "Karva Beer (0.5 l)", desc: "Bottled beer" },
        ru: { title: "Пиво Карва (0.5 л)", desc: "Бутылочное пиво" }
    },
    {
        id: 106, category: "beer", price: 7.50, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „კასრის“ (0.5 ლ)", desc: "ბოთლის ლუდი" },
        en: { title: "Kasris Beer (0.5 l)", desc: "Bottled beer" },
        ru: { title: "Пиво Касрис (0.5 л)", desc: "Бутылочное пиво" }
    },
    {
        id: 107, category: "beer", price: 7.50, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „კასრის“ მსუბუქი (0.5 ლ)", desc: "მსუბუქი ლუდი" },
        en: { title: "Kasris Light Beer (0.5 l)", desc: "Light beer" },
        ru: { title: "Пиво Касрис светлое (0.5 л)", desc: "Светлое пиво" }
    },
    {
        id: 108, category: "beer", price: 8.00, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „ექსტრა“ (0.5 ლ)", desc: "ბოთლის ლუდი" },
        en: { title: "Extra Beer (0.5 l)", desc: "Bottled beer" },
        ru: { title: "Пиво Экстра (0.5 л)", desc: "Бутылочное пиво" }
    },
    {
        id: 109, category: "beer", price: 11.00, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „ტაატი“ (კრაფტი 0.5 ლ)", desc: "კრაფტ ლუდი" },
        en: { title: "Taati Craft Beer (0.5 l)", desc: "Craft beer" },
        ru: { title: "Крафтовое пиво Таати (0.5 л)", desc: "Крафтовое пиво" }
    },

    // --- ოჯახის ღვინო (HOME WINE) ---
    {
        id: 110, category: "alcohol", price: 24.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „ცოლიკაური“ 0.750 ლ", desc: "თეთრი მშრალი" },
        en: { title: "Home Wine Tsolikouri 0.75 l", desc: "White dry" },
        ru: { title: "Домашнее вино Цоликоури 0.75 л", desc: "Белое сухое" }
    },
    {
        id: 111, category: "alcohol", price: 8.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „ცოლიკაური“ 0.250 ლ", desc: "თეთრი მშრალი" },
        en: { title: "Home Wine Tsolikouri 0.25 l", desc: "White dry" },
        ru: { title: "Домашнее вино Цоликоури 0.25 л", desc: "Белое сухое" }
    },
    {
        id: 112, category: "alcohol", price: 33.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „თავკვერი“ 0.750 ლ", desc: "წითელი ნახევრად მშრალი" },
        en: { title: "Home Wine Tavkveri 0.75 l", desc: "Red semi-dry" },
        ru: { title: "Домашнее вино Тавквери 0.75 л", desc: "Красное полусухое" }
    },
    {
        id: 113, category: "alcohol", price: 11.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „თავკვერი“ 0.250 ლ", desc: "წითელი ნახევრად მშრალი" },
        en: { title: "Home Wine Tavkveri 0.25 l", desc: "Red semi-dry" },
        ru: { title: "Домашнее вино Тавквери 0.25 л", desc: "Красное полусухое" }
    },
    {
        id: 114, category: "alcohol", price: 48.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „ოჯალეში“ 0.750 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Home Wine Ojaleshi 0.75 l", desc: "Red semi-sweet" },
        ru: { title: "Домашнее вино Оджалеши 0.75 л", desc: "Красное полусладкое" }
    },
    {
        id: 115, category: "alcohol", price: 16.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „ოჯალეში“ 0.250 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Home Wine Ojaleshi 0.25 l", desc: "Red semi-sweet" },
        ru: { title: "Домашнее вино Оджалеши 0.25 л", desc: "Красное полусладкое" }
    },

    // --- თეთრი ღვინო (WHITE WINE) ---
    {
        id: 116, category: "alcohol", price: 42.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ალაზნის ველი (თეთრი) 0.750 ლ", desc: "თეთრი ნახევრად ტკბილი" },
        en: { title: "Alazani Valley (White) 0.75 l", desc: "White semi-sweet" },
        ru: { title: "Алазанская Долина (белое) 0.75 л", desc: "Белое полусладкое" }
    },
    {
        id: 117, category: "alcohol", price: 14.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ალაზნის ველი (თეთრი) 0.250 ლ", desc: "თეთრი ნახევრად ტკბილი" },
        en: { title: "Alazani Valley (White) 0.25 l", desc: "White semi-sweet" },
        ru: { title: "Алазанская Долина (белое) 0.25 л", desc: "Белое полусладкое" }
    },
    {
        id: 118, category: "alcohol", price: 48.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ტვიში 0.750 ლ", desc: "თეთრი ნახევრად ტკბილი" },
        en: { title: "Tvishi 0.75 l", desc: "White semi-sweet" },
        ru: { title: "Твиши 0.75 л", desc: "Белое полусладкое" }
    },
    {
        id: 119, category: "alcohol", price: 16.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ტვიში 0.250 ლ", desc: "თეთრი ნახევრად ტკბილი" },
        en: { title: "Tvishi 0.25 l", desc: "White semi-sweet" },
        ru: { title: "Твиши 0.25 л", desc: "Белое полусладкое" }
    },
    {
        id: 120, category: "alcohol", price: 48.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ქისი 0.750 ლ", desc: "თეთრი მშრალი" },
        en: { title: "Kisi 0.75 l", desc: "White dry" },
        ru: { title: "Киси 0.75 л", desc: "Белое сухое" }
    },
    {
        id: 121, category: "alcohol", price: 16.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ქისი 0.250 ლ", desc: "თეთრი მშრალი" },
        en: { title: "Kisi 0.25 l", desc: "White dry" },
        ru: { title: "Киси 0.25 л", desc: "Белое сухое" }
    },
    {
        id: 122, category: "alcohol", price: 45.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "მანავი 0.750 ლ", desc: "თეთრი მშრალი" },
        en: { title: "Manavi 0.75 l", desc: "White dry" },
        ru: { title: "Манави 0.75 л", desc: "Белое сухое" }
    },
    {
        id: 123, category: "alcohol", price: 15.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "მანავი 0.250 ლ", desc: "თეთრი მშრალი" },
        en: { title: "Manavi 0.25 l", desc: "White dry" },
        ru: { title: "Манави 0.25 л", desc: "Белое сухое" }
    },
    {
        id: 124, category: "alcohol", price: 39.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "წინანდალი 0.750 ლ", desc: "თეთრი მშრალი" },
        en: { title: "Tsinandali 0.75 l", desc: "White dry" },
        ru: { title: "Цинандали 0.75 л", desc: "Белое сухое" }
    },
    {
        id: 125, category: "alcohol", price: 13.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "წინანდალი 0.250 ლ", desc: "თეთრი მშრალი" },
        en: { title: "Tsinandali 0.25 l", desc: "White dry" },
        ru: { title: "Цинандали 0.25 л", desc: "Белое сухое" }
    },

    // --- წითელი ღვინო (RED WINE) ---
    {
        id: 126, category: "alcohol", price: 75.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ხვანჭკარა 0.750 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Khvanchkara 0.75 l", desc: "Red semi-sweet" },
        ru: { title: "Хванчкара 0.75 л", desc: "Красное полусладкое" }
    },
    {
        id: 127, category: "alcohol", price: 25.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ხვანჭკარა 0.250 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Khvanchkara 0.25 l", desc: "Red semi-sweet" },
        ru: { title: "Хванчкара 0.25 л", desc: "Красное полусладкое" }
    },
    {
        id: 128, category: "alcohol", price: 57.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ქინძმარაული 0.750 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Kindzmarauli 0.75 l", desc: "Red semi-sweet" },
        ru: { title: "Киндзмараули 0.75 л", desc: "Красное полусладкое" }
    },
    {
        id: 129, category: "alcohol", price: 19.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ქინძმარაული 0.250 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Kindzmarauli 0.25 l", desc: "Red semi-sweet" },
        ru: { title: "Киндзмараули 0.25 л", desc: "Красное полусладкое" }
    },
    {
        id: 130, category: "alcohol", price: 57.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "მუკუზანი 0.750 ლ", desc: "წითელი მშრალი" },
        en: { title: "Mukuzani 0.75 l", desc: "Red dry" },
        ru: { title: "Мукузани 0.75 л", desc: "Красное сухое" }
    },
    {
        id: 131, category: "alcohol", price: 19.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "მუკუზანი 0.250 ლ", desc: "წითელი მშრალი" },
        en: { title: "Mukuzani 0.25 l", desc: "Red dry" },
        ru: { title: "Мукузани 0.25 л", desc: "Красное сухое" }
    },
    {
        id: 132, category: "alcohol", price: 45.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ახაშენი 0.750 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Akhasheni 0.75 l", desc: "Red semi-sweet" },
        ru: { title: "Ахашени 0.75 л", desc: "Красное полусладкое" }
    },
    {
        id: 133, category: "alcohol", price: 15.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ახაშენი 0.250 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Akhasheni 0.25 l", desc: "Red semi-sweet" },
        ru: { title: "Ахашени 0.25 л", desc: "Красное полусладкое" }
    },
    {
        id: 134, category: "alcohol", price: 42.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ალაზნის ველი (წითელი) 0.750 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Alazani Valley (Red) 0.75 l", desc: "Red semi-sweet" },
        ru: { title: "Алазанская Долина (красное) 0.75 л", desc: "Красное полусладкое" }
    },
    {
        id: 135, category: "alcohol", price: 14.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ალაზნის ველი (წითელი) 0.250 ლ", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Alazani Valley (Red) 0.25 l", desc: "Red semi-sweet" },
        ru: { title: "Алазанская Долина (красное) 0.25 л", desc: "Красное полусладкое" }
    },
    {
        id: 136, category: "alcohol", price: 45.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "საფერავი 0.750 ლ", desc: "წითელი მშრალი" },
        en: { title: "Saperavi 0.75 l", desc: "Red dry" },
        ru: { title: "Саперави 0.75 л", desc: "Красное сухое" }
    },
    {
        id: 137, category: "alcohol", price: 15.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "საფერავი 0.250 ლ", desc: "წითელი მშრალი" },
        en: { title: "Saperavi 0.25 l", desc: "Red dry" },
        ru: { title: "Саперави 0.25 л", desc: "Красное сухое" }
    },
    {
        id: 138, category: "alcohol", price: 45.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "საფერავი როზე 0.750 ლ", desc: "ვარდისფერი მშრალი" },
        en: { title: "Saperavi Rose 0.75 l", desc: "Rose dry" },
        ru: { title: "Саперави Розе 0.75 л", desc: "Розовое сухое" }
    },
    {
        id: 139, category: "alcohol", price: 15.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "საფერავი როზე 0.250 ლ", desc: "ვარდისფერი მშრალი" },
        en: { title: "Saperavi Rose 0.25 l", desc: "Rose dry" },
        ru: { title: "Саперави Розе 0.25 л", desc: "Розовое сухое" }
    },

    // --- არაყი და ჭაჭა (VODKA & CHACHA) ---
    {
        id: 140, category: "alcohol", price: 35.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi Prestige 0.5 l", desc: "არაყი" },
        en: { title: "Gomi Prestige 0.5 l", desc: "Vodka" },
        ru: { title: "Гоми Престиж 0.5 л", desc: "Водка" }
    },
    {
        id: 141, category: "alcohol", price: 3.50, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi Prestige 0.05 l", desc: "არაყი" },
        en: { title: "Gomi Prestige 0.05 l", desc: "Vodka" },
        ru: { title: "Гоми Престиж 0.05 л", desc: "Водка" }
    },
    {
        id: 142, category: "alcohol", price: 32.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi Original 0.5 l", desc: "არაყი" },
        en: { title: "Gomi Original 0.5 l", desc: "Vodka" },
        ru: { title: "Гоми Оригинал 0.5 л", desc: "Водка" }
    },
    {
        id: 143, category: "alcohol", price: 3.20, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi Original 0.05 l", desc: "არაყი" },
        en: { title: "Gomi Original 0.05 l", desc: "Vodka" },
        ru: { title: "Гоми Оригинал 0.05 л", desc: "Водка" }
    },
    {
        id: 144, category: "alcohol", price: 30.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi Lux 0.5 l", desc: "არაყი" },
        en: { title: "Gomi Lux 0.5 l", desc: "Vodka" },
        ru: { title: "Гоми Люкс 0.5 л", desc: "Водка" }
    },
    {
        id: 145, category: "alcohol", price: 3.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi Lux 0.05 l", desc: "არაყი" },
        en: { title: "Gomi Lux 0.05 l", desc: "Vodka" },
        ru: { title: "Гоми Люкс 0.05 л", desc: "Водка" }
    },
    {
        id: 146, category: "alcohol", price: 30.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჭაჭა (ოჯახის) 0.5 l", desc: "ოჯახის ჭაჭა" },
        en: { title: "Home Chacha 0.5 l", desc: "Homemade chacha" },
        ru: { title: "Чача домашняя 0.5 л", desc: "Домашняя чача" }
    },
    {
        id: 147, category: "alcohol", price: 3.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჭაჭა (ოჯახის) 0.05 l", desc: "ოჯახის ჭაჭა" },
        en: { title: "Home Chacha 0.05 l", desc: "Homemade chacha" },
        ru: { title: "Чача домашняя 0.05 л", desc: "Домашняя чача" }
    },
    {
        id: 148, category: "alcohol", price: 35.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჭაჭა (ოჯახის, მუხის) 0.5 l", desc: "მუხის ჭაჭა" },
        en: { title: "Oak Chacha 0.5 l", desc: "Oak aged chacha" },
        ru: { title: "Чача на дубе 0.5 л", desc: "Выдержанная в дубе чача" }
    },
    {
        id: 149, category: "alcohol", price: 3.50, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჭაჭა (ოჯახის, მუხის) 0.05 l", desc: "მუხის ჭაჭა" },
        en: { title: "Oak Chacha 0.05 l", desc: "Oak aged chacha" },
        ru: { title: "Чача на дубе 0.05 л", desc: "Выдержанная в дубе чача" }
    },

    // --- კონიაკი (COGNAC) ---
    {
        id: 150, category: "alcohol", price: 50.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "დუგლაძე 3* 0.5 l", desc: "კონიაკი 3 ვარსკვლავიანი" },
        en: { title: "Dugladze 3* 0.5 l", desc: "Cognac 3 stars" },
        ru: { title: "Дугладзе 3* 0.5 л", desc: "Коньяк 3 звезды" }
    },
    {
        id: 151, category: "alcohol", price: 5.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "დუგლაძე 3* 0.05 l", desc: "კონიაკი 3 ვარსკვლავიანი" },
        en: { title: "Dugladze 3* 0.05 l", desc: "Cognac 3 stars" },
        ru: { title: "Дугладзе 3* 0.05 л", desc: "Коньяк 3 звезды" }
    },
    {
        id: 152, category: "alcohol", price: 55.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "დუგლაძე 5* 0.5 l", desc: "კონიაკი 5 ვარსკვლავიანი" },
        en: { title: "Dugladze 5* 0.5 l", desc: "Cognac 5 stars" },
        ru: { title: "Дугладзе 5* 0.5 л", desc: "Коньяк 5 звезд" }
    },
    {
        id: 153, category: "alcohol", price: 5.50, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "დუგლაძე 5* 0.05 l", desc: "კონიაკი 5 ვარსკვლავიანი" },
        en: { title: "Dugladze 5* 0.05 l", desc: "Cognac 5 stars" },
        ru: { title: "Дугладзе 5* 0.05 л", desc: "Коньяк 5 звезд" }
    },
    {
        id: 154, category: "alcohol", price: 55.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "სარაჯიშვილი 3* 0.5 l", desc: "კონიაკი 3 ვარსკვლავიანი" },
        en: { title: "Sarajishvili 3* 0.5 l", desc: "Cognac 3 stars" },
        ru: { title: "Сараджишвили 3* 0.5 л", desc: "Коньяк 3 звезды" }
    },
    {
        id: 155, category: "alcohol", price: 5.50, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "სარაჯიშვილი 3* 0.05 l", desc: "კონიაკი 3 ვარსკვლავიანი" },
        en: { title: "Sarajishvili 3* 0.05 l", desc: "Cognac 3 stars" },
        ru: { title: "Сараджишвили 3* 0.05 л", desc: "Коньяк 3 звезды" }
    },
    {
        id: 156, category: "alcohol", price: 65.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "სარაჯიშვილი 5* 0.5 l", desc: "კონიაკი 5 ვარსკვლავიანი" },
        en: { title: "Sarajishvili 5* 0.5 l", desc: "Cognac 5 stars" },
        ru: { title: "Сараджишвили 5* 0.5 л", desc: "Коньяк 5 звезд" }
    },
    {
        id: 157, category: "alcohol", price: 6.50, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "სარაჯიშვილი 5* 0.05 l", desc: "კონიაკი 5 ვარსკვლავიანი" },
        en: { title: "Sarajishvili 5* 0.05 l", desc: "Cognac 5 stars" },
        ru: { title: "Сараджишвили 5* 0.05 л", desc: "Коньяк 5 звезд" }
    },
    {
        id: 158, category: "alcohol", price: 40.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჩამოსასხმელი კონიაკი 0.5 l", desc: "ჩამოსასხმელი კონიაკი" },
        en: { title: "Draught Cognac 0.5 l", desc: "Draught cognac" },
        ru: { title: "Разливной коньяк 0.5 л", desc: "Разливной коньяк" }
    },
    {
        id: 159, category: "alcohol", price: 4.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჩამოსასხმელი კონიაკი 0.05 l", desc: "ჩამოსასხმელი კონიაკი" },
        en: { title: "Draught Cognac 0.05 l", desc: "Draught cognac" },
        ru: { title: "Разливной коньяк 0.05 л", desc: "Разливной коньяк" }
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
