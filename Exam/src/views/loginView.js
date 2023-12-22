import { html} from "../../node_modules/lit-html/lit-html.js"
import { userService } from "../userService.js" 


 
 

const loginTemplate = () => html`
        <section id="login">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Login</h2>
            <form class="login-form" @submit=${submitHandler}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`


let context = "";
export function showLogin(ctx) {
    context = ctx;
    context.render(loginTemplate());
}

async function submitHandler(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);

    if(!email || !password){
     return alert("Error");
    }


    await userService.login(email, password);
    context.updateNav();
    context.goTo("/");


}