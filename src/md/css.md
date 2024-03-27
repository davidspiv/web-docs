# CSS

## Overview

The appearance / presentation of a web page. Stylesheet language used to selectively style HTML elements.

**Statement**: Building block of CSS. Consists of “At-rule”, “Ruleset”, and “Nested-Statement” types

**Ruleset**: A selector list and an associated list of conditions

**Basic Ruleset Template**

```
Selector{property:“value”; property:“value”; property:…}
```

## Modules

## Properties

- Property: Reference a style or behavior of an HTML element
- Value: An expression and a value type limited by the property
- Declaration: The key-value pair of a CSS property and its value

## Selectors

- Selector: The HTML element name at the start of the ruleset. It defines the element(s) to be styled
- Never applying CSS to individual elements (#id).
- Never applying CSS to tags, except for the general reset.
- As consequence of ‘1’ and ‘2’, CSS is applied only to classes.
- Never using compound selectors (like “div > p”).
- There are three kinds of CSS classes: molecular, submolecular and atomic.
- Generally, a molecular class contains many declarations. A molecular class must not override another molecular class; complementing is OK.
- Atomic classes exist to override details of the molecular classes. And have universal nomenclature - like “w30pc” always means “width: 30%;”.
- An atomic class must not override another atomic class; complementing is OK.
  Molecular classes must start with a hyphen; atomic classes must not.
- Submolecular classes are intermediary between both. They are like a small molecular class that exists to override a true molecular class.
- A submolecular class must not override another submolecular class; complementing is OK.

## Combinators

## Pseudo-classes

## Pseudo-elements

## At-rules

- At-rule: Conveys meta-data, conditional, information, or descriptive information.

## Functions

## Types

## Layout

**Breakpoints**

```
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
```

**Common Aspect Ratios**

- 1:1 Square. Most commonly sized 1080 x 1080px, square images are great for in-text images, sidebar ads, and Instagram.
- 16:9 Panoramic. This is your common website Hero image ratio for standard widescreen sizes. It’s often sized 1920 x 1080px and is used in presentations, widescreen TVs, and landscape images.
- 3:2 Rectangle. Often used in print or on phones, sized 1080 x 720px.
- 4:3 Rectangle. Slightly taller than the 3:2, the 4:3 rectangle was the most common ratio for screen sizes before widescreen monitors became popular. This ratio is typically used in 640 x 480px images for smaller screen sizes or placements, or could be up to 2048 x 1536px for full-screen takeovers.
- 1.59:1 Landscape Ratio. Typically used and supported throughout different social media platforms, landscape ratios are also popular for ‘featured images’ for blog posts and other content. Recommended minimum of 1080 px in width.

Favicon files should be .ico or .png and should be a 1:1 ratio (square) with a minimum size of 16x16 px up to 32x32 px.

If you’re using your site's logo in the top nav bar we recommend your logo image size to be:

- Horizontal Logos: ratio of 3:2 or 250 x 100px
- Square Logos: ratio of 1:1 or 160 x 160px

Your hero image will likely be a ratio of 16:9 if you intend on using the entire height of the browser. In this ratio, your image width will likely range from 1500px (absolute minimum) to 2560px (maximum recommended). We recommend going with 1920px wide as it is the most common browser width in North America.
As page load time is a key factor in Google’s Core Web Vitals algorithm, you’ll want to make sure that your largest image file size is no greater than 20 MB.

## Boilerplate
