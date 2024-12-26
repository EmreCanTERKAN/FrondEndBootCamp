// DOM Elementlerini Seçme
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const toast = new bootstrap.Toast(document.getElementById("liveToast"));

// Local Storage'dan verileri yükle
document.addEventListener("DOMContentLoaded", loadTodos);

// Görev ekleme
addBtn.addEventListener("click", addTodo);

// Görev ekleme fonksiyonu
function addTodo() {
  const task = todoInput.value.trim();

  // Boş görev eklenemediğini kontrol et
  if (task === "") {
    toast.show();
    return;
  }

  // Listeye yeni bir eleman ekle
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <span>${task}</span>
    <div>
      <button class="btn btn-success btn-sm me-2 doneBtn">Yapıldı</button>
      <button class="btn btn-danger btn-sm deleteBtn">Sil</button>
    </div>
  `;

  todoList.appendChild(li);
  saveToLocalStorage(task);

  // Input'u temizle
  todoInput.value = "";
}

// Yapıldı ve Silme butonlarını dinle
todoList.addEventListener("click", handleListClick);

// Liste elemanlarının tıklanma olayları
function handleListClick(e) {
  if (e.target.classList.contains("deleteBtn")) {
    deleteTask(e.target);
  } else if (e.target.classList.contains("doneBtn")) {
    markAsDone(e.target);
  }
}

// Görevi silme
function deleteTask(button) {
  const taskItem = button.closest("li");
  removeFromLocalStorage(taskItem.querySelector("span").textContent);
  taskItem.remove();
}

// Görevi yapıldı olarak işaretleme
function markAsDone(button) {
  const taskItem = button.closest("li");
  taskItem.querySelector("span").classList.toggle("text-decoration-line-through");
}

// Local Storage'a veri ekleme
function saveToLocalStorage(task) {
  let todos = getTodosFromLocalStorage();
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Local Storage'dan veri silme
function removeFromLocalStorage(task) {
  let todos = getTodosFromLocalStorage();
  todos = todos.filter((t) => t !== task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Local Storage'dan verileri al
function getTodosFromLocalStorage() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

// Local Storage'dan görevleri yükleme
function loadTodos() {
  const todos = getTodosFromLocalStorage();
  todos.forEach((task) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${task}</span>
      <div>
        <button class="btn btn-success btn-sm me-2 doneBtn">Yapıldı</button>
        <button class="btn btn-danger btn-sm deleteBtn">Sil</button>
      </div>
    `;
    todoList.appendChild(li);
  });
}

// Toast'ları tanımla
const errorToast = new bootstrap.Toast(document.getElementById("errorToast"));
const successToast = new bootstrap.Toast(document.getElementById("successToast"));

// Görev ekleme fonksiyonu
function addTodo() {
  const task = todoInput.value.trim();

  // Boş görev eklenemediğini kontrol et
  if (task === "") {
    errorToast.show(); // Hata Toast'u göster
    return;
  }

  // Listeye yeni bir eleman ekle
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <span>${task}</span>
    <div>
      <button class="btn btn-success btn-sm me-2 doneBtn">Yapıldı</button>
      <button class="btn btn-danger btn-sm deleteBtn">Sil</button>
    </div>
  `;

  todoList.appendChild(li);
  saveToLocalStorage(task);

  // Başarı Toast'u göster
  successToast.show();

  // Input'u temizle
  todoInput.value = "";
}
