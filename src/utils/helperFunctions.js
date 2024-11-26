export function groupCarouselItems(items, itemsPerPage) {
  const groupedItems = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    groupedItems.push(items.slice(i, i + itemsPerPage));
  }
  return groupedItems;
}

export function getHoverDirection(event, element) {
  const { top, right, bottom, left } = element.getBoundingClientRect();
  const x = event.clientX;
  const y = event.clientY;

  const fromTop = Math.abs(y - top);
  const fromBottom = Math.abs(bottom - y);
  const fromLeft = Math.abs(x - left);
  const fromRight = Math.abs(right - x);

  const min = Math.min(fromTop, fromBottom, fromLeft, fromRight);

  if (min === fromTop) return "top";
  if (min === fromBottom) return "bottom";
  if (min === fromLeft) return "left";
  return "right";
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
