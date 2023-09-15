
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

          interface TextEl extends HTMLElement {
            remove(): void;
          }
          interface DivEl extends HTMLElement {
            remove(): void;
          }

          const text = document.createElement('span') as TextEl;
          text.textContent = 'VIEW';
          text.style.position = "relative";
          text.style.top = "120px";
          text.style.paddingTop = "6px";
          text.style.paddingBottom = "4px";
          text.style.paddingLeft = "20px";
          text.style.paddingRight = "20px";
          text.style.border = "2px solid #ccc";

          text.style.opacity = "0";
          text.style.transition = 'opacity 0.2s ease-out';

          const overlay = document.createElement('div') as DivEl;
          overlay.style.position = "relative";
          overlay.style.top = '-275px';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.background = 'rgba(0,0,0,0.5)';
          
          overlay.style.opacity = "0";
          overlay.style.transition = 'opacity 0.2s ease-in-out';

          a.appendChild(overlay);
          overlay.appendChild(text);
          setTimeout(() => {
            text.style.opacity = '1';
            overlay.style.opacity = '1';
          }, 50);

          overlay.addEventListener('mouseout', e => {
            if (e.relatedTarget && overlay.contains(e.relatedTarget as Node)) {
              return;
            }
            console.log("OUT");
            text.remove();
            overlay.remove();
          });
        }
      });

    });
  }
    
});