const pictureSize = () => {
  const sizesBlocks = document.querySelectorAll('.sizes-block');

  sizesBlocks.forEach(sizesBlock => {
    const handleMouseOver = () => {
      for (let child of sizesBlock.children) {
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

    const handleMouseOut = () => {
      for (let child of sizesBlock.children) {
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

    sizesBlock.addEventListener('mouseover', handleMouseOver);
    sizesBlock.addEventListener('mouseout', handleMouseOut);
  });
};

export default pictureSize;