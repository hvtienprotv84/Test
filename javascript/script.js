  function scrollGallery(direction) {
    const gallery = document.getElementById('gallery');
    const scrollAmount = 200; // điều chỉnh tốc độ cuộn

    if (direction === 'left') {
      gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
