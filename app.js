function draw() {
    var canvas = document.getElementById('DrawCanvas');

    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        /* DRAW A RECTANGLES */ 
        // ctx.fillRect(25,25,100,100);
        // ctx.clearRect(45,45,60,60);
        // ctx.strokeRect(50,50,50,50);

        /*DRAWS A TRIANGLE USING PATHS */

        ctx.beginPath();
        ctx.moveTo(100,100);
        ctx.lineTo(400,50);
        ctx.lineTo(400,150);
        ctx.fill();
    }
}
