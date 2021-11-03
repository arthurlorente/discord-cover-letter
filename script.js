function countReferences() {
  const referencesCount = document.querySelector('.references-count');
  const references = document.querySelectorAll('.references article');

  referencesCount.textContent = references.length;
}

function setTime() {
  const timeString = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const timeElements = document.querySelectorAll('.content time');
  const timeMessage = `Today at ${timeString}`;

  timeElements.forEach((element) => element.textContent = timeMessage);
}

function highlightActiveRoute() {
  const sidebar = document.querySelector('.sidebar');
  const anchors = sidebar.querySelectorAll('.menu-item');

  const currentSectionHeader = document.querySelector('.selected-section');
  currentSectionHeader.textContent = anchors[0].textContent;

  sidebar.addEventListener('click', (event) => {
    anchors.forEach((element) => element.classList.remove('selected'));

    const clickedAnchor = event.target.closest('.menu-item');
    if (!clickedAnchor) return;
    clickedAnchor.classList.add('selected');
    currentSectionHeader.textContent = clickedAnchor.textContent;
  });
}

function displayReferencePopout() {
  const popouts = document.querySelectorAll('.popout-anchor');

  document.addEventListener('click', (event) => {
    popouts.forEach((element) => element.classList.remove('selected'));

    const clickedItem = event.target.closest('.references .popout-anchor');
    if (!clickedItem) return;
    clickedItem.classList.add('selected');
  });
}

countReferences();
setTime();
highlightActiveRoute();
displayReferencePopout();