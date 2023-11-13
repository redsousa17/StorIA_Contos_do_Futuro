// JavaScript

const caixahistoria = document.getElementById("caixahistoria");
const caixahist1 = document.getElementById("caixahist1");
const caixahist2 = document.getElementById("caixahist2");
const caixahist3 = document.getElementById("caixahist3");
const caixahist4 = document.getElementById("caixahist4");
const caixahist5 = document.getElementById("caixahist5");
const caixahist6 = document.getElementById("caixahist6");
const caixahist7 = document.getElementById("caixahist7");

const pergunta = document.getElementById("pergunta");
const result = document.getElementById("result");

const OPENAI_API_KEY = "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";

if (pergunta){

    pergunta.addEventListener("keypress", (e) => {
    if (pergunta.value && e.key === "Enter") SendQuestion();
    });

    function SendQuestion() {
        
        var sQuestion = "Crie uma história com formatação em HTML com tag <h3> para os titulos e tag </p> para os paragrafos, para o publico infantil, sem usar palavras explicitas com no minimo 250 palavras e visando trazer uma moral da história que contenha: " + pergunta.value;
        // Exibe Caixa com a historia
        caixahistoria.style.display = 'block';

        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + OPENAI_API_KEY,
            },
            body: JSON.stringify({
            model: "text-davinci-003",
            prompt: sQuestion,
            max_tokens: 2048, // tamanho da resposta
            temperature: 0.5, // criatividade na resposta
            }),
        })
        .then((resposta) => resposta.json())
        .then((json) => {

            console.log(json);
            console.log(json.choices?.[0].text);

            if (json.error?.message) {

                document.getElementById('resposta').innerHTML = `Error: ${json.error.message}`;

            } else if (json.choices?.[0].text) {

                var text = json.choices[0].text || "Sem resposta";

                var n1 = (text.search("<h3>")) ;
                var n2 = (text.search("</h3>"));
                var titulo  = (text.slice((n1 + 4),n2));
                var conteudo = (text.slice((n2 + 5)));
                var text = text.slice(n1);
                    
                document.getElementById('resposta').innerHTML = text;

                var xhr = new XMLHttpRequest();
                var url = "php/savehist.php"; // Nome do seu arquivo PHP

                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        // A resposta do PHP pode indicar se a operação foi bem-sucedida.
                        console.log(xhr.responseText);
                    }
                };

                var data = "titulo=" + titulo + "&conteudo=" + conteudo;
                xhr.send(data);
            }

        })
        .catch((error) => console.error("Error:", error))
        .finally(() => {
        
        pergunta.value = "";
        pergunta.disabled = false;
        pergunta.focus();
        });

        pergunta.value = "Carregando...";
        pergunta.disabled = true;

    }
}


function ViewHist(){
    var xhr = new XMLHttpRequest();
    var url = "php/verhist.php"; // Nome do seu arquivo PHP

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var historia = JSON.parse(xhr.responseText);

            document.getElementById('resposta').innerHTML = "<h3>" + historia.titulo + "</h3> <br>" + historia.conteudo;

        }
    };

    xhr.send();

}

function SelHist1(){
    caixahist1.style.display = 'block';
    var id  = 1;
    var xhr = new XMLHttpRequest();
    var url = "php/selecthist.php?id=" + id;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var historia = JSON.parse(xhr.responseText);

            document.getElementById('historia1').innerHTML = historia.conteudo;
        }
    };

    xhr.send();
}

function SelHist2(){
    caixahist2.style.display = 'block';
    var id  = 2;
    var xhr = new XMLHttpRequest();
    var url = "php/selecthist.php?id=" + id;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var historia = JSON.parse(xhr.responseText);

            document.getElementById('historia2').innerHTML = historia.conteudo;
        }
    };

    xhr.send();
}

function SelHist3(){
    caixahist3.style.display = 'block';
    var id  = 3;
    var xhr = new XMLHttpRequest();
    var url = "php/selecthist.php?id=" + id;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var historia = JSON.parse(xhr.responseText);

            document.getElementById('historia3').innerHTML = historia.conteudo;
        }
    };

    xhr.send();
}

function SelHist4(){
    caixahist4.style.display = 'block';
    var id  = 4;
    var xhr = new XMLHttpRequest();
    var url = "php/selecthist.php?id=" + id;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var historia = JSON.parse(xhr.responseText);

            document.getElementById('historia4').innerHTML = historia.conteudo;
        }
    };

    xhr.send();
}

function SelHist5(){
    caixahist5.style.display = 'block';
    var id  = 5;
    var xhr = new XMLHttpRequest();
    var url = "php/selecthist.php?id=" + id;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var historia = JSON.parse(xhr.responseText);

            document.getElementById('historia5').innerHTML = historia.conteudo;
        }
    };

    xhr.send();
}

function SelHist6(){
    caixahist6.style.display = 'block';
    var id  = 6;
    var xhr = new XMLHttpRequest();
    var url = "php/selecthist.php?id=" + id;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var historia = JSON.parse(xhr.responseText);

            document.getElementById('historia6').innerHTML = historia.conteudo;
        }
    };

    xhr.send();
}

function SelHist7(){
    caixahist7.style.display = 'block';
    var id  = 7;
    var xhr = new XMLHttpRequest();
    var url = "php/selecthist.php?id=" + id;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var historia = JSON.parse(xhr.responseText);

            document.getElementById('historia7').innerHTML = historia.conteudo;
        }
    };

    xhr.send();
}