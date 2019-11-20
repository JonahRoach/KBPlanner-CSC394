
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

window.onload = function startup()
{
    this.populateRoster()
}
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
            el.innerHTML= "<td>" + roster.accounts[i].fname + "</td> <td>" + roster.accounts[i].lname + "</td> <td>" + roster.accounts[i].email + "</td> <td>" + roster.accounts[i].status;
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
    function addAccountToRoster()
    {
        let parent = document.getElementById("tableContent")
        var fname = document.getElementById("firstName").value
        var lname = document.getElementById("lastName").value
        var email = document.getElementById("accountEmail").value
        var priv = document.querySelector('#select').value; 
        roster.accounts.push({"fname":fname, "lname":lname, "email": email, "status":priv,"points":0})
        
        var el = document.createElement("tr")
        el.setAttribute("id", "tableEl"+j)
        var removeButton = document.createElement("button")
        var saveButton = document.createElement("button")
        saveButton.innerHTML = "Save"
        saveButton.setAttribute("onclick", "saveButton();")
        saveButton.setAttribute("contenteditable", "false")
        removeButton.setAttribute("onclick", "removeFromTable(" + j + ");")
        removeButton.innerHTML = "Remove" 
    
        el.innerHTML= "<td>" + fname + "</td> <td>" + lname+ "</td> <td>" + email + "</td> <td>" + priv ;
        parent.appendChild(el)
        el.append(removeButton)
        el.append(saveButton)
        document.getElementById("firstName").value =""
        document.getElementById("lastName").value =""
        document.getElementById("accountEmail").value=""
        document.querySelector('#select').value =  "Select Privilege Level"
        console.log(parent)
        console.log(el)
    
    }
    function getOption() { 
        selectElement =  
                document.querySelector('#select'); 
                  
        output = selectElement.value; 

        document.querySelector('.output').textContent 
                = output; 
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
    
