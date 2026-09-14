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
            drinks: "გამაგრილებელი სასმელები",
            vodka: "არაყი",
            cognak: "კონიაკი",
            redWine: "წითელი ღვინო",
            homeWine: "ოჯახის ღვინო",
            whiteWine: "თეთრი ღვინო",
            beer: "ლუდი",
            hotDrinks: "ცხელი სასმელები",
            pizza: "პიცა",
            dessert: "დესერტი",
            breakfast: "საუზმე",
            steak: "სტეიკი"
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
            drinks: "Cold Drinks",
            vodka: "Vodka",
            cognak: "Cognac",
            redWine: "Red Wine",
            homeWine: "Home Wine",
            whiteWine: "White Wine",
            beer: "Beer",
            hotDrinks: "Hot Drinks",
            pizza: "Pizza",
            dessert: "Dessert",
            breakfast: "Breakfast",
            steak: "Steak"
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
            drinks: "Прохладительные напитки",
            vodka: "Водка",
            cognak: "Коньяк",
            redWine: "Красное вино",
            homeWine: "Домашнее вино",
            whiteWine: "Белое вино",
            beer: "Пиво",
            hotDrinks: "Горячие напитки",
            pizza: "Пицца",
            dessert: "Десерты",
            breakfast: "Завтрак",
            steak: "Стейк"
        }
    }
};

