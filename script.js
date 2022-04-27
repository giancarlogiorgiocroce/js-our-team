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
const arrayTeam = [
    {
        foto: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        posizione: "Founder & CEO"
    }
]
console.log(arrayTeam[0].foto);


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

/***************************
    INIZIALIZZAZIONE
****************************/
stampaCollega(arrayTeam[0].foto, arrayTeam[0].nome, arrayTeam[0].posizione);