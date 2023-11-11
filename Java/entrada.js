if(localStorage.getItem("logado") == "sim"){
    if (localStorage.getItem("lingua")) {
        if (localStorage.getItem("linguagemLogado") == "inglês") {
            localStorage.setItem("traduziu", "sim");
            window.location.replace(`./Paginas/Ing/index.html`);
        } else if (localStorage.getItem("linguagemLogado") == "portugues") {
            localStorage.setItem("traduziu", "sim");
            window.location.replace(`./Paginas/Pt/index.html`);
        }
    }
}else {
    if (localStorage.getItem("lingua")) {
        if (localStorage.getItem("lingua") == "ingles") {
            localStorage.setItem("traduziu", "sim");
            window.location.replace(`./Paginas/Ing/index.html`);
        } else if (localStorage.getItem("lingua") == "portugues") {
            localStorage.setItem("traduziu", "sim");
            window.location.replace(`./Paginas/Pt/index.html`);
        }
    }
    window.location.replace(`./Paginas/Pt/index.html`);
}