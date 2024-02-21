document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var dinheiroVirtualButton = document.getElementById("dinheiro-virtual");

    // Exibir o modal assim que a página carregar
    modal.style.display = "block";
    
    // Lidar com o clique no botão "Dinheiro Virtual"
    dinheiroVirtualButton.addEventListener("click", function() {
        modal.style.display = "none"; // Fecha o modal
    });
});
