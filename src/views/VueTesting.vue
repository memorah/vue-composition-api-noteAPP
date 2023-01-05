<template>
  <div class="">
    <div class="wrapper">
      <input type="checkbox" />
      test
      <div class="btn"></div>
      <svg>
        <use xlink:href="#shape-01" class="shape shape-01" />
        <use xlink:href="#shape-02" class="shape shape-02" />
        <use xlink:href="#shape-03" class="shape shape-03" />
        <use xlink:href="#shape-04" class="shape shape-04" />
        <use xlink:href="#shape-05" class="shape shape-05" />
      </svg>
    </div>

    <!-- SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46 60"
        id="shape-01"
      >
        <path d="M3,57 3,34.1 43,34.1 " />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46 60"
        id="shape-02"
      >
        <path d="M35.9,57 19.9,57 19.9,45 " />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46 60"
        id="shape-03"
      >
        <line x1="35.9" y1="3" x2="35.9" y2="57" />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46 60"
        id="shape-04"
      >
        <line x1="3" y1="34.07" x2="19.86" y2="49.97" />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46 60"
        id="shape-05"
      >
        <line x1="35.94" y1="3" x2="3" y2="34.07" />
      </symbol>
    </svg>

    <!--- ## DRIBBBLE + TWITTER ############# -->
    <div class="socials">
      <a
        class="dribbble"
        href="https://dribbble.com/shots/10992655-Graph-Button-animation-CodePen"
        target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 32 32"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#EA4C89"
            d="M16 0C7.16703 0 0 7.16703 0 16C0 24.833 7.16703 32 16 32C24.8156 32 32 24.833 32 16C32 7.16703 24.8156 0 16 0ZM26.5683 7.37527C28.4772 9.70065 29.6226 12.6681 29.6573 15.8785C29.2061 15.7918 24.6941 14.872 20.1475 15.4447C20.0434 15.2191 19.9566 14.9761 19.8525 14.7332C19.5748 14.0738 19.2625 13.397 18.9501 12.7549C23.9826 10.7072 26.2733 7.75705 26.5683 7.37527ZM16 2.36009C19.4707 2.36009 22.6464 3.66161 25.0586 5.7961C24.8156 6.14317 22.7505 8.90239 17.8915 10.7245C15.6529 6.61171 13.1714 3.24512 12.7896 2.72451C13.8134 2.48156 14.8894 2.36009 16 2.36009ZM10.1866 3.64425C10.551 4.13015 12.9805 7.5141 15.2538 11.5401C8.86768 13.2408 3.22777 13.2061 2.62039 13.2061C3.50542 8.9718 6.36876 5.44902 10.1866 3.64425ZM2.32538 16.0174C2.32538 15.8785 2.32538 15.7397 2.32538 15.6009C2.9154 15.6182 9.54447 15.705 16.3644 13.6573C16.7636 14.4208 17.128 15.2017 17.4751 15.9826C17.3015 16.0347 17.1106 16.0868 16.9371 16.1388C9.89154 18.4121 6.14317 24.6247 5.8308 25.1453C3.6616 22.7332 2.32538 19.5228 2.32538 16.0174ZM16 29.6746C12.8416 29.6746 9.92625 28.5987 7.61822 26.7939C7.86117 26.2907 10.6377 20.9458 18.3427 18.256C18.3774 18.2386 18.3948 18.2386 18.4295 18.2213C20.3557 23.2017 21.1367 27.3839 21.3449 28.5813C19.6963 29.2928 17.8915 29.6746 16 29.6746ZM23.6182 27.3319C23.4794 26.4989 22.7505 22.5076 20.9631 17.5965C25.2495 16.9197 28.9978 18.0304 29.4664 18.1866C28.8764 21.987 26.6898 25.2668 23.6182 27.3319Z"
          ></path></svg
      ></a>
      <a class="twitter" href="https://twitter.com/MilanRaring" target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 72 72"
        >
          <path
            fill="black"
            d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"
          ></path></svg
      ></a>
    </div>
  </div>
