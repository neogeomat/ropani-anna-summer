$(document).on('click','#rop-anna-add-row',function () {
    $ropAnnaTBody = $('#rop-anna-table-body');
    $ropAnnaTBody.before($ropAnnaTBody.clone());
    // debugger;
    // alert("hi");
});