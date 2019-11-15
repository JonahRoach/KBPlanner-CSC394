function addGroup (grpnum){
    var selectStuGrp = document.getElementById('selectGroup');
    var gnum = "Group " + grpnum;
    selectStuGrp.options[selectStuGrp.options.length] = new Option(gnum, grpnum);
    //console.log("The option is added to the group " + grpnum);

}

function getGroupNumber(){
    var stuGroup = document.getElementById("studentGroupNumber").value;
    //console.log(stuGroup);
    addGroup(stuGroup);
}