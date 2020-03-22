var parser = require('./scripts/parser.js')
var fs = require('fs')

module.exports = function(eleventyConfig){

  eleventyConfig.addPairedShortcode("hand", function(str){return parser.parse_hand(str)})
  eleventyConfig.addPairedShortcode("opts", function(str){return parser.parse_opts(str)})
  eleventyConfig.addPairedShortcode("escstr", function(str){return parser.escstr(str, "!")})
  eleventyConfig.addPairedShortcode("bid4", function(str){return parser.bid4(str)})
  eleventyConfig.addPairedShortcode("bid2", function(str){return parser.bid2(str)})
  eleventyConfig.addShortcode("url", function(disp, url){return `<a href=${url}>${disp}</a>`})

  const pluginTOC = require('eleventy-plugin-nesting-toc');
  eleventyConfig.addPlugin(pluginTOC);

  let markdownIt = require("markdown-it");
  const markdownItAnchor = require('markdown-it-anchor');
  let options = {
    html: true,
    breaks: false,
    linkify: true
  };
  eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, {}).disable('code'));

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        const content_404 = fs.readFileSync('_site/404.html');
        bs.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      }
    }
  });
  
  eleventyConfig.addPassthroughCopy('css')
  return {passthroughFileCopy: true}
}