// Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo
// di un post dal link https://dummyjson.com/posts/{id}
// Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post.
// Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore,
// recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(post => resolve(post.title))
            .catch(reject)
    });
}

getPostTitle(1)
    .then(title => console.log("Questo è il titolo:", title))
    .catch(error => console.error(error));

//BONUS
function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(post => {
                fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(res => res.json())
                    .then(user => resolve({ ...post, user }))
                    .catch(reject)
            })
            .catch(reject)
    });
}

getPost(1)
    .then(title => console.log("Questo è il post completo:", title))
    .catch(error => console.error(error));

// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6.
// Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
// Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato.
// Se il numero esce due volte di fila, stampa "Incredibile!".