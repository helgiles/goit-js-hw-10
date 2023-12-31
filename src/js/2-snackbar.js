import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = document.querySelector('[name="delay"]');
  const radioSelect = document.querySelector('input[name="state"]:checked');
  const delay = delayInput.value;
  const state = radioSelect.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay =>
      iziToast.success({
        position: 'topRight',
        color: 'green',
        message: `✅ Fulfilled promise in ${delay}ms`,
      })
    )
    .catch(delay =>
      iziToast.error({
        position: 'topRight',
        color: 'red',
        message: `❌ Rejected promise in ${delay}ms`,
      })
    );
  event.currentTarget.reset();
});
