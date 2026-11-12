$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 630, 90, 10);
createPlatform(285, 630, 10, 80);
createPlatform(285, 700, 340, 10);
createPlatform(325, 480, 70, 10);
createPlatform(720, 570, 50, 10);
createPlatform(80, 500, 20, 10);
createPlatform(900, 433, 50, 10);
createPlatform(690, 320, 50, 10);
 createPlatform(359, 248, 60, 10);
 createPlatform(670, 160, 350, 10);
 createPlatform(1289, 700, 100, 10);
 createPlatform(1289, 600, 54, 8);
 createPlatform(1289, 600, 10, 100);
    // TODO 3 - Create Collectables
createCollectable("steve", 345, 430);
createCollectable("steve", 1050, 300);
createCollectable("steve", 1310, 660);
    createCollectable("steve", 200, 180);
    createCollectable("steve", 1100, 120);
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
