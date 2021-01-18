class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(500, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'orange');
        this.input.position(650,300);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lightblue');
        this.button.position(270,670);
        this.button.style('width', '100px');
        this.button.style('height', '30px');
        this.button.style('background', 'lightgreen');
        this.reset.position(1155, 670);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightyellow');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(600,250);
            this.greeting.style('color', 'lavender');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            score = 0   
        });

    }
}