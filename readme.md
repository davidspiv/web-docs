---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
i18n with plurals support and easy syntax.

You will like those projects!
---

1. hello
2. hello 2
3. heelo 3

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg "The Dojocat"

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
_here be dragons_
:::

---

Creating a blog with an Amazon EC2 instance, a local MySQL database, and an Express.js application using Docker and a CI/CD pipeline involves several steps. Here's a high-level to-do list to guide you through the process:

1. **Set Up Amazon EC2 Instance**: Launch an EC2 instance suitable for your blog's expected traffic and configure the security groups to allow HTTP, HTTPS, and SSH access.

2. **Install Necessary Software**: On your EC2 instance, install Docker, Node.js, and MySQL server.

3. **Configure MySQL Database**: Secure your MySQL installation, create a new database, and set up user permissions.

4. **Develop Your Blog Application**:

   - Create an Express.js application using HTML, CSS, and TypeScript.
   - Implement your application logic, including routes and middleware.
   - Use `multer` for file uploads, `cookie-session` for session management, and `express-validator` for validating user input.

5. **Containerize Your Application**:

   - Write a Dockerfile for your application, specifying the base image and commands to install dependencies and run your app.
   - Build a Docker image and test it locally.

6. **Transfer Docker Image to EC2**:

   - Push your Docker image to a container registry like Docker Hub or Amazon ECR.
   - Pull the image on your EC2 instance and run it as a container.

7. **Set Up a CI/CD Pipeline**:

   - Choose a CI/CD platform like Jenkins, GitHub Actions, or AWS CodePipeline.
   - Configure the pipeline to automate the build, test, and deployment process upon code changes.

8. **Configure Domain and SSL**:

   - Register a domain name and configure DNS settings to point to your EC2 instance.
   - Set up an SSL certificate for secure communication.

9. **Monitor and Maintain**:

   - Implement monitoring solutions like Amazon CloudWatch to track your application's performance.
   - Regularly update your application and server software to maintain security and performance.

10. **Backup and Disaster Recovery**:
    - Set up regular backups of your database and application files.
    - Plan for disaster recovery to ensure minimal downtime.

For an industry-standard approach, consider the following suggestions:

- **Use a Managed Database Service**: Instead of hosting MySQL on the EC2 instance, use Amazon RDS for a managed database solution that handles backups, patching, and scaling.
- **Leverage Serverless Technologies**: For a small blog, consider using AWS Lambda with Amazon API Gateway to reduce operational overhead and cost.
- **Implement a CDN**: Use Amazon CloudFront to distribute your content globally and improve load times for your readers.

This to-do list provides a comprehensive roadmap for setting up a modern, scalable blog platform using Amazon EC2 and industry-standard practices.

Source: Conversation with Bing, 3/16/2024
(1) Host a WordPress blog on Amazon Linux 2. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hosting-wordpress.html.
(2) Host a WordPress blog - Amazon Elastic Compute Cloud. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/tuts-wordpress.html.
(3) Hosting a Static Website on AWS Using EC2: A Step-by-Step Guide. https://medium.com/@samuelnnanna71/hosting-a-static-website-on-aws-using-ec2-a-step-by-step-guide-1fb3ded99796.
(4) Deploy and host an HTML Website on Amazon EC2 on AWS. https://medium.com/@iamafisu/deploy-and-host-an-html-website-on-amazon-ec2-on-aws-ebf5a6c5f37.
(5) Step-by-step guide: Creating an EC2 Instance to Host your website on .... https://dev.to/mikacodez/step-by-step-guide-creating-an-ec2-instance-to-host-your-website-on-aws-21ci.
(6) How to Create a CI/CD Pipeline for Amazon ECS with Jenkins and Docker .... https://medium.com/@anna.jeanette.b/how-to-create-a-ci-cd-pipeline-for-amazon-ecs-with-jenkins-and-docker-ba6a016683a1.
(7) Creating a CI/CD Pipeline for Deploying a Node.js App to AWS EC2 using .... https://medium.com/@chsherryy/creating-a-ci-cd-pipeline-for-deploying-a-node-js-app-using-github-actions-3e427e745f60.
(8) Deploying Node.js Apps to AWS EC2 with Docker - Stack Abuse. https://stackabuse.com/deploying-node-js-apps-to-aws-ec2-with-docker/.
(9) undefined. https://github.com/annajeanette/pipeline-demo.git.

OR**\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***
Creating a small blog using AWS Lambda and Amazon API Gateway involves several steps that leverage the serverless architecture of AWS. Here's a high-level overview of the process:

1. **Create a DynamoDB Table**: DynamoDB will serve as the database for your blog. Set up a table with a primary key that suits your data model, such as `blogId` for blog posts.

2. **Create Lambda Functions**: Write Lambda functions for various operations like creating, reading, updating, and deleting blog posts. These functions will interact with the DynamoDB table to manage your blog data.

3. **Set Up API Gateway**: Create an API using Amazon API Gateway that will serve as the front door for your blog. Define the HTTP methods and resources, and link them to the appropriate Lambda functions.

4. **Configure Lambda Permissions**: Ensure that your Lambda functions have the necessary permissions to access DynamoDB and other AWS services they might need.

5. **Deploy Your API**: Once your API is configured, deploy it to make it accessible over the internet.

6. **Build Your Front-End**: Develop the front-end of your blog using HTML, CSS, and JavaScript. You can host this on Amazon S3 and use Amazon CloudFront for distribution.

7. **Integrate Front-End with API**: Use JavaScript to call your API Gateway endpoints from the front-end, enabling dynamic interactions with your blog content.

8. **Set Up a Domain Name**: Register a domain name and configure it to point to your API Gateway endpoint for a professional URL for your blog.

9. **Implement Authentication (Optional)**: If you want to restrict who can create or edit blog posts, implement authentication using Amazon Cognito or another authentication service.

10. **Monitor and Optimize**: Use AWS CloudWatch to monitor your application's performance and optimize as necessary.

11. **Automate Deployment**: Set up a CI/CD pipeline using AWS CodePipeline or GitHub Actions to automate the deployment of your blog updates.

By following these steps, you can create a scalable, cost-effective blog that leverages the power of AWS's serverless services¹².

Source: Conversation with Bing, 3/16/2024
(1) Building a Serverless Blog with AWS Lambda and API Gateway. https://www.geeksforgeeks.org/building-a-serverless-blog-with-aws-lambda-and-api-gateway/.
(2) Beginners Guide To Building a Serverless Website with AWS Lambda and .... https://dev.to/arbythecoder/beginners-guide-to-building-a-serverless-website-with-aws-lambda-and-api-gateway-1o6n.
(3) Request-Response with Amazon API Gateway and AWS Lambda. https://community.aws/tutorials/application-integration-patterns/request-response-with-api-gateway.
(4) How to Setup a Basic Serverless REST API with AWS Lambda and API Gateway. https://www.freecodecamp.org/news/how-to-setup-a-basic-serverless-backend-with-aws-lambda-and-api-gateway/.
