photoRow.addEventListener('scroll', () => {
  const maxScroll = photoRow.scrollWidth - photoRow.clientWidth;
  if (photoRow.scrollLeft >= maxScroll - 10) {
    // Near the cloned section — silently jump back to the real start
    photoRow.scrollLeft = 0;
  }
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});
