ERIC WILSEY, 51

[Live Sketch Link](https://ewilsey.github.io/120-work/hw-12/)

##HW-12
<!--
What I did and notes to self:

Worked alongside tutorial to gain concepts of project parameters and to refresh
memory on what went where for OOP. Trying to change as many elements as possible
without breaking the code or creating too many issues.
Placed object class into its own js file. Working nicely so far. Giving myself
10-11 hours for this sketch in addition to what I've already done.
Figured out how to make an object change sizes and stroke while moving around -
kind of creates a talking mouth illusion, might exploit this feature to create
a talking head of some sort.

Figured out how to get mousePressed to work the way I wanted, changes color and
adds text so far. Will experiment further.

Discovered that when I added another shape into the same class that I could
create an illusion of one object turning into another. For example: clicking the
white square will create a white bubble while removing square. Adding the text
element creates a game like feature where changing one element is awarded 100
pts.



-->


#Issues
<!--
In chronological order:
Briefly broke code while learning setTimeout() with a simple spelling error.

Broke code when moving object to its own js file, forgot to update index.

Broke code when trying to change shape from square to circle randomly. Assuming
that the code was too complicated, taking up too much memory or hitting some
unexpected zeroes.

Am having difficulty getting a second object to appear and interact with the
first object. I thought objectTimer would create new objects, but they don't
appear to act in the way I want them to.

Still cannot get object to interact with object 2. Might have to let it go as is
and come back to it later. 

-->

#Resolve
<!--
In order of appearance from above:

Noticed that object parameter symbols in functions blocks did not match between
setup and objectTimer. Correcting mistake resolved issue.

Updated index to reflect new object.js file.

Removed alpha from rectangle parameter that would allow changing into an
ellipse, then lowered the frameRate and changed the other two parameters for H
and W to be more drastic allowing for a more animated effect.

Created new object2.js file and added to index, mirrored object.js with new
object2 identities. Now have 2 working objects.


-->

#PI CHART
<!--

Top Left 1/4 -> -PI,-HALF_PI
Bottom Left 1/4 -> HALF_PI,PI
Bottom Right 1/4 -> 0,HALF_PI
Top Right 1/4 -> -HALF_PI, 0

-->
