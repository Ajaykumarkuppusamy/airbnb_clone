import image1 from './im/resortPicture1.jpg';
import image2 from './im/resortPicture2.jpg';
import image3 from './im/resortPicture3.jpg';
import image4 from './im/resortPicture4.jpg';
import image5 from './im/resortPicture5.jpg';
import image6 from './im/resortPicture6.jpg';
import image7 from './im/resortPicture7.jpg';
import image8 from './im/resortPicture8.jpg';
import image9 from './im/resortPicture9.jpg';
import image10 from './im/resortPicture10.jpg';
import image11 from './im/resortPicture11.jpg';

const locations = ['Bangalore, India', 'Mumbai, India', 'Delhi, India', 'Goa, India', 'Jaipur, India'];

const imageData = [];
const imageImports = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
console.log(imageImports);
for (let id = 1; id <= 11; id++) {
  const images = [];
  for (let i = 1; i <= 3; i++) {
    const randomNumber = Math.floor(Math.random() * 11) ;
    console.log(randomNumber);
    images.push({
      "src": imageImports[randomNumber],
      "alt": `Image ${i} for ID ${id}`,
    });
  }
  const location = locations[Math.floor(Math.random() * locations.length)];
  const priceRange = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + Math.floor(Math.random() * 4) + 1);

  imageData.push({
    id,
    images,
    priceRange,
    location,
    startDate,
    endDate,
  });
}


export default imageData;
