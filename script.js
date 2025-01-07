console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
  // Ici, on récupère les éléments du DOM
  const addCardBtn = document.getElementById("addCardBtn");
  const searchInput = document.getElementById("searchInput");
  const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");
  const columns = document.querySelectorAll(".column");

  let title;
  let content;
  let priority;
  let index = 0;
  const todo = document.getElementById("todo");
  // Éventuellement, on écoute les événements
  addCardBtn.addEventListener("click", () => {
    title = prompt("Titre*");
    content = prompt("Contenu*");
    priority = prompt("Priorité", "low"); //"éventuellement une priorité"
    todo.innerHTML += `
    <div class="card" draggable="true" data-id="${index++}" data-priority="${priority}">
      <h3>${title}</h3>
      <p>${content}</p>
      <div class="delete-btn">Supprimer<div>
    </div>  
    `;

    // Selecteur Cartes
    const cards = document.querySelectorAll(".card");
    // Drag & Drop
    let draggedCard = null;
    // Drag start / end
    cards.forEach((card) => {
      card.addEventListener("dragstart", (e) => {
        draggedCard = card;
      });

      card.addEventListener("dragend", () => {
        draggedCard = null;
      });
    });
    // Drag over
    columns.forEach((column) => {
      column.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      column.addEventListener("drop", () => {
        if (draggedCard) {
          column.appendChild(draggedCard);

          const newStatus = column.getAttribute("data-status");
          draggedCard.setAttribute("data-status", newStatus);
        }
      });
    });
  });


  searchInput.addEventListener("input", () => {
    // ...
  });

  sortByPriorityBtn.addEventListener("click", () => {
    // ...
  });

  // Delete card
  todo.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  });
});
