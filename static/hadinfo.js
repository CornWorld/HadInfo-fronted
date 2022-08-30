let agreementCheckbox=$("#agreement");
window.onload=function () {
    agreementCheckbox.change(function() {
        $("#submitButton")[0].className="ui button "+(agreementCheckbox[0].checked?"":"disabled");
       
    });
}