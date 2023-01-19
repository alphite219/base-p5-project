let textures = [];
function preload(){
    let texturesNum = 5
    for(let i = 1; i <= texturesNum; i++){
        let t = loadImage(`images/${i}.png`);
        textures.push(t); 
    }
}
function setup() {
    const CELL_SIZE = 80;
    createCanvas(800,800);
    noStroke();
    let x = 0;
    let y = 0;
    let sizes = [CELL_SIZE, CELL_SIZE*2, CELL_SIZE*3, CELL_SIZE*4];
    let currentWidth = random(sizes);
    let currentHeight = random (sizes);
    let rotations = [TWO_PI, PI+(HALF_PI), PI, HALF_PI]
    let colors = [color("#5c966b"), color("#732929"), color("#5995b3"), color("#0f1669"), color("#6a4575"), color("#deca66")];
    let currentColor1 = 0;
    let currentColor2 = 0;
    let diameter = 0;
    //strokeWeight(5);
    while(y<height){
        while(x<width){
            currentColor1 = random(colors);
            fill(currentColor1);
            rect(x,y,currentWidth,currentHeight);

            currentColor2 = random(colors)
            while(currentColor1 === currentColor2){
                currentColor2 = random(colors)
            }

            push()
            fill(currentColor2);
            translate(20,20)
            rect(x,y, currentWidth-40, currentHeight-40 )
            pop()


            push()
            fill(currentColor1);
            translate(currentWidth/2,currentHeight/2)
            if(currentWidth > currentHeight){
                diameter = currentHeight
            }else{
                diameter = currentWidth
            }
            ellipse(x,y, 20 * (diameter/80))
            pop()


            x += currentWidth;
            let availableWidth = width - x;
            currentWidth = random(sizes);
            while (currentWidth > availableWidth ){
               currentWidth -= CELL_SIZE;
            }

        }
        y += currentHeight;
        let availableHeight = height - y;
        currentHeight = random(sizes);
        while(currentHeight > availableHeight){
            currentHeight -= CELL_SIZE;
        }
        x = 0;
    }
}
function draw() {
    
}
