function loadPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhoto(data));
}
loadPhotos();
function displayPhoto(photos) {
  const photoContainer = document.getElementById("search-result");
  photos.forEach((photo) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div onclick ="loadDetail('${photo.albumId}')" class="card h-100">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
            </div>
        </div>
    `;
    photoContainer.appendChild(div);
  });
}

const loadDetail = (id) => {
  fetch(`https://jsonplaceholder.typicode.com=${id}}`)
    .then((res) => res.json())
    .then((data) => displayDetail(data.photos));
};
const displayDetail = (photo) => {
  const photoDetail = document.getElementById("photo-detail");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${photo.url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${photo.title}</h5>
    </div>
    `;
  photoDetail.appendChild(div);
};
