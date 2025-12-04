// quiz-logic.js - Lógica compartilhada do quiz

function avaliarResultado(nome, pontuacao) {
  let texto = "", dica = "", categoria = "";

  if (pontuacao >= 12 && pontuacao <= 19) {
    categoria = "Super Consciente";
    texto = `Parabéns ${nome}! Você tem um consumo super consciente! Continue assim, buscando sempre maneiras de reduzir seu impacto ambiental. Pequenas atitudes fazem uma grande diferença!`;
    dica = "Compartilhe seus hábitos sustentáveis com amigos e familiares para inspirá-los a fazer o mesmo, apoie iniciativas locais de sustentabilidade e procure se engajar em campanhas ou ações coletivas.";
  } else if (pontuacao >= 20 && pontuacao <= 29) {
    categoria = "Consciente";
    texto = `Muito bom ${nome}! Você já tem um consumo consciente, mas ainda há espaço para melhorias. Tente identificar áreas onde você pode reduzir ainda mais seu impacto ambiental.`;
    dica = "Experimente adotar o hábito de levar sacolas reutilizáveis ao fazer compras para reduzir o uso de plástico descartável, reutilize água sempre que possível, como a água da máquina de lavar para limpar áreas externas, e reduza o tempo de banho em alguns minutos por semana.";
  } else if (pontuacao >= 30 && pontuacao <= 39) {
    categoria = "Em Transição";
    texto = `Legal ${nome}! Você está no caminho certo para um consumo mais consciente, mas ainda há várias oportunidades para melhorar seus hábitos. Reflita sobre suas escolhas diárias e busque alternativas mais sustentáveis.`;
    dica = "Troque pequenos desperdícios por soluções simples, como fechar a torneira ao escovar os dentes e desligar luzes desnecessárias, adotar a coleta seletiva de forma mais consciente e tentar consertar itens ao invés de descartá-los.";
  } else if (pontuacao >= 40 && pontuacao <= 49) {
    categoria = "Atenção Necessária";
    texto = `Cuidado ${nome}! Seu consumo ainda é bastante elevado, o que pode estar impactando negativamente o meio ambiente. É importante começar a repensar seus hábitos e buscar formas de consumir de maneira mais consciente.`;
    dica = "Evite banhos longos e evite lavar calçadas com água potável, opte por produtos com menos embalagens, prefira itens reutilizáveis e comece a acompanhar sua conta de água e energia para perceber desperdícios.";
  } else if (pontuacao >= 50 && pontuacao <= 60) {
    categoria = "Nível Crítico";
    texto = `Atenção ${nome}! Seu consumo está em um nível preocupante, o que pode estar contribuindo significativamente para a degradação ambiental. É crucial que você comece a adotar práticas mais sustentáveis em sua rotina diária.`;
    dica = "Estabeleça metas simples, como diminuir pela metade o tempo do banho, descarte corretamente o lixo, evite comprar por impulso e busque se informar mais sobre sustentabilidade para entender melhor o impacto de suas ações.";
  } else {
    categoria = "Erro";
    texto = `${nome}, houve um problema ao calcular seu resultado. Por favor, refaça o quiz.`;
    dica = "";
  }

  return { texto, dica, categoria };
}

function salvarResultado(nome, pontuacao) {
  localStorage.setItem("quiz_nome", nome);
  localStorage.setItem("quiz_pontuacao", pontuacao);
}

function carregarResultado() {
  const nome = localStorage.getItem("quiz_nome") || "Participante";
  const pontuacao = parseInt(localStorage.getItem("quiz_pontuacao")) || 0;
  return { nome, pontuacao };
}
