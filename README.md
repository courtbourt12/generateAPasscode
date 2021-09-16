# generateAPasscode
Passcode generator for homework 3 that will enable users to pick a length of passcode they wish to have and receive a computer generated one.

#
## HTML
### Designing the Bones

The HTML is fairly short due to the limited amount of text on the page. The majority of this code will be in the CSS and JavaScript files. 

* My HTML file includes two main sections - the header and the body.  
    * The header has the title of the page with its own unique ID so that it can be centered.  It is within the h1 syntax so that the similar font size and color can be combined with the body header on css.
    * The body includes everything within the main box. 
* Below shows an image of the HTML file structure.
#
<img src= "HTML.JPG">

#
## CSS
### Onto the Skin
The CSS had to organize the HTML in the desired locations, give the appropriate font size and color, and design the borders.
#### Locations
* To acheive the desired locations, each section had a left-margin set to a percentage of the parent box.  This ensures that no matter the sizing of the page, the locations will always remain intact with the parent object.
* Padding was added to each HTML element to set proper border locations and to allow for proper horizontal spacing.
#### Borders
* When I first was making the HTML, I did not include a body tag, I only had the main tag. The webpage looked fine until I added the border within the main tag and realized it was including the header title within the box.  I then added a body tag to the HTML which put the header outside the main box (which is the desired location).
* I added a box shadow to the border under the CSS styling for the main section.  In order to have the shadow appear all around the box, I separated the shadows by a comma to include parameters for the left and top of the box.  These are denoted by negative signs.
* To create the two gray lines above and below the dashed border, I included hr tags in the html with their own unique ID's to implement appropriate padding sizes for the top and bottom.
* The button border and div borders were straight forward.  The appropriate background color, border-radius, and font color were used for each.  Left-margins were used to center them within the parent box.
    * Below is an image of the button with proper formatting.
    <img src="Button.jpg">

#
## JavaScript
### And Finally, Add the Muscle
