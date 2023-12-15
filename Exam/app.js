import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';
import { userService } from './src/userService.js';
import { userHelper } from './src/userHelper.js';
import { showDashboard } from './src/views/dashboardView.js';
import { showHome } from './src/views/homeVIew.js';;
import { showAdd } from './src/views/addView.js';
import { showRegister } from './src/views/registerView.js';
import { showLogin } from './src/views/loginView.js';
import { showDetails } from './src/views/detailsView.js';
import { showEdit } from './src/views/editView.js';


const root = document.querySelector("main")
const userNav = document.querySelector(".user");
const guestNav = document.querySelector(".guest");  

page(decorationContext);  
page("/", showHome); // () => console.log("home"));
page("/dashboard", showDashboard); //() => console.log("dashboard"));
page("/login", showLogin);//() => console.log("login"));
page("/add", showAdd);//() => console.log("add"));
page("/register", showRegister); // () => console.log("register"));
page("/details/:id", showDetails); //() => console.log("details"));
page("/edit/:id", showEdit); //() => console.log("edit"));
page("/logout", logout);

page.start();
updateNav();

async function logout(){
    await userService.logout();
    updateNav();
    goTo("/");

}

function renderer(template) {
    render(template, root);
}

function updateNav() {
    const userData = userHelper.getUserData();
    if (userData) {
        userNav.style.display = 'block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'block';
    }
}

function goTo(path) {
    page.redirect(path);
}

function decorationContext(ctx, next) {
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;

    next();

}
