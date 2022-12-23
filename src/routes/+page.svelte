

<script type="text/javascript">
	import Image from '$lib/assets/1.jpg?w=400&h=300&webp'
	import Image2 from '$lib/assets/1.jpg?w=400&h=300&avif'
	import Image3 from '$lib/assets/1.jpg?w=400&h=300&jpg'
	import Image4 from '$lib/assets/1.jpg?w=400&h=300&webp'
	import Image5 from '$lib/assets/1.jpg'
	import ImageCom from '$lib/assets/1.jpg?width=400;800&format=avif;webp;jpg&metadata'
	import ImageCom2 from '$lib/assets/1.jpg?width=400;600;800&format=avif;webp;jpg&metadata'

	import helloA from '$lib/assets/1.jpg?w=400&h=300&avif'
	import helloAH from '$lib/assets/1.jpg?w=800&h=600&avif'
	import hello1 from '$lib/assets/1.jpg?w=400&h=300&webp'
	import hello2 from '$lib/assets/1.jpg?w=800&h=600&webp'
	import hello3 from '$lib/assets/1.jpg?w=400&h=300&jpg'
	import hello4 from '$lib/assets/1.jpg?w=800&h=600&jpg'

console.log(ImageCom2)

</script>


<h1>Vite Imagetool auto resize and avif, webp auto format images.</h1>

	<picture>
		<source srcset="{ImageCom2[0].src} 1x,{ImageCom2[3].src} 1.5x,{ImageCom2[6].src} 2x" type="image/avif">
		<source srcset="{ImageCom2[1].src} 1x,{ImageCom2[4].src} 1.5x,{ImageCom2[7].src} 2x" type="image/webp">
			
		<img src="{ImageCom2[2].src}" srcset="{ImageCom2[2].src} 1x,{ImageCom2[5].src} 1.5x,{ImageCom2[8].src} 2x">
	</picture>




	<picture>
		<source srcset="{ImageCom[0].src} 1x,{ImageCom[3].src} 2x" type="image/avif">
		<source srcset="{ImageCom[1].src} 1x,{ImageCom[4].src} 2x" type="image/webp">
			
		<img src="{ImageCom[2].src}" srcset="{ImageCom[2].src} 1x,{ImageCom[5].src} 2x">
	</picture>



	<picture>
		<source srcset="{helloA} 1x,{helloAH} 2x" type="image/avif">
		<source srcset="{hello1} 1x,{hello2} 2x" type="image/webp">
			
		<img src="{hello3}" srcset="{hello3} 1x,{hello4} 2x">
	</picture>
