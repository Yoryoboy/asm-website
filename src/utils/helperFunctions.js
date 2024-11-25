export function groupCarouselItems(items, itemsPerPage) {
  const groupedItems = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    groupedItems.push(items.slice(i, i + itemsPerPage));
  }
  return groupedItems;
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
