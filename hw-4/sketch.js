// setup function
function setup() {

    // create canvas for art piece
    createCanvas( 900, 600 );

  }

    // draw function
    function draw() {

    // color background
    background( 'rgb(113, 191, 199)' );

    /* main sandbox */

    push();

    // greeting
    text( "Eric Wilsey", 420, 20 ); //Eric is not a monster



    // center canvas grid
    translate( 450, 300 );

    /* body */
    push();

    fill( 'rgb(140, 140, 140)'); //shirt color
    rect( -100, 0, 200, 300, 20 ); //shirt body

    push(); // Eric's right arm
    fill( 'rgb(231, 213, 138)'); //arm color
    rect( -100, 130, 40, 200 ); // (left/right,up/down,width,height)
    pop();

    push(); // Eric's left arm
    fill( 'rgb(231, 213, 138)'); //arm color
    rect( 60, 130, 40, 200 ); // (left/right,up/down,width,height)
    pop();

    push(); // top stripe -shirt
    noStroke();
    fill( 'rgb(198, 236, 19)'); //stripe color
    rect( -60, 75, 120, 25 ); // (left/right,up/down,width,height)
    pop();

    push(); // bottom stripe -shirt
    noStroke();
    fill( 'rgb(7, 21, 65)'); //stripe color
    rect( -60, 100, 120, 25 ); // (left/right,up/down,width,height)
    pop();

    push(); //shirt logo

    translate( -55, 44 );
    fill( 'rgb(232, 232, 232)');
    quad( 48, 21, 42, 25, 44, 63, 27, 49);
    translate( 135, 50 );
    rotate(21);
    fill( 'rgb(148, 99, 16)');
    quad( 31, 21, 82, 75, 64, 93, 57, 69);

    pop(); //end logo

    pop(); //end body

    /* hands */
    push(); //Eric's right hand

    noFill();
    ellipse( -80, 300, 40); //hand

    push(); //Eric's left hand

    noFill();
    ellipse( 80, 300, 40); //hand

    pop();
    pop(); //hand end

    /* neck */
    push(); //Eric's neck

    fill( 'rgb(231, 213, 138)'); //neck color
    noStroke(); //remove neck border for complex shape
    arc( 0, 44, 110, 120, radians(230), radians(310) ); //lower neck


    pop(); //end neck

    /* Shirt collar */
    push(); //shirt collar

    noFill();
    arc( -0, 34, 100, 100, radians(180), radians(180) );// Collar back
    translate( 2, 14 );
    rotate( radians(0));
    rect( 48, 20, 10, 20); //left collar

    translate( -62, 0 );
    rotate( radians(0));
    line( 48, 20, 10, 20); //right collar

    pop(); //end collar

    push(); //Eric's throat
    noStroke();
    fill( 'rgb(231, 213, 138)');
    rect( -22, -40, 45, 50 ); //throat
    pop(); //end throat

    /* Hair */
    push(); //Eric's hair

    translate( 05, -120 );
    noStroke();
    fill( 'rgb(85, 44, 12)' );
    arc ( -0, 34, 140, 250, radians(180), radians(180)); //hair line

    push();
    translate( -26, -56 );
    rotate( radians(20));
    arc ( -0, 34, 85, 135, radians(90), radians(90)); //Eric's right side
    pop();

    push();
    translate( 55, 10 );
    rotate( radians(160));
    arc ( -0, 34, 50, 128, radians(90), radians(90)); //Eric's left side
    pop();

    push();
    translate( 44, -34 );
    rotate( radians(120));
    arc ( -0, 34, 80, 128, radians(90), radians(90)); //Eric's left side 2
    pop();

    push();
    translate( 18, -52 );
    ellipse( 0, 0, 90 );
    pop();

    pop(); //end hair

    /* Ears */
    push(); //Eric's ears

    translate( 44, -76 );
    fill( 'rgb(231, 213, 138)');
    ellipse( 0, 0, 40 ); //Eric's left ear

    translate( -88, 0 );
    fill( 'rgb(231, 213, 138)');
    ellipse( 0, 0, 40 ); //Eric's right ear

    pop(); //end ears

    /* Head */
    push(); //Eric's head

    fill( 'rgb(231, 213, 138)'); //head color
    ellipse( 0, -104, 120, 180 ); //head shape

    push(); //facial features -left eye

    translate( 0,-120 ); //reposition eye height
    fill(255,255,255); // eye white
    ellipse( 28, 0, 42, 42 ); // Eric's left eye

    pop(); //end facial features -left eye

    push(); //facial features -right eye

    translate( 0,-120 ); //reposition eye height
    fill(255,255,255); // eye white
    ellipse( -28, 0, 42, 42 ); // Eric's right eye

    pop(); //end facial features -right eye

    push(); //Eric's right pupil

    translate( -28, -120 );
    point( -2,-1 );
    point( -1,-2 );
    point( -1,-0 );
    point( -0,-1 );
    point( -1, -1 );

    pop(); //end right pupil

    push(); //Eric's left pupil

    translate( 28, -120 );
    point( -2,-1 );
    point( -1,-2 );
    point( -1,-0 );
    point( -0,-1 );
    point( -1, -1 );

    pop(); //end left pupil

    push(); //Eric's nose

    translate( 17, -95 );
    rotate( radians (135) );
    line( 40, 20, 10, 20); // bridge

    translate( 0, -45 );
    rotate( radians (43) );
    translate( 33, 0 );
    line( 40, 20, 10, 20); // septum

    pop(); //end nose

    push(); //Eric's mouth

    noFill();
    translate( -0, -20 );
    rotate( radians (180) );
    arc( -0, 34, 50, 10, radians(180), radians(180)); //mouth shape

    push();
    translate( -20, 0 );
    arc( -0, 34, 20, 20, radians(140), radians(270)); //mouth edge R
    pop();

    push();

    translate( 20, 0 );
    arc( -0, 34, 20, 20, radians(270), radians(40)); //mouth edge L
    pop();
    pop(); //end mouth

    /* Eyebrows */
    push(); //Eric's left eyebrow

    translate( 29, -180);
    noFill();
    arc( -0, 34, 27, 7, radians(180), radians(180));

    push(); //Eric's right eyebrow

    translate( -57, 0);
    noFill();
    arc( -0, 34, 27, 7, radians(180), radians(180));

    pop(); //end eyebrow -R
    pop(); //end eyebrow -L



    pop(); //end head
}
