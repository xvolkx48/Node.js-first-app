var phrases = require('./ru');

function Index(name) {
    this.name = name;
}

Index.prototype.hello = function(who) {
    console.log(phrases.Hello+", " +who.name);
};

exports.User= Index;