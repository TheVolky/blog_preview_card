document.querySelectorAll('.card h1 a').forEach(function(anchor) {
    anchor.addEventListener('mouseover', function() {
        this.closest('.card').classList.add('hovered');
    });
    anchor.addEventListener('mouseout', function() {
        this.closest('.card').classList.remove('hovered');
    });
});