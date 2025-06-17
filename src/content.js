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
                      We serve Italian, Mexican, Chinese, Korean and Japanese cuisines.
                      Our ingredients are sourced from the freshest and most premium of sources while
                      our chefs come from prestigious culinary academies and boast years of experience 
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

        const categoryTitleText = document.createElement('p');
        categoryTitleText.innerText = this.name;
        categoryTitle.appendChild(categoryTitleText);

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
    const ceviche = new MenuItem('Ceviche', 'Fresh fish caught today from Vancouver, B.C. marinated in lime juice and spices.');
    const pizza = new MenuItem('Pizza', 'Traditional wood-fired margherita pizza.');

    const foodCategory = new MenuCategory('Food');
    foodCategory.addItem(pasta);
    foodCategory.addItem(friedRice);
    foodCategory.addItem(bibimbap);
    foodCategory.addItem(unagidon);
    foodCategory.addItem(ceviche);
    foodCategory.addItem(pizza);


    const cocacola = new MenuItem('Coca cola', 'A refreshing chilled can of coca cola, served in a glass with lemon.');
    const ribena = new MenuItem('Ribena', 'Everyone\'s favorite childhood drink, blackcurrant flavored.')
    const orangeJuice = new MenuItem('Orange juice', 'Freshly squeezed juice from navel oranges imported from Australia.')
    const whiteWine = new MenuItem('White Wine', 'White wined aged over 3 decades from southern France.');
    const soju = new MenuItem('Soju', 'Plum flavored soju from South Korea.');

    const bevCategory = new MenuCategory('Beverages');
    bevCategory.addItem(cocacola);
    bevCategory.addItem(ribena);
    bevCategory.addItem(orangeJuice);
    bevCategory.addItem(whiteWine);
    bevCategory.addItem(soju);

    const menu = new Menu();
    menu.addCategory(foodCategory);
    menu.addCategory(bevCategory);
    menu.createMenu();
}

class AboutItem {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

class About {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    createAbout() {
        const aboutContainer = document.createElement('div');
        aboutContainer.id = 'about-container';
        content.appendChild(aboutContainer);

        for (const item of this.items) {
            const aboutItem = document.createElement('div');
            aboutItem.id = 'about-item';

            const aboutTitle = document.createElement('div');
            aboutTitle.id = 'about-title';
            aboutTitle.innerText = item.title;

            const aboutContent = document.createElement('div');
            aboutContent.id = 'about-content';
            aboutContent.innerText = item.content;

            aboutItem.appendChild(aboutTitle);
            aboutItem.appendChild(aboutContent);
            aboutContainer.appendChild(aboutItem);
        }
    }
}

function createAboutItems() {
    const location = new AboutItem('Location', '2800 Wayzata Dr., Minneapolis MN 55425.');
    const hours = new AboutItem('Hours', 'Mon-Fri: 11 a.m.-11 p.m.\nSat: 12 p.m.-1 a.m.\nSun: 12 p.m.-2 a.m.');
    const history = new AboutItem('Origin', 
        `Odin Restaurant started as a mom-and-pop shop in the 70\'s in rural Minnesota, serving patrons delicious food after a long day of work. 
         As our vision grew, we wanted to serve the best versions of our dishes and it has grown into the go-to spot for premium dishes in the Twin Cities that it is today.`);

    const about = new About();
    about.addItem(location)     ;
    about.addItem(hours);
    about.addItem(history);
    about.createAbout();
}

export {createHome, createMenuItems, createAboutItems};