// 2. კერძების ბაზა 3-ვე ენის მხარდაჭერით
const menuData = [
    // --- არაყი / VODKA ---
    {
        id: 101, category: "vodka", price: 35.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi \"Prestge\" (0.5 l.)", desc: "არაყი გომი პრესტიჟი" },
        en: { title: "Gomi \"Prestge\" (0.5 l.)", desc: "Vodka Gomi Prestige" },
        ru: { title: "Gomi \"Prestge\" (0.5 l.)", desc: "Водка Гоми Престиж" }
    },
    {
        id: 102, category: "vodka", price: 3.50, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi \"Prestge\" (0.05 l.)", desc: "არაყი გომი პრესტიჟი" },
        en: { title: "Gomi \"Prestge\" (0.05 l.)", desc: "Vodka Gomi Prestige" },
        ru: { title: "Gomi \"Prestge\" (0.05 l.)", desc: "Водка Гоми Престиж" }
    },
    {
        id: 103, category: "vodka", price: 32.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi \"Original\" (0.5 l.)", desc: "არაყი გომი ორიგინალი" },
        en: { title: "Gomi \"Original\" (0.5 l.)", desc: "Vodka Gomi Original" },
        ru: { title: "Gomi \"Original\" (0.5 l.)", desc: "Водка Гоми Оригинал" }
    },
    {
        id: 104, category: "vodka", price: 3.20, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi \"Original\" (0.05 l.)", desc: "არაყი გომი ორიგინალი" },
        en: { title: "Gomi \"Original\" (0.05 l.)", desc: "Vodka Gomi Original" },
        ru: { title: "Gomi \"Original\" (0.05 l.)", desc: "Водка Гоми Оригинал" }
    },
    {
        id: 105, category: "vodka", price: 30.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi \"lux\" (0.5 l.)", desc: "არაყი გომი ლუქსი" },
        en: { title: "Gomi \"lux\" (0.5 l.)", desc: "Vodka Gomi Lux" },
        ru: { title: "Gomi \"lux\" (0.5 l.)", desc: "Водка Гоми Люкс" }
    },
    {
        id: 106, category: "vodka", price: 3.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "Gomi \"lux\" (0.05 l.)", desc: "არაყი გომი ლუქსი" },
        en: { title: "Gomi \"lux\" (0.05 l.)", desc: "Vodka Gomi Lux" },
        ru: { title: "Gomi \"lux\" (0.05 l.)", desc: "Водка Гоми Люкс" }
    },
    {
        id: 107, category: "vodka", price: 30.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჭაჭა / Chacha (home) (0.5 l.)", desc: "სახლის ჭაჭა" },
        en: { title: "Chacha (home) (0.5 l.)", desc: "Homemade Chacha" },
        ru: { title: "Чача (home) (0.5 l.)", desc: "Домашняя Чача" }
    },
    {
        id: 108, category: "vodka", price: 3.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჭაჭა / Chacha (home) (0.05 l.)", desc: "სახლის ჭაჭა" },
        en: { title: "Chacha (home) (0.05 l.)", desc: "Homemade Chacha" },
        ru: { title: "Чача (home) (0.05 l.)", desc: "Домашняя Чача" }
    },
    {
        id: 109, category: "vodka", price: 35.00, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჭაჭა / Chacha (home, dark) (0.5 l.)", desc: "სახლის ჭაჭა (მუხის/მუქი)" },
        en: { title: "Chacha (home, dark) (0.5 l.)", desc: "Homemade Chacha (dark)" },
        ru: { title: "Чача (home, dark) (0.5 l.)", desc: "Домашняя Чача (темная)" }
    },
    {
        id: 110, category: "vodka", price: 3.50, image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300",
        ka: { title: "ჭაჭა / Chacha (home, dark) (0.05 l.)", desc: "სახლის ჭაჭა (მუხის/მუქი)" },
        en: { title: "Chacha (home, dark) (0.05 l.)", desc: "Homemade Chacha (dark)" },
        ru: { title: "Чача (home, dark) (0.05 l.)", desc: "Домашняя Чача (темная)" }
    },

    // --- კონიაკი / COGNAC ---
    {
        id: 111, category: "cognak", price: 50.00, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "\"Dugladze\" 3 st. (0.5 l.)", desc: "დუგლაძე 3 ვარსკვლავიანი" },
        en: { title: "\"Dugladze\" 3 st. (0.5 l.)", desc: "Dugladze 3 stars" },
        ru: { title: "\"Dugladze\" 3 st. (0.5 l.)", desc: "Дугладзе 3 звезды" }
    },
    {
        id: 112, category: "cognak", price: 5.00, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "\"Dugladze\" 3 st. (0.05 l.)", desc: "დუგლაძე 3 ვარსკვლავიანი" },
        en: { title: "\"Dugladze\" 3 st. (0.05 l.)", desc: "Dugladze 3 stars" },
        ru: { title: "\"Dugladze\" 3 st. (0.05 l.)", desc: "Дугладзе 3 звезды" }
    },
    {
        id: 113, category: "cognak", price: 55.00, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "\"Dugladze\" 5 st. (0.5 l.)", desc: "დუგლაძე 5 ვარსკვლავიანი" },
        en: { title: "\"Dugladze\" 5 st. (0.5 l.)", desc: "Dugladze 5 stars" },
        ru: { title: "\"Dugladze\" 5 st. (0.5 l.)", desc: "Дугладзе 5 звезд" }
    },
    {
        id: 114, category: "cognak", price: 5.50, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "\"Dugladze\" 5 st. (0.05 l.)", desc: "დუგლაძე 5 ვარსკვლავიანი" },
        en: { title: "\"Dugladze\" 5 st. (0.05 l.)", desc: "Dugladze 5 stars" },
        ru: { title: "\"Dugladze\" 5 st. (0.05 l.)", desc: "Дугладзе 5 звезд" }
    },
    {
        id: 115, category: "cognak", price: 55.00, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "Sarajishvili 3 st. (0.5 l)", desc: "სარაჯიშვილი 3 ვარსკვლავიანი" },
        en: { title: "Sarajishvili 3 st. (0.5 l)", desc: "Sarajishvili 3 stars" },
        ru: { title: "Sarajishvili 3 st. (0.5 l)", desc: "Сараджишвили 3 звезды" }
    },
    {
        id: 116, category: "cognak", price: 5.50, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "Sarajishvili 3 st. (0.05 l.)", desc: "სარაჯიშვილი 3 ვარსკვლავიანი" },
        en: { title: "Sarajishvili 3 st. (0.05 l.)", desc: "Sarajishvili 3 stars" },
        ru: { title: "Sarajishvili 3 st. (0.05 l.)", desc: "Сараджишвили 3 звезды" }
    },
    {
        id: 117, category: "cognak", price: 65.00, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "Sarajishvili 5 st. (0.5 l.)", desc: "სარაჯიშვილი 5 ვარსკვლავიანი" },
        en: { title: "Sarajishvili 5 st. (0.5 l.)", desc: "Sarajishvili 5 stars" },
        ru: { title: "Sarajishvili 5 st. (0.5 l.)", desc: "Сараджишвили 5 звезд" }
    },
    {
        id: 118, category: "cognak", price: 6.50, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "Sarajishvili 5 st. (0.05 l.)", desc: "სარაჯიშვილი 5 ვარსკვლავიანი" },
        en: { title: "Sarajishvili 5 st. (0.05 l.)", desc: "Sarajishvili 5 stars" },
        ru: { title: "Sarajishvili 5 st. (0.05 l.)", desc: "Сараджишвили 5 звезд" }
    },
    {
        id: 119, category: "cognak", price: 40.00, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "Cognak (draught) (0.5 l.)", desc: "ჩამოსასხმელი კონიაკი" },
        en: { title: "Cognak (draught) (0.5 l.)", desc: "Draught Cognac" },
        ru: { title: "Cognak (draught) (0.5 l.)", desc: "Разливной Коньяк" }
    },
    {
        id: 120, category: "cognak", price: 4.00, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300",
        ka: { title: "Cognak (draught) (0.05 l)", desc: "ჩამოსასხმელი კონიაკი" },
        en: { title: "Cognak (draught) (0.05 l)", desc: "Draught Cognac" },
        ru: { title: "Cognak (draught) (0.05 l)", desc: "Разливной Коньяк" }
    },

    // --- წითელი ღვინო / RED WINE ---
    {
        id: 121, category: "redWine", price: 75.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ხვანჭკარა (0.750)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Khvanchkara (Red semi-sweet) (0.750)", desc: "Red semi-sweet" },
        ru: { title: "Хванчкара (красное полусладкое) (0.750)", desc: "Красное полусладкое" }
    },
    {
        id: 122, category: "redWine", price: 25.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ხვანჭკარა (0.250)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Khvanchkara (Red semi-sweet) (0.250)", desc: "Red semi-sweet" },
        ru: { title: "Хванчкара (красное полусладкое) (0.250)", desc: "Красное полусладкое" }
    },
    {
        id: 123, category: "redWine", price: 57.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ქინძმარაული (0.750)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Kindzmarauli (red semi-sweet) (0.750)", desc: "Red semi-sweet" },
        ru: { title: "Киндзмараули (красное полусладкое) (0.750)", desc: "Красное полусладкое" }
    },
    {
        id: 124, category: "redWine", price: 19.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ქინძმარაული (0.250)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Kindzmarauli (red semi-sweet) (0.250)", desc: "Red semi-sweet" },
        ru: { title: "Киндзмараули (красное полусладкое) (0.250)", desc: "Красное полусладкое" }
    },
    {
        id: 125, category: "redWine", price: 57.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "მუკუზანი (0.750)", desc: "წითელი მშრალი" },
        en: { title: "Mukuzani (Red dry) (0.750)", desc: "Red dry" },
        ru: { title: "Мукузани (красное сухое) (0.750)", desc: "Красное сухое" }
    },
    {
        id: 126, category: "redWine", price: 19.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "მუკუზანი (0.250)", desc: "წითელი მშრალი" },
        en: { title: "Mukuzani (Red dry) (0.250)", desc: "Red dry" },
        ru: { title: "Мукузани (красное сухое) (0.250)", desc: "Красное сухое" }
    },
    {
        id: 127, category: "redWine", price: 45.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ახაშენი (0.750)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Akhasheni (Red semi-sweet) (0.750)", desc: "Red semi-sweet" },
        ru: { title: "Ахашени (красное полусладкое) (0.750)", desc: "Красное полусладкое" }
    },
    {
        id: 128, category: "redWine", price: 15.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ახაშენი (0.250)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Akhasheni (Red semi-sweet) (0.250)", desc: "Red semi-sweet" },
        ru: { title: "Ахашени (красное полусладкое) (0.250)", desc: "Красное полусладкое" }
    },
    {
        id: 129, category: "redWine", price: 42.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ალაზნის ველი (0.750)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "AlaznisVeli (Red semi-sweet) (0.750)", desc: "Red semi-sweet" },
        ru: { title: "Алазнис Вели (красное полусладкое) (0.750)", desc: "Красное полусладкое" }
    },
    {
        id: 130, category: "redWine", price: 14.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ალაზნის ველი (0.250)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "AlaznisVeli (Red semi-sweet) (0.250)", desc: "Red semi-sweet" },
        ru: { title: "Алазнис Вели (красное полусладкое) (0.250)", desc: "Красное полусладкое" }
    },
    {
        id: 131, category: "redWine", price: 45.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "საფერავი (0.750)", desc: "წითელი მშრალი" },
        en: { title: "Sapervi (Red dry) (0.750)", desc: "Red dry" },
        ru: { title: "Саперави (Красное сухое) (0.750)", desc: "Красное сухое" }
    },
    {
        id: 132, category: "redWine", price: 15.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "საფერავი (0.250)", desc: "წითელი მშრალი" },
        en: { title: "Saperavi (Red dry) (0.250)", desc: "Red dry" },
        ru: { title: "Саперави (Красное сухое) (0.250)", desc: "Красное сухое" }
    },
    {
        id: 133, category: "redWine", price: 45.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "საფერავი როზე (0.750)", desc: "მშრალი" },
        en: { title: "Sapervi roze (roze dry) (0.750)", desc: "Roze dry" },
        ru: { title: "Саперави розе (розовое сухое) (0.750)", desc: "Розовое сухое" }
    },
    {
        id: 134, category: "redWine", price: 15.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "საფერავი როზე (0.250)", desc: "მშრალი" },
        en: { title: "Saperavi roze (roze dry) (0.250)", desc: "Roze dry" },
        ru: { title: "Саперави розе (розовое сухое) (0.250)", desc: "Розовое сухое" }
    },

    // --- ოჯახის ღვინო / HOME WINE ---
    {
        id: 135, category: "homeWine", price: 24.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „ციოლიქაური“ (0.750)", desc: "თეთრი მშრალი" },
        en: { title: "Home wine \"Tsolikauri\" (White dry) (0.750)", desc: "White dry" },
        ru: { title: "Вино домашнее \"Цоликаури\" (белое сухое) (0.750)", desc: "Белое сухое" }
    },
    {
        id: 136, category: "homeWine", price: 8.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „ციოლიქაური“ (0.250)", desc: "თეთრი მშრალი" },
        en: { title: "Home wine (White dry) (0.250)", desc: "White dry" },
        ru: { title: "Вино домашнее \"Цоликаури\" (белое сухое) (0.250)", desc: "Белое сухое" }
    },
    {
        id: 137, category: "homeWine", price: 33.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „თავკვერი“ (0.750)", desc: "წითელი ნახევრად მშრალი" },
        en: { title: "Home wine \"Tavkveri\" (Red semi-dry) (0.750)", desc: "Red semi-dry" },
        ru: { title: "Вино домашнее \"Тавквери\" (Красное полусухое) (0.750)", desc: "Красное полусухое" }
    },
    {
        id: 138, category: "homeWine", price: 11.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „თავკვერი“ (0.250)", desc: "წითელი ნახევრად მშრალი" },
        en: { title: "Home wine (Red semi-dry) (0.250)", desc: "Red semi-dry" },
        ru: { title: "Вино домашнее \"Тавквери\" (Красное полусухое) (0.250)", desc: "Красное полусухое" }
    },
    {
        id: 139, category: "homeWine", price: 48.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „ოჯალეში“ (0.750)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Home wine \"Ojaleshi\" (Red semi-sweet) (0.750)", desc: "Red semi-sweet" },
        ru: { title: "Вино домашнее \"Оджалеши\" (Красное полусладкое) (0.750)", desc: "Красное полусладкое" }
    },
    {
        id: 140, category: "homeWine", price: 16.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ღვინო ოჯახის „ოჯალეში“ (0.250)", desc: "წითელი ნახევრად ტკბილი" },
        en: { title: "Home wine \"Ojaleshi\" (Red semi-sweet) (0.250)", desc: "Red semi-sweet" },
        ru: { title: "Вино домашнее \"Оджалеши\" (Красное полусладкое) (0.250)", desc: "Красное полусладкое" }
    },

    // --- თეთრი ღვინო / WHITE WINE ---
    {
        id: 141, category: "whiteWine", price: 42.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ალაზნის ველი (0.750)", desc: "თეთრი ნახევრად ტკბილი" },
        en: { title: "AlaznisVeli (White semi-sweet) (0.750)", desc: "White semi-sweet" },
        ru: { title: "Алазнис Вели (белое полусладкое) (0.750)", desc: "Белое полусладкое" }
    },
    {
        id: 142, category: "whiteWine", price: 14.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ალაზნის ველი (0.250)", desc: "თეთრი ნახევრად ტკბილი" },
        en: { title: "AlaznisVeli (White semi-sweet) (0.250)", desc: "White semi-sweet" },
        ru: { title: "Алазнис Вели (белое полусладкое) (0.250)", desc: "Белое полусладкое" }
    },
    {
        id: 143, category: "whiteWine", price: 48.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ტვიში (0.750)", desc: "თეთრი ნახევრად ტკბილი" },
        en: { title: "Tvishi (White semi-sweet) (0.750)", desc: "White semi-sweet" },
        ru: { title: "Твиши (белое полусладкое) (0.750)", desc: "Белое полусладкое" }
    },
    {
        id: 144, category: "whiteWine", price: 16.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ტვიში (0.250)", desc: "თეთრი ნახევრად ტკბილი" },
        en: { title: "Tvishi (White semi-sweet) (0.250)", desc: "White semi-sweet" },
        ru: { title: "Твиши (белое полусладкое) (0.250)", desc: "Белое полусладкое" }
    },
    {
        id: 145, category: "whiteWine", price: 48.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ქისი (0.750)", desc: "თეთრი მშრალი" },
        en: { title: "Kisi (white dry) (0.750)", desc: "White dry" },
        ru: { title: "Киси (белое сухое) (0.750)", desc: "Белое сухое" }
    },
    {
        id: 146, category: "whiteWine", price: 16.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "ქისი (0.250)", desc: "თეთრი მშრალი" },
        en: { title: "Kisi (white dry) (0.250)", desc: "White dry" },
        ru: { title: "Киси (белое сухое) (0.250)", desc: "Белое сухое" }
    },
    {
        id: 147, category: "whiteWine", price: 45.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "მანავი (0.750)", desc: "თეთრი მშრალი" },
        en: { title: "Manavi (white dry) (0.750)", desc: "White dry" },
        ru: { title: "Манави (белое сухое) (0.750)", desc: "Белое сухое" }
    },
    {
        id: 148, category: "whiteWine", price: 15.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "მანავი (0.250)", desc: "თეთრი მშრალი" },
        en: { title: "Manavi (white dry) (0.250)", desc: "White dry" },
        ru: { title: "Манави (белое сухое) (0.250)", desc: "Белое сухое" }
    },
    {
        id: 149, category: "whiteWine", price: 39.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "წინანდალი (0.750)", desc: "თეთრი მშრალი" },
        en: { title: "Tsinandali (white dry) (0.750)", desc: "White dry" },
        ru: { title: "Цинандали (белое сухое) (0.750)", desc: "Белое сухое" }
    },
    {
        id: 150, category: "whiteWine", price: 13.00, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300",
        ka: { title: "წინანდალი (0.250)", desc: "თეთრი მშრალი" },
        en: { title: "Tsinandali (white dry) (0.250)", desc: "White dry" },
        ru: { title: "Цинандали (белое сухое) (0.250)", desc: "Белое сухое" }
    },

    // --- ლუდი / BEER ---
    {
        id: 151, category: "beer", price: 7.00, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „ნატახტარი“ (0.5 ლ)", desc: "ქართული ლუდი" },
        en: { title: "Beer \"Natakhtari\" (0.5 L)", desc: "Georgian Beer" },
        ru: { title: "Пиво \"Натахтари\" (0.5 л)", desc: "Грузинское пиво" }
    },
    {
        id: 152, category: "beer", price: 7.50, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „ქარვა“ (0.5 ლ)", desc: "ქართული ლუდი" },
        en: { title: "Beer \"Karva\" (0.5L)", desc: "Georgian Beer" },
        ru: { title: "Пиво \"Карва\" (0.5 л)", desc: "Грузинское пиво" }
    },
    {
        id: 153, category: "beer", price: 7.50, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „კასრის“ (0.5 ლ)", desc: "ქართული ლუდი" },
        en: { title: "Beer \"Kasris\" (0.5 L)", desc: "Georgian Beer" },
        ru: { title: "Пиво \"Касрис\" (0.5 л)", desc: "Грузинское пиво" }
    },
    {
        id: 154, category: "beer", price: 7.50, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „კასრის“ მსუბუქი (0.5 ლ)", desc: "მსუბუქი ლუდი" },
        en: { title: "Beer \"Kasris\" mild (0.5 L)", desc: "Mild beer" },
        ru: { title: "Пиво \"Касрис\" легкий (0.5 л)", desc: "Легкое пиво" }
    },
    {
        id: 155, category: "beer", price: 8.00, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „ექსტრა“ (0.5 ლ)", desc: "ექსტრა ლუდი" },
        en: { title: "Beer \"Exstra\" (0.5 L)", desc: "Extra beer" },
        ru: { title: "Пиво \"Екстра\" (0.5 л)", desc: "Пиво Екстра" }
    },
    {
        id: 156, category: "beer", price: 11.00, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300",
        ka: { title: "ლუდი „ტაატი“ (კრაფტი 0.5ლ)", desc: "კრაფტ ლუდი" },
        en: { title: "Beer \"Taati\" (kraft 0.5 L)", desc: "Kraft beer" },
        ru: { title: "Пиво \"Таати\" (крафт 0.5 л)", desc: "Крафтовое пиво" }
    },

    // --- გამაგრილებელი სასმელები / REFRESHING DRINKS ---
    {
        id: 1, category: "drinks", price: 4.00, image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=300",
        ka: { title: "ბორჯომი (0.5)", desc: "მინერალური წყალი" },
        en: { title: "Borjomi (0.5)", desc: "Mineral water" },
        ru: { title: "Боржоми (0,5)", desc: "Минеральная вода" }
    },
    {
        id: 2, category: "drinks", price: 2.50, image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=300",
        ka: { title: "წყალი (0.5)", desc: "წყაროს წყალი" },
        en: { title: "Water (0.5)", desc: "Spring water" },
        ru: { title: "Вода (0,5)", desc: "Родниковая вода" }
    },
    {
        id: 3, category: "drinks", price: 4.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
        ka: { title: "კოკა-კოლა (0.5)", desc: "გამაგრილებელი სასმელი" },
        en: { title: "Coca-Cola (0.5)", desc: "Soft drink" },
        ru: { title: "Кока-Кола (0,5)", desc: "Безалкогольный напиток" }
    },
    {
        id: 4, category: "drinks", price: 4.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
        ka: { title: "ფანტა (0.5)", desc: "გამაგრილებელი სასმელი" },
        en: { title: "Fanta (0.5)", desc: "Soft drink" },
        ru: { title: "Фанта (0,5)", desc: "Безалкогольный напиток" }
    },
    {
        id: 5, category: "drinks", price: 4.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
        ka: { title: "სპრაიტი (0.5)", desc: "გამაგრილებელი სასმელი" },
        en: { title: "Sprite (0.5)", desc: "Soft drink" },
        ru: { title: "Спрайт (0,5)", desc: "Безалкогольный напиток" }
    },
    {
        id: 6, category: "drinks", price: 5.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
        ka: { title: "ლიმონათი (0.5)", desc: "გამაგრილებელი სასმელი" },
        en: { title: "Limonade (0.5)", desc: "Soft drink" },
        ru: { title: "Лимонад (0,5)", desc: "Безалкогольный напиток" }
    },
    {
        id: 7, category: "drinks", price: 18.00, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300",
        ka: { title: "წვენი (1 ლ)", desc: "ხილის წვენი" },
        en: { title: "Juice (1 L)", desc: "Fruit juice" },
        ru: { title: "Сок (1 л)", desc: "Фруктовый сок" }
    },
    {
        id: 8, category: "drinks", price: 4.50, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300",
        ka: { title: "წვენი (0.250 ლ)", desc: "ხილის წვენი" },
        en: { title: "Juice (0.250 L)", desc: "Fruit juice" },
        ru: { title: "Сок (0.250 л)", desc: "Фруктовый сок" }
    },
    {
        id: 9, category: "drinks", price: 18.00, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300",
        ka: { title: "ხილის კომპოტი (1 ლ)", desc: "ნატურალური კომპოტი" },
        en: { title: "Fruit compote (1 L)", desc: "Natural compote" },
        ru: { title: "Компот фруктовый (1 л)", desc: "Натуральный компот" }
    },

    // --- ცხელი სასმელები / HOT DRINKS ---
    {
        id: 157, category: "hotDrinks", price: 3.50, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი (შავი)", desc: "ცხელი ჩაი" },
        en: { title: "Tea (black)", desc: "Hot black tea" },
        ru: { title: "Чай (black)", desc: "Горячий черный чай" }
    },
    {
        id: 158, category: "hotDrinks", price: 4.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ლიმონით", desc: "შავი ჩაი ლიმონით" },
        en: { title: "Tea with lemon", desc: "Black tea with lemon" },
        ru: { title: "Чай с лимоном", desc: "Черный чай с лимоном" }
    },
    {
        id: 159, category: "hotDrinks", price: 4.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი მწვანე", desc: "ცხელი მწვანე ჩაი" },
        en: { title: "Green Tea", desc: "Hot green tea" },
        ru: { title: "Чай зеленый", desc: "Горячий зеленый чай" }
    },
    {
        id: 160, category: "hotDrinks", price: 4.50, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ხილის", desc: "ცხელი ხილის ჩაი" },
        en: { title: "Fruit Tea", desc: "Hot fruit tea" },
        ru: { title: "Чай фруктовый", desc: "Горячий фруктовый чай" }
    },
    {
        id: 161, category: "hotDrinks", price: 14.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ჩაიდნით (შავი)", desc: "დასაყენებელი შავი ჩაი" },
        en: { title: "Tea in Tea-pot (black)", desc: "Brewed black tea" },
        ru: { title: "Чай заварной в чайнике(черный)", desc: "Заварной черный чай" }
    },
    {
        id: 162, category: "hotDrinks", price: 15.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ჩაიდნით (შავი ბერგამოტით)", desc: "ბერგამოტით" },
        en: { title: "Tea in Tea-pot (black with bergamot)", desc: "With bergamot" },
        ru: { title: "Чай заварной в чайнике(черный с бергамотом)", desc: "С бергамотом" }
    },
    {
        id: 163, category: "hotDrinks", price: 15.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ჩაიდნით (მწვანე)", desc: "დასაყენებელი მწვანე ჩაი" },
        en: { title: "Tea in Tea-pot (green)", desc: "Brewed green tea" },
        ru: { title: "Чай заварной в чайнике(зеленый)", desc: "Заварной зеленый чай" }
    },
    {
        id: 164, category: "hotDrinks", price: 17.00, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300",
        ka: { title: "ჩაი ჩაიდნით (ქართული კენკრა)", desc: "ქართული კენკრით" },
        en: { title: "Tea in Tea-pot (georgian berry)", desc: "Georgian berry tea" },
        ru: { title: "Чай заварной в чайнике(грузинские ягоды)", desc: "Чай с грузинскими ягодами" }
    },
    {
        id: 165, category: "hotDrinks", price: 3.50, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300",
        ka: { title: "ყავა (ნალექის გარეშე)", desc: "ხსნადი ყავა" },
        en: { title: "Coffee (No Grounds)", desc: "Instant coffee" },
        ru: { title: "Кофе (без осадка)", desc: "Растворимый кофе" }
    },
    {
        id: 166, category: "hotDrinks", price: 5.00, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300",
        ka: { title: "ყავა ესპრესო", desc: "Coffee Espresso" },
        en: { title: "Coffee Espresso", desc: "Espresso" },
        ru: { title: "Кофе Эспрессо", desc: "Эспрессо" }
    },
    {
        id: 167, category: "hotDrinks", price: 5.00, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300",
        ka: { title: "ყავა ამერიკანო", desc: "Coffee Americano" },
        en: { title: "Coffee Americano", desc: "Americano" },
        ru: { title: "Кофе Американо", desc: "Американо" }
    },
    {
        id: 168, category: "hotDrinks", price: 9.00, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300",
        ka: { title: "ყავა ცივი", desc: "Cold Coffee" },
        en: { title: "Cold Coffee", desc: "Iced coffee" },
        ru: { title: "Кофе Холодный", desc: "Холодный кофе" }
    },
    {
        id: 169, category: "hotDrinks", price: 11.00, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300",
        ka: { title: "ყავა ცივი, ნაყინით", desc: "Cold Coffee with Ice-Cream" },
        en: { title: "Cold Coffee with Ice-Cream", desc: "Iced coffee with ice cream" },
        ru: { title: "Кофе Холодный с мороженным", desc: "Холодный кофе с мороженым" }
    },

    // --- პიცა / PIZZA ---
    {
        id: 170, category: "pizza", price: 21.00, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300",
        ka: { title: "პოცა „პეპერონი“", desc: "ტომატის სოუსი, ძეხვი, პომიდორი, ყველი" },
        en: { title: "Pizza „Peperoni“", desc: "Tomato sauce, sausage, tomato, cheese" },
        ru: { title: "Пицца „Пеперони“", desc: "Томатный соус, колбаса, помидоры, сыр" }
    },
    {
        id: 171, category: "pizza", price: 20.00, image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300",
        ka: { title: "პიცა „მარგარიტა“", desc: "ტომატის სოუსი, პომიდორი, ყველი" },
        en: { title: "Pizza „Margherita“", desc: "Tomato sauce, tomatoes, cheese" },
        ru: { title: "Пицца „Маргарита“", desc: "Томатный соус, помидоры, сыр" }
    },
    {
        id: 172, category: "pizza", price: 24.00, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300",
        ka: { title: "პიცა „რეჯინა“", desc: "ნივრის სოუსი, ლორი, სოკო, მჟავე კიტრი, ყველი" },
        en: { title: "Pizza „Rejina“", desc: "Garlic sauce, ham, mushrooms, sour cucumber, cheese" },
        ru: { title: "Пицца „Реджина“", desc: "Чесночный соус, ветчина, грибы, сол. огурец, сыр" }
    },
    {
        id: 173, category: "pizza", price: 24.00, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300",
        ka: { title: "პიცა „კრემონა“", desc: "ნაღების სოუსი, ქათმის ხორცი, პომიდორი, სოკო" },
        en: { title: "Pizza „Cremona“", desc: "Cream sauce, chicken meat, tomato, mushroom" },
        ru: { title: "Пицца „Кремона“", desc: "Сливочный соус, куриное мясо, помидоры, грибы" }
    },
    {
        id: 174, category: "pizza", price: 19.00, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300",
        ka: { title: "პიცა „პრიმავერა“", desc: "ტომატის სოუსი, პომიდორი, სოკო, ბულგარული" },
        en: { title: "Pizza „Primavera“", desc: "Tom. sauce, tomatoes, mushrooms, bell pepper" },
        ru: { title: "Пицца „Примавера“", desc: "Том. соус, помидоры, грибы, болг. перец" }
    },

    // --- დესერტი / DESSERTS ---
    {
        id: 175, category: "dessert", price: 9.00, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300",
        ka: { title: "ნამცხვარი „ბრაუნი“", desc: "შოკოლადის ბრაუნი" },
        en: { title: "Cake \"Brownie\"", desc: "Chocolate brownie" },
        ru: { title: "Тортик \"Брауни\"", desc: "Шоколадный брауни" }
    },
    {
        id: 176, category: "dessert", price: 8.00, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300",
        ka: { title: "ნამცხვარი „ლეტიცია“", desc: "გემრიელი ნამცხვარი" },
        en: { title: "Cake \"Leticia\"", desc: "Delicious cake" },
        ru: { title: "Тортик \"Летиция\"", desc: "Вкусный тортик" }
    },
    {
        id: 177, category: "dessert", price: 7.00, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
        ka: { title: "ნამცხვარი „ფახლავა“", desc: "ტრადიციული ფახლავა" },
        en: { title: "Cake \"Phakhlava\"", desc: "Traditional baklava" },
        ru: { title: "Тортик \"Пахлава\"", desc: "Традиционная пахлава" }
    },
    {
        id: 178, category: "dessert", price: 7.00, image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=300",
        ka: { title: "ნამცხვარი „ზღაპარი“", desc: "ნამცხვარი ზღაპარი" },
        en: { title: "Cake \"Fairy tale\"", desc: "Fairy tale cake" },
        ru: { title: "Тортик \"Сказка\"", desc: "Торт Сказка" }
    },
    {
        id: 179, category: "dessert", price: 6.00, image: "https://images.unsplash.com/photo-1567206563064-6f60f4000577?w=300",
        ka: { title: "ნაყინი", desc: "ცივი ნაყინი" },
        en: { title: "Ice-cream", desc: "Cold ice cream" },
        ru: { title: "Мороженное", desc: "Мороженое" }
    },
    {
        id: 180, category: "dessert", price: 8.00, image: "https://images.unsplash.com/photo-1567206563064-6f60f4000577?w=300",
        ka: { title: "ნაყინი შოკოლადით", desc: "ნაყინი შოკოლადის სოუსით" },
        en: { title: "Ice-cream with chocolate", desc: "Ice cream with chocolate" },
        ru: { title: "Мороженное с шоколадом", desc: "Мороженое с шоколадом" }
    },

    // --- ცომეული / PASTRY ---
    {
        id: 19, category: "pastry", price: 18.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური იმერული", desc: "ტრადიციული იმერული ხაჭაპური" },
        en: { title: "Imeretiankhachapuri", desc: "Traditional cheese bread" },
        ru: { title: "Хачапури по-имеретински", desc: "Традиционный хачапури" }
    },
    {
        id: 20, category: "pastry", price: 22.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური „მეგრული“", desc: "ყველით შიგნით და თავზე" },
        en: { title: "Megreliankhachapuri", desc: "With extra cheese on top" },
        ru: { title: "Хачапури по-мегрелски", desc: "С сыром внутри и сверху" }
    },
    {
        id: 181, category: "pastry", price: 26.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური „ლაზური“", desc: "ლაზური ხაჭაპური" },
        en: { title: "Khachapuri \"Lazuri\"", desc: "Lazuri khachapuri" },
        ru: { title: "Хачапури \"Лазури\"", desc: "Хачапури Лазури" }
    },
    {
        id: 182, category: "pastry", price: 20.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ხაჭაპური შამფურზე", desc: "შამფურზე გამომცხვარი" },
        en: { title: "Khachapuri on a spit", desc: "Khachapuri on a spit" },
        ru: { title: "Хачапури на шампуре", desc: "Хачапури на шампуре" }
    },
    {
        id: 183, category: "pastry", price: 19.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "აჭარული ხაჭაპური", desc: "ნავისებური ხაჭაპური კვერცხით" },
        en: { title: "Adjaretian khachapuri", desc: "Boat-shaped khachapuri with egg" },
        ru: { title: "Хачапури по-аджарски", desc: "Хачапури с яйцом" }
    },
    {
        id: 184, category: "pastry", price: 16.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300",
        ka: { title: "ლობიანი", desc: "ლობიოს გულსართით" },
        en: { title: "Lobiani", desc: "Bean stuffed bread" },
        ru: { title: "Лобиани", desc: "Пирог с фасолью" }
    },
    {
        id: 185, category: "pastry", price: 2.50, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
        ka: { title: "პური „შოთი“", desc: "ქართული თონის პური" },
        en: { title: "Bread \"Shoti\"", desc: "Georgian bread" },
        ru: { title: "Хлеб \"Шоти\"", desc: "Грузинский хлеб" }
    },
    {
        id: 186, category: "pastry", price: 2.50, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
        ka: { title: "მჭადი", desc: "სიმინდის ფქვილის მჭადი" },
        en: { title: "Mchadi (corn cake)", desc: "Cornbread" },
        ru: { title: "Мчади (кукурузная лепешка)", desc: "Кукурузная лепешка" }
    },

    // --- გარნირი / SIDE DISHES ---
    {
        id: 187, category: "sides", price: 8.00, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
        ka: { title: "კარტოფილი ფრი", desc: "შემწვარი კარტოფილი" },
        en: { title: "French Fries", desc: "French fries" },
        ru: { title: "Картофель фри", desc: "Картофель фри" }
    },
    {
        id: 188, category: "sides", price: 15.00, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
        ka: { title: "კარტოფილი მექსიკურად", desc: "სანელებლებით შემწვარი" },
        en: { title: "Mexican Potatoes", desc: "Spiced potatoes" },
        ru: { title: "Картофель по-мексикански", desc: "Картофель со специями" }
    },
    {
        id: 189, category: "sides", price: 12.00, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
        ka: { title: "კარტოფილი ოჯახურად", desc: "სახლის სტილის კარტოფილი" },
        en: { title: "Potatoes in a family", desc: "Home-style potatoes" },
        ru: { title: "Картофель по домашнему", desc: "Картофель по-домашнему" }
    },

    // --- საუზმე / BREAKFAST ---
    {
        id: 190, category: "breakfast", price: 24.00, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300",
        ka: { title: "საუზმე მიქსი", desc: "კვერცხი, ყველი, ბოსტნეული, კარტოფილი, ქათმის ფილე" },
        en: { title: "Breakfast mix", desc: "Eggs, cheese, vegetables, potatoes, chicken breasts" },
        ru: { title: "Завтракмикс", desc: "Яйцо, сыр, овощи, картофель, куриное филе" }
    },
    {
        id: 191, category: "breakfast", price: 11.00, image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=300",
        ka: { title: "ომლეტი", desc: "შემწვარი კვერცხი" },
        en: { title: "Omlet", desc: "Omelette" },
        ru: { title: "Омлет", desc: "Омлет" }
    },
    {
        id: 192, category: "breakfast", price: 9.00, image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=300",
        ka: { title: "გლაზუნია", desc: "ერბოკვერცხი" },
        en: { title: "Glazunia (Egg)", desc: "Fried eggs" },
        ru: { title: "Глазунья", desc: "Глазунья" }
    },

    // --- სოუსი / SAUCES ---
    {
        id: 193, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "ტყემალი", desc: "მჟავე ტყემლის სოუსი" },
        en: { title: "Tkemali", desc: "Plum sauce" },
        ru: { title: "Ткемали", desc: "Соус Ткемали" }
    },
    {
        id: 194, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "საწებელი", desc: "პომიდვრის სოუსი" },
        en: { title: "Tomatoe Sauce", desc: "Tomato sauce" },
        ru: { title: "Сацебели", desc: "Соус Сацебели" }
    },
    {
        id: 195, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "კეტჩუპი", desc: "პომიდვრის კეტჩუპი" },
        en: { title: "Ketchup", desc: "Ketchup" },
        ru: { title: "Кетчуп", desc: "Кетчуп" }
    },
    {
        id: 196, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "მაიონეზი", desc: "მაიონეზი" },
        en: { title: "Mayonnaise", desc: "Mayonnaise" },
        ru: { title: "Майонез", desc: "Майонез" }
    },
    {
        id: 197, category: "sauces", price: 2.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300",
        ka: { title: "არაჟანი", desc: "არაჟანი" },
        en: { title: "Sour cream", desc: "Sour cream" },
        ru: { title: "Сметана", desc: "Сметана" }
    },

    // --- სტეიკი / STEAK ---
    {
        id: 198, category: "steak", price: 69.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "საქონლის სტეიკი", desc: "კარტოფილი ფრი, ბოსტნეული, სოუსი" },
        en: { title: "Beef steak", desc: "French fries, fruit/veggies, sauce" },
        ru: { title: "Говяжий стейк", desc: "Карт. фри, овощи, соус" }
    },
    {
        id: 199, category: "steak", price: 48.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ღორის სტეიკი", desc: "კარტოფილი ფრი, ბოსტნეული, სოუსი" },
        en: { title: "Pork steak", desc: "French fries, vegetables, sauce" },
        ru: { title: "Свиной стейк", desc: "Картофель фри, овощи, соус" }
    },
    {
        id: 200, category: "steak", price: 43.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        ka: { title: "ქათმის სტეიკი", desc: "კარტოფილი ფრი, ბოსტნეული, სოუსი" },
        en: { title: "Chicken steak", desc: "French fries, vegetables, sauce" },
        ru: { title: "Куриный стейк", desc: "Картофель фри, овощи, соус" }
    },

    // --- თევზეული / FISH ---
    {
        id: 201, category: "fish", price: 24.00, image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=300",
        ka: { title: "კალმახი (შემწვარი)", desc: "შემწვარი კალმახი" },
        en: { title: "Trout (fried)", desc: "Fried trout" },
        ru: { title: "Форель (жареная)", desc: "Жареная форель" }
    },
    {
        id: 202, category: "fish", price: 41.00, image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=300",
        ka: { title: "ორაგულის სტეიკი", desc: "კარტოფილი ფრი, სოკო, ბოსტნეული" },
        en: { title: "Oraguli steak", desc: "French fries, mushrooms, vegetables" },
        ru: { title: "Стейк из Орагули", desc: "Картофель фри, грибы, овощи" }
    },

    // --- ხინკალი / KHINKALI ---
    {
        id: 25, category: "khinkali", price: 1.70, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300",
        ka: { title: "ხინკალი „ქალაქური“", desc: "საქონლის ხორცით" },
        en: { title: "Khinkali \"Kalakuri\"", desc: "Beef" },
        ru: { title: "Хинкали \"Калакури\"", desc: "Говядина" }
    },
    {
        id: 203, category: "khinkali", price: 1.95, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300",
        ka: { title: "ხინკალი „თუშური“", desc: "ცხვრის ხორცი, დაკეპილი" },
        en: { title: "Khinkali \"Tushuri\"", desc: "Sheep, chopped" },
        ru: { title: "Хинкали \"Тушури\"", desc: "Баранина, рубленая" }
    },
    {
        id: 204, category: "khinkali", price: 1.75, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300",
        ka: { title: "ხინკალი ყველით", desc: "ყველის გულსართით" },
        en: { title: "Khinkali with cheese", desc: "Stuffed with cheese" },
        ru: { title: "Хинкали с сыром", desc: "С сыром" }
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