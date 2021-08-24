$(document).on('click','#rop-anna-add-row',function () {
    let $ropAnnaTBody = $('#rop-anna-table-body');
    let $newRow = $ropAnnaTBody.clone();
    $newRow.children().each((i,$n) => {$n.querySelector('input').value = "0"});
    $('#rop-anna-add-row').before($newRow);
});

$(document).on('change','#rop-anna-table-body',function(){
    // alert();

    // array to store values
    let ropani = [];
    let anna = [];
    let paisa = [];
    let daam = [];

    // jquery columns
    let $ropanis = $('#rop-anna-table-body .ui-block-a input');
    let $annas = $('#rop-anna-table-body .ui-block-b input');
    let $paisas = $('#rop-anna-table-body .ui-block-c input');
    let $daams = $('#rop-anna-table-body .ui-block-d input');
    
    // populate value array from jquery columns
    $ropanis.map(k=>{console.log($ropanis[k].value);       
        ropani.push(parseInt($ropanis[k].value))});
    $annas.map(k=>{console.log($annas[k].value);
        anna.push(parseInt($annas[k].value))});
    $paisas.map(k=>{console.log($paisas[k].value);
        paisa.push(parseInt($paisas[k].value))});
    $daams.map(k=>{console.log($daams[k].value);
        daam.push(parseFloat($daams[k].value))});

    let tot_daam = daam.reduce((total,num) => {return total + num});
    let tot_paisa = paisa.reduce((total,num) => {return total + num});
    let tot_anna = anna.reduce((total,num) => {return total + num});
    let tot_ropani = ropani.reduce((total,num) => {return total + num});

    $('#rop-anna-table-footer .ui-block-d .ui-bar-a').html(tot_daam%4);
    $('#rop-anna-table-footer .ui-block-c .ui-bar-a').html((tot_paisa + parseInt(tot_daam/4))%4);
    $('#rop-anna-table-footer .ui-block-b .ui-bar-a').html((tot_anna + parseInt((tot_paisa + parseInt(tot_daam/4))/4))%16);
    $('#rop-anna-table-footer .ui-block-a .ui-bar-a').html(tot_ropani + parseInt((tot_anna + parseInt((tot_paisa + parseInt(tot_daam/4))/4))/16));
})