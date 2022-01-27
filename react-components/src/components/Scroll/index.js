import React from 'react';
import './Scroll.css'
function index() {
  return <div className='scroll-container'>
      <div className="scroll" style={{
          background:"url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
          backgroundSize:'cover',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'multiply'
      
      }}>
        <h1>Hello world</h1>
      </div>

      <div className="scroll" style={{
          background:"url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg')",
          backgroundSize:'cover',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'multiply'
      
      }}>
          <h1>
              Second Section 
          </h1>
      </div>
      
      <div className="scroll" style={{
          background:"url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')",
          backgroundSize:'cover',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'multiply',
          scrollSnapAlign:"start"
      
      }}>
        <h1>Third Section</h1>
      </div>
  </div>;
}

export default index;
