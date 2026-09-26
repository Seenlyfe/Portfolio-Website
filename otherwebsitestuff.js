photoRow.addEventListener('scroll', () => {
  const maxScroll = photoRow.scrollWidth - photoRow.clientWidth;
  if (photoRow.scrollLeft >= maxScroll - 10) {
    // Near the cloned section — silently jump back to the real start
    photoRow.scrollLeft = 0;
  }
});