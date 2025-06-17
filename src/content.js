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

export {createHome};