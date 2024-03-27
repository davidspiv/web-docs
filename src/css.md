# CSS

## Overview

The appearance / presentation of a web page. Stylesheet language used to selectively style HTML elements.

**Statement**: Building block of CSS. Consists of “At-rule”, “Ruleset”, and “Nested-Statement” types

**Ruleset**: A selector list and an associated list of conditions

**Basic Ruleset Template**

```
Selector{property:“value”; property:“value”; property:…}
```

Modules
Properties
Property: Reference a style or behavior of an HTML element
Value: An expression and a value type limited by the property
Declaration: The key-value pair of a CSS property and its value
Selectors
Selector: The HTML element name at the start of the ruleset. It defines the element(s) to be styled

Never applying CSS to individual elements (#id).
Never applying CSS to tags, except for the general reset.
As consequence of ‘1’ and ‘2’, CSS is applied only to classes.
Never using compound selectors (like “div > p”).
There are three kinds of CSS classes: molecular, submolecular and atomic.
Generally, a molecular class contains many declarations. A molecular class must not override another molecular class; complementing is OK.
Atomic classes exist to override details of the molecular classes. And have universal nomenclature - like “w30pc” always means “width: 30%;”.
An atomic class must not override another atomic class; complementing is OK.
Molecular classes must start with a hyphen; atomic classes must not.
Submolecular classes are intermediary between both. They are like a small molecular class that exists to override a true molecular class.
A submolecular class must not override another submolecular class; complementing is OK.

Combinators
Pseudo-classes
Pseudo-elements
At-rules
At-rule: Conveys meta-data, conditional, information, or descriptive information.
Functions
Types
Layout
Breakpoints
/_ Default CSS layout for narrow screens _/
@media (min-width: 480px) {
/_ CSS for medium width screens _/
}
@media (min-width: 800px) {
/_ CSS for wide screens _/
}
@media (min-width: 1100px) {
/_ CSS for really wide screens _/
}
Common Aspect Ratios
1:1 Square. Most commonly sized 1080 x 1080px, square images are great for in-text images, sidebar ads, and Instagram.
16:9 Panoramic. This is your common website Hero image ratio for standard widescreen sizes. It’s often sized 1920 x 1080px and is used in presentations, widescreen TVs, and landscape images.
3:2 Rectangle. Often used in print or on phones, sized 1080 x 720px.
4:3 Rectangle. Slightly taller than the 3:2, the 4:3 rectangle was the most common ratio for screen sizes before widescreen monitors became popular. This ratio is typically used in 640 x 480px images for smaller screen sizes or placements, or could be up to 2048 x 1536px for full-screen takeovers.
1.59:1 Landscape Ratio. Typically used and supported throughout different social media platforms, landscape ratios are also popular for ‘featured images’ for blog posts and other content. Recommended minimum of 1080 px in width.
Favicon files should be .ico or .png and should be a 1:1 ratio (square) with a minimum size of 16x16 px up to 32x32 px.
If you’re using your site's logo in the top nav bar we recommend your logo image size to be:
Horizontal Logos: ratio of 3:2 or 250 x 100px
Square Logos: ratio of 1:1 or 160 x 160px
Your hero image will likely be a ratio of 16:9 if you intend on using the entire height of the browser. In this ratio, your image width will likely range from 1500px (absolute minimum) to 2560px (maximum recommended). We recommend going with 1920px wide as it is the most common browser width in North America.
As page load time is a key factor in Google’s Core Web Vitals algorithm, you’ll want to make sure that your largest image file size is no greater than 20 MB.
Boilerplate
JS
The functionality / behavior of a webpage
Responsive design

Design for mobile first: With approximately 59 percent of overall web traffic coming from mobile devices, it makes sense to favor designing for mobile screens. Prioritizing design for mobile devices also ensures that key constraints are tackled early. However, having less space is more challenging; it compels designers to remove anything that isn’t necessary. Once you’re happy with the mobile layout, you can add and adjust for larger screens
Use relative units: Using relative units, such as em, allows the media queries to respond appropriately when people zoom in on the webpage. Check out this article by Brad Frost for some background on using relative units within media queries
Avoid breakpoints that push devices into much smaller or larger ranges: One thing you‘ll notice about the default breakpoints chosen by CSS frameworks is that their cutoff for tablet-sized devices is around 768px. This is because older generations of iPad (now iPad mini) have a resolution of 768px x 1024px. If you have breakpoints with broader ranges, be mindful of these cutoff points. Usually, you’ll see 768px and above as the medium breakpoint category. If you’re basing breakpoints on content, this is less of a concern
Some emerging techniques allow elements to scale proportionally and fluidly without using breakpoints. Sometimes this is referred to as fluid design.
I use clamps for everything that changes from mobile to desktop and I use rem values for everything Except borders and 1px wide lines or dividers.
If something has a margin of like 16px on mobile and 32px on desktop, I set a clamp for that. Font sizes as well. Paddings etc. minimizes the number of media queries you have to write.
Use flexbox for layouts. No need for the 12 column grid anymore. Just do flexbox. Set a flex direction column on mobile and change flex direction to row on tablet or desktop, whichever it needs to be. Use the gap property to set the gap between the elements.
Every section is wrapped in a section tag with 16px padding left and right and 60px-100px clamps top and bottom. This creates the optimal spacing between the top and bottoms and sides of the section. Then each section tag has a container class inside of it that’s set to width 100% and max width 1280px. This makes it responsive. Everything else set inside of it will have a width 100% and a max width to stop at. This is the core concept of mobile first responsive designs. No fixed width values. You use percentages and max widths so elements grow with the screen size and stop at their maximum width that’s in the design. By using this methodology and clamps, that’s like most of it. At most you need 1 Media query to reset the flexbox orientations and that’s it. All of the core styles and measurement values happen in the mobile first code, and as you go up in media queries you’re just changing arrangements of flexboxes. When you have to make edits, it’s all in the mobile code in one spot. Nice and easy. I like to put my mobile code in a 0rem media query so I can collapse it and add the other media queries for that section below it and collapse that too so my css is clean and organized and all the sections css is in one chunk. So much easier to edit code and work.
Think of everything in terms of a flexbox and sometimes you have to use flexbox to set a base arrangement and then use margins on elements to push them away from the flexbox edges to match the design arrangements. Like if you have a container and the two elements inside it as spaced apart so they are in opposite ends of the container ( justify-content: space-between) but you notice the left element is actually 50px away from the left edge of the container in the figma design. Well you just use the space-between property to push them to the left and right sides of the container and add margin left of 50px to the left element to push it away from the container edge just like in the design. That’s how you use flexbox efficiently. Create your arrangement, and use margins and paddings to do fine tuning inside of them.
When to Use CSS for Animations:
CSS isoften the best choice for basic animations like hover effects, transitions, and small, non-interactive animations.
CSS animations are generally smoother and more efficient, making them ideal for performance-critical scenarios.
And when you're designing responsive websites, CSS animations adapt to different screen sizes seamlessly.
When to Use JavaScript for Animations:
On the other hand, when you need to create intricate animations with dynamic elements, JavaScript provides the necessary flexibility and control.
Also, if your animations need to respond to user interactions, JavaScript animations should be your go-to option.
JavaScript is also essential for creating interactive charts and graphs for data-driven animations.
