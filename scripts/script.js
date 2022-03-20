/*
    Created: 18 Feb 2022
    by @EliasFaisal82 (fb)
*/
oncontextmenu = ()=>{
    return false;
}

onresize = ()=>{
    $(".main-container").style.height = innerHeight - $('.bar').offsetHeight + "px";
}
onresize();

onload = ()=>{
    loadMaps();
    hideLoading();
}

var loading_ani_interval = setInterval(loading_ani, 250);

//assigning events

//don't ask me what is this 
["semester-1", "semester-2"].forEach((e)=>{
    $("." + e).onclick = (ee)=>{
        let me = ee.target;
        let attrib = me.getAttribute('name');
        if (attrib == activeSemester) {
            return !1;
        }
        activeSemester = attrib;
        me.classList.remove("disabled");
        if (me.className.includes("semester-1")) {
            $('.semester-2').classList.add('disabled');
        } else {
            $('.semester-1').classList.add('disabled');
        }
        //clear everything
        $(".profession").selectedIndex = 0;
        $(".subjects").innerHTML = `<option default>المادة</option>`;
        $(".files").innerHTML = "";
    }
}
);

//professions list
$(".profession").onchange = (e)=>{
    let me = e.target;
    if (me.selectedIndex == 0) {
        $(".subjects").innerHTML = `<option default>المادة</option>`;
        $(".subjects").disabled = true;
    } else {
        //showing the available subjects in the ".subjects"
        showSubs();
    }
    $('.files').innerHTML = "";
}

//subjects list
$(".subjects").onchange = (e)=>{
    let me = e.target;
    if (me.selectedIndex == 0) {
        $('.files').innerHTML = "";
        return 0;
    }
    let subname = me.children[me.selectedIndex].getAttribute("name");
    appendFiles(activeSemester, subname);
}
