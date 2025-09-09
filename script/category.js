const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => {
      console.log("Full response:", json);
      displayCategory(json.categories); 
    });
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  for (let category of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button class="btn" title="${category.small_description}">
        ${category.category_name}
      </button>
    `;
    categoryContainer.append(btnDiv);
  }
};

loadCategories();
