var aa = document.querySelector("#aa");
var bb = document.querySelector("#bb");
var cc = document.querySelector("#cc");
var dd = document.querySelector("#dd");
var ee = document.querySelector("#ee");

var cA = document.querySelector("#category-1");
var cB = document.querySelector("#category-2");
var cC = document.querySelector("#category-3");
var cD = document.querySelector("#category-4");
var cE = document.querySelector("#category-5");


window.addEventListener("load", function () {
    bb.style.color = "#85b2ff";
    cA.style.display = "block";

});
aa.addEventListener("click", function () {
    aa.style.color = "#85b2ff";
    bb.style.color = "white" ;
    cc.style.color = "white";
    dd.style.color = "white";
    ee.style.color = "white";

    cE.style.display = "block";
    cA.style.display = "none";
    cB.style.display = "none";
    cC.style.display = "none";
    cD.style.display = "none";
});

bb.addEventListener("click", function () {
    aa.style.color = "white";
    bb.style.color = "#85b2ff" ;
    cc.style.color = "white";
    dd.style.color = "white";
    ee.style.color = "white";

    cE.style.display = "none";
    cA.style.display = "block";
    cB.style.display = "none";
    cC.style.display = "none";
    cD.style.display = "none";
});

cc.addEventListener("click", function () {
    aa.style.color = "white";
    bb.style.color = "white" ;
    cc.style.color = "#85b2ff";
    dd.style.color = "white";
    ee.style.color = "white";

    cE.style.display = "none";
    cA.style.display = "none";
    cB.style.display = "block";
    cC.style.display = "none";
    cD.style.display = "none";
});

dd.addEventListener("click", function () {
    aa.style.color = "white";
    bb.style.color = "white" ;
    cc.style.color = "white";
    dd.style.color = "#85b2ff";
    ee.style.color = "white";

    cE.style.display = "none";
    cA.style.display = "none";
    cB.style.display = "none";
    cC.style.display = "block";
    cD.style.display = "none";
});

ee.addEventListener("click", function () {
    aa.style.color = "white";
    bb.style.color = "white" ;
    cc.style.color = "white";
    dd.style.color = "white";
    ee.style.color = "#85b2ff";

    cE.style.display = "none";
    cA.style.display = "none";
    cB.style.display = "none";
    cC.style.display = "none";
    cD.style.display = "block";
});



/* For tabs */
var tab1 = document.querySelector("#tab1");
var tab2 = document.querySelector("#tab2");
var tab3 = document.querySelector("#tab3");
var tab4 = document.querySelector("#tab4");
var tab5 = document.querySelector("#tab5");


var tA = document.querySelector("#total-tab");
var tB = document.querySelector("#graded-tab");
var tC = document.querySelector("#ungraded-tab");
var tD = document.querySelector("#submitted-tab");
var tE = document.querySelector("#upcoming-tab");


window.addEventListener("load", function () {
    tab1.style.backgroundColor = "white";
    tab1.style.color = "#054ea4";

});

tab1.addEventListener("click", function () {
    tab1.style.backgroundColor = "white";
    tab1.style.color = "#054ea4";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    tA.style.display = "block";
    tB.style.display = "none";
    tC.style.display = "none";
    tD.style.display = "none";
    tE.style.display = "none";

});
tab2.addEventListener("click", function () {
    tab2.style.backgroundColor = "white";
    tab2.style.color = "#054ea4";
    tab1.style.backgroundColor = "#054ea4";
    tab1.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    tB.style.display = "block";
    tA.style.display = "none";
    tC.style.display = "none";
    tD.style.display = "none";
    tE.style.display = "none";

});

tab3.addEventListener("click", function () {
    tab3.style.backgroundColor = "white";
    tab3.style.color = "#054ea4";
    tab1.style.backgroundColor = "#054ea4";
    tab1.style.color = "white";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    tC.style.display = "block";
    tA.style.display = "none";
    tB.style.display = "none";
    tD.style.display = "none";
    tE.style.display = "none";

});


tab4.addEventListener("click", function () {
    tab4.style.backgroundColor = "white";
    tab4.style.color = "#054ea4";
    tab1.style.backgroundColor = "#054ea4";
    tab1.style.color = "white";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    tC.style.display = "none";
    tA.style.display = "none";
    tB.style.display = "none";
    tD.style.display = "block";
    tE.style.display = "none";

});


