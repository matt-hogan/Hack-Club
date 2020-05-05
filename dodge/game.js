var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;

function preload() {
  playerImage = loadImage("http://cdn.bleacherreport.net/images/team_logos/64x64/kansas_city_chiefs.png");
  enemyImage = loadImage("http://cdn.bleacherreport.net/images/team_logos/64x64/oakland_raiders.png");
  backgroundImage = loadImage("http://prod.static.chiefs.clubs.nfl.com//assets/images/imported/KC/photos/StadiumTours-Thumb--nfl_medium_540_360.jpg");
}

function setup() {
  isGameOver = false;
  createCanvas(540, 304);
  player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
  player.addImage(playerImage);
  enemy = createSprite(width / 2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 4.0;
}

function draw() {
  if (isGameOver) {
    gameOver();
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    if (enemy.overlap(player)) {
      gameOver();
    }
    background(backgroundImage);
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-35)) {
        player.position.x = player.position.x + 2;
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > 35) {
        player.position.x = player.position.x - 2;
    }
    
    if (keyDown(UP_ARROW) && player.position.y > 30) {
        player.position.y = player.position.y - 2;
    }
    
    if (keyDown(DOWN_ARROW) && player.position.y < (height-30)) {
        player.position.y = player.position.y + 2;
    }
    enemy.position.y = enemy.position.y + 2;
    if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(5, width - 5);
    }
    drawSprites();
  }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width / 2, height / 2);
  text("Click anywhere to try again", width / 2, 3 * height / 4);
}

function mouseClicked() {
  isGameOver = false;
  player.position.x = width / 2;
  player.position.y = height - (playerImage.height / 2);
  enemy.position.x = width / 2;
  enemy.position.y = 0;
}