import React from 'react';

const HoverText = ({ children, color, text }) => {
  return (
    <>
      <style>
        {`

@keyframes anim-out-text{0%{transform:translateZ(0)}to{transform:translate3d(-100%,0,0)}}
@keyframes anim-out-layer{0%{transform:translateZ(0)}to{transform:translate3d(100%,0,0)}}
@keyframes anim-in-layer{0%{transform:translate3d(-100%,0,0)}to{transform:translateZ(0)}}
@keyframes anim-in-text{0%{transform:translate3d(100%,0,0)}to{transform:translateZ(0)}}

a{
  color: #fff;
  text-transform:uppercase;
  position: relative;
  overflow:hidden;
  transition:color .3s;
  display:inline-block;
}


a span{
  position: absolute;
  left: 0;
  overflow: hidden;
  width: 100%;
  display: block;
  transform: translate3d(-105%,0,0);
  animation: anim-out-layer .3s ease-out;
   -webkit-backface-visibility: hidden;
   backface-visibility: hidden;
}

a:hover span {
  animation: anim-in-layer .3s ease forwards;
}

a span::before {
  background-color: ${color};
    content: attr(data-text);
    width: 100%;
    display: block;
    transform: translate3d(100%,0,0);
    color: ${text};
    animation: anim-out-text .3s ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

a:hover span::before {
  animation: anim-in-text .3s ease forwards;
}
        `}
      </style>
    <a>
    <span data-text={children}>
    </span>
    {children}
  </a>
    </>
  );
}

export default HoverText;
