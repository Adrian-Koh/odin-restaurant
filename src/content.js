const content = document.querySelector('#content');
import restaurantImage from './images/restaurant.jpg';

function createHome() {
    const homeContainer = document.createElement('div');
    homeContainer.id = 'home-container';

    const title = document.createElement('h1');
    title.id = 'title';
    title.innerText = 'Odin Restaurant';
    homeContainer.appendChild(title);

    const image = document.createElement('img');
    image.id = 'restaurant-image'
    image.src = restaurantImage;
    image.alt = 'restaurant-image';
    homeContainer.appendChild(image);

    const info = document.createElement('p');
    info.id = 'restaurant-info';
    info.innerText = `Welcome to Odin Restaurant! Here you will find various dishes from all backgrounds. 
                      We serve Italian, Chinese, Korean, Japanese, and Brazilian cuisine.
                      Our ingredients are sourced from the freshest and most premium of sources while
                      our chefs come from the prestigious culinary academies and boast years of experience 
                      in some of the world's best restaurants. We hope you enjoy your time here!`;
    homeContainer.appendChild(info);
    content.appendChild(homeContainer);
}


class MenuItem {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    createItem() {
        const item = document.createElement('div');
        item.id = 'item-card';
        
        const itemName = document.createElement('p');
        itemName.id = 'item-name';
        itemName.innerText = this.name;

        const itemDesc = document.createElement('p');
        itemDesc.id = 'item-desc';
        itemDesc.innerText = this.description;

        item.appendChild(itemName);
        item.appendChild(itemDesc);
        return item;
    }
}

class MenuCategory {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    createCategory() {
        const categorySection = document.createElement('div');
        categorySection.id = 'category-section';

        const categoryTitle = document.createElement('div');
        categoryTitle.id = 'category-title';
        categoryTitle.innerText = this.name;

        categorySection.appendChild(categoryTitle);

        for (const item of this.items) {
            categorySection.appendChild(item.createItem());
        }

        return categorySection;
    }
}

class Menu {
    constructor() {
        this.categories = [];
    }

    addCategory(category) {
        this.categories.push(category);
    }

    createMenu() {
        const menuGrid = document.createElement('div');
        menuGrid.id = 'menu-grid';
        content.appendChild(menuGrid);

        for (const category of this.categories) {
            menuGrid.appendChild(category.createCategory());
        }
    }
}

function createMenuItems() {
    const pasta = new MenuItem('Pasta', 'Spaghetti mixed with bolognese sauce and basil leaves.');
    const friedRice = new MenuItem('Fried Rice', 'Aromatic short-grain rice stir fried with egg, chicken and bell peppers.');
    const bibimbap = new MenuItem('Bibimbap', 'Rice mixed with gochujang, fried egg, minced beef and vegetables in a stone pot.');
    const unagidon = new MenuItem('Unagi Don', 'Smoked eel laid on a bed of rice, accompanied with a serving of eel sauce.');

    const foodCategory = new MenuCategory('Food');
    foodCategory.addItem(pasta);
    foodCategory.addItem(friedRice);
    foodCategory.addItem(bibimbap);
    foodCategory.addItem(unagidon);


    const cocacola = new MenuItem('Coca cola', 'A refreshing chilled can of coca cola, served in a glass with lemon.');
    const ribena = new MenuItem('Ribena', 'Everyone\'s favorite childhood drink, blackcurrant flavored.')
    const orangeJuice = new MenuItem('Orange juice', 'Freshly squeezed juice from navel oranges imported from Australia.')

    const bevCategory = new MenuCategory('Beverages');
    bevCategory.addItem(cocacola);
    bevCategory.addItem(ribena);
    bevCategory.addItem(orangeJuice);

    const menu = new Menu();
    menu.addCategory(foodCategory);
    menu.addCategory(bevCategory);
    menu.createMenu();
}

export {createHome, createMenuItems};