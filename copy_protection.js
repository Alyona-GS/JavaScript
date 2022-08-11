const preventAction = event => {
  alert(`Action: ${event.type} is forbidden`);
  event.preventDefault();
}

addEventListener('copy', preventAction);
addEventListener('cut', preventAction);
addEventListener('contextmenu', preventAction);