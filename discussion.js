var dposts = {
    "posts": [
      {
        "postId":1,
        "author": "Tom L",
        "userId":2,
        "title": "Help generating random numbers",
        "post-detail": "I have been having trouble with my task on Project 1, I am trying to generate random numbers in Javascript and I can't seem to figure it out.",
        "likes": 4,
        "rank":"bronze",
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
        "rank": "silver",
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
var x = 1 //for hiding discussion sections
var sectionlen = 0
const maxSectionLen = 5
var userId = 0 //will use getUser from database


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

var sections = ["General", "Brainstorming"]






window.onload = function startup()
{
    populateDiscussionSections()
   // loadPosts("General")//which section the original posts go
    this.generatePost("Brainstorming", 1000, "Frank","Title", "Description", 10,[])
    this.generatePost("General",2000, "Bruh","Analytics", "Something about something", 20,["Hello"])
}

         





function populateDiscussionSections()
{
    var parent = document.getElementById("d-navbar")
    var discussionBoard = document.getElementById("d-content")
    for(var i = 0; i < sections.length; i++)
    {
        var el = document.createElement('li')
        var board = document.createElement("div")
        board.setAttribute("id", sections[i])
        el.setAttribute("class", "nav-item")
        board.setAttribute("id", sections[i])
        //board.className = "tab-pane fade"]
        //board.className = "tab-pane fade active show"
        if(i == 0)
        {
            board.className = "tab-pane fade active show"
            el.innerHTML = "<a class='nav-link active' href='#"+sections[i]+"' data-toggle='tab'>"+ sections[i] +"</a>"
            parent.appendChild(el)
            discussionBoard.appendChild(board)
            sectionlen++
        }
        else{
            board.className = "tab-pane fade"
            el.innerHTML = "<a class='nav-link' href='#"+sections[i]+"' data-toggle='tab'>"+ sections[i] +"</a>"
            parent.appendChild(el)
            discussionBoard.appendChild(board)
            sectionlen++
        }
       
   
    } 


}

function loadPosts(divSection) //for loading from json object
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
        childEl.innerHTML = "<div id="+ name + "' > <div class='card-header' style='padding-top: 20px; outline:soild;'> <img class='card-img-top' src='assets/png/"+dposts.posts[i].rank+".png' alt='Card image' style='width: 3%;'> "+ dposts.posts[i].author + " <div class='card-img text-center'> <h1 style='text-decoration:underline;'>" + dposts.posts[i].title + "</h1> <div class='content'><p>" + dposts.posts[i]["post-detail"] + " </p></div> </div> </div> <div> <small></small> <img alt='' id = 'thumb"+j+"'class='ml-auto' src='assets/svg/thumbs-up.png' style='max-height:2%; max-width:2%;' onclick='changeThumbImage( "+j+");  ' style='width: 2%; padding-left:9px; '> <img id='xmark" + j + "' onclick ='changeXImage("+j+")'src='assets/png/xmark.png' style='max-height:3%; max-width:2.5%;'><img id='qmark" + j + "' onclick ='changeQImage("+j+")'src='assets/png/qmark.png' style='max-height:3%; max-width:3%;'><details style='padding-left:9px; text-decoration:underline;'><summary style='text-decoration:underline;'> Comments </summary><ul id='commentContent" + j+ "'>" + comments +"</ul> <div ><input id='comment-input" + j + "' type='text' placeholder='Enter Comment'><button id='commentButton' type='button' class='btn btn-primary' onclick='addComment("+j+")'> + </button></div></ul> </details></div> </div> </div> </div>"
        console.log(childEl)
        document.getElementById(divSection).appendChild(childEl);
        j = j + 1
   
         
    }
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

function newPost()
//code to add a new post
{
    let childEl = document.createElement("card"); //creates a new card
    var name = "discussion-card"+j
    var section = getSectionName()
    //details tag not supported by IE
    childEl.setAttribute("class", "card mb-2")
    childEl.setAttribute("id", name)
    //childEl.appendChild(cardBody)
    childEl.innerHTML = "<div id='discussion-card"+j + "' > <div class='card-header' style='padding-top: 20px; outline:soild;'> <img class='card-img-top' src='assets/png/bronze.png' alt='Card image' style='width: 3%;'> " + userId + " <div class='card-img text-center'> <h1 style='text-decoration:underline;'><a href='postPage.html'>" + getPostTitle() + "</a></h1> <div class='content'><p>" +getPostDetail() + " </p></div> </div> </div> <div> <img alt='' id = 'thumb"+j+"'class='ml-auto' src='assets/svg/thumbs-up.png' style='max-height:2%; max-width:2%;' onclick='changeThumbImage( "+j+") ' style='width: 2%; padding-left:9px; ' id='thumb'> <img id='xmark" + j + "' onclick ='changeXImage("+j+")'src='assets/png/xmark.png' style='max-height:3%; max-width:2.5%;'><img id='qmark" + j + "' onclick ='changeQImage("+j+")'src='assets/png/qmark.png' style='max-height:3%; max-width:3%;'></div> <button onclick='removePost("+j+")'>Remove Post</button> </div> </div> </div>"
    dposts.posts.push({"postId": j, "author": userId, "usersId":userId,"title": getPostTitle(),"post-detail":getPostDetail(),"likes":0,"comments":[]})
    if(sections.includes(section) == false)
    {
        alert("must enter a section that exists!!")
        return
    }
    document.getElementById(section).appendChild(childEl);
    alert("You just recieved 50 points for making a new post!")
    j = j + 1
}
function generatePost(divSection, points, userId,title,description,postId,comments)
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
    var name = "discussion-card"+j
    //details tag not supported by IE
    childEl.setAttribute("class", "card mb-2")
    childEl.setAttribute("id", postId)
    childEl.innerHTML = 
        "<div id='"
          + postId +
        "' > <div class='card-header' style='padding-top: 20px; outline:soild;'> <img class='card-img-top' src='assets/png/"+rank+".png' alt='Card image' style='width: 3%;'> " 
        + userId + 
        " <div class='card-img text-center'> <h1 style='text-decoration:underline;'><a href='postPage.html'>" 
        + title + 
        "</a></h1> <div class='content'><p>" 
        + description + 
        " </p></div> </div> </div> <div> <img alt='' id = 'thumb"+j+"'class='ml-auto' src='assets/svg/thumbs-up.png' style='max-height:2%; max-width:2%;' onclick='changeThumbImage( "+j+") ' style='width: 2%; padding-left:9px; ' id='thumb'> <img id='xmark" + j + "' onclick ='changeXImage("+j+")'src='assets/png/xmark.png' style='max-height:3%; max-width:2.5%;'><img id='qmark" + j + "' onclick ='changeQImage("+j+")'src='assets/png/qmark.png' style='max-height:3%; max-width:3%;'></div> </div> </div> </div>"
    document.getElementById(divSection).appendChild(childEl);
    j = j + 1
}
function addDiscussionSection()
{

    var section = document.getElementById("section").value;
    var parent = document.getElementById("d-navbar")
    var el = document.createElement('li')
    var discussionBoard = document.getElementById("d-content")
    var board = document.createElement("div")
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
        board.setAttribute("id", section)
        el.setAttribute("class", "nav-item")
        board.className = "tab-pane fade"
        
        el.innerHTML = "<a class='nav-link'  href='#"+section+"' data-toggle='tab'>"+ section +"</a>"
        sections.push(section)
        parent.appendChild(el)
        discussionBoard.appendChild(board)
        sectionlen++
    }
}
function addComment(id)
{
    let name = "comment-input" + id
    var commentEl = document.getElementById(name).value
    document.getElementById(name).value = ""
    let postcomments = "commentContent" + id
    console.log(postcomments)
    dposts.posts[id].comments.push({"author": userId, "comment": commentEl})
    var commentSection = document.getElementById(postcomments) 
    let comment = userId+": " + commentEl + "\n"
    console.log(commentSection)
    $("#"+postcomments).append(comment + "<br></br>")
    console.log(dposts.posts[id].comments)
  
}
function removePost(id)
{
    let name = "discussion-card" + id
    var el = document.getElementById(name)
    dposts.posts.pop()
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
    document.getElementById("section-post").value="";

}
function getSectionName()
{
    return document.getElementById("section-post").value 

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
