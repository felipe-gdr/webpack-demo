export default (message) => {
  const element = document.createElement('div');

  // element.className = 'pure-button';
  element.className = 'fa fa-hand-spock-o fa-1g';

  element.innerHTML = message;

  element.onclick = () => {
    import('./lazy').then((lazy) => {
      element.textContent = lazy.default;
    }).catch((err) => {
      console.error(err);
    });
  };

  return element;
};