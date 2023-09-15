
interface AnchorEl extends HTMLElement {}

interface HomeDiv extends HTMLElement {
    id: 'homeDiv';
  }

document.addEventListener('DOMContentLoaded', () => {

  const anchors = document.querySelectorAll('a') as NodeListOf<AnchorEl>;
  const homeDiv = document.getElementById('homeDiv') as HomeDiv | null;

  if(homeDiv) {
    anchors.forEach(a => {
      a.addEventListener('mouseover', () => {
        const span = a.querySelector('span');
        if (!span) {
          console.log("GENERATING");

          interface TextEl extends HTMLElement {
            remove(): void;
          }
          interface DivEl extends HTMLElement {
            remove(): void;
          }

          const text = document.createElement('span') as TextEl;
          text.textContent = 'PREDICT';
          text.style.position = "relative";
          text.style.top = "-450px";

          const overlay = document.createElement('div') as DivEl;
          overlay.style.position = "relative";
          overlay.style.top = '-275px';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.background = 'rgba(0,0,0,0.5)';

          a.appendChild(overlay);
          a.appendChild(text);
          
          overlay.addEventListener('mouseout', () => {
            console.log("OUT");
            text.remove();
            overlay.remove();
          });
        }
      });

    });
  }
    
});