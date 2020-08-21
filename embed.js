var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/signup', { useNewUrlParser: true });
var postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    comment: { type: String, required: true }
});
var Post = mongoose.model('Post', postSchema);
var UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    Password: { type: String, required: true },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

var User = mongoose.model("User", UserSchema);

/*User.create({
    email: " pragatigupta476@gmail.com",
    Password: "Sambalpur"
});*/

/*Post.create({
    title: "How to Cook a Special Burger",
    comment: " Really A good Burger"
}, function (err, post) {
    User.findOne({
        email: ' pragatigupta476@gmail.com'
    }, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            data.posts.push(post);
            data.save()
                .then((data1) => {
                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });

});*/

User.findOne({ email: " pragatigupta476@gmail.com" }).populate("posts").exec(function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})
