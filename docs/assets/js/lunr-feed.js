var hostname = "http://localhost:4000";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Documentation - Configuration & First Steps",
      category: ["docs","help"],
      content: "Configuration\nAll configuration options are in the _config.yml file.\n\n\n    \n    Created by Hannah Sharp\n\n\nGeneral Settings\n\n  name: Your name.\n  job_title: Your job title.\n  email: Your email. There are two cases where email is used. First, if you entered the email and you’ve activated show_email option the end result will be a visible social email icon in the sidebar. The second use of your email is when you do not set your own avatar. In this case your email is used by the gravatar plugin to automatically fetch your gravatar.\n  description: Describe yourself with a couple of words.\n  avatar: Write down the full path to the avatar http://mysite.com/blog/assets/images/avatar.jpg. If you comment this row, “Steve” checks if you have an email and shows your gravatar if you have any.\n  favicon: Want a favicon? Enter the full path here. For example http://mysite.com/blog/assets/favicon.ico.\n  twitter_handler: Add your Twitter username without the @. It will be used for Twitter Cards. The default card type for “Steve” is Summary Card with Large Image.\n  analytics_code: Add your Google Analytics Tracking ID. Example ID: UA-XXXXXXX-2.\n  disqus: Add your website shortname from Disqus.\n\n\nImportant Note: Keep in mind that name, job_title, twitter_handler and some of the post specific variables are used as default meta data in some cases.\n\n\n\nSocial Accounts\n\n  social_networks: Here you can find the list of all the available social networks that you can currently use. Of course you can always add a new one by yourself or ask for it to be available in the next version of the theme. If you don’t want a specific social network to be seen, just leave the url value empty or delete the line.\n\n\nImportant: Do not change the names of the social networks!\n\nModules Settings\nOne thing to remember - 1 is on, 0 is off.\n\n\n  show_categories: If it is on and you’ve added categories in the post itself the categories will be visible. If it is off and you’ve added categories in the post they will be hidden. This option is helpful if you want to turn on/off categories for all your posts at once.\n  show_tags: If it is on and you’ve added tags in the post itself the tags will be visible. If it is off and you’ve added tags in the post they will be hidden.  This option is helpful if you want to turn on/off tags for all your posts at once.\n  show_email: If this is turned on and you’ve entered an email value in email, an email icon will appear next to your social media accounts and all your readers will be able to contact you.\n  show_rss: If this is turned on, a new RSS button will appear in the sidebar next to your social media accounts.\n  show_comments: If it is on and you’ve added comments: true in the post itself the comments will be visible. If it is off and you’ve added comments: true in the post the comments will be hidden. This option is helpful if you want to turn on/off comments for all your posts at once.\n  show_menu: If it is on the main menu will be visible.\n  fixed_sidebar: If it is on the sidebar will be fixed (sticky).\n\n\nDefaults\n\n  defaults: The only available option at the moment is whether to enable the comments automatically in the post or not. The default value is true.\n\n\nServing\nThese options are pretty important, so take a closer look. If you experience any problems with your paths you should check them here.\n\n\n  url: Enter your domain! Example: https://mysite.com\n  baseurl: The baseurl can remain empty if you’re not going to host your site in a subfolder. But if you want your site to be something like htttp://mysite.com/blog you should write down /blog here.\n\n\nIncludes\n\n\n  include: Force the inclusion of the pages directory.\n\n\nOutputting\n\n\n  permalink: By default your links will look like this http://mysite.com/categories/post-name.html. If you want a different permalink check Jekyll documentation.\n  category_dir: The default directory is categories, so for example if you go to random category index you will see something like this http://mysite.com/categories/category-name/postname.html.\n\n\nPagination\n\n  paginate: You should enter a number that stands for the number of posts per page.\n  paginate_path: The default path is /page:num/, so for example if you go to second page you will see something like this http://mysite.com/page2/.\n\n\nImportant Note: Pagination is currently working only on home page due to Jekyll limitations.\n\nConversion\n\n  markdown: Choose your Markdown renderer. Different Markdown renderers supported by Jekyll sometimes have extra options available. I suggest to stick with the default.\n  excerpt_separator: By default when you’re writing a post, you should add &lt;!--more--&gt; to define excerpt. You have three options - to leave it as is, to change the tag or to completely remove it but in this case you’ll always see the full content.\n\n\nAssets Settings\n\n  sass: Choose the path to all of yours SCSS partials and the compression method for the final file.\n\n\nIf you need extra help, just check out the official Jekyll documentation.\n\nAdditional Configuration\n\n\n\tHow to change your default theme color?\n\tJust go to /assets/partials/_vars.scss and change the color of the $primary-color variable.\n\t\n\tHow Facebook knows which image to use for sharing?\n\tBy default the script gets the first image in the post so take that in mind when you write a blog post.\n\n\nAdding Post\n\nThe next thing after you are done with the configuration file is to add your first post. You will need to have at least basic knowledge of HTML or Markdown.\n\nAll you need to do is to create a new file with name YYYY-MM-DD-my-first-post and .markdown or .md extension. Create it in the _posts folder. By default the name of the file is composed by date and title but you can overwrite these in the post’s front matter.\n\nIn the beginning of the every post you have a so called front matter block which contains some data about the post. Here is the short description of the options.\n\nlayout: The post layout.\n\ndate: Exact date when the post is published. The date is actually pretty important and I suggest you never change it. Specific date helps Jekyll to order correctly all the posts. Also, the date is used to generate a unique ID, so Disqus can always get the right comments for the right post, even when you change the title.\n\ntitle: Post’s title.\n\ndescription: Meta description used for better SEO.\n\ncomments: By default they are always true, but if you want to turn them off for a specific post just set this to false.\n\ncategory: List the categories in which you want your post to appear.\n\ntags: List your tags here.\n\nAdding Page\n\nAdding page is even simpler than adding post. Just create a sub-folder to the pages directory and inside that sub-folder create index.md file. The folder name is your page name. Every folder must contain index file. Pages are also using front matter to add information to your page.\n\nlayout: The page layout.\n\ntitle: Page’s title.\n\npermalink: This is important. If you do not enter the permalink, your url will be something like this http://example.com/_pages/about. Enter the permalink and get rid of /_pages/ part. Do not forget the trailing slash!\n\nThat’s it! Do not hesitate to ask if you have any questions. Also you can send me feature requests. There are some nice features that are planed for the upcoming versions. Happy blogging!\n",
      tags: ["documentation","steve","jekyll"],
      id: 0
    });
    

    index.add({
      title: "Installation",
      category: ["docs","help"],
      content: "\n    \n\n\nI assume you have already downloaded and installed Ruby. Here’s what you need to do next:\n\n\n  Run gem install jekyll bundler.\n  Copy the theme in your desired folder.\n  Enter into the folder by executing cd name-of-the-folder.\n  Run bundle install.\n  If you want to access and customize the theme, use bundle exec jekyll serve. This way it will be accessible on http://localhost:4000.\n  Upload the content of the compiled _site folder on your host server.\n\n",
      tags: ["installation","steve","jekyll"],
      id: 1
    });
    

    index.add({
      title: "What is Jekyll?",
      category: ["docs"],
      content: "Jekyll is a parsing engine bundled as a ruby gem used to build static websites from dynamic components such as templates, partials, liquid code, markdown, etc. Jekyll is known as “a simple, blog aware, static site generator”.\n\n\n\n\n\nWhat does Jekyll do?\n\nJekyll is installed as a ruby gem local computer. Once installed you can call jekyll serve in the terminal in a directory and provided that directory is setup in a way jekyll expects, it will do magic stuff like parse markdown/textile files, compute categories, tags, permalinks, and construct your pages from layout templates and partials.\n\nOnce parsed, Jekyll stores the result in a self-contained static _site folder. The intention here is that you can serve all contents in this folder statically from a plain static web-server.\n\nYou can think of Jekyll as a normalish dynamic blog but rather than parsing content, templates, and tags on each request, Jekyll does this once beforehand and caches the entire website in a folder for serving statically.\n\nSource: http://jekyllbootstrap.com/lessons/jekyll-introduction.html\n",
      tags: [],
      id: 2
    });
    

    index.add({
      title: "Sample Data",
      category: ["docs"],
      content: "Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment.\n\nHeadings\n\nHeading 1\n\nHeading 2\n\nHeading 3\n\nHeading 4\n\nHeading 5\n\nHeading 6\n\nBlockquote\n\n\n  No more databases, comment moderation, or pesky updates to install—just your content.\n\n\nUnordered List\n\n\n  Jekyll\n    \n      Nested Jekyll\n      Nested Ruby\n    \n  \n  Ruby\n  Markdown\n  Liquid\n\n\nOrdered List\n\n\n  Jekyll\n    \n      Nested Jekyll\n      Nested Ruby\n    \n  \n  Ruby\n  Markdown\n  Liquid\n\n\nLink\n\nThis is an example inline link.\n\nParagraph w/ strong, em, etc.\n\nThese are just a few of the available configuration options. Many configuration options can either be specified as flags on the command line, or alternatively (and more commonly) they can be specified in a _config.yml file at the root of the source directory. Jekyll will automatically use the options from this file when run. For example, if you place the following lines in your _config.yml file.\n\nImage\n\n\t\n\tPhoto by Rachel Davis.\n\n\nVideo\n\n\n\nDefault Code Block\n\nThis is code blog.\n\n\nStyled Code Block\n\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n#!/usr/bin/ruby\n$LOAD_PATH &lt;&lt; '.'\nrequire \"support\"\n\nclass Decade\ninclude Week\n   no_of_yrs=10\n   def no_of_months\n      puts Week::FIRST_DAY\n      number=10*12\n      puts number\n   end\nend\nd1=Decade.new\nputs Week::FIRST_DAY\nWeek.weeks_in_month\nWeek.weeks_in_year\nd1.no_of_months\n\nDefinition Lists\n\n\n    Definition Title\n    Definition Description\n\n\nParagraphs w/ Aligned Images\n\nThe Jekyll gem makes a jekyll executable available to you in your Terminal window. You can use this command in a number of ways.\n\n\n\t\n\tPhoto by Dustin Lee.\n\n\nThis site aims to be a comprehensive guide to Jekyll. We’ll cover topics such as getting your site up and running, creating and managing your content, customizing the way your site works and looks, deploying to various environments, and give you some advice on participating in the future development of Jekyll itself.\n\nJekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.\n\n\n\t\n\tPhoto by LoboStudio Hamburg.\n\n\nThroughout this guide there are a number of small-but-handy pieces of information that can make using Jekyll easier, more interesting, and less hazardous. Here’s what to look out for.\n\nIf you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.\n\nThe front matter is where Jekyll starts to get really cool. Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines.\n",
      tags: [],
      id: 3
    });
    


var store = [{
    "title": "Documentation - Configuration & First Steps",
    "link": "/docs/help/docmentation.html",
    "image": null,
    "date": "March 20, 2016",
    "category": ["docs","help"],
    "excerpt": "Configuration All configuration options are in the _config.yml file. Created by Hannah Sharp General Settings name: Your name. job_title: Your..."
},{
    "title": "Installation",
    "link": "/docs/help/installation.html",
    "image": null,
    "date": "March 16, 2016",
    "category": ["docs","help"],
    "excerpt": "I assume you have already downloaded and installed Ruby. Here’s what you need to do next: Run gem install jekyll..."
},{
    "title": "What is Jekyll?",
    "link": "/docs/what-is-jekyll.html",
    "image": null,
    "date": "March 15, 2016",
    "category": ["docs"],
    "excerpt": "Jekyll is a parsing engine bundled as a ruby gem used to build static websites from dynamic components such as..."
},{
    "title": "Sample Data",
    "link": "/docs/sample-data.html",
    "image": null,
    "date": "March 11, 2016",
    "category": ["docs"],
    "excerpt": "Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment. Headings Heading 1 Heading..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});