


var images = 
[
"assets/svg/thumbs-up.png",
"assets/svg/blue-thumb.png"
]
var dposts = 
[

]

var sections = ["General", "Brainstorming"]

var allcomments =
[
    
]


var i = 0
var j = 0


var original = document.getElementById("discussion-card")


parentEl = document.getElementById('discussion-board');


window.onload = function populateDiscussionSections()
{
    var parent = document.getElementById("d-navbar")
    for(var i = 0; i < sections.length; i++)
    {
        var el = document.createElement('li')
        el.setAttribute("class", "nav-item")
        el.innerHTML = "<a class='nav-link' href=''>"+ sections[i] +"</a>"
        parent.appendChild(el)
    } 
    var sectionadd = document.createElement("li")
    sectionadd.setAttribute("class", "nav-item")
    sectionadd.innerHTML = "<input type='text' id='section' placeholder='Add New Section'> <button type='button' class='btn btn-primary' onclick='addDiscussionSection(); updateSections(); clearSectionInput();'> + </button> "
    parent.appendChild(sectionadd)


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
    var name = "discussion-card"+j
    //details tag not supported by IE
    childEl.setAttribute("class", "card mb-2")
    childEl.setAttribute("id", name)
    childEl.innerHTML = "<div id='discussion-card"+j + "' > <div class='card-header' style='padding-top: 20px; outline:soild;'> <img class='card-img-top' src='assets/svg/user-1633249.svg' alt='Card image' style='width: 3%;'> Name <div class='card-img text-center'> <h1>" + getPostTitle() + "</h1> <div class='content'><p>" +getPostDetail() + " </p></div> </div> </div> <div> <img alt='' id = 'thumb"+j+"'class='ml-auto' src='assets/svg/thumbs-up.png' style='max-height:2%; max-width:2%;' onclick='changeImage( "+j+") ' style='width: 2%; padding-left:9px; ' id='thumb'><details style='padding-left:9px;'><summary>Comments </summary><ul> comments will go here <div><input id='comment-input" + j + "' type='text' placeholder='Enter Comment'></div></ul </details></div> <button onclick='removePost("+j+")'>Remove Post</button> </div> </div> </div>"
    console.log(childEl)
    document.getElementById("discussion-board").appendChild(childEl);
    j = j + 1
}

function addDiscussionSection()
{
    var section = document.getElementById("section").value;
    sections.push(section)
    console.log(sections)
}
function updateSections()
{
    var parent = document.getElementById("d-navbar")
    var el = document.createElement('li')
    el.setAttribute("class", "nav-item")
    el.innerHTML = "<a class='nav-link' href=''>"+ sections.pop() +"</a>"
    parent.appendChild(el)
}
function addComment(id)
{
    let name = "comment-input" + id
    var comment = document.getElementById(name)
  
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
