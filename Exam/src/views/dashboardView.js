import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const dashboardTemplate = (data) => html`
      <h2>Characters</h2>
      <section id="dashboard">
        ${data.length > 0 ?
        html`<section id="dashboard">
            ${data.map(item => characterCard(item))}
            </section>` :
        html`<h2>No added Heroes yet.</h2>`
    };

   
`


const characterCard = (item) => html`
<div class="character">
<img src=${item.imageUrl} alt="example1" />
<div class="hero-info">
  <h3 class="category">${item.category}</h3>
  <p class="description">${item.description}</p>
  <a class="details-btn" href="/details/${item._id}">More Info</a>
</div>

`


export async function showDashboard(ctx) {
    const data = await dataService.getAllCharacters();
    ctx.render(dashboardTemplate(data));


}