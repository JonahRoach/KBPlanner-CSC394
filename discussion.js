var dposts = {
    "posts": [
      {
        "postId":1,
        "author": "Tom L",
        "userId":2,
        "title": "Help generating random numbers",
        "post-detail": "I have been having trouble with my task on Project 1, I am trying to generate random numbers in Javascript and I can't seem to figure it out.",
        "likes": 4,
        "comments": [
          {
            "author": "Jim B",
            "userId": 3,
            "detail": "You have to use the function from the math library, Math.random()"
          },
          {
            "author": "Sarah T",
            "userId":4,
            "detail": "Yea what Jim said should work fine"
          }
        ]
      },
      {
        "postId":2,
        "author": "Cory O",
        "userId":5,
        "title": "Help setting PATH varible",
        "post-detail": "I need help setting up a PATH varible on my machine so that i can run python code on the command line",
        "likes": 2,
        "comments": [
          {
            "author": "Loren J",
            "userId":9,
            "detail": "Here is a link to solve this https://geek-university.com/python/add-python-to-the-windows-path/"
          }
        ]
      }
    ]
  }


var i = 0 //global for photos
var j = 0 //gobal for posts
var sectionlen = 0
const maxSectionLen = 5
var userId = 0

var images = 
[
"assets/svg/thumbs-up.png",
"assets/svg/blue-thumb.png"
]

var sections = ["General", "Brainstorming"]


var original = document.getElementById("discussion-card")


parentEl = document.getElementById('discussion-board');

window.onload = function startup()
{
    populateDiscussionSections()
    loadPosts()
}

function populateDiscussionSections()
{
    var parent = document.getElementById("d-navbar")
    for(var i = 0; i < sections.length; i++)
    {
        var el = document.createElement('li')
        el.setAttribute("class", "nav-item")
        el.innerHTML = "<a class='nav-link' href='#"+sections[i]+"' data-toggle='tab'>"+ sections[i] +"</a>"
        parent.appendChild(el)
        sectionlen++
    } 


}
function loadPosts()
{
    for ( var i = 0; i < dposts["posts"].length ; i++)
    {
        
        var comments =""
        for(var x = 0; x < dposts.posts[i].comments.length; x++) //get comments from posts
        {
            comments = comments + dposts.posts[i].comments[x].author + ": " + dposts.posts[i].comments[x].detail + "<br></br>"
        }
        console.log(comments)
        let childEl = document.createElement("card"); //creates a new card
        let name = "discussion-card"+j
        //details tag not supported by IE
        childEl.setAttribute("class", "card mb-2")
        childEl.setAttribute("id", name)
        childEl.innerHTML = "<div id="+ name + "' > <div class='card-header' style='padding-top: 20px; outline:soild;'> <img class='card-img-top' src='assets/svg/user-1633249.svg' alt='Card image' style='width: 3%;'>"+ dposts.posts[i].author + " <div class='card-img text-center'> <h1 style='text-decoration:underline;'>" + dposts.posts[i].title + "</h1> <div class='content'><p>" + dposts.posts[i]["post-detail"] + " </p></div> </div> </div> <div> <small>" + dposts.posts[i].likes+ "</small> <img alt='' id = 'thumb"+j+"'class='ml-auto' src='assets/svg/thumbs-up.png' style='max-height:2%; max-width:2%;' onclick='changeImage( "+j+");  ' style='width: 2%; padding-left:9px; ' id='thumb'><details style='padding-left:9px;'><summary>Comments </summary><ul>" + comments +" <div><input id='comment-input" + j + "' type='text' placeholder='Enter Comment'><button type='button' class='btn btn-primary' onclick='addComment("+j+")'> + </button></div></ul </details></div> </div> </div> </div>"
        console.log(childEl)
        document.getElementById("discussion-board").appendChild(childEl);
        j = j + 1   
    }
}

function changeImage(id) 
{

    i = i + 1;
    var inital = dposts.posts[id].likes
    thumbid = "thumb" + id
    document.getElementById(thumbid).src = images[i];
    if (i > images.length -1)
    {
        i = 0;
        document.getElementById(thumbid).src = images[i];
        dposts.posts[id].likes = dposts.posts[id].likes- 2
    }
    dposts.posts[id].likes++
    document.getElementById("discussion-card"+id)
}
function changeLikes()
{

}
function newPost()
//code to add a new post
{
    var childEl = document.createElement("card"); //creates a new card
    var name = "discussion-card"+j
    //details tag not supported by IE
    childEl.setAttribute("class", "card mb-2")
    childEl.setAttribute("id", name)
    childEl.innerHTML = "<div id='discussion-card"+j + "' > <div class='card-header' style='padding-top: 20px; outline:soild;'> <img class='card-img-top' src='assets/svg/user-1633249.svg' alt='Card image' style='width: 3%;'> Name <div class='card-img text-center'> <h1 style='text-decoration:underline;'>" + getPostTitle() + "</h1> <div class='content'><p>" +getPostDetail() + " </p></div> </div> </div> <div> <img alt='' id = 'thumb"+j+"'class='ml-auto' src='assets/svg/thumbs-up.png' style='max-height:2%; max-width:2%;' onclick='changeImage( "+j+") ' style='width: 2%; padding-left:9px; ' id='thumb'><details style='padding-left:9px;'><summary>Comments </summary><ul> comments will go here <div><input id='comment-input" + j + "' type='text' placeholder='Enter Comment'></div></ul </details></div> <button onclick='removePost("+j+")'>Remove Post</button> </div> </div> </div>"
    console.log(childEl)
    document.getElementById("discussion-board").appendChild(childEl);
    j = j + 1
}

function addDiscussionSection()
{

    var section = document.getElementById("section").value;
    var parent = document.getElementById("d-navbar")
    var el = document.createElement('li')
    el.setAttribute("class", "nav-item")
    if(sectionlen >= maxSectionLen)
    {
        console.log("too large")
        return
    }
    else if(section =="" || section == " ")
    {
        console.log("must enter something")
        return 
    }
    else
    {
    el.innerHTML = "<a class='nav-link'  href='#"+section+"' data-toggle='tab'>"+ section +"</a>"
    sections.push(section)
    sectionlen++
    parent.appendChild(el)
    console.log(sectionlen)
    }
}
function addComment(id)
{
    let name = "comment-input" + id
    var commentEl = document.getElementById(name).value

    dposts.posts[id].comments.push(commentEl)
    console.log(dposts.posts[id].comments)
  
}
function removePost(id)
{
    let name = "discussion-card" + id
    var el = document.getElementById(name)
    console.log(el)
    el.remove()
}
function clearSectionInput()
{
    document.getElementById("section").value="";
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
function getPostsFromDB()
{

}
//TO DO: getUser
