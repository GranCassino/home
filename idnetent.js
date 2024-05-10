 // Função para gerar uma string aleatória precedida por "DEMO-" e seguida por "-BRL"
        function gerarStringAleatoria(tamanho) {
            var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var resultado = 'DEMO-'; // Prefixo "DEMO-"
            for (var i = 0; i < tamanho - 9; i++) { // 9 é o comprimento do prefixo "DEMO-" e do sufixo "-BRL"
                resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
            resultado += '-BRL'; // Sufixo "-BRL"
            return resultado;
        }
    
        // Função para atualizar a URL dentro do iframe com uma parte aleatória para o parâmetro 'sessId'
        function atualizarURLdoIframe() {
            // Obtemos o elemento do iframe pelo ID
            var iframe = document.getElementById('meuIframe');
    
            // Geramos uma string aleatória precedida por "DEMO-" e seguida por "-BRL" para substituir a parte desejada do URL
            var novaParteURL = gerarStringAleatoria(15); // 15 é o comprimento total incluindo o prefixo "DEMO-" e o sufixo "-BRL"
    
            // Obtemos o URL atual do iframe
            var url = iframe.src;
    
            // Verifica se o parâmetro 'sessId' já está presente no URL
            if (url.indexOf('sessId=') !== -1) {
                // Se o parâmetro já existe, substituímos sua parte aleatória
                url = url.replace(/(sessId=)[^\&]+/, '$1' + novaParteURL);
            } else {
                // Se o parâmetro não existe, adicionamos ao URL
                url += (url.indexOf('?') !== -1 ? '&' : '?') + 'sessId=' + novaParteURL;
            }
    
            // Atualizamos o atributo src do iframe com o novo URL modificado
            iframe.src = url;
        }
    
        // Chama a função de atualização do iframe assim que a página carrega
        window.onload = function() {
            atualizarURLdoIframe();
        };
