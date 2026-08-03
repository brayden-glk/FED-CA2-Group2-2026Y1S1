/* ---------------------------
   1. FILTER FUNCTIONALITY
   --------------------------- */
// Select all filter buttons and dish cards
const filterButtons = document.querySelectorAll('.filter-btn');
const dishCards = document.querySelectorAll('.dish-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    // Highlight active button
    filterButtons.forEach(btn => btn.classList.remove('ring-2', 'ring-red-500'));
    button.classList.add('ring-2', 'ring-red-500');

    // Show/hide dish cards based on category
    dishCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ---------------------------
   2. POP-UP ON HOVER
   --------------------------- */
// Each dish card has a hidden .popup overlay
dishCards.forEach(card => {
  const popup = card.querySelector('.popup');

  card.addEventListener('mouseenter', () => {
    popup.classList.remove('hidden');
  });

  card.addEventListener('mouseleave', () => {
    popup.classList.add('hidden');
  });
});

/* ---------------------------
   3. SCROLLABLE DISH GALLERY
   --------------------------- */
// Smooth scroll for horizontal gallery
const dishGallery = document.getElementById('dish-gallery');

dishGallery.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    event.preventDefault();
    dishGallery.scrollLeft += event.deltaY;
  }
});

/* ---------------------------
   4. USER COMMENTS
   --------------------------- */
// Example: dynamically add user comments to pop-up
function addUserComment(dishName, commentText) {
  const card = Array.from(dishCards).find(c => c.querySelector('h3')?.textContent === dishName);
  if (card) {
    const popup = card.querySelector('.popup');
    const comment = document.createElement('p');
    comment.className = 'text-xs italic mt-2';
    comment.textContent = `User comment: "${commentText}"`;
    popup.appendChild(comment);
  }
}

// Example usage (can be replaced with form input later)
addUserComment("Chicken Rice", "So flavorful and authentic!");
addUserComment("Laksa", "Spicy and comforting!");
