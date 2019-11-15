
var i = 0
var j = 0

var user = "Frank" //will use ajax to change this when entering the page
var post = 1 //will change this 


var thumbimages = 
[
"assets/svg/thumbs-up.png",
"assets/svg/blue-thumb.png"
]
var ximages = 
[
    "assets/png/xmark.png",
    "assets/png/xmarkred.png"

]
var qimages = 
[
    "assets/png/qmark.png",
    "assets/png/qmarkorange.png",  
]

window.onload = function startup()
{
    //will use ajax to fill these values
    this.generatePost(1,200,"Frank","New Post","Ok",[])
}

function generatePost(postId, points, userId,title,description)
{
    var rank = "bronze"
    if(points > 200 )
    {
        rank = "silver"
    }
    if(points > 500)
    {
        rank = "plat"
    }
    if(points > 900)
    {
        rank = "gold"
    }
    if(points > 1300)
    {
        rank = "gold"
    }
    if(points > 1500)
    {
        rank = "elite"
    }
    let childEl = document.createElement("card"); //creates a new card
    var name = "discussion-card"
    //details tag not supported by IE
    childEl.setAttribute("class", "card mb-2")
    childEl.setAttribute("id", postId)
    childEl.innerHTML = 
        "<div id='"
          + postId +
        "' > <div class='card-header' style='padding-top: 20px; outline:soild;'> <img class='card-img-top' src='assets/png/"+rank+".png' alt='Card image' style='width: 3%;'> " 
        + userId + 
        " <div class='card-img text-center'> <h1 style='text-decoration:underline;'>" 
        + title + 
        "</h1> <div class='content'><p>" 
        + description + 
        " </p></div> </div> </div> <div> <img alt='' id = 'thumb"+postId+"'class='ml-auto' src='assets/svg/thumbs-up.png' style='max-height:2%; max-width:2%;' onclick='changeThumbImage( "+postId+") ' style='width: 2%; padding-left:9px; ' id='thumb'> <img id='xmark" + postId + "' onclick ='changeXImage("+postId+")'src='assets/png/xmark.png' style='max-height:3%; max-width:2.5%;'><img id='qmark" + postId + "' onclick ='changeQImage("+postId+")'src='assets/png/qmark.png' style='max-height:3%; max-width:3%;'></div> </div> </div> </div> <div> <strong> <span> Comments </span></strong> </div>"
    document.getElementById("discussion-post").appendChild(childEl);
    generateComment(postId,userId,"hello hello")

}
function generateComment(postId, userId, content)
{
    let parent = document.getElementById("discussion-post")
    var comment = document.createElement("card")
    comment.innerHTML = "<div class='card'>" + userId+ ": " + content +"</div>"
    console.log(comment)
    parent.appendChild(comment)
    console.log(parent)


}
function getComment()
{
    var parent = document.getElementById("comment-input").value 
    document.getElementById("comment-input").value = ""
    return parent
}
function getPostId()
{
    return post
}
function getUser()
{
    return user
}
function changeThumbImage(id) 
{

    i = i + 1;
   // var inital = dposts.posts[id].likes
    thumbid = "thumb" + id
    document.getElementById(thumbid).src = thumbimages[i];
    if (i > thumbimages.length -1)
    {
        i = 0;
        document.getElementById(thumbid).src = thumbimages[i];
       // dposts.posts[id].likes = dposts.posts[id].likes- 2
    }
    //dposts.posts[id].likes++
}
function changeXImage(id)
{
    i = i + 1
    xid = "xmark" + id
    document.getElementById(xid).src = ximages[i];
    if(i > ximages.length - 1)
    {
        i = 0;
        document.getElementById(xid).src = ximages[i];
    }
}
function changeQImage(id)
{
    i = i + 1
    qid = "qmark" + id
    document.getElementById(qid).src = qimages[i];
    if(i > qimages.length - 1)
    {
        i = 0;
        document.getElementById(qid).src = qimages[i];
    }
}

