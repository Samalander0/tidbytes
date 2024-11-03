export const bytes = [
  {
    name: "Tri-Cards",
    html: `<div class="tb-tri-cards">
  <img class="tri-card" src="//unsplash.it/id/74/150" />
  <img class="tri-card" src="//unsplash.it/id/85/150" />
  <img class="tri-card" src="//unsplash.it/id/248/150" />
</div>`,
    css: `.tb-tri-cards {
  display: flex;
  justify-content: center;

  .tri-card {
    width: 150px; /* Change or remove these values to change the size of the images */
    height: 150px;
    background: #9CA3AF; 
    border-radius: 8px;

    transition: 0.3s ease;

    &:nth-of-type(2) {
      margin: 0 -20%;
      z-index: 1;
      background: #D1D5DB; 
    }
    &:not(:nth-of-type(2)) {
      transform: scale(0.8)
    }
  }

  &:has(.tri-card:nth-of-type(1):hover) {
    .tri-card {
      &:nth-of-type(1) {
        transform: rotate(-5deg) translateX(-10%) scale(0.85);
        filter: brightness(1.05);
      }
      &:nth-of-type(2) {
        transform: rotate(5deg) translateX(10%) scale(0.95);
      }
    }
  }
  &:has(.tri-card:nth-of-type(2):hover) {
    .tri-card {
      &:nth-of-type(2) {
        transform: scale(1.025);
        filter: brightness(1.05);
      }
    }
  }
  &:has(.tri-card:nth-of-type(3):hover) {
    .tri-card {
      &:nth-of-type(3) {
        transform: rotate(5deg) translateX(10%) scale(0.85);
        filter: brightness(1.05);
      }
      &:nth-of-type(2) {
        transform: rotate(-5deg) translateX(-10%) scale(0.95);
      }
    }
  }
}`,
    width: 300
  },
  {
    name: "Buttons",
    html: `<button class="tb-button">Click Me</button>
<button class="tb-button tb-button-secondary tb-button-square">Click Me</button>`,
    css: `.tb-button {
  padding: 0.75em 1.5em;
  font: inherit;
  background: black;
  color: white;
  border: none;
  border-radius: 2em;

  transition: 0.2s ease;

  &.tb-button-secondary {
    background: transparent;
    border: 1px solid black;
    color: black;

    &:not(:disabled):hover {
      opacity: 0.7;
    }
  }
  &.tb-button-square {
    border-radius: 4px;
  }

  &:not(:disabled):hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.975);
    opacity: 0.6;
  }
}`,
    width: 300
  },
  {
    name: "Social Proof",
    html: `<div class="tb-proof">
  <div class="proof-users">
    <img src="https://api.dicebear.com/6.x/lorelei/svg?seed=Will" style="--background: #FACC15;"/>
    <img src="https://api.dicebear.com/6.x/lorelei/svg?seed=Ryan" style="--background: #A78BFA;"/>
    <img src="https://api.dicebear.com/6.x/lorelei/svg?seed=Steven" style="--background: #2DD4BF;"/>
    <img src="https://api.dicebear.com/6.x/lorelei/svg?seed=Karina" style="--background: #38BDF8;"/>
    <img src="https://api.dicebear.com/6.x/lorelei/svg?seed=Sabrina" style="--background: #FB7185;"/>
  </div>
  <p class="proof-text">Join <strong>342+</strong> others using Tidbytes</p>
</div>`,
    css: `.tb-proof {
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .proof-users {
    display: flex;

    img {
      width: 2rem;
      height: 2rem;
      padding: 0.25rem;
      display: inline-block;

      border-radius: 50%;
      background: var(--background); 
      border: 2px solid #F4F4F5; /* Replace border color with your background color */

      &:not(:last-of-type) {
        margin-right: -1rem;
      }

      transition: 0.3s ease;
      transform: scale(1) rotate(0deg);
      &:hover {
        filter: brightness(1.05);
        transform: scale(1.05) rotate(-5deg) translate(-5%, -5%);
      }
    }
  }
  .proof-text {
    max-width: 8rem;

    strong {
      font-weight: 500;
    }
  }
}`,
    width: 300
  },
  {
    name: "Highlighted Text",
    html: `<h2 class="tb-highlight">This <mark class="highlight-1">is</mark> some <mark class="highlight-2">cool</mark> highlighted <mark class="highlight-3">text</mark>, right?</h2>`,
    css: `.tb-highlight {
  mark {
    padding: 0 0.1em;
    display: inline-block;
    transition: 0.1s ease;
  }
  .highlight-1 {
    background: #67E8F9;
    transform: rotate(-2deg);
    &:hover {
      transform: rotate(-4deg) scale(1.025);
    }
  }
  .highlight-2 {
    background: #BEF264;
    transform: rotate(1deg);
    &:hover {
      transform: rotate(2deg) scale(1.025);
    }
  }
  .highlight-3 {
    background: #F0ABFC;
    transform: rotate(-1deg);
    &:hover {
      transform: rotate(-2deg) scale(1.025);
    }
  }
}`,
    width: 300
  },
]

/*
  {
    name: "",
    html: ``,
    css: ``,
    width: 300
  },
*/