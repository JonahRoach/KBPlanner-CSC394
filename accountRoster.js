
var roster = 
{
   "accounts":
   [
       {
           "fname": "First",
           "lname" : "last",
           "email" : "firstlast@email.com",
           "status": "Admin"
       },

       {
        "fname": "First",
        "lname" : "last",
        "email" : "firstlast@email.com",
        "status": "Admin"
    },

    {
        "fname": "First",
        "lname" : "last",
        "email" : "firstlast@email.com",
        "status": "Admin"
    },

    {
        "fname": "First",
        "lname" : "last",
        "email" : "firstlast@email.com",
        "status": "Admin"
    },

    {
        "fname": "First",
        "lname" : "last",
        "email" : "firstlast@email.com",
        "status": "Admin"
    },
], 
  
   "groups":
   [
       {
        "groupName" : "Test Name",

       } 

   ] 
}

var j = 0; //table element ID

$("#button").click(function() {  
        $("#box form").toggle("slow");
        return false;
    });


    function populateRoster()
    {
        let parent = document.getElementById("tableContent")
        for(var i = 0; i < roster.accounts.length; i ++)
        {
            var el = document.createElement("tr")
            el.setAttribute("id", "tableEl"+i)
            el.setAttribute("contenteditable", "true")
            var removeButton = document.createElement("button")
            var saveButton = document.createElement("button")
            saveButton.innerHTML = "Save"
            saveButton.setAttribute("onclick", "saveButton();")
            saveButton.setAttribute("contenteditable", "false")
            removeButton.setAttribute("onclick", "removeFromTable(" + i + ");")
            removeButton.setAttribute("contenteditable", "false")
            removeButton.innerHTML = "Remove" 
            el.innerHTML= "<td>" + roster.account[i].fname + "</td> <td>" + roster.accounts[i].last + "</td> <td>" + roster.accounts[i].email + "</td> <td>" + roster.accounts[i].status;
            parent.appendChild(el)
            el.append(removeButton)
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
        var email = document.getElementById("studentEmail").value
        var group = document.getElementById("groupNum").value
        var project = document.getElementById("projectName").value
        roster.students.push({"name":name, "email":email, "groupNum": group, "projectName":project,"points":0})
        
        var el = document.createElement("tr")
        el.setAttribute("id", "tableEl"+j)
        var removeButton = document.createElement("button")
        var saveButton = document.createElement("button")
        saveButton.innerHTML = "Save"
        saveButton.setAttribute("onclick", "saveButton();")
        saveButton.setAttribute("contenteditable", "false")
        removeButton.setAttribute("onclick", "removeFromTable(" + j + ");")
        removeButton.innerHTML = "Remove" 
    
        el.innerHTML= "<td>" + name + "</td> <td>" + email + "</td> <td>" + group + "</td> <td>" + project + "</td><td>" + "0" ;
        parent.appendChild(el)
        el.append(removeButton)
        el.append(saveButton)
        console.log(parent)
        console.log(el)
    
    }
    function saveButton()
    {
        alert("Student changes have been saved")
    }
    function showForm()
    {
        document.getElementById("box").hidden = false
    }
    function hideForm()
    {
        document.getElementById("box").hidden = true
    }
    
