
function sendReg() {
console.log('adfsads');
    event.preventDefault();
    $.post('/example.php', $('form').serialize(), function(data){
    alert(data);
});
}