tab5.addEventListener("click", function () {
    tab5.style.backgroundColor = "white";
    tab5.style.color = "#054ea4";
    tab1.style.backgroundColor = "#054ea4";
    tab1.style.color = "white";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";

    tC.style.display = "none";
    tA.style.display = "none";
    tB.style.display = "none";
    tD.style.display = "none";
    tE.style.display = "block";

});


/* For tabs 2*/
var tab11 = document.querySelector("#tab11");
var tab22 = document.querySelector("#tab22");
var tab33 = document.querySelector("#tab33");
var tab44 = document.querySelector("#tab44");
var tab55 = document.querySelector("#tab55");


var tA2 = document.querySelector("#total-tab2");
var tB2 = document.querySelector("#graded-tab2");
var tC2 = document.querySelector("#ungraded-tab2");
var tD2 = document.querySelector("#submitted-tab2");
var tE2 = document.querySelector("#upcoming-tab2");


window.addEventListener("load", function () {
    tab11.style.backgroundColor = "white";
    tab11.style.color = "#054ea4";

});

tab11.addEventListener("click", function () {
    tab11.style.backgroundColor = "white";
    tab11.style.color = "#054ea4";
    tab22.style.backgroundColor = "#054ea4";
    tab22.style.color = "white";
    tab33.style.backgroundColor = "#054ea4";
    tab33.style.color = "white";
    tab44.style.backgroundColor = "#054ea4";
    tab44.style.color = "white";
    tab55.style.backgroundColor = "#054ea4";
    tab55.style.color = "white";

    tA2.style.display = "block";
    tB2.style.display = "none";
    tC2.style.display = "none";
    tD2.style.display = "none";
    tE2.style.display = "none";

});
tab22.addEventListener("click", function () {
    tab22.style.backgroundColor = "white";
    tab22.style.color = "#054ea4";
    tab11.style.backgroundColor = "#054ea4";
    tab11.style.color = "white";
    tab33.style.backgroundColor = "#054ea4";
    tab33.style.color = "white";
    tab44.style.backgroundColor = "#054ea4";
    tab44.style.color = "white";
    tab55.style.backgroundColor = "#054ea4";
    tab55.style.color = "white";

    tB2.style.display = "block";
    tA2.style.display = "none";
    tC2.style.display = "none";
    tD2.style.display = "none";
    tE2.style.display = "none";

});

tab33.addEventListener("click", function () {
    tab33.style.backgroundColor = "white";
    tab33.style.color = "#054ea4";
    tab11.style.backgroundColor = "#054ea4";
    tab11.style.color = "white";
    tab22.style.backgroundColor = "#054ea4";
    tab22.style.color = "white";
    tab44.style.backgroundColor = "#054ea4";
    tab44.style.color = "white";
    tab55.style.backgroundColor = "#054ea4";
    tab55.style.color = "white";

    tC2.style.display = "block";
    tA2.style.display = "none";
    tB2.style.display = "none";
    tD2.style.display = "none";
    tE2.style.display = "none";

});


tab44.addEventListener("click", function () {
    tab44.style.backgroundColor = "white";
    tab44.style.color = "#054ea4";
    tab11.style.backgroundColor = "#054ea4";
    tab11.style.color = "white";
    tab22.style.backgroundColor = "#054ea4";
    tab22.style.color = "white";
    tab33.style.backgroundColor = "#054ea4";
    tab33.style.color = "white";
    tab55.style.backgroundColor = "#054ea4";
    tab55.style.color = "white";

    tC2.style.display = "none";
    tA2.style.display = "none";
    tB2.style.display = "none";
    tD2.style.display = "block";
    tE2.style.display = "none";

});


tab55.addEventListener("click", function () {
    tab55.style.backgroundColor = "white";
    tab55.style.color = "#054ea4";
    tab11.style.backgroundColor = "#054ea4";
    tab11.style.color = "white";
    tab22.style.backgroundColor = "#054ea4";
    tab22.style.color = "white";
    tab44.style.backgroundColor = "#054ea4";
    tab44.style.color = "white";
    tab33.style.backgroundColor = "#054ea4";
    tab33.style.color = "white";

    tC2.style.display = "none";
    tA2.style.display = "none";
    tB2.style.display = "none";
    tD2.style.display = "none";
    tE2.style.display = "block";

});