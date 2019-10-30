


var images = 
[
"assets/svg/thumbs-up.png",
"assets/svg/blue-thumb.png"
]
var dposts = 
[

]

var comments =
[
    {post0: "discussion-card0", comments:["Here is a comment","Another comment"]},
    {post1: "discussion-card1", comments:["Hello mister man", "Wow such a cool comment"]}
]


var i = 0
var j = 0


var original = document.getElementById("discussion-card")


parentEl = document.getElementById('discussion-board');

function getElementImage()
{
   return 
}
function changeImage(id) 
{

    i = i + 1;
    thumbid = "thumb" + id
    document.getElementById(thumbid).src = images[i];
    if (i > images.length -1)
    {
        i = 0;
        document.getElementById(thumbid).src = images[i];
    }

}
function newPost()
//code to add a new post
{
    var childEl = document.createElement("card"); //creates a new card
    //details tag not supported by IE
    childEl.setAttribute("class", "card mb-2")
    childEl.innerHTML = "<div id='discussion-card"+j + "' style=' padding-bottom:30px'> <div class='card-header' style='padding-top: 20px;'> <img class='card-img-top' src='assets/svg/user-1633249.svg' alt='Card image' style='width: 3%;'> Name <div class='card-img text-center'> <a href='#' style='color:black;  outline-style: hidden; '>" + getPostTitle() + "</a> </div> </div> <div> <img alt='' class='ml-auto' src='assets/svg/thumbs-up.png' onclick='changeImage( "+j+") ' style='width: 2%; padding-left:9px; ' id='thumb'><details style='padding-left:9px;'><summary>Comments </summary><ul> comments will go here </ul </details></div> </div> </div> </div>"
    console.log(childEl)
    document.getElementById("discussion-board").appendChild(childEl);
    j = j + 1
}
function clearFormInput()
{
    document.getElementById("title-post").value= "";
    document.getElementById("post-detail").value="";

}
function getPostTitle()
{
    return document.getElementById("title-post").value 

}
function getPostDetail()
{
    return document.getElementById("post-detail").value
    
}
function openForm() 
{
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() 
{
    document.getElementById("myForm").style.display = "none";
}
//TO DO: getUser
