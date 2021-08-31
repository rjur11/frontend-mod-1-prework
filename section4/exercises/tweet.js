/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLikes(num) {
    this.numberOfLikes += num;
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }

};
var tweet1 = new Tweet("Billy", "My first tweet!", "12:05 PM", 10, ["Nice!"]);
var tweet2 = new Tweet("Linus", "Meow!", "2:03 AM", 145, ["Meow!", "Cute!"]);
var tweet3 = new Tweet("Porky", "That's all folks!", "5:00 PM", 2, ["Hi Porky!", "What's up Doc?"]);
var tweet4 = new Tweet("Bugs", "I love Carrots", "4:33 PM", 0, []);
console.log(tweet1, tweet2, tweet3, tweet4);
tweet4.addLikes(5);
tweet4.addComment("Lookin' good, Bugs!");
console.log(tweet4);
