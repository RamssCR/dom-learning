import { updateFPS } from './modules/intermediate/transform'
import { updateScroll } from './modules/advanced/throttle'
import { createElement } from './modules/advanced/virtualization'

requestAnimationFrame(updateFPS)

const scrollLabel = document.getElementById('scrollPos')
window.addEventListener('scroll', () => updateScroll(scrollLabel))

const container = document.querySelector('.container2');
const totalItems = 10000;
const itemHeight = 30;
const visibleCount = Math.ceil(container.clientHeight / itemHeight) + 2;

const spacer = document.createElement('div');
spacer.style.height = `${totalItems * itemHeight}px`;
container.appendChild(spacer);

const items = [];

for (let i = 0; i < visibleCount; i++) {
  const element = createElement(itemHeight);
  container.appendChild(element);
  items.push(element);
}

function render() {
  const scrollTop = container.scrollTop;
  const startIdx = Math.floor(scrollTop / itemHeight);

  items.forEach((el, i) => {
    const idx = startIdx + i;
    if (idx >= totalItems) {
      el.style.display = 'none';
      return;
    }

    el.style.display = 'block';
    el.style.top = `${idx * itemHeight}px`;
    el.textContent = `Elemento #${idx}`;
  });
}

container.addEventListener('scroll', () => {
  requestAnimationFrame(render);
});

render();