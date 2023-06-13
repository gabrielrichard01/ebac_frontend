$(document).ready(function(){
    $('#btn').click(function(){
        var tarefa = $('#tarefa').val();
        if(tarefa !== ''){
            var novoItem = $('<li>').text(tarefa);
            novoItem.click(function(){
                $(this).toggleClass('completo');
            });
            $('#lista-tarefas').append(novoItem);
            $('#tarefa').val('');
        }
    });
});