const addGoalBtn = document.getElementById("addGoalBtn");
const goalInput = document.getElementById("goalInput");
const goalList = document.getElementById("goalList");

addGoalBtn.addEventListener("click", function () {
  const goalText = goalInput.value.trim();

  if (goalText === "") {
    alert("Please enter a goal!");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Create span for goal text
  const goalSpan = document.createElement("span");
  goalSpan.textContent = goalText;

  // Add event to toggle 'completed' class
  goalSpan.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create delete button with trash icon
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.classList.add("delete-btn");

  // Delete the goal when button is clicked
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Add both span and button to list item
  li.appendChild(goalSpan);
  li.appendChild(deleteBtn);

  // Add to goal list
  goalList.appendChild(li);

  // Clear input
  goalInput.value = "";
});
