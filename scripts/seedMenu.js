const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Project-Three"
  );


const menuSeed = [
    {
        item: "Smoked Gouda Mac and Cheese",
        price: "12.00",
        ingredients: "Cavatappi Pasta, Cheese Sauce, Breadcrumbs, Scallions, Olive Oil",
        section: "Shared Plates"
    },
    {
        item: "Maryland Crabcake",
        price: "15.00",
        ingredients: "Avocado, Frisee, Sweet & Spicy Pickled Peppers, Green Beans, Red Onion, Chives, Lemon Juice, Basil Oil, Old Bay",
        section: "Shared Plates"
    },
    {
        item: "Yellowfin Ahi Tuna",
        price: "9.00",
        ingredients: "3 Ounces Ahi Tuna, Avocado, Sea Salt, Olive Oil, Jalepeno, Lime Juice",
        section: "Shared Plates"
    },
    {
        item: "Lobster Knuckles",
        price: "19.00",
        ingredients: "6 Knuckles, Garlic, Parsley Butter, Breadcrumbs, Grilled Sourdough Bread",
        section: "Shared Plates"
    },
    {
        item: "Hummus Trio",
        price: "12.00",
        ingredients: "Beet Hummus, Traditional Hummus, Muhammara Hummus, Zataar Pita",
        section: "Shared Plates"
    },
    {
        item: "Lobster & Shrimp Spring Rolls",
        price: "$16.00",
        ingredients: "Spicy Sweet Coconut Dipping Sauce, Lobster, Shrimp, Carrots, Mushroom, Cucumber",
        section: "Shared Plates"
    },
    {
        item: "Fish Tacos",
        price: "9.00",
        ingredients: "Corn Tortilla, 2oz Beer Battered Fried Pollock, Marinated Red Cabbage, Cilantro & Jalepeno Crema, Pickled Jalepeno, Pico De Gallo, Lime Wedge",
        section: "Small Plates"
    },
    {
        item: "New England Clam Chowder",
        price: "9.00",
        ingredients: "Smoked Bacon, Chopped Clams, Sliced Fingerling Potatoes, Leeks, Heavy Cream, Butter, Oyster Crackers",
        section: "Small Plates"
    },
    {
        item: "Seared Calamari Salad",
        price: "14.00",
        ingredients: "Calamari, Cremini & Shitake Mushroom, Frisee, Feta, Parsely, Olive Oil, Lemon Oil",
        section: "Small Plates"

    },
    {
        item: "Steamed PEI Mussels",
        price: "15.00",
        ingredients: "3/4 Pound Mussels, Olive Oil, Chorizo, Sliced Garlic, Jalepeno, White Wine, Ancho Chili Butter",
        section: "Small Plates"
    },
    {
        item: "Wedge Salad",
        price: "12.00",
        ingredients: "Iceberg Wedge, Red Onion, Cherry Tomato, Buttermilk Dressing, Maytag Blue Cheese, Bacon",
        section: "Small Plates"
    },
    {
        item: "Pan Roasted Sea Scallops",
        price: "15.00",
        ingredients: "3 Scallops, Kobocha Puree, Heavy Cream, Pistachio Brown Butter, Fried Brussel Leaves",
        section: "Small Plates"
        
    },
    {
        item: "Whole Grilled Branzino",
        price: "25.00",
        ingredients: "1/4 Pound of Branzino, Cerignola Olive Tapenade, Lemon Wedge",
        section: "Main Course"
    },
    {
        item: "Linguini & Clams",
        price: "25.00",
        ingredients: "Linguini, Cockle Clams, Clam Broth, Garlic, White Wine, Lemon Juice, Butter, Parsely, Arugula, Aleppo",
        section: "Main Course",
    },
    {
        item: "Grilled Atlantic Salmon",
        price: "30.00",
        ingredients: "6oz Farm Raised Salmon, Snap Peas, Napa Cabbage, Morel Mushrooms, Dashi",
        section: "Main Course",
    },
    {
        item:"Atlantic Cod Piccata",
        price: "34.00",
        ingredients: "Lemon Whipped Potatoes, Broccolini,Garlic, Olive Oil, Brown Butter Crust",
        section: "Main Course"

    },
    {
        item: "Filet Mignon",
        price: "46.00",
        ingredients: "Bone Marrow Butter, Fingerling Potatoes, Endive, Red Wine",
        section: "Main Course"
    },
    {
        item: "Roasted Sullivan Farm Chicken",
        price: "31.00",
        ingredients: "Ricotta Gnocchi, Wild Mushrooms, Rosemary Cream, Broccolini",
        section: "Main Course"
    },
    {
        item: "Classic Molten Chocolate Cake",
        price: "13.00",
        ingredients: "Caramelized Bananas, Espresso Ice Cream",
        section: "Dessert"
    },
    {
        item: "20 Layer Chocolate Cake",
        price: "13.00",
        ingredients: "Pistachio Ice Cream",
        section: "Dessert"
    },
    {
        item: "Cherry Cheesecake",
        price: "12.00",
        ingredients: "Almond Cookie Crust, Sweet Cherries, Raspberry Sorbet",
        section: "Dessert"
    }
    
    
];



db.Menu
  .remove({})
  .then(() => db.Menu.collection.insertMany(menuSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });