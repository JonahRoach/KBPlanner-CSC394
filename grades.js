var roster = 
{
   "students":
   [
       {
           "name": "First Last1",
           "groupNum" : 1,
           "projectName": "Project Name",
           "grades": "A"
       },
       {
        "name": "First Last2",
        "groupNum" : 1,
        "projectName": "Project Name",
        "grades": "A"
    },
    {
        "name": "First Last3",
        "groupNum" : 1,
        "projectName": "Project Name",
        "grades": "A"
    },
    {
        "name": "First Last4",
        "groupNum" : 1,
        "projectName": "Project Name",
        "grades": "A"
    },
    {
        "name": "First Last5",
        "groupNum" : 1,
        "projectName": "Project Name",
        "grades": "A"
    },
    {
        "name": "First Last6",
        "groupNum" : 1,
        "projectName": "Project Name",
        "grades": "A"
    }
   ]
}

var j = 0; //table element ID

$("#button").click(function() {  
        $("#box form").toggle("slow");
        return false;
    });

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
        var saveButton = document.createElement("button")
        saveButton.innerHTML = "Save"
        saveButton.setAttribute("onclick", "saveButton();")
        saveButton.setAttribute("contenteditable", "false")
        el.innerHTML= "<td>" + roster.students[i].name + "</td> <td>" + roster.students[i].groupNum + "</td> <td>" + roster.students[i].projectName + "</td><td contenteditable = 'true'>" + roster.students[i].grades +"</td>";
        parent.appendChild(el)
        el.append(saveButton)
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
    var group = document.getElementById("groupNum").value
    var project = document.getElementById("projectName").value
    var grades = document.getElementById("grades").value
    roster.students.push({"name":name, "email":email, "groupNum": group, "projectName":project,"grades":grades})
    
    var el = document.createElement("tr")
    el.setAttribute("id", "tableEl"+j)
    var saveButton = document.createElement("button")
    saveButton.innerHTML = "Save"
    saveButton.setAttribute("onclick", "saveButton();")
    saveButton.setAttribute("contenteditable", "false")

    el.innerHTML= "<td>" + name + "</td> <td>" + group + "</td> <td>" + project + "</td><td>" + grades + "</td>";
    parent.appendChild(el)
    el.append(saveButton)
    // console.log(parent)
    // console.log(el)

}
function saveButton()
{
    alert("Student changes have been saved")
}
