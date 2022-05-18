function BuscarCEP(){
    $('#endereco').removeClass('d-none');
    let cep = document.getElementById('cep').value;

    $.ajax({
        type: 'GET',
        url: `https://viacep.com.br/ws/${cep}/json/`,
        success: (function(location){
            let bairro = location.bairro;
            let rua = location.logradouro;
            let cidade = location.localidade;
            let uf = location.uf;
            document.getElementById('endereco-completo').innerHTML = ` <b>Rua/Av:</b> ${rua} 
            <br> <b>Bairro:</b> ${bairro} 
            <br> <b>Cidade:</b> ${cidade} 
            <br> <b>UF:</b> ${uf}  `
        })
    })
};

//document.querySelector('#pesquisar');
document.getElementById('pesquisar').addEventListener('click',function(){
    BuscarCEP();
});


