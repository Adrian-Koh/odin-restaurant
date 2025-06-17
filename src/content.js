const content = document.querySelector('#content');
import restaurantImage from './images/restaurant.jpg';

function createHome() {
    const title = document.createElement('h1');
    title.id = 'title';
    title.innerText = 'Odin Restaurant';
    content.appendChild(title);

    const image = document.createElement('img');
    image.id = 'restaurant-image'
    image.src = restaurantImage;
    image.alt = 'restaurant-image';
    content.appendChild(image);

    const info = document.createElement('p');
    info.id = 'restaurant-info';
    info.innerText = `Welcome to Odin Restaurant! Here you will find various dishes from all backgrounds. 
                      We serve Italian, Chinese, Korean, Japanese, and Brazilian cuisine.
                      Our ingredients are sourced from the freshest and most premium of sources while
                      our chefs come from the prestigious culinary academies and boast years of experience 
                      in some of the world's best restaurants. We hope you enjoy your time here!`;
    content.appendChild(info);
}


class FoodItem {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

class Menu {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    createMenu(menu) {
        const menuGrid = document.createElement('div');
        menuGrid.id = 'menu-grid';
        content.appendChild(menuGrid);

        for (const item of menu.items) {
            const food = document.createElement('div');
            food.id = 'food-card';
            
            const foodName = document.createElement('p');
            foodName.id = 'food-name';
            foodName.innerText = item.name;

            const foodDesc = document.createElement('p');
            foodDesc.id = 'food-desc';
            foodDesc.innerText = item.description;

            food.appendChild(foodName);
            food.appendChild(foodDesc);
            menuGrid.appendChild(food);
        }
    }
}

function createMenuItems() {
    const pasta = new FoodItem('Pasta', 'Spaghetti mixed with bolognese sauce and basil leaves.');
    const friedRice = new FoodItem('Fried Rice', 'Aromatic short-grain rice stir fried with egg, chicken and bell peppers');
    const bibimbap = new FoodItem('Bibimbap', 'Rice mixed with gochujang, fried egg, minced beef and vegetables in a stone pot');
    const unagidon = new FoodItem('Unagi Don', 'Smoked eel laid on a bed of rice, accompanied with a serving of eel sauce.');

    const menu = new Menu();
    menu.addItem(pasta);
    menu.addItem(friedRice);
    menu.addItem(bibimbap);
    menu.addItem(unagidon);

    menu.createMenu(menu);
}

export {createHome, createMenuItems};