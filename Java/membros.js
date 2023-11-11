function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../../BD/membros.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            for (var posicao = 2; posicao <= 8; posicao++) {
                var divId = "cx" + posicao;
                var div = document.getElementById(divId);

                if (data[posicao] && data[posicao].length > 0) {
                    for (var i = 0; i < data[posicao].length; i++) {
                        var pTag = document.createElement("p");
                        pTag.textContent = data[posicao][i];
                        div.appendChild(pTag);
                    }
                } else {
                    var pTag = document.createElement("p");
                    pTag.textContent = "Nenhum membro encontrado para a posição " + posicao;
                    div.appendChild(pTag);
                }
            }
        }
    };
    xhr.send();
}

// Chame a função para buscar os dados
fetchData();