</template>
<style>
.wrapper {
  --background: #4f29f0;
  --background-dark: #371ca8;
  --icon-color: #414856;
  --shape-color-01: #b8cbee;
  --shape-color-02: #7691e8;
  --shape-color-03: #fdd053;
  --width: 80px;
  --height: 80px;
  --border-radius: var(--height);
  width: var(--width);
  height: var(--height);
  position: relative;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
  overflow: hidden;
  transition: transform 0.3s;
  transform: scale(var(--scale, 1));
}
.wrapper:active {
  --scale: 0.95;
}
.wrapper > .btn {
  width: var(--width);
  height: var(--height);
  position: relative;
  background: var(--background);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0s ease 0.5s;
}
.wrapper > .btn:before,
.wrapper > .btn:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: circle(150% at 200% 200%);
}
.wrapper > .btn:before {
  background: var(--background-dark);
}
.wrapper > .btn:after {
  background: var(--background);
}
.wrapper > svg {
  width: 32px;
  height: 42px;
  position: absolute;
  z-index: 2;
  transition: transform 0.3s linear;
}
.wrapper > svg .shape {
  fill: none;
  stroke: #fff;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.wrapper input {
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  cursor: pointer;
  position: absolute;
  z-index: 5;
  margin: 0;
  opacity: 0;
}
.wrapper input:checked ~ .btn {
  background: var(--background-dark);
}
.wrapper input:checked ~ .btn:before {
  clip-path: circle(150% at 100% 100%);
  transition: clip-path 0.5s ease;
  z-index: 1;
}
.wrapper input:checked ~ .btn:after {
  clip-path: circle(150% at 200% 200%);
  transition: clip-path 0s ease;
}
.wrapper input:checked ~ svg {
  transform: translate(0, -2px);
}
.wrapper input:checked ~ svg .shape-01 {
  stroke-dashoffset: 63;
  stroke-dasharray: 23 40 23 40;
  animation: shape-01-animate 1s ease forwards;
}
.wrapper input:checked ~ svg .shape-02 {
  stroke-dashoffset: 29;
  stroke-dasharray: 16 29 13;
  animation: shape-02-animate 0.5s ease forwards;
}
.wrapper input:checked ~ svg .shape-03 {
  stroke-dashoffset: 57;
  stroke-dasharray: 20 36 0;
  animation: shape-03-animate 0.5s ease forwards 0.25s;
}
.wrapper input:checked ~ svg .shape-04 {
  stroke-dashoffset: 22;
  stroke-dasharray: 22 24 0;
  animation: shape-04-animate 0.75s ease forwards 0.25s;
}
.wrapper input:checked ~ svg .shape-05 {
  stroke-dashoffset: 46;
  stroke-dasharray: 46 46 0;
  animation: shape-05-animate 0.75s ease forwards 0.25s;
}
.wrapper input:not(:checked) ~ .btn {
  background: var(--background);
}
.wrapper input:not(:checked) ~ .btn:before {
  clip-path: circle(150% at 200% 200%);
  transition: clip-path 0s ease;
}
.wrapper input:not(:checked) ~ .btn:after {
  clip-path: circle(150% at 100% 100%);
  transition: clip-path 0.5s ease;
  z-index: 1;
}
.wrapper input:not(:checked) ~ svg {
  transform: translate(2px, -5px);
}
.wrapper input:not(:checked) ~ svg .shape-01 {
  stroke-dashoffset: 1;
  stroke-dasharray: 0 25 40 0;
  animation: shape-01-animate-r 1s ease forwards;
}
.wrapper input:not(:checked) ~ svg .shape-02 {
  stroke-dashoffset: 45;
  stroke-dasharray: 43 0 0;
  animation: shape-02-animate-r 0.5s ease forwards 0.5s;
}
.wrapper input:not(:checked) ~ svg .shape-03 {
  stroke-dashoffset: 116;
  stroke-dasharray: 0 57 0;
  animation: shape-03-animate-r 0.5s ease forwards 0.25s;
}
.wrapper input:not(:checked) ~ svg .shape-04 {
  stroke-dashoffset: 0;
  stroke-dasharray: 45 0 45;
  animation: shape-04-animate-r 0.75s ease forwards;
}
.wrapper input:not(:checked) ~ svg .shape-05 {
  stroke-dashoffset: 46;
  stroke-dasharray: 20 46 26;
  animation: shape-05-animate-r 0.75s ease forwards;
}

