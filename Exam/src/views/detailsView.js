import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";
    


const detailsTemp = (item, isOwner) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <div>
            <p id="details-category">${item.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${item.description}</p>
                   <p id ="more-info">${item.moreInfo}</p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">0</span></h3>
           <!--Edit and Delete are only for creator-->
            ${isOwner ? html`<div id="action-buttons">
              <a href="/edit/${item._id}" id="edit-btn">Edit</a>
              <a @click=${delCharacter} href="" id="delete-btn">Delete</a>
            </div>` : null
    }

            
            
          </div>
            </div>
        </div>
    </section>


`

let context = "";

export async function showDetails(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getSingleCharacter(id)
    const isOwner = userHelper.getUserID() == data._ownerId;
    ctx.render(detailsTemp(data, isOwner));

}

export async function delCharacter(e) {
    e.preventDefault();
    const id = context.params.id;
    await dataService.delCharacter(id);
    context.goTo("/dashboard")
}