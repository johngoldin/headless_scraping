## An Example Using a Headless Browswer to do Web Scraping  
This example will scrape a table on CEO compensaton from the **Chronicle of Higher Education**. the page
is creating using javascript (I think) so that a simple use of [rvest](https://github.com/hadley/rvest) 
doesn't yield any data. The solution is a "headless browser" that will do all the javascript
stuff and save the results as an html file.
