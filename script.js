console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
  // Ici, on récupère les éléments du DOM
  const addCardBtn = document.getElementById("addCardBtn");
  const searchInput = document.getElementById("searchInput");
  const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");
  let title;
  let content;
  let priority;
  let index = 0;
  const todo = document.getElementsById("todo");
  // Éventuellement, on écoute les événements
  addCardBtn.addEventListener("click", () => {
    title = prompt("Titre*");
    content = prompt("Contenu*");
    priority = prompt("Priorité","low"); //"éventuellement une priorité"
    todo.innerHTML+=```
    <div class="card" data-id="${index++}" data-priority="${priotity}">
      <h3>${title}</h3>
      <p>${content}</p>
    </div>  
    ```;
  });

  searchInput.addEventListener("input", () => {
    // ...
  });

  sortByPriorityBtn.addEventListener("click", () => {
    // ...
  });
});
