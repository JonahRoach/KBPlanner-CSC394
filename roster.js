var roster = 
{
   "students":
   [
       {
           "name": "First Last1",
           "email" : "test@gmail.com",
           "groupNum" : 1,
           "projectName": "Project Name",
           "points": 2000
       },
       {
        "name": "First Last2",
        "email" : "test@gmail.com",
        "groupNum" : 1,
        "projectName": "Project Name",
        "points": 2000
    },
    {
        "name": "First Last3",
        "email" : "test@gmail.com",
        "groupNum" : 1,
        "projectName": "Project Name",
        "points": 2000
    },
    {
        "name": "First Last4",
        "email" : "test@gmail.com",
        "groupNum" : 1,
        "projectName": "Project Name",
        "points": 2000
    },
    {
        "name": "First Last5",
        "email" : "test@gmail.com",
        "groupNum" : 1,
        "projectName": "Project Name",
        "points": 2000
    },
    {
        "name": "First Last6",
        "email" : "test@gmail.com",
        "groupNum" : 1,
        "projectName": "Project Name",
        "points": 2000
    }
   ],
}

var j = 0; //table element ID
    
window.onload = function startup()
{
    populateRoster()
}

function populateRoster()
{
    let parent = document.getElementById("tableContent")
    for(var i = 0; i < roster.students.length; i ++)
    {
        var el = document.createElement("tr")
        el.setAttribute("id", "tableEl"+i)
        el.setAttribute("contenteditable", "false")
        el.innerHTML= "<td>" + roster.students[i].name + "</td> <td>" + roster.students[i].email + "</td> <td>" + roster.students[i].groupNum + "</td> <td>" + roster.students[i].projectName + "</td><td>" + roster.students[i].points + "</td>";
        parent.appendChild(el)
        j++
    }

}
function removeFromTable(id)
{
    var el = document.getElementById("tableEl"+id)
    console.log(el)
    el.remove()
    roster.students.pop(id)
}
function addStudentToRoster()
{
    let parent = document.getElementById("tableContent")
    var name = document.getElementById("studentName").value
    var email = document.getElementById("studentEmail").value
    var group = document.getElementById("groupNum").value
    var project = document.getElementById("projectName").value
    roster.students.push({"name":name, "email":email, "groupNum": group, "projectName":project,"points":0})
    
    var el = document.createElement("tr")
    el.setAttribute("id", "tableEl"+j)

    el.innerHTML= "<td>" + name + "</td> <td>" + email + "</td> <td>" + group + "</td> <td>" + project + "</td><td>" + "0" + "</td>";
    parent.appendChild(el)
    // console.log(parent)
    // console.log(el)
}