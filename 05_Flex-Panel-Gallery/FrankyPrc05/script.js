
const panels = document.querySelectorAll('.panel');

let lastClickPanel = document.querySelector('.panels');

function toggleOpen() {

    this.classList.toggle('open');
}

function toggleActive(e) {
    
    if (e.propertyName.includes('flex')) {
      if (this.classList.contains('open')) {
        this.classList.add('open-active');
      } else {
        this.classList.remove('open-active');
      }
    }
  }
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

