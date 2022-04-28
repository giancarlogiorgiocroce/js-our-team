/*
Utilizza la card come base e poi rimuovila dall'HTML.
File js in cui definire **un array di oggetti** in cui stampare **Nome, Ruolo e Foto**.
Stampare dinamicamente una card per ogni membro del team.

BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
*/

/*
1. Dichiarare una variabile che abbia al suo interno un array di oggetti.
2. Estrapolare le informazioni che sono necessarie per ogni singolo oggetto (membro team).
3. Stampare dinamicamente tutto.
4. Permettere all'Utente di aggiungere degli oggetti (con tutte le info) all'array oggetti.
*/

/***************************
 VARIABILI GLOBALI
 ***************************/
const bottone = document.getElementById("addMemberButton");

const arrayTeam = [
    {
        foto: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        posizione: "Founder & CEO"
    },
    {
        foto: "img/angela-caroll-chief-editor.jpg",
        nome: "Angela Caroll",
        posizione: "Chief Editor"
    },
    {
        foto: "img/walter-gordon-office-manager.jpg",
        nome: "Walter Gordon",
        posizione: "Office Manager"
    },
    {
        foto: "img/angela-lopez-social-media-manager.jpg",
        nome: "Angela Lopez",
        posizione: "Social Media Manager"
    },
    {
        foto: "img/scott-estrada-developer.jpg",
        nome: "Scott Estrada",
        posizione: "Developer"
    },
    {
        foto: "img/barbara-ramos-graphic-designer.jpg",
        nome: "Barbara Ramos",
        posizione: "Graphic Designer"
    },
    {
        foto: "img/WhatsApp Image 2022-04-27 at 12.50.48.jpeg",
        nome: "Ago",
        posizione: "Sex Symbol"
    }
]


/***************************
    FUNZIONI DI UTILITà
****************************/
function stampaCollega(foto, nome, posizione){
    const container = document.querySelector(".team-container")
    
    container.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              <img
                src=" ${foto} "
                alt=" ${nome} "
              />
            </div>
            <div class="card-text">
              <h3> ${nome} </h3>
              <p> ${posizione} </p>
            </div>
          </div>
    `
}

function aggiungiCollega(){
    const foto = document.getElementById("image").value;
    const nome = document.getElementById("name").value;
    const posizione = document.getElementById("role").value;

    let nuovoMembro = [];
    nuovoMembro.push(foto);
    nuovoMembro.push(nome);
    nuovoMembro.push(posizione);

    arrayTeam.push(nuovoMembro);

    stampaCollega(foto, nome, posizione);

    pulisciInput();
}

function pulisciInput(){
    document.getElementById("image").value = "";
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
}


/***************************
    INIZIALIZZAZIONE
****************************/
inizia();

function inizia(){
    
    for(let i in arrayTeam){
        stampaCollega(arrayTeam[i].foto, arrayTeam[i].nome, arrayTeam[i].posizione);
    }
    
}

bottone.addEventListener("click", aggiungiCollega);