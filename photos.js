class Photo {
  constructor (title, id, file, favorite) {
    this.title = title;
    this.id = id;
    this.file = file;
    this.favorite = favorite || false;
  }

  saveToStorage(){
    var stringPhotos = JSON.stringify(imagesArr);
    localStorage.setItem('stringedPhotos', stringPhotos);
  }

  deleteFromStorage(){
    var index = imagesArr.indexOf(this);
    imagesArr.splice(index, 1);
    this.saveToStorage(imagesArr);
  }

  updatePhoto(editTitle, editCaption){
    this.title = editTitle;
    this.saveToStorage();
  }

  toggleFav(fav) {
    this.favorite = fav;
  }
}