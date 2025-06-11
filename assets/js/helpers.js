export const hidePreloader = () => {
  const waitTime = 800;
  const body = document.querySelector('.body');
  const preloader = document.querySelector('.preloader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      body.classList.add('loaded');
    }, waitTime);
  });
};
