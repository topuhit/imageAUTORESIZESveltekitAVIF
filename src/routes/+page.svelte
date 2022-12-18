

<script type="text/javascript">
	import Image from '$lib/assets/1.jpg?w=400&h=300&webp'
	import Image2 from '$lib/assets/1.jpg?w=400&h=300&avif'
	import Image3 from '$lib/assets/1.jpg?w=400&h=300&jpg'
	import Image4 from '$lib/assets/1.jpg?w=400&h=300&webp'
	import Image5 from '$lib/assets/1.jpg'


</script>


<h1>Vite Imagetool auto resize and avif, webp auto format images.</h1>

<!-- <img src={Image} alt="test1" /> -->
<!-- <img src="`${Image5}?w=400&h=300&webp`" alt="test1" /> -->




<picture>
	<source srcset="{Image2}" type="image/avif">
		<source srcset="{Image}" type="image/webp"> 
			<img src="{Image3}" alt="sdfsdf">
	</picture>