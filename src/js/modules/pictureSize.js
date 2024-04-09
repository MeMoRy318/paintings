const pictureSize = () => {
  const sizesBlocks = document.querySelectorAll('.sizes-block');

  const handleMouseOver = (block) => {
    for (let child of block.children) {
      if (child.tagName === 'IMG') {
        const childAttribute = child.getAttribute('src');
        const upChildAttribute = childAttribute.replace('.png', '-1.png');
        child.setAttribute('src', upChildAttribute);
        child.classList.add('animated', 'bounceIn');
      } else if (!child.classList.contains('sizes-hit')) {
        child.style.display = 'none';
      }
    }
  };

  const handleMouseOut = (block) => {
    for (let child of block.children) {
      if (child.tagName === 'IMG') {
        const childAttribute = child.getAttribute('src');
        const upChildAttribute = childAttribute.replace('-1.png', '.png');
        child.setAttribute('src', upChildAttribute);
        child.classList.remove('animated', 'bounceIn');
      } else if (!child.classList.contains('sizes-hit')) {
        child.style.display = 'block';
      }
    }
  };

  sizesBlocks.forEach(sizesBlock => {
    sizesBlock.addEventListener('mouseover', ()=> handleMouseOver(sizesBlock));
    sizesBlock.addEventListener('mouseout', ()=> handleMouseOut(sizesBlock));
  });
};

export default pictureSize;