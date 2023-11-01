const html = `<img src="https://example.com/image.jpg" alt="Image 1">
              <img src="https://example.com/image2.jpg" alt="Image 2">
              <img src="https://example.com/image3.jpg" alt="Image 3">`;
const regex = /<img.*?src="(.*?)".*?>/g;
const imageURLs = html.match(regex).map(img => img.replace(regex, '$1'));

console.log(imageURLs);