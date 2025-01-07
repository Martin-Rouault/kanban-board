console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
  // Ici, on récupère les éléments du DOM
  const addCardBtn = document.getElementById("addCardBtn");
  const searchInput = document.getElementById("searchInput");
  const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");
  // Selecteur Cartes & Collon
  const card = document.querySelectorAll(".card");
  const columns = document.querySelectorAll(".column");
  const kaban = document.querySelector(".kanban");

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
  });

  searchInput.addEventListener("input", () => {
    // ...
  });

  sortByPriorityBtn.addEventListener("click", () => {
    // ...
  });

  // Drag & Drop
  let draggedCard = null;

  // Drag start / end
  todo.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("card")) {
      const card = e.target;
      draggedCard = card;
    }
  });

  todo.addEventListener("dragend", () => {
    draggedCard = null;
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

  // Delete card
  kaban.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  });
});
