var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data =[
        {
        name: "Clouds Rest",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/71/ff/2c/oloiden-camping-grounds.jpg", 
        description: "Bacon ipsum dolor amet anim laborum magna, frankfurter est sausage nulla bresaola spare ribs cillum aliquip aliqua beef shankle adipisicing. Sint andouille quis tenderloin pastrami beef ribs. T-bone filet mignon capicola nulla in tri-tip salami adipisicing tail non aliquip deserunt velit venison. Commodo sausage meatloaf exercitation kevin venison sint hamburger boudin spare ribs ut pariatur meatball laborum chuck."
        },
        {
        name: "Misty Mountains",
        image: "https://www.mountainphotography.com/images/xl/20140226-Bridge-of-Heaven-Dusk-Camp.jpg", 
        description: "Bacon ipsum dolor amet anim laborum magna, frankfurter est sausage nulla bresaola spare ribs cillum aliquip aliqua beef shankle adipisicing. Sint andouille quis tenderloin pastrami beef ribs. T-bone filet mignon capicola nulla in tri-tip salami adipisicing tail non aliquip deserunt velit venison. Commodo sausage meatloaf exercitation kevin venison sint hamburger boudin spare ribs ut pariatur meatball laborum chuck."
        },
        {
        name: "Rocky Valley",
        image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c80f31bb4040015d51db663252fbd30&w=1000&q=80", 
        description: "Bacon ipsum dolor amet anim laborum magna, frankfurter est sausage nulla bresaola spare ribs cillum aliquip aliqua beef shankle adipisicing. Sint andouille quis tenderloin pastrami beef ribs. T-bone filet mignon capicola nulla in tri-tip salami adipisicing tail non aliquip deserunt velit venison. Commodo sausage meatloaf exercitation kevin venison sint hamburger boudin spare ribs ut pariatur meatball laborum chuck."
        },
    ]

function seedDB(){
    Campground.remove({}, function(err){
    // if(err){
    //     console.log(err);
    // }
    // console.log("Removed campground");
    // //add a campgroud
    // data.forEach(function(seed){
    //      Campground.create(seed, function(err, campground){
    //          if(err){
    //              console.log(err);
    //          } else {
    //              console.log("Added a campground");
    //              //create a comment
    //              Comment.create(
    //                  {
    //                      text:"Place is great but I wish there was NO wifi",
    //                      author:"Homer"
                         
    //                  }, function(err,comment){
    //                      if(err){
    //                          console.log(err);
    //                      }else{
                         
    //                      campground.comments.push(comment);
    //                      campground.save();
    //                      console.log("Created new comment");
    //                      }
    //                  });
    //          }
    //      });
    // });
    
});

}

module.exports = seedDB;