let agreementCheckbox=$("#agreement");
let addFormSubmitButton=$("#addFormSubmitButton");
window.onload=function () {
    agreementCheckbox.change(function() {
        $("#submitButton")[0].className="ui button "+(agreementCheckbox[0].checked?"":"disabled");
       
    });
    addFormSubmitButton.on("click", function() {
        $("#content").val(window.btoa($("#content_input").val()));
        $("#addForm").submit();
    })
}