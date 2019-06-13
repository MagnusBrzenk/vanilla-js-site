const ghpages = require('gh-pages');

const GITHUB_USER_NAME = "MagnusBrzenk";
const GITHUB_REPO_NAME = "vanilla-js-site";

console.log("DEPLOYING...");

ghpages.publish('dist', function (err) {
  if (!!err) {
    console.log(`OH NO! STH WENT WRONG :(`);
    process.exit(1);
  }
  console.log(`DEPLOYED TO: https://${GITHUB_USER_NAME}.github.io/${GITHUB_REPO_NAME}/`);
})
