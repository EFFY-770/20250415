let circles = [];
let stars = [];
let animals = []; // 新增小動物陣列

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("fefae0");

  // 產生 70 個圓
  for (let i = 0; i < 70; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: randomColor() // 使用自訂函數產生柔和色彩
    });
  }

  // 產生 50 顆星星
  for (let i = 0; i < 50; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(10, 20),
      color: randomColor() // 使用自訂函數產生柔和色彩
    });
  }

  // 產生 20 隻小動物（包含兔子和小熊）
  for (let i = 0; i < 30; i++) {
    animals.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: randomColor(), // 使用自訂函數產生柔和色彩
      type: random(["rabbit", "bear"]) // 隨機決定是兔子還是小熊
    });
  }
}

function draw() {
  background("fefae0");

  // 繪製圓
  for (let circle of circles) {
    let newSize = map(mouseX, 0, width, 20, 80); // 根據滑鼠 X 軸位置調整大小
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, newSize, newSize);
  }

  // 繪製星星
  for (let star of stars) {
    fill(star.color);
    noStroke();
    drawStar(star.x, star.y, star.size, star.size / 2, 5); // 繪製五角星
  }

  // 繪製小動物
  for (let animal of animals) {
    if (animal.type === "rabbit") {
      drawRabbit(animal.x, animal.y, animal.size, animal.color);
    } else if (animal.type === "bear") {
      drawBear(animal.x, animal.y, animal.size, animal.color);
    }
  }
}

// 自訂函數：產生淡黃色、淡粉色、淡藍色的柔和色彩
function randomColor() {
  let colors = [
    color(random(240, 255), random(220, 240), random(200, 220)), // 淡黃色
    color(random(250, 255), random(200, 220), random(210, 230)), // 淡粉色
    color(random(200, 220), random(220, 240), random(240, 255))  // 淡藍色
  ];
  return random(colors);
}

// 自訂函數：繪製五角星
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius2;
    sy = y + sin(a + halfAngle) * radius2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// 自訂函數：繪製兔子
function drawRabbit(x, y, size, color) {
  fill(color);
  noStroke();

  // 頭部
  ellipse(x, y, size, size);

  // 耳朵
  ellipse(x - size / 4, y - size / 2, size / 3, size / 1.5);
  ellipse(x + size / 4, y - size / 2, size / 3, size / 1.5);

  // 眼睛
  fill(0);
  ellipse(x - size / 6, y - size / 10, size / 10, size / 10);
  ellipse(x + size / 6, y - size / 10, size / 10, size / 10);

  // 鼻子
  fill(255, 100, 100);
  triangle(
    x - size / 20, y + size / 20,
    x + size / 20, y + size / 20,
    x, y + size / 10
  );
}

// 自訂函數：繪製小熊
function drawBear(x, y, size, color) {
  fill(color);
  noStroke();

  // 頭部
  ellipse(x, y, size, size);

  // 耳朵
  ellipse(x - size / 3, y - size / 3, size / 2.5, size / 2.5);
  ellipse(x + size / 3, y - size / 3, size / 2.5, size / 2.5);

  // 眼睛
  fill(0);
  ellipse(x - size / 6, y - size / 10, size / 10, size / 10);
  ellipse(x + size / 6, y - size / 10, size / 10, size / 10);

  // 鼻子
  fill(80, 50, 50);
  ellipse(x, y + size / 10, size / 8, size / 8);
}
