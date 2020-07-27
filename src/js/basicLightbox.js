import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

export default function handleOriginalImage(e) {
	let img = e.target;
	if (e.target.nodeName !== 'IMG') {
		return;
	}
	basicLightbox
	.create(`<img class="lightbox-img" src="">`)
	.show(() => {
		const imgLightBox = document.querySelector('.lightbox-img');
		const getSrcAttribut = img.dataset.source;
		imgLightBox.setAttribute("src", getSrcAttribut);
	});
} 
