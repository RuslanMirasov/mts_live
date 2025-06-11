export const hidePreloader = () => {
  const body = document.querySelector('.body');

  window.addEventListener('load', () => {
    body.classList.add('loaded');
  });
};
