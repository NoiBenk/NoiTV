async function loadPage(page){


const content = document.getElementById("content");


try {


const response = await fetch(`pages/${page}.html`);


if(!response.ok){
throw new Error("Page not found");
}


const html = await response.text();


content.innerHTML = html;



lucide.createIcons();


}

catch(error){

content.innerHTML =
`
<h1>Error</h1>
<p>This page does not exist yet.</p>
`;

}


}



// Load homepage automatically

loadPage("home");
