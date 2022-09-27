window.onload = function() {
	setTimeout(function() {
		document.body.classList.add('loaded')
		Draggable.create('.gallery', {
			bounds: 'body',//Ограничивает движение внутри объекта
			inertia: true
		})
	})
}