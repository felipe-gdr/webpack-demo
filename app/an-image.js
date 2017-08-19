import smallImage from './small-image.jpg';

export default () => {
  const image = document.createElement('img');

  image.src = smallImage;

  return image;
};