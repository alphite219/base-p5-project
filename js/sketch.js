function setup() {
    const CELL_SIZE = 40;
    createCanvas(800,800);
    noStroke();
    let x = 0;
    let y = 0;
    while(y<height){
        while(x<width){
            fill(random(255));
            rect(x,y,CELL_SIZE);
            x += CELL_SIZE
        }
        y += CELL_SIZE
        x = 0
    }

}
function draw() {
}
