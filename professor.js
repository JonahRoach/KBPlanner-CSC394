function addGroup (grpnum){
    var selectStuGrp = document.getElementById('selectGroup');
    var gnum = "Group " + grpnum;
    selectStuGrp.options[selectStuGrp.options.length] = new Option(gnum, grpnum);

}

function getGroupNumber(){
    var stuGroup = document.getElementById("studentGroupNumber").value;
    addGroup(stuGroup);
}