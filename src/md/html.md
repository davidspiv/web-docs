# HTML

## Overview

HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. It consists of a series of elements, which you use to enclose sections of content to make it appear or act a certain way.[1]

[MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

## Anatomy of an Element

**Element**: defined by opening tag, content, and a
closing tag.

`&lt;element-type&gt;content&lt;/element-type&gt;`

**Void Element**: defined by single tag which is typically used to insert/embed data in document.

`&lt;element-type attribute-property:“value”&gt`

HTML should be coded to represent the data that will be populated and not based on its default presentation styling. [2] Using semantic elements according to common practice will create a more accessible experience.

[Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

[Content Catagories](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories)

## Attributes

**Attribute**: additional information in the opening tag about the element that won't appear in the content

`Attribute-property:“value”`

Most attributes have two faces, the content attribute and IDL (Interface definition language) attribute. The content attribute is set via HTML. The IDL attribute is a Javascript property that reflects it's counterpart content attribute. There are no consistent rules regarding how IDL attributes transform their corresponding content attributes. However, these relationships are generally intuitive. [3]

[Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

[Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

## Escapes

| Literal | Ref    |
| ------- | ------ |
| &lt;    | &lt;   |
| &gt;    | &gt;   |
| "       | &quot; |
| '       | &apos; |
| &       | &amp;  |

## Boilerplate

`&lt;!DOCTYPE html&gt;` : Doctype is a historical artifact that needs to be included for everything else to work right. &lt;!DOCTYPE html&gt; is the shortest string of characters that counts as a valid doctype.

`&lt;html lang=“en”&gt;&lt;/html&gt;` : All the content on the page. It is sometimes known as the root element. Include the “lang” attribute to be indexed more effectively by search engines and useful to people with visual impairments.

`&lt;head&gt;&lt;/head&gt;` : Metadata about the document.

`&lt;meta charset="utf-8"&gt;` : This element represents metadata that cannot be represented by other HTML meta-related elements, like &lt;base&gt;, &lt;link&gt;, &lt;script&gt;, &lt;style&gt; or &lt;title&gt;. The “charset” attribute specifies the character encoding of the document as UTF-8, which includes most characters from the vast majority of human written languages. With this setting, the page can now handle any textual content it might contain.

`&lt;title&gt;&lt;/title&gt;`
: Title of the page, which is the title that appears in the browser tab the page is loaded in. The page title is also used to describe the page when it is bookmarked.

`&lt;body&gt;&lt;/body&gt;` : All the content for the document.

## References

[1] [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
[2] [MDN Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
[3] [MDN Content versus IDL attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#content_versus_idl_attributes)
