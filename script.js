console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
  // Ici, on récupère les éléments du DOM
  const addCardBtn = document.getElementById("addCardBtn");
  const searchInput = document.getElementById("searchInput");
  const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");
  const deleteCardBtn = document.querySelectorAll(".delete-btn");

  // Éventuellement, on écoute les événements
  addCardBtn.addEventListener("click", () => {
    // ...
  });

  searchInput.addEventListener("input", () => {
    // ...
  });

  sortByPriorityBtn.addEventListener("click", () => {
    // ...
  });

  deleteCardBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const card = event.target.parentElement;
      card.remove();
    });
  });
});
