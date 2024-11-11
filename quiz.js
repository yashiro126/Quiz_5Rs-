// Perguntas do quiz com explicações
const quizQuestions = [
    {
        question: "Qual dos 5 R's está relacionado a reduzir o consumo de recursos?",
        options: ["Reciclar", "Reduzir", "Reutilizar", "Responsabilidade"],
        answer: "Reduzir",
        explanation: "Reduzir significa diminuir o uso de recursos e evitar desperdícios."
    },
    {
        question: "O que significa o conceito de TI-Verde?",
        options: ["Usar tecnologias sustentáveis", "Reduzir o uso de papel", "Otimizar o consumo de energia em TI", "Comprar computadores novos"],
        answer: "Otimizar o consumo de energia em TI",
        explanation: "TI-Verde promove a utilização de práticas tecnológicas que reduzem o consumo de energia e o impacto ambiental."
    },
    {
        question: "Qual R é incentivado quando se opta por produtos de segunda mão?",
        options: ["Reduzir", "Recusar", "Reutilizar", "Reciclar"],
        answer: "Reutilizar",
        explanation: "Reutilizar significa dar nova vida a produtos, evitando o consumo de novos recursos."
    },
    {
        question: "Qual é a principal vantagem de reciclar resíduos eletrônicos?",
        options: ["Geração de energia limpa", "Reduzir o lixo eletrônico", "Aumentar o consumo", "Eliminar resíduos tóxicos"],
        answer: "Reduzir o lixo eletrônico",
        explanation: "Reciclar resíduos eletrônicos ajuda a evitar o acúmulo de lixo tóxico e poluente no meio ambiente."
    },
    {
        question: "Como o conceito de TI-Verde impacta o meio ambiente?",
        options: ["Melhora a eficiência energética", "Aumenta a quantidade de equipamentos", "Promove o descarte rápido", "Reduz a vida útil dos aparelhos"],
        answer: "Melhora a eficiência energética",
        explanation: "TI-Verde foca em tecnologias que consomem menos energia, ajudando a preservar o meio ambiente."
    },
    {
        question: "O que significa o R 'Recusar' em sustentabilidade?",
        options: ["Recusar produtos não recicláveis", "Recusar compras online", "Recusar plásticos reutilizáveis", "Recusar tudo que é novo"],
        answer: "Recusar produtos não recicláveis",
        explanation: "Recusar implica em evitar produtos que não podem ser reciclados ou que causam impactos negativos ao meio ambiente."
    },
    {
        question: "Qual prática faz parte da TI-Verde?",
        options: ["Comprar mais computadores", "Descarte inadequado de eletrônicos", "Utilizar fontes de energia renováveis", "Aumentar o uso de impressoras"],
        answer: "Utilizar fontes de energia renováveis",
        explanation: "Uma das práticas da TI-Verde é o uso de energia limpa, como solar e eólica, para reduzir impactos ambientais."
    },
    {
        question: "O que é priorizado no conceito 'Reparar' dentro dos 5 R's?",
        options: ["Substituir sempre que possível", "Consertar antes de descartar", "Reciclar materiais quebrados", "Comprar produtos novos"],
        answer: "Consertar antes de descartar",
        explanation: "Reparar incentiva consertar produtos em vez de jogá-los fora, prolongando sua vida útil."
    },
    {
        question: "Como o uso de virtualização ajuda na TI-Verde?",
        options: ["Reduz o número de servidores físicos", "Aumenta o consumo de energia", "Diminui a eficiência", "Aumenta o descarte de hardware"],
        answer: "Reduz o número de servidores físicos",
        explanation: "A virtualização permite que várias máquinas virtuais rodem em um único servidor, reduzindo o consumo de energia."
    },
    {
        question: "Qual das opções NÃO faz parte dos 5 R's da sustentabilidade?",
        options: ["Reduzir", "Reparar", "Reciclar", "Renovar"],
        answer: "Renovar",
        explanation: "Os 5 R's incluem: Reduzir, Reutilizar, Reciclar, Reparar e Recusar. 'Renovar' não faz parte."
    }
];

// Função para gerar o quiz
function generateQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = ""; // Limpar o quiz anterior
    quizQuestions.forEach((q, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.classList.add("question-block");

        // Título da pergunta
        const questionTitle = document.createElement("h3");
        questionTitle.innerText = `${index + 1}. ${q.question}`;
        questionBlock.appendChild(questionTitle);

        // Opções
        q.options.forEach(option => {
            const label = document.createElement("label");
            label.classList.add("option-label");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`;
            input.value = option;

            label.appendChild(input);
            label.append(option);
            questionBlock.appendChild(label);
        });

        quizContainer.appendChild(questionBlock);
    });
}

// Função para verificar as respostas e mostrar explicações
function checkAnswers(event) {
    event.preventDefault();
    let score = 0;
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = ""; // Limpar resultados anteriores

    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const resultBlock = document.createElement("div");
        resultBlock.classList.add("result-block");

        if (selectedOption && selectedOption.value === q.answer) {
            score++;
            resultBlock.innerHTML = `<p><strong>Resposta correta:</strong> ${q.answer} - ${q.explanation}</p>`;
        } else if (selectedOption) {
            resultBlock.innerHTML = `<p><strong>Resposta incorreta.</strong> Resposta correta: ${q.answer} - ${q.explanation}</p>`;
        } else {
            resultBlock.innerHTML = `<p><strong>Não respondeu a essa pergunta.</strong> Resposta correta: ${q.answer} - ${q.explanation}</p>`;
        }

        resultContainer.appendChild(resultBlock);
    });

    const scoreBlock = document.createElement("div");
    scoreBlock.classList.add("score-block");
    scoreBlock.innerText = `Você acertou ${score} de ${quizQuestions.length} perguntas.`;
    resultContainer.appendChild(scoreBlock);

    // Mostrar o botão "Refazer Quiz"
    document.getElementById("retry-btn").classList.remove("hidden");
}

// Função para refazer o quiz
function retryQuiz() {
    // Esconder os resultados e o botão "Refazer Quiz"
    document.getElementById("result").innerHTML = "";
    document.getElementById("retry-btn").classList.add("hidden");

    // Gerar o quiz novamente
    generateQuiz();
}

// Função para gerar QR Code
function generateQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ""; // Limpar QR Code anterior
    new QRCode(qrcodeContainer, {
        text: "https://yashiro126.github.io/Quiz-5Rs/",
        width: 150,
        height: 150
    });
}

// Gerar o quiz ao carregar a página
generateQuiz();

// Adicionar evento para enviar o quiz
document.getElementById("quiz-form").addEventListener("submit", checkAnswers);

// Adicionar evento para refazer o quiz
document.getElementById("retry-btn").addEventListener("click", retryQuiz);

// Adicionar evento para gerar QR Code
document.getElementById("generate-qrcode").addEventListener("click", generateQRCode);
