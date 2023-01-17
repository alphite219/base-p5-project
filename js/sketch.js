function setup() {
    const CELL_SIZE = 80;
    createCanvas(800,800);
    noStroke();
    let x = 0;
    let y = 0;
    let xVariation = 0;
    let yVariation = 0;
    let widthVariation = 0;
    let heightVariation = 0;
    let colors = [color("#314288"), color("#e33a01"), color("#e0cf0d"), color("#000000"), color("#cfd6dc"), color("#e6e6e6")];
    while(y<height){
        while(x<width){
            fill(random(colors));
            rect(x+random(-xVariation, xVariation), y + random(-yVariation,yVariation),
            CELL_SIZE +random(-widthVariation, widthVariation), CELL_SIZE + random (-heightVariation,heightVariation));
            x += CELL_SIZE
        }
        y += CELL_SIZE;
        x = 0;
    }
}
function draw() {
    
}
