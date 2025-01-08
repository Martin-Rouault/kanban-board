console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
  // Ici, on récupère les éléments du DOM
  const addCardBtn = document.getElementById("addCardBtn");
  const searchInput = document.getElementById("searchInput");
  const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");
  // Selecteur Cartes & Collon
  const columns = document.querySelectorAll(".column");
  const kanban = document.querySelector(".kanban");

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
      <h3 class="title">${title}</h3>
      <p class="content">${content}</p>
      <div class="delete-btn">Supprimer</div>
    </div>
    `;

    localStorage.setItem(todo.children, index, priority, title, content); //info store

    // Drag & Drop
    let draggedCard = null;
    const cards = document.querySelectorAll(".card");

    // Drag start
    cards.forEach((card) => {
      card.addEventListener("dragstart", (e) => {
        draggedCard = card;
      });

      localStorage.setItem(todo.children, index, priority, title, content); //info store

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

  // Delete card
  kanban.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
      localStorage.setItem( 
        event.target.getAttribute("data-id"), 
        event.target.getAttribute("data-priority"), 
        event.target.getElementsByTagName("h3").textContent, 
        event.target.getElementsByTagName("p").textContent
        );
      console.log(localStorage.getItem);
    };
  });

  // Sort By Priority
  sortByPriorityBtn.addEventListener("click", () => {
    columns.forEach((column) => {
      const cards = Array.from(column.querySelectorAll(".card"));

      cards.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        const priorityA = priorityOrder[a.getAttribute("data-priority")] || 0;
        const priorityB = priorityOrder[b.getAttribute("data-priority")] || 0;

        return priorityB - priorityA;
      });

      cards.forEach((card) => {
        column.appendChild(card);
      });
    });
  });

  // Search Input
  searchInput.addEventListener("keydown", (event) => {
    const value = event.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const title = card.querySelector(".title").innerText.toLowerCase();
      const content = card.querySelector(".content").innerText.toLowerCase();

      if (title.includes(value) || content.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
