# RetroPage Contributing Guidelines

## Issues
You can open an issue to make suggestions or to report bugs. Please follow these guidelines when making issues:

* Please **do not** derail or troll issues. Please keep all discussion in issues on-topic.
* Please **do not** post comments that consist solely of "+1" or ":thumbsup:" Use reactions instead.
* If you suggest replacing a link to a site with a link to another site, please explain why the new site should be linked in place of the old one.
* Before making a Issue, please search previously-made issues to make sure that you're not making a duplicate issue.

## Pull Requests
You can contribute to RetroPage by making a Pull Request. Please make sure to follow these guidelines:

###"Source" Files

Many files have two versions: The normal version, and the "source" version. For example, the "source" file for retropage.js would be retropage-source.js. retropage.js would be the minified and compressed version, while the "source" version would be unminified and uncompressed. If the file that you're modifying has a "source" version, than editing that file should go like this:

First, commit an edit the source version with the changes you want to make. Then, copy the edited code for the "Source" version, and plug it into a minifier, Then make a commit to the original (or non-source) version with the minified output. 

###Other Pull Request Guidelines

* Before submitting a pull request, please ensure that even with the changes you made, when loading any page on RetroPage, the total size of that page and all of the resources it loads is under 80 kilobytes in size. The only exception to this is posts on the blog, which can be up to 800 KB.
* Please **do not** directly edit any files named "element.css"
* No external non self-hosted resources, such as those from a CDN.
##License
By contributing code to RetroPage, you agree that your code will be licensed under the [MIT Expat License](LICENSE).