@keyframes shape-01-animate {
  0% {
    stroke-dashoffset: 63;
    stroke-dasharray: 23 40 23 40;
  }
  50% {
    stroke-dashoffset: 40;
    stroke-dasharray: 23 40 0 40;
  }
  75% {
    stroke-dashoffset: 40;
    stroke-dasharray: 23 40 0 40;
  }
  100% {
    stroke-dashoffset: 1;
    stroke-dasharray: 0 25 40 0;
  }
}
@keyframes shape-01-animate-r {
  0% {
    stroke-dashoffset: 1;
    stroke-dasharray: 0 25 40 0;
  }
  25% {
    stroke-dashoffset: 40;
    stroke-dasharray: 23 40 0 40;
  }
  50% {
    stroke-dashoffset: 40;
    stroke-dasharray: 23 40 0 40;
  }
  100% {
    stroke-dashoffset: 63;
    stroke-dasharray: 23 40 23 40;
  }
}
@keyframes shape-02-animate {
  0% {
    stroke-dashoffset: 29;
    stroke-dasharray: 16 29 13;
  }
  33.3% {
    stroke-dashoffset: 29;
    stroke-dasharray: 16 29 0;
  }
  66.6% {
    stroke-dashoffset: 45;
    stroke-dasharray: 16 29 13;
  }
  100% {
    stroke-dashoffset: 45;
    stroke-dasharray: 43 0 0;
  }
}
@keyframes shape-02-animate-r {
  0% {
    stroke-dashoffset: 45;
    stroke-dasharray: 43 0 0;
  }
  33.3% {
    stroke-dashoffset: 45;
    stroke-dasharray: 16 29 13;
  }
  66.6% {
    stroke-dashoffset: 29;
    stroke-dasharray: 16 29 0;
  }
  100% {
    stroke-dashoffset: 29;
    stroke-dasharray: 16 29 13;
  }
}
@keyframes shape-03-animate {
  0% {
    stroke-dashoffset: 57;
    stroke-dasharray: 20 36 0;
  }
  50% {
    stroke-dashoffset: 57;
    stroke-dasharray: 0 57 0;
  }
  100% {
    stroke-dashoffset: 116;
    stroke-dasharray: 0 57 0;
  }
}
@keyframes shape-03-animate-r {
  0% {
    stroke-dashoffset: 116;
    stroke-dasharray: 0 57 0;
  }
  50% {
    stroke-dashoffset: 57;
    stroke-dasharray: 0 57 0;
  }
  100% {
    stroke-dashoffset: 57;
    stroke-dasharray: 20 36 0;
  }
}
@keyframes shape-04-animate {
  0% {
    stroke-dashoffset: 22;
    stroke-dasharray: 22 24 0;
  }
  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 45 0 45;
  }
}
@keyframes shape-04-animate-r {
  0% {
    stroke-dashoffset: 0;
    stroke-dasharray: 45 0 45;
  }
  100% {
    stroke-dashoffset: 22;
    stroke-dasharray: 22 24 0;
  }
}
@keyframes shape-05-animate {
  0% {
    stroke-dashoffset: 46;
    stroke-dasharray: 46 46 0;
  }
  50% {
    stroke-dashoffset: 46;
    stroke-dasharray: 0 46 46;
  }
  100% {
    stroke-dashoffset: 46;
    stroke-dasharray: 20 46 26;
  }
}
@keyframes shape-05-animate-r {
  0% {
    stroke-dashoffset: 46;
    stroke-dasharray: 20 46 26;
  }
  50% {
    stroke-dashoffset: 46;
    stroke-dasharray: 0 46 46;
  }
  100% {
    stroke-dashoffset: 46;
    stroke-dasharray: 46 46 0;
  }
}
body {
  background: #e8ebf3;
  height: 100vh;
  font: 400 16px "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
body .socials {
  position: fixed;
  display: block;
  left: 20px;
  bottom: 20px;
}
body .socials > a {
  display: block;
  width: 30px;
  opacity: 0.2;
  transform: scale(var(--scale, 0.8));
  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
}
body .socials > a:hover {
  --scale: 1;
}
</style>
