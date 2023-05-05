import React from 'react'

export default function Watermark() {
  return (
    <>
      <div className='' style={{ position: 'absolute', bottom: '30px', right: '3px', zIndex: 400, }} >
        <img src='assets/images/watermark_logo.svg'></img>
      </div>
    </>
  );
}
