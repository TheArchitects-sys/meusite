/**
 * NEOTHEON — ARQUIVOS CONFIDENCIAIS DA ÉGIDE (SISTEMA & DIRETRIZES)
 * Padrão Talamasca / Microfilme Âmbar dos Anos 80/90
 * Autoridade Editorial: Manual do Novato (21 páginas) & Compêndio de Regras e Sistemas
 */

const TERMINAL_DATABASE = {
  version: "3.0.0-TALAMASCA",
  classification: "RESTRICTED // APENAS AGENTES AUTORIZADOS",
  jurisdiction: "A ÉGIDE DE AVALON • ARQUIVOS DE INVESTIGAÇÃO & INICIAÇÃO",
  lastRevision: "03/10/2026",

  // ── MODO RECRUTA: O GUIA PASSO A PASSO PARA NOVATOS ──
  novatoGuide: [
    {
      step: 1,
      tag: "ETAPA 01",
      shortLabel: "Função na equipe",
      title: "Entenda seu Papel na Ordem",
      badge: "FUNDAMENTAL",
      docId: "papeis-taticos",
      visualType: "tactical-squad",
      contextKey: "etapa-1",
      objective: "Compreenda a vocação tática do seu personagem (DPS, Tanker ou Suporte) para atuar de forma coordenada na equipe.",
      lead: "Em Neotheon, ninguém resolve nada sozinho. Seu personagem precisa ter uma função clara para a equipe funcionar.",
      bodyHtml: `
        <p>Ao ingressar na Égide de Avalon, seu personagem fará parte de esquadrões de campo. A primeira escolha crucial é entender sua vocação tática:</p>
        <div class="talamasca-grid-roles">
          <div class="role-box dps">
            <div class="role-header">
              <span class="role-icon-symbol">❖</span>
              <h4>DPS (Causadores de Dano)</h4>
            </div>
            <p>Os causadores de impacto. Especialistas em bater rápido e forte para eliminar monstros antes que eles reajam. Dois petelecos bem dados podem derrubá-los, mas se conseguirem bater, limpam a área.</p>
            <div class="role-examples">Filiações: Zeus, Hades, Poseidon, Ares, Hermes, Tânatos, Melinoe, Despina.</div>
          </div>
          <div class="role-box tank">
            <div class="role-header">
              <span class="role-icon-symbol">✦</span>
              <h4>TANKER (Linha de Frente & Proteção)</h4>
            </div>
            <p>O escudo vivo que impede que o DPS e o Suporte morram. Builds focadas em resistir a golpes brutais com HP alto, Armadura e Redução de Dano (RD). <em>"Meu peito é meu para-brisa."</em></p>
            <div class="role-examples">Filiações: Poseidon, Atena, Apolo, Hefesto, Hermes, Hécate, Magos Astrológicos.</div>
          </div>
          <div class="role-box support">
            <div class="role-header">
              <span class="role-icon-symbol">✦</span>
              <h4>SUPORTE (Cura, Buffs & Controle)</h4>
            </div>
            <p>O pilar estratégico do time. Curam ferimentos, multiplicam o ataque dos causadores de dano e desestabilizam inimigos reduzindo seus dados ou defesas.</p>
            <div class="role-examples">Filiações: Hera, Afrodite, Dionísio, Perséfone, Hipnos, Morfeu, Circe, Tique.</div>
          </div>
        </div>
        <div class="stencil-quote">
          <strong>A Regra de Ouro do Tio H:</strong> 
          <em>“O pato nada, anda e voa, mas faz os três mal. Não faça seu personagem ser um pato!”</em> Especialista é quem sobrevive.
        </div>
      `
    },
    {
      step: 2,
      tag: "ETAPA 02",
      shortLabel: "História do personagem",
      title: "Crie a História do seu Personagem",
      badge: "LORE & ROLEPLAY",
      docId: "primeira-inscricao-jogo",
      visualType: "origin-dossier",
      visualAsset: "assets/londres_panorama_mj.png",
      visualAlt: "Panorama de Londres Sob o Véu",
      contextKey: "etapa-2",
      objective: "Construa uma narrativa inicial como novato recém-chegado à Égide sem medo de errar a ambientação mística.",
      lead: "Você não precisa saber tudo sobre o mundo místico de antemão: seu personagem pode ser um novato absoluto.",
      bodyHtml: `
        <p>A melhor forma de começar sem medo de errar a ambientação é construir um personagem que acabou de ser descoberto pela Égide de Avalon:</p>
        <ul>
          <li><strong>O Resgatado:</strong> Seu personagem vivia uma vida normal em Londres quando foi atacado por criaturas sombrias e resgatado por agentes da Ordem.</li>
          <li><strong>O Desperto Recente:</strong> Ele acabou de manifestar seus poderes e foi conduzido à Cidadela de Avalon para aprender a controlar suas dádivas.</li>
          <li><strong>Primeiro Dia no Departamento:</strong> Combine no canal de <em>#interações-ingame</em> uma cena onde um agente mais velho explica a você como funcionam as demandas de seu ofício.</li>
        </ul>
        <div class="talamasca-callout">
          <strong>Dica dos Moderadores:</strong> Se você estiver com dúvidas sobre o passado ou a linhagem divina do seu personagem, pergunte no privado aos Mestres. Eles adoram ajudar a amarrar tramas de novatos!
        </div>
      `
    },
    {
      step: 3,
      tag: "ETAPA 03",
      shortLabel: "Primeira ficha",
      title: "Como Solicitar sua Primeira Ficha",
      badge: "MECÂNICA INICIAL",
      docId: "pedido-ficha-oficial",
      visualType: "official-requisition",
      contextKey: "etapa-3",
      objective: "Reúna os dados obrigatórios e requisite sua planilha oficial de atributos no tópico designado da Central.",
      lead: "Após fazer seu primeiro jogo na comunidade, é hora de oficializar seus atributos com a administração.",
      bodyHtml: `
        <p>A ficha geral de atributos é criada por um dos ADMs da Égide no tópico oficial da Central. Você só precisa fornecer os seguintes dados:</p>
        <div class="talamasca-code-terminal">
Nº DA FICHA GERAL: [Escolha um número livre na lista de fichas]
E-MAIL: [Seu e-mail para acesso às planilhas no Google Drive]
NOME DA FICHA GERAL: [Seu nome de jogador em off]
NOME DO PERSONAGEM: [Nome do personagem aceito na aprovação]
FILIAÇÃO: [Divindade paterna/materna ou Linhagem arcana]
OFÍCIO: [Seu emprego na Égide: Custódio, Vigilante, Arcanista, etc.]
IDADE & SHAPE: [Idade do personagem e duas fotos do faceclaim]
INDIVIDUALIDADES: [Escolha 3 poderes por nível disponível na lista]
DISTRIBUIÇÃO: [Onde você vai alocar seus pontos de atributos]
        </div>
        <div class="talamasca-tip-box">
          <strong>Distribuição Recomendada para Novatos:</strong>
          Coloque sempre <strong>30 HP</strong> e <strong>10 ATK</strong> (se for DPS) ou <strong>10 DEF</strong> (se for Tanker). Essa configuração garante sobrevivência nas primeiras semanas sem dispersar recursos.
        </div>
        <div class="station-doc-reference">
          <p>Para a tabela integral de conversão por nível e detalhes dos atributos críticos, consulte o registro canônico:</p>
          <a href="?mode=arquivo&doc=conversao-atributos-build" class="station-direct-link">
            <span>Consultar Tabela Completa de Atributos & Conversão</span>
            <span>→</span>
          </a>
        </div>
      `
    },
    {
      step: 4,
      tag: "ETAPA 04",
      shortLabel: "Primeiras atividades",
      title: "O Primeiro Dia em Campo (Sem Risco de Morte)",
      badge: "SOBREVIVÊNCIA",
      docId: "guia-farm-estagios",
      visualType: "activity-trail",
      contextKey: "etapa-4",
      objective: "Evolua com segurança até o nível 5 através de turnos livres de roleplay e missões interpretativas sem combate letal.",
      lead: "Como ganhar XP rápido sem arriscar seu pescoço nas mãos dos monstros da metrópole.",
      bodyHtml: `
        <div class="talamasca-danger-warning">
          <strong>REGRA CAPITAL:</strong> NÃO INVENTE DE LUTAR SOLO ANTES DO NÍVEL 5! Se seu personagem morrer em um combate de farm, a morte é permanente.
        </div>
        <p>Fontes seguras de crescimento para agentes do Nível 1 ao Nível 4:</p>
        <ol class="talamasca-ordered-list">
          <li><strong>Turnos Livres de Roleplay:</strong> Escreva cenas com amigos no servidor. A cada <strong>40 palavras escritas, você ganha 10 XP</strong>. Dá para atingir o Nível 3 apenas desenvolvendo boas histórias.</li>
          <li><strong>Carona em Sereias/Scyllas:</strong> Junte-se a um veterano experiente uma vez por semana. Ele derrota os monstros e você ganha <strong>1.200 XP, 1.000 Contas Celestiais e 25 Orações</strong>.</li>
          <li><strong>Missões Sazonais Verdes:</strong> Roteiros interpretativos em grupo, sem combates letais, que pagam ótimas quantias de XP e Contas.</li>
        </ol>
      `
    },
    {
      step: 5,
      tag: "ETAPA 05",
      shortLabel: "Dados e combate",
      title: "Como Rolar Dados no Discord",
      badge: "RESOLUÇÃO DE AÇÕES",
      docId: "rolagem-e-tentativa",
      visualType: "dice-console",
      contextKey: "etapa-5",
      objective: "Aprenda a fórmula de tentativa no Discord (/roll 10d10 t5), contagem de sucessos e disputa com a defesa adversária.",
      lead: "Em Neotheon, toda ação de combate é uma tentativa resolvida por disputa de sucessos.",
      bodyHtml: `
        <p>Você nunca narra que seu personagem acertou o monstro. Você narra que ele <strong>tenta golpear</strong> — e deixa os dados decidirem o destino:</p>
        <div class="talamasca-steps-mini">
          <div class="step-mini">1. Entre no canal do Discord com o número da sua ficha.</div>
          <div class="step-mini">2. Identifique o personagem e a ação: <em>"Shen — Ataque com Lança"</em>.</div>
          <div class="step-mini">3. Digite o comando: <code>/roll 10d10 t5</code> (exemplo de 10 dados com dificuldade 5).</div>
          <div class="step-mini">4. Cada dado com valor igual ou superior à dificuldade conta como 1 sucesso.</div>
          <div class="step-mini">5. O atacante precisa de mais sucessos que o defensor para acertar. Em caso de empate, o golpe falha.</div>
        </div>

        <!-- Simulador Didático de Rolagem de Tentativa -->
        <div id="novato-dice-simulator-mount" class="novato-dice-simulator-mount"></div>
      `
    },
    {
      step: 6,
      tag: "ETAPA 06",
      shortLabel: "Moedas e recompensas",
      title: "Moedas & O Sistema de Banners",
      badge: "ECONOMIA & GACHA",
      docId: "moedas-e-economia",
      visualType: "currency-vault",
      contextKey: "etapa-6",
      objective: "Conheça o fluxo de Golds, Contas Celestiais e Orações para planejar seus tiros em Banners Sazonais.",
      lead: "Golds, Contas e Orações: como funciona o sistema de aquisição de equipamentos de elite.",
      bodyHtml: `
        <p>A economia é dividida em três pilares fundamentais:</p>
        <ul>
          <li><strong>Golds:</strong> Compram suprimentos na loja, pagam as taxas de criação aos artesãos e adquirem artefatos comuns.</li>
          <li><strong>Contas Celestiais:</strong> Moeda intermediária. Você pode trocar <strong>100 Contas por 1 Oração Celestial</strong>.</li>
          <li><strong>Orações Celestiais:</strong> O recurso mais precioso. Servem para atirar nos Banners Sazonais. A cada Oração gasta, você rola <strong>1d20</strong>. Se tirar <strong>20 natural</strong>, conquista a bênção ou arma exclusiva do banner!</li>
        </ul>
        <div class="talamasca-tip-box">
          <strong>Recomendação Estratégica:</strong> Guarde suas orações para o banner que traz a <em>Bênção Assinatura</em> da sua filiação divina. Os banners sazonais têm rotação periódica.
        </div>
      `
    }
  ],

  // ── DICAS CONTEXTUAIS DA PRESENÇA (REVISADAS E CANÔNICAS) ──
  presenceTips: [
    {
      quote: "Conte os sucessos primeiro.",
      note: "Em Neotheon, toda ação de combate é uma tentativa. Role os dados com a dificuldade definida e compare a soma de sucessos com a defesa do adversário.",
      docId: "rolagem-e-tentativa"
    },
    {
      quote: "Não faça seu personagem ser um pato!",
      note: "Especializar seu agente em uma função principal (DPS, Tanker ou Suporte) é o que garante a sobrevivência da equipe nas missões da Égide.",
      docId: "papeis-taticos"
    },
    {
      quote: "Perdeu algum campo da ficha?",
      note: "O formulário da Central exige número da ficha, e-mail, filiação, ofício, shape e poderes. A lista completa de campos está no diretório de Primeiros Passos.",
      docId: "pedido-ficha-oficial"
    },
    {
      quote: "Turnos livres rendem XP seguro.",
      note: "No nível 1, escrever cenas com amigos rende 10 XP a cada 40 palavras. É o método ideal para subir de nível sem perigo de morte prematura.",
      docId: "primeira-inscricao-jogo"
    },
    {
      quote: "Taxa Crítica e Dano Crítico são separados.",
      note: "A Taxa Crítica define se o golpe foi excepcional; o Dano Crítico determina o multiplicador aplicado após a confirmação do acerto.",
      docId: "critico-e-rd"
    },
    {
      quote: "Guarde Orações para o banner certo.",
      note: "Cada Oração rola 1d20 para buscar a Bênção Assinatura da sua divindade. Economize suas Contas para quando o banner da sua linhagem estiver ativo.",
      docId: "banner-e-prioridades"
    }
  ],

  // Alias para retrocompatibilidade
  get janitorSecrets() {
    return this.presenceTips;
  },

  // ── OS 9 DIRETÓRIOS CANÔNICOS DE MICROFILME (SEM EMOJIS) ──
  categories: [
    {
      id: "primeiros-passos",
      code: "SEÇÃO 01",
      name: "Começar e criar ficha",
      desc: "Papéis táticos de equipe, primeiras cenas, criação e pedido de ficha de novato.",
      svgIcon: "compass",
      sources: ["Manual do Novato pp. 2–9"]
    },
    {
      id: "personagem-progressao",
      code: "SEÇÃO 02",
      name: "Atributos e progressão",
      desc: "Escala de XP de ascensão (N1 ao N10), atributos base e escolha de poderes.",
      svgIcon: "chart",
      sources: ["Manual do Novato pp. 4, 13–14", "Tabela Canônica de Evolução"]
    },
    {
      id: "combate-dados",
      code: "SEÇÃO 03",
      name: "Dados e combate",
      desc: "Rolagens de d10 no Discord, cálculo de dano clássico e composto, crítico, RD e SPD.",
      svgIcon: "daggers",
      sources: ["Regras & Sistemas (Site Antigo)", "Manual do Novato p. 7"]
    },
    {
      id: "economia-recompensas",
      code: "SEÇÃO 04",
      name: "Moedas e recompensas",
      desc: "Golds, Contas Celestiais, Orações, Banners e estratégia de recursos.",
      svgIcon: "coins",
      sources: ["Manual do Novato pp. 13–16"]
    },
    {
      id: "atividades-rotina",
      code: "SEÇÃO 05",
      name: "Atividades e rotina",
      desc: "Rotina de farm por estágio (N1 ao N10), Sereias, Abismo e eventos sazonais.",
      svgIcon: "hourglass",
      sources: ["Manual do Novato pp. 18–21", "Tabela de Eventos"]
    },
    {
      id: "criacao-refinamento",
      code: "SEÇÃO 06",
      name: "Criação e refinamento",
      desc: "Forja, Encantamento, Boticário, Manipulação Genética e regras de refino.",
      svgIcon: "anvil",
      sources: ["Regras & Sistemas (Site Antigo - Criação)"]
    },
    {
      id: "convivencia-interpretacao",
      code: "SEÇÃO 07",
      name: "Convivência",
      desc: "O código de conduta da Égide, regra da tentativa e diretrizes de jogo.",
      svgIcon: "scales",
      sources: ["Regras & Sistemas (Site Antigo - Convivência)", "Manual do Novato p. 2"]
    },
    {
      id: "regras-especificas",
      code: "SEÇÃO 08",
      name: "Regras específicas",
      desc: "Doutrina de mestiços, graus de estrelas de itens e regras singulares.",
      svgIcon: "helix",
      sources: ["Regras & Sistemas (Premiações & Mestiços)"]
    },
    {
      id: "tabelas-termos",
      code: "SEÇÃO 09",
      name: "Glossário",
      desc: "Glossário rápido de siglas, mecânicas e índice geral de tabelas.",
      svgIcon: "index",
      sources: ["Compilação Integral das Fontes Oficiais"]
    }
  ],

  // ── ACERVO DOCUMENTAL COMPLETO (18 DOCUMENTOS OFICIAIS) ──
  documents: [
    // ══════════════════════════════════════════════════════════
    // SEÇÃO 01: INICIAÇÃO & PROTOCOLOS DE INGRESSO
    // ══════════════════════════════════════════════════════════
    {
      id: "papeis-taticos",
      categoryId: "primeiros-passos",
      title: "Funções de Equipe: DPS, Tanker e Suporte",
      subtitle: "Como o RPG é estruturado para trabalho coletivo",
      aliases: ["classes", "papeis", "dps", "tanker", "suporte", "pato", "filiações", "macro classes"],
      summary: "Neotheon é propositalmente montado para ninguém resolver nada sozinho. Cada personagem desempenha uma ou duas das três funções primárias.",
      source: "Manual do Novato, p. 4",
      contentHtml: `
        <div class="talamasca-callout warning">
          <strong>DIRETRIZ FUNDAMENTAL DE COMBATE:</strong> O RPG é montado de forma proposital para que ninguém consiga resolver nada sozinho! Cada personagem irá sempre trabalhar dentro de um time.
        </div>

        <h3>As Três Funções Primárias</h3>
        <ul>
          <li><strong>DPS (Causadores de Dano):</strong> Geralmente frágeis contra ataques pesados, mas capazes de infligir danos devastadores. <em>"Bate primeiro e pergunta depois."</em></li>
          <li><strong>Tanker (Defensores de Linha de Frente):</strong> A barreira que impede que o DPS e o Suporte morram. Possuem atributos altos de HP, DEF e Redução de Dano (RD) para absorver impactos críticos. <em>"Meu peito é meu para-brisa."</em></li>
          <li><strong>Suporte (Amplificadores e Controladores):</strong> Curam tankers, concedem buffs de ataque ao DPS e aplicam debuffs, escudos ou alterações de dados nos inimigos. Sem eles, o time sucumbe.</li>
        </ul>

        <div class="stencil-quote">
          <strong>A Regra de Ouro do Tio H:</strong> 
          <p><em>“O pato nada, anda e voa, mas faz os três mal. Não faça seu personagem ser um pato!”</em> Foque a build do seu personagem para desempenhar com excelência sua função primária.</p>
        </div>

        <h3>Classificação das Linhagens por Função Tática</h3>
        <p>Abaixo a distribuição descrita no Manual do Novato para orientar a escolha do seu personagem:</p>
        <div class="table-microfilm-wrap">
          <table class="talamasca-table">
            <thead>
              <tr>
                <th>Função Tática</th>
                <th>Filiações & Escolas Místicas Sugeridas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>DPS</strong></td>
                <td>Zeus, Hades, Poseidon, Hera, Deméter, Afrodite, Ares, Hermes, Melinoe, Oberon, Tânatos, Delírio, Despina; Magos Conjuradores.</td>
              </tr>
              <tr>
                <td><strong>TANKER</strong></td>
                <td>Poseidon, Apolo, Atena, Hefesto, Hermes, Hécate, Delírio, Despina; Magos Astrológicos.</td>
              </tr>
              <tr>
                <td><strong>SUPORTE</strong></td>
                <td>Zeus, Hades, Hera, Afrodite, Apolo, Ares, Dionísio, Perséfone, Hécate, Melinoe, Tânatos, Hipnos, Morfeu, Delírio, Circe, Despina, Eros, Psiquê, Tique; Magos de Evocação Espiritual, Biologia Espiritual.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="talamasca-source-note">Nota: Uma filiação pode abranger mais de uma função dependendo dos poderes escolhidos. O ofício civil ou militar exercido na Égide não restringe sua função de combate.</p>
      `
    },
    {
      id: "primeira-inscricao-jogo",
      categoryId: "primeiros-passos",
      title: "Inscrição Inicial & Primeira Experiência de Jogo",
      subtitle: "Como iniciar sua jornada na Égide sem risco de morte precoce",
      aliases: ["inscricao", "primeiro jogo", "farm inicial", "xp novato", "cenas"],
      summary: "Orientações sobre criação do personagem novato, turnos livres de 10 XP a cada 40 palavras e atividades seguras até o nível 5.",
      source: "Manual do Novato, pp. 5, 7",
      contentHtml: `
        <h3>Dicas de Lore para o Primeiro Personagem</h3>
        <p>Para facilitar a sua adaptação, faça um personagem que acabou de chegar à <strong>Égide de Avalon</strong> e não conhece a fundo o mundo místico. Ele aprenderá a ambientação junto com você!</p>
        <p>Você pode começar narrando o primeiro dia de trabalho no departamento ou uma cena de resgate em que agentes da Égide salvaram seu personagem de um ataque de monstros.</p>

        <h3>Fontes Iniciais de XP & Economia de Novato</h3>
        <ul>
          <li><strong>Turnos Livres:</strong> Rendem <strong>10 XP a cada 40 palavras</strong> escritas. Excelente para quem gosta de desenvolver roleplay detalhado e subir os primeiros níveis sem perigo. Não rende gold.</li>
          <li><strong>Missões Fixas:</strong> Pagam pouco XP e Gold, mas servem para ambientação. Evite combates antes do nível 5.</li>
          <li><strong>Missões Sazonais (Variante Verde):</strong> Roteiros interpretativos em grupo, sem risco de morte, que permitem somar facilmente até 3.000 XP.</li>
        </ul>

        <div class="talamasca-callout danger">
          <strong>AVISO DE SOBREVIVÊNCIA:</strong> Não invente de lutar sozinho antes de atingir o Nível 5! Em caso de morte em combate de farm, a morte é permanente. Se quiser participar de batalhas, peça reforço a veteranos.
        </div>

        <h3>Sugestões de Primeiras Cenas</h3>
        <ol>
          <li><strong>Turno Livre no Departamento:</strong> Combine uma interação com um colega do mesmo ofício em que o agente experiente explica as tarefas da ordem.</li>
          <li><strong>Reconhecimento no Metrô:</strong> Uma missão de reconhecimento na estação abandonada que se complica e necessita de resgate veterano.</li>
          <li><strong>Reunião da Égide:</strong> Personagens se conhecendo nas dependências da base de Avalon.</li>
        </ol>
      `
    },
    {
      id: "pedido-ficha-oficial",
      categoryId: "primeiros-passos",
      title: "Protocolo do Pedido de Ficha Geral",
      subtitle: "Instruções formais para abertura de ficha de atributos na Central",
      aliases: ["ficha", "pedido de ficha", "atributos iniciais", "silver", "shape", "dados da ficha"],
      summary: "Formulário oficial para solicitar a primeira ficha após a primeira interação de jogo aceita.",
      source: "Manual do Novato, pp. 5, 9",
      contentHtml: `
        <div class="talamasca-callout">
          <strong>QUANDO PEDIR:</strong> Faça o primeiro jogo na comunidade e em seguida solicite a abertura da sua ficha no tópico designado da Central. A primeira ficha é gerada por um administrador.
        </div>

        <h3>Campos Obrigatórios do Pedido</h3>
        <div class="talamasca-code-terminal">
Nº da Ficha Geral: [Número livre da lista de fichas gerais]
E-mail: [Seu e-mail para acesso às fichas no dia a dia]
Nome da Ficha Geral: [Identificação do jogador por trás dos personagens]
Nome do Personagem: [Nome do personagem aceito na aprovação]
Filiação: [Parente direto celestial/divino]
Afiliação: [Celestial ou ordem que segue]
Ofício: [Emprego do mundo místico em que atua]
Idade: [Idade do personagem]
Shape: [Duas fotos do shape cortadas em formato padrão]
Individualidades Escolhidas: [Até 3 poderes por nível existente na lista]
Distribuição de Atributos: [Onde você alocará seus pontos disponíveis]
        </div>

        <div class="talamasca-tip-box">
          <strong>Recomendação Oficial para a 1ª Ficha:</strong>
          Coloque sempre <strong>30 HP</strong> e <strong>10 ATK</strong> (se DPS) ou <strong>10 DEF</strong> (se Tanker). Mantenha a coerência com a função primária do seu personagem.
        </div>

        <p class="talamasca-source-note">Cada jogador inicia com direito a <strong>4 slots de personagem</strong> e recebe <strong>10 Orações Celestiais</strong> ao entrar no RPG + 10 a cada ficha inscrita.</p>
      `
    },

    // ══════════════════════════════════════════════════════════
    // SEÇÃO 02: REGISTROS DE PROGRESSÃO & ATRIBUTOS
    // ══════════════════════════════════════════════════════════
    {
      id: "evolucao-xp-niveis",
      categoryId: "personagem-progressao",
      title: "Escala de XP & Ascensão de Níveis (N1 a N10)",
      subtitle: "Marcos numéricos de XP e conversão pós-teto",
      aliases: ["xp", "niveis", "ascensao", "tabela de xp", "teto", "10000 xp"],
      summary: "Progressão de 0 a 10.000 XP. Ao atingir o nível 10, todo XP excedente é convertido em Gold na razão 10 para 1.",
      source: "Manual do Novato, p. 13-14",
      contentHtml: `
        <p>A ascensão de nível é o marco que destrava pontos adicionais de atributos e o teto de novos poderes. São 10 níveis oficiais:</p>

        <div class="table-microfilm-wrap">
          <table class="talamasca-table">
            <thead>
              <tr>
                <th>Nível</th>
                <th>XP Necessário para Ascender</th>
                <th>Pontos de Atributo Ganhos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Nível 01</td><td>0 xp</td><td>1 ponto de atributo</td></tr>
              <tr><td>Nível 02</td><td>600 xp</td><td>1 ponto de atributo</td></tr>
              <tr><td>Nível 03</td><td>1.100 xp</td><td>2 pontos de atributo</td></tr>
              <tr><td>Nível 04</td><td>2.000 xp</td><td>2 pontos de atributo</td></tr>
              <tr><td>Nível 05</td><td>3.000 xp</td><td>2 pontos de atributo</td></tr>
              <tr><td>Nível 06</td><td>4.100 xp</td><td>2 pontos de atributo</td></tr>
              <tr><td>Nível 07</td><td>5.300 xp</td><td>2 pontos de atributo</td></tr>
              <tr><td>Nível 08</td><td>6.600 xp</td><td>2 pontos de atributo</td></tr>
              <tr><td>Nível 09</td><td>8.000 xp</td><td>2 pontos de atributo</td></tr>
              <tr class="talamasca-highlight-row"><td>Nível 10</td><td>10.000 xp</td><td><strong>4 pontos de atributo</strong></td></tr>
            </tbody>
          </table>
        </div>

        <div class="talamasca-callout">
          <strong>CONVERSÃO PÓS-NÍVEL 10:</strong>
          Ao alcançar 10.000 XP, o personagem atinge o teto de nível. A partir deste ponto, todo XP obtido em missões e farms é <strong>automaticamente convertido em Gold</strong> na proporção de <strong>10 XP = 1 Gold</strong> (exemplo: 1.000 XP vira 100 Golds).
        </div>
      `
    },
    {
      id: "atributos-base-canonica",
      categoryId: "personagem-progressao",
      title: "Tabela Canônica de Atributos Base por Nível",
      subtitle: "Valores estatísticos absolutos antes dos pontos distribuídos pelo jogador",
      aliases: ["atributos base", "tabela 3", "hp base", "atk base", "def base", "mana base", "tres grandes", "perpetuos"],
      summary: "Estatísticas fixas de HP, ATK, DEF, Mana, SPD e rolagens padrão por nível, com regras dos Três Grandes e Perpétuos.",
      source: "Compêndio de Regras (Site Antigo) & Manual do Novato",
      contentHtml: `
        <p>Valores inatos de cada personagem em cada nível, antes de computar os pontos adicionais de distribuição:</p>

        <div class="table-microfilm-wrap">
          <table class="talamasca-table">
            <thead>
              <tr>
                <th>Nível</th>
                <th>Rolagem Padrão</th>
                <th>HP</th>
                <th>ATK</th>
                <th>DEF</th>
                <th>Taxa Crit.</th>
                <th>Dano Crit.</th>
                <th>SPD</th>
                <th>MANA</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>01</td><td>10 dados dif. 8</td><td>60</td><td>15</td><td>15</td><td>0%</td><td>50%</td><td>100</td><td>200</td></tr>
              <tr><td>02</td><td>10 dados dif. 7</td><td>110</td><td>20</td><td>20</td><td>0%</td><td>50%</td><td>100</td><td>250</td></tr>
              <tr><td>03</td><td>10 dados dif. 7</td><td>160</td><td>25</td><td>25</td><td>0%</td><td>50%</td><td>100</td><td>300</td></tr>
              <tr><td>04</td><td>10 dados dif. 6</td><td>200</td><td>35</td><td>35</td><td>0%</td><td>50%</td><td>100</td><td>350</td></tr>
              <tr><td>05</td><td>10 dados dif. 6</td><td>240</td><td>45</td><td>45</td><td>0%</td><td>50%</td><td>100</td><td>400</td></tr>
              <tr><td>06</td><td>10 dados dif. 5</td><td>280</td><td>60</td><td>60</td><td>0%</td><td>50%</td><td>100</td><td>450</td></tr>
              <tr><td>07</td><td>10 dados dif. 5</td><td>320</td><td>70</td><td>70</td><td>10%</td><td>60%</td><td>100</td><td>500</td></tr>
              <tr><td>08</td><td>10 dados dif. 4</td><td>380</td><td>80</td><td>80</td><td>10%</td><td>60%</td><td>110</td><td>550</td></tr>
              <tr><td>09</td><td>11 dados dif. 4</td><td>420</td><td>100</td><td>100</td><td>10%</td><td>60%</td><td>120</td><td>600</td></tr>
              <tr class="talamasca-highlight-row"><td>10</td><td>12 dados dif. 3</td><td>500</td><td>130</td><td>130</td><td>10%</td><td>70%</td><td>130</td><td>800</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Doutrina de Linhagem Especial</h3>
        <ul>
          <li><strong>Filhos dos Três Grandes (Zeus, Poseidon, Hades):</strong> Recebem <strong>+30 HP</strong> e <strong>+10% de Taxa Crítica</strong> sobre os valores normais. Não altera o ganho por nível.</li>
          <li><strong>Filhos de Deuses Perpétuos:</strong> Recebem o bônus dos grandes mais <strong>+200 de Mana</strong> e <strong>+10 SPD</strong>.</li>
        </ul>
      `
    },
    {
      id: "conversao-atributos-build",
      categoryId: "personagem-progressao",
      title: "Custo & Conversão de Pontos de Atributo",
      subtitle: "Tabela oficial de conversão de pontos ganhos ao subir de nível",
      aliases: ["conversao", "distribuicao", "pontos de atributo", "hp atk def conversao", "regras de build"],
      summary: "Cada 1 ponto de atributo ganho por nível converte em valores específicos: 10 ATK, 10 DEF, 30 HP, 10% Crítico ou 3 SPD.",
      source: "Regras & Sistemas (Site Antigo) & Manual p. 4",
      contentHtml: `
        <div class="table-microfilm-wrap">
          <table class="talamasca-table">
            <thead>
              <tr>
                <th>Atributo Escolhido</th>
                <th>Custo em Pontos</th>
                <th>Valor de Conversão Efetivo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ATK</strong> (Ataque)</td><td>1 ponto</td><td>+10 ATK</td></tr>
              <tr><td><strong>DEF</strong> (Defesa)</td><td>1 ponto</td><td>+10 DEF</td></tr>
              <tr><td><strong>HP</strong> (Pontos de Vida)</td><td>1 ponto</td><td>+30 HP</td></tr>
              <tr><td><strong>Taxa Crítica</strong></td><td>1 ponto</td><td>+10% Taxa Crit.</td></tr>
              <tr><td><strong>Dano Crítico</strong></td><td>1 ponto</td><td>+10% Dano Crit.</td></tr>
              <tr><td><strong>SPD</strong> (Velocidade)</td><td>1 ponto</td><td>+3 SPD</td></tr>
            </tbody>
          </table>
        </div>

        <div class="talamasca-callout">
          <strong>REGRA DE SELEÇÃO DE PODERES:</strong> Todo personagem tem direito a <strong>3 individualidades por nível</strong> em sua lista divina ou mágica. Se uma habilidade tiver progressão (ex: Nível I, II e Final), é obrigatório adquirir o nível anterior antes do mais avançado.
        </div>
      `
    },

    // ══════════════════════════════════════════════════════════
    // SEÇÃO 03: BALÍSTICA OCULTA & COMBATE
    // ══════════════════════════════════════════════════════════
    {
      id: "rolagem-e-tentativa",
      categoryId: "combate-dados",
      title: "Resolução de Ações & Comando /roll no Discord",
      subtitle: "A mecânica de tentativa e contagem de sucessos",
      aliases: ["rolagem", "roll", "discord", "tentativa", "dificuldade", "sucessos"],
      summary: "Todo combate físico ou mágico é resolvido por disputa de sucessos no bot do Discord via /roll com contagem de sucessos.",
      source: "Regras & Sistemas (Site Antigo) - Acordeão III",
      contentHtml: `
        <h3>A Filosofia da Tentativa</h3>
        <p>Em Neotheon, nada é garantido antecipadamente. Ao narrar um ataque ou esquiva, nunca afirme o acerto absoluto: escreva sempre <strong>"meu personagem tenta atacar"</strong> ou <strong>"tenta se esquivar"</strong>. Os dados determinam a eficácia da ação.</p>

        <h3>Como rolar no Discord</h3>
        <ol>
          <li>Acesse o canal exclusivo de rolagem com o número da sua ficha na aba do servidor.</li>
          <li>Identifique o personagem e a ação (exemplo: <code>Shen — Ataque com Lança</code>).</li>
          <li>Digite o comando no formato: <code>/roll [quantidade]d10 t[dificuldade]</code> (exemplo: <code>/roll 10d10 t5</code> para 10 dados com alvo 5).</li>
          <li>O bot reporta a quantidade de sucessos obtidos. O atacante precisa de <strong>mais sucessos que o defensor</strong> para acertar a ação. Em caso de empate, a tentativa falha.</li>
        </ol>
      `
    },
    {
      id: "formulas-dano-combate",
      categoryId: "combate-dados",
      title: "Fórmulas de Dano: Clássico e Composto",
      subtitle: "Resolução matemática exata de dano físico e mágico",
      aliases: ["dano", "formula", "classico", "composto", "dano real", "rd", "formula de dano"],
      summary: "Combate Clássico (ATK - DEF) vs Combate com Poderes baseado na escala de atributos (ATK 100%, DEF 60%, HP 40%).",
      source: "Regras & Sistemas (Site Antigo) - Sistema de Combate",
      contentHtml: `
        <h3>1. Combate Clássico (Sem Poderes Ativos)</h3>
        <p>Ataques mundanos com punhos ou armas comuns sem gasto de energia:</p>
        <div class="talamasca-code-terminal">
Dano Sofrido = ATK do Atacante − DEF do Defensor
(Se o resultado for zero ou negativo, nenhum dano é causado).
        </div>

        <h3>2. Combate com Poderes (Dano Composto)</h3>
        <p>Quando uma habilidade ativa ou poder divino é desferido. Crítico e Bônus de Dano entram exclusivamente neste modo:</p>
        <ul>
          <li><strong>Base ATK (100% de escala):</strong><br>
            <code>Dano Real = (Nível + [ATK × 1.0]) × Crítico + Bônus de Dano</code>
          </li>
          <li><strong>Base DEF (60% de escala):</strong><br>
            <code>Dano Real = (Nível + [DEF × 0.6]) × Crítico + Bônus de Dano</code>
          </li>
          <li><strong>Base HP (40% de escala):</strong><br>
            <code>Dano Real = (Nível + [HP × 0.4]) × Crítico + Bônus de Dano</code>
          </li>
        </ul>

        <div class="talamasca-tip-box">
          <strong>O que é o Bônus de Dano?</strong>
          É um valor fixo concedido por armas ou bênçãos somado ao final do cálculo. <strong>Não depende de rolagem ou taxa crítica para ativar</strong>: se o golpe acerta, o bônus soma integralmente.
        </div>
      `
    },
    {
      id: "critico-e-rd",
      categoryId: "combate-dados",
      title: "Mecânicas de Crítico & Redução de Dano (RD)",
      subtitle: "Como funcionam o multiplicador crítico e os marcos de 250 a 850 DEF",
      aliases: ["critico", "rd", "reducao de dano", "taxa critica", "dano critico", "defesa"],
      summary: "Crítico parte de 0 dados dif 10. RD mitiga porcentagem fixa de dano antes da subtração de DEF, até o teto de 70%.",
      source: "Regras & Sistemas (Site Antigo) - Acordeão III",
      contentHtml: `
        <h3>Mecânica do Crítico (Exclusivo para Poderes)</h3>
        <p>A rolagem de crítico é um teste à parte que parte de <strong>0 dados com dificuldade 10</strong>:</p>
        <ul>
          <li><strong>Taxa Crítica:</strong> Cada 10% reduz em <strong>−1 a dificuldade</strong> da rolagem de crítico (mínimo de dif. 1).</li>
          <li><strong>Dano Crítico:</strong> Cada 10% adiciona <strong>+1 dado</strong> à rolagem de crítico.</li>
          <li><strong>Multiplicador Final:</strong> <code>(Sucessos de Crítico ÷ 10) + 1.0</code><br>
            (0 sucessos = ×1.0 • 5 sucessos = ×1.5 • 10 sucessos = ×2.0).
          </li>
        </ul>

        <h3>Redução de Dano (RD) por Marcos de DEF</h3>
        <p>A Redução de Dano é uma mitigação percentual que age <strong>antes</strong> da DEF do personagem sofrer o dano:</p>
        <div class="talamasca-code-terminal">
Ordem Canônica de Resolução:
Dano Recebido ➔ Aplica % de RD ➔ Subtrai DEF ➔ Perda de HP
        </div>

        <div class="table-microfilm-wrap">
          <table class="talamasca-table">
            <thead>
              <tr>
                <th>Marco de DEF</th>
                <th>Bônus de HP Concedido</th>
                <th>Redução de Dano (RD)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>250 DEF</td><td>+60 HP</td><td>10% RD</td></tr>
              <tr><td>350 DEF</td><td>+120 HP</td><td>20% RD</td></tr>
              <tr><td>450 DEF</td><td>+180 HP</td><td>30% RD</td></tr>
              <tr><td>550 DEF</td><td>+240 HP</td><td>40% RD</td></tr>
              <tr><td>650 DEF</td><td>+300 HP</td><td>50% RD</td></tr>
              <tr><td>750 DEF</td><td>+360 HP</td><td>60% RD</td></tr>
              <tr class="talamasca-highlight-row"><td>850 DEF</td><td>+420 HP</td><td><strong>70% RD (Limite Máximo do Jogo)</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p class="talamasca-source-note">Atenção: Os marcos não são acumulativos. Ter 850 DEF confere 70% de RD no total, não a soma de todos os degraus anteriores.</p>
      `
    },
    {
      id: "spd-e-mana",
      categoryId: "combate-dados",
      title: "Velocidade (SPD) & Gerenciamento de Mana",
      subtitle: "Iniciativa de turnos, surtos de ação e registro obrigatório de energia",
      aliases: ["spd", "velocidade", "acoes", "surto", "mana", "consumo"],
      summary: "Todos têm 2 ações por turno. Marcos de 200 e 300 SPD concedem surtos de ação extra. Registro de Mana obrigatório a cada turno.",
      source: "Regras & Sistemas (Site Antigo) - SPD & Mana",
      contentHtml: `
        <h3>Marcos de Velocidade (SPD)</h3>
        <p>A iniciativa das ações em eventos e batalhas segue o valor de SPD:</p>
        <ul>
          <li><strong>100 SPD:</strong> Valor base de todos os personagens (concede <strong>2 ações normais por turno</strong>).</li>
          <li><strong>200 SPD:</strong> Concede <strong>+1 surto de ação extra</strong> por turno (3 ações no total).</li>
          <li><strong>300 SPD:</strong> Concede <strong>+2 surtos de ação extra</strong> por turno (4 ações no total).</li>
          <li><strong>Acima de 300 SPD:</strong> A cada +10 pontos de SPD além de 300, o personagem ganha <strong>+5 de ATK passivo</strong> permanente.</li>
        </ul>

        <h3>Gerenciamento e Registro de Mana</h3>
        <p>Todo poder ativo possui um custo de Mana específico. É obrigatório manter o registro no final ou início do seu post de turno:</p>
        <div class="talamasca-code-terminal">
Exemplo correto de turno:
STATUS: Mana: 100/100
[Ação narrada usando Raio Divino (-20 Mana)]
STATUS FINAL: Mana: 80/100 | Poderes Usados: Raio Divino (-20)
        </div>
        <p>Quando a Mana do personagem zera, ele é incapaz de acionar poderes mágicos ou divinos até descansar ou receber recargas.</p>
      `
    },

    // ══════════════════════════════════════════════════════════
    // SEÇÃO 04: ERÁRIO CELESTIAL & BANNERS
    // ══════════════════════════════════════════════════════════
    {
      id: "moedas-e-economia",
      categoryId: "economia-recompensas",
      title: "Economia do RPG: Golds, Contas & Orações",
      subtitle: "Guia completo sobre as três moedas de Neotheon e sua utilidade",
      aliases: ["golds", "contas", "oracoes", "moedas", "economia", "banco", "oracao celestial"],
      summary: "Golds para loja e refinos; Contas Celestiais como moeda de câmbio; Orações Celestiais para rolar no Banner Sazonal.",
      source: "Manual do Novato, pp. 13–14",
      contentHtml: `
        <h3>As Três Moedas da Égide</h3>
        <ul>
          <li><strong>Golds:</strong> A moeda comum e mais abundante. Utilizada para comprar itens na lojinha, pagar a taxa obrigatória de refinamento/criação de 50 Golds aos artesãos e comprar artefatos aleatórios. Pode ser convertida em Contas Celestiais.</li>
          <li><strong>Contas Celestiais:</strong> Moeda de câmbio intermediária. Permite trocar 100 Contas por 100 Golds ou <strong>100 Contas por 1 Oração Celestial</strong>. Em eventos promocionais raros, a taxa de troca pode cair para 50 Contas por 1 Oração.</li>
          <li><strong>Orações Celestiais:</strong> A moeda mais valiosa e cobiçada do RPG. Serve exclusivamente para atirar no <strong>Banner Sazonal Ativo</strong> e obter armas exclusivas, artefatos raros e bênçãos de classe.</li>
        </ul>

        <div class="talamasca-callout warning">
          <strong>Regra de Ouro da Economia:</strong> Nunca gaste todas as suas contas de uma só vez, a menos que haja um banner prioritário da filiação do seu personagem ou promoção de conversão no servidor.
        </div>
      `
    },
    {
      id: "banner-e-prioridades",
      categoryId: "economia-recompensas",
      title: "Banners Sazonais & Gestão de Gastos",
      subtitle: "Probabilidades do gacha no d20 e táticas de invocação",
      aliases: ["banner", "gacha", "d20", "tiros", "pity", "r5", "bencao assinatura"],
      summary: "Cada Oração Celestial gasta rola 1d20. Tirar 20 garante o prêmio da rodada. Estimativa de 100 orações para 3 armas e 1 bênção garantida.",
      source: "Manual do Novato, pp. 13, 16",
      contentHtml: `
        <h3>Como funciona o Banner Sazonal</h3>
        <p>Os banners sazonais funcionam como um sorteio estilo gacha conduzido com a moderação:</p>
        <ul>
          <li>A cada <strong>1 Oração Celestial gasta</strong>, o jogador rola <strong>1d20</strong>.</li>
          <li>Toda vez que obtiver o resultado <strong>20 natural</strong>, conquista um prêmio especial (Bênção, Arma ou Artefato em destaque).</li>
          <li>Os banners costumam ficar ativos de <strong>15 a 30 dias</strong> no servidor.</li>
        </ul>

        <h3>Ordem de Prioridade Recomendada para Gastos</h3>
        <ol>
          <li><strong>Bênção Assinatura do seu Personagem:</strong> Se o banner atual traz a bênção da sua divindade, prioridade absoluta. Os banners demoram muitos meses para retornar!</li>
          <li><strong>Banners Populares de Alta Troca:</strong> Banners com itens muito procurados facilitam negociações futuras com outros jogadores.</li>
          <li><strong>Armas Boas em Banners Ruins:</strong> Vale a pena atirar se a arma complementar diretamente a sua build.</li>
          <li><strong>Banner dos Vestígios:</strong> Recomendado apenas se suas reservas de orações estiverem confortáveis e sobrando.</li>
        </ol>
      `
    },

    // ══════════════════════════════════════════════════════════
    // SEÇÃO 05: OPERAÇÕES DE CAMPO & FARM
    // ══════════════════════════════════════════════════════════
    {
      id: "guia-farm-estagios",
      categoryId: "atividades-rotina",
      title: "Guia de Farm por Estágio de Personagem",
      subtitle: "Roteiro de atividades recomendadas do Nível 1 ao Nível 10",
      aliases: ["farm", "sereias", "scyllas", "abismo", "rotina", "estagios", "porca"],
      summary: "Rotas ideais de progressão: carona em Sereias no N1 a N4; suporte em Abismo no N5 a N9; autonomia e Berçário Espiral no N10.",
      source: "Manual do Novato, pp. 18–19",
      contentHtml: `
        <h3>1. Estágio: Nível 1 ao Nível 4 (Foco em atingir 3.000 XP)</h3>
        <ul>
          <li><strong>Sereias/Scyllas com Veterano (Carona):</strong> 1x por semana. Um único turno rende <strong>1.200 XP, 1.000 Contas Celestiais e 25 Orações</strong>. Peça ajuda a agentes experientes no canal de interações!</li>
          <li><strong>Variantes Vermelhas Interpretativas:</strong> Roteiros como Anarquia e Promessa do Grifo com rolagem interpretativa de 1d20. Rende até <strong>1.700 XP</strong> semanais sem risco físico.</li>
          <li><strong>Abismo Espiral (Novato):</strong> Primeira realização rende cerca de <strong>60 Orações</strong> e alto XP em sessão narrada.</li>
          <li><strong>Missões Sazonais Verdes:</strong> Quatro turnos interpretativos fecham os 3.000 XP com tranquilidade.</li>
        </ul>

        <h3>2. Estágio: Nível 5 ao Nível 9 (Transição para Combate)</h3>
        <ul>
          <li><strong>Sereias/Scyllas como Suporte:</strong> Agora você já contribui com buffs e proteção, tornando o combate dinâmico.</li>
          <li><strong>Eventos de Campanha (Empyrean, Fate):</strong> Primeiros atos são focados em interpretação e entregam recompensas de alto calibre.</li>
          <li><strong>Missões Fixas das Keres:</strong> Desafio seguro para farmar artefatos base com ataques em área.</li>
        </ul>

        <h3>3. Estágio: Nível 10 Forte (O Endgame de Avalon)</h3>
        <ul>
          <li><strong>Trama Geral:</strong> Onde se encontram as melhores premiações do jogo.</li>
          <li><strong>Berçário Espiral (A Porca):</strong> Alto desafio tático para 4 jogadores em call ou turnos coordenados. Prêmios superiores ao Abismo normal.</li>
          <li><strong>Carregar Novos Agentes:</strong> Auxiliar novatos da sua guilda e agilizar o farm dos seus próprios personagens secundários.</li>
        </ul>
      `
    },
    {
      id: "regras-semanais-rotina",
      categoryId: "atividades-rotina",
      title: "Políticas de Boa Vizinhança & Limites Semanais",
      subtitle: "Regras de convivência em tópicos, atualização de fichas e prazos",
      aliases: ["rotina", "reset", "limite semanal", "baú", "atualizacao de ficha", "topicos"],
      summary: "Resets ocorrem de domingo para segunda. Atualização de ficha e baús deve ser feita logo após o término do farm.",
      source: "Manual do Novato, p. 21",
      contentHtml: `
        <h3>Diretrizes Gerais de Farm do Malandro</h3>
        <ul>
          <li><strong>Flexibilidade de Tópicos:</strong> Se o tópico principal (ex: SOHO) estiver ocupado, a cena de caça pode ser realizada em qualquer outro tópico com nome semelhante ou ambiente coerente (exemplo: água para Scyllas).</li>
          <li><strong>Atualização Imediata de Fichas:</strong> Atualize seus ganhos no tópico de fichas logo após concluir a missão. Não acumule pendências para não perder registros de itens.</li>
          <li><strong>Reset Semanal:</strong> Todos os limites de farm semanal resetam na virada de domingo para segunda-feira.</li>
          <li><strong>Junção de Linhas:</strong> Se uma missão exigir 3 turnos de 10 linhas, você pode publicar um turno único e coeso de 30 linhas com o mesmo valor de validação.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════════
    // SEÇÃO 06: OFICINAS ARCANAS & MANUFATURA
    // ══════════════════════════════════════════════════════════
    {
      id: "sistema-criacao-artesaos",
      categoryId: "criacao-refinamento",
      title: "Sistema de Criação: Forja, Encantamento, Boticário & Genética",
      subtitle: "Regras completas de fabricação artesanal para agentes especializados",
      aliases: ["forja", "encantamento", "boticario", "genetica", "refino", "criacao", "artesaos", "shabits", "50 golds"],
      summary: "Diretrizes de criação para Forjadores, Encantadores, Boticários e Manipuladores Genéticos. Taxa obrigatória de 50 Golds.",
      source: "Regras & Sistemas (Site Antigo) - Sistema de Criação",
      contentHtml: `
        <div class="talamasca-callout danger">
          <strong>TAXA OBRIGATÓRIA DE 50 GOLDS:</strong>
          Qualquer serviço de refino ou fabricação deve cobrar <strong>50 Golds por trabalho realizado</strong>, independente do nível do artesão. A prestação de serviços gratuitos é proibida e sujeita a sanções no RPG.
        </div>

        <h3>1. Forjadores (Hefesto, Atena, Saus)</h3>
        <p>Criam armas mecânicas, armaduras pesadas, autômatos e <strong>Shabits</strong> (bonecos de argila egípcios com ativação vocal):</p>
        <ul>
          <li><strong>Iniciante (N3-4):</strong> 1 Brando interpretativo • 1 atributo de bônus.</li>
          <li><strong>Intermediário (N5-6):</strong> 2 Brandos • 2 atributos • Autômato nível 4.</li>
          <li><strong>Mestre (N7):</strong> 1 Moderado + 1 Brando • 3 atributos • Autômato nível 8.</li>
          <li><strong>Supremo (N10+):</strong> 1 Forte • 4 atributos • Autômato nível 10.</li>
        </ul>

        <h3>2. Encantadores (Hécate, Circe, Utgardlok, Loki, Gullveig, Saus)</h3>
        <p>Imbuem magia do próprio grimório em objetos e podem refinar bênçãos do Banner Sazonal:</p>
        <ul>
          <li><strong>Iniciante:</strong> 1 Brando • 1 atributo.</li>
          <li><strong>Intermediário:</strong> 1 Moderado • 2 atributos.</li>
          <li><strong>Mestre:</strong> 2 Moderados + 1 Brando • 3 atributos.</li>
          <li><strong>Supremo:</strong> 1 Forte + 1 Moderado • 4 atributos.</li>
        </ul>

        <h3>3. Boticários (Deméter, Perséfone, Asclépio, Circe, Sunus)</h3>
        <p>Elaboram poções, tônicos e venenos. <strong>Todas as poções são de USO ÚNICO</strong> e devem ser excluídas da ficha após o consumo:</p>
        <ul>
          <li><strong>Iniciante:</strong> Cicatrização simples • 1 Brando • 2 atributos.</li>
          <li><strong>Intermediário:</strong> Remédios e venenos • 1 Moderado • 3 atributos.</li>
          <li><strong>Mestre:</strong> Melhorias físicas e óleos de armas • 1 Forte • 4 atributos.</li>
          <li><strong>Supremo:</strong> Soluções genéticas avançadas • 1 Perfeito • 5 atributos.</li>
        </ul>

        <h3>4. Manipuladores Genéticos (Asclépio, Sunu)</h3>
        <p>Promovem mutações em pets e criaturas. Podem conceder rolagem de dados OU atributos bônus (jamais os dois juntos). Cobram 50 Golds para refinar pets de banner.</p>
      `
    },

    // ══════════════════════════════════════════════════════════
    // SEÇÃO 07: CÓDICE DE CONVIVÊNCIA
    // ══════════════════════════════════════════════════════════
    {
      id: "codigo-conduta-egide",
      categoryId: "convivencia-interpretacao",
      title: "Código de Conduta da Égide: Os 10 Mandamentos",
      subtitle: "Normas de convivência, turnos de 600px e respeito aos jogos",
      aliases: ["regras", "conduta", "convivencia", "mandamentos", "600px", "respeito", "alerta 18"],
      summary: "As 10 regras fundamentais de respeito, formatação de postagens e convivência em comunidade.",
      source: "Regras & Sistemas (Site Antigo) - Acordeão I",
      contentHtml: `
        <ol class="talamasca-ordered-list">
          <li><strong>Não invente o que não tem:</strong> É proibido presumir posse de armas ou itens não registrados formalmente na sua ficha.</li>
          <li><strong>Deixe seus atributos visíveis no turno:</strong> Informe sempre ATK, DEF e HP atuais para facilitar a conferência pelo mestre e adversários.</li>
          <li><strong>Respeite o sistema de combate:</strong> Utilize estritamente os bônus concedidos por seus poderes e equipamentos aprovados.</li>
          <li><strong>Bom senso com tópicos alheios:</strong> Respeite cenas em andamento (regra das 72h). Caso um tópico esteja ocupado, utilize as réplicas disponíveis.</li>
          <li><strong>Você não faz, você tenta:</strong> Toda investida combativa ou mágica é uma tentativa. A resolução cabe aos dados.</li>
          <li><strong>Não existe patente exclusiva:</strong> Itens criados podem ser obtidos por outros jogadores em tramas futuras; preze pela originalidade sem plágio.</li>
          <li><strong>Turnos com extensão mínima de 600px:</strong> Para garantir padrão de qualidade narrativa nas cenas oficiais.</li>
          <li><strong>Educação e civilidade:</strong> Conflitos e rivalidades pertencem exclusivamente aos personagens na ficção, nunca aos jogadores no off.</li>
          <li><strong>Conteúdo adulto (+18):</strong> O RPG é destinado a maiores. Temas eróticos ou violentos devem conter aviso explícito de <strong>ALERTA +18</strong> no início do turno.</li>
          <li><strong>Uso de títulos dos personagens:</strong> Respeite os títulos e honrarias conquistados em campanhas pelos personagens veteranos.</li>
        </ol>
      `
    },

    // ══════════════════════════════════════════════════════════
    // SEÇÃO 08: LINHAGENS & MESTIÇOS
    // ══════════════════════════════════════════════════════════
    {
      id: "classificacao-premiacoes",
      categoryId: "regras-especificas",
      title: "Classificação de Premiações (Graus IV a VI) & Mestiços",
      subtitle: "Escala de poder de itens raros e critérios para personagens híbridos",
      aliases: ["mesticos", "estrelas", "premios", "4 estrelas", "5 estrelas", "6 estrelas", "itens raros", "grau iv", "grau v", "grau vi"],
      summary: "Diretrizes sobre artefatos de Grau IV, V e VI (imutáveis) e critérios editoriais para criação de mestiços.",
      source: "Regras & Sistemas (Site Antigo)",
      contentHtml: `
        <h3>Graus de Rastreabilidade de Premiações</h3>
        <ul>
          <li><strong>Grau IV (Nível 4):</strong> Potencial interpretativo forte. Bênçãos com 6 atributos (1 Forte + 1 Mediano) ou armas com 4 atributos (2 Medianos). Podem ser refinadas por artesãos intermediários.</li>
          <li><strong>Grau V (Nível 5):</strong> Potencial no mínimo perfeito. Representam o ápice do poder mítico. Bênçãos com 10 a 12 atributos que podem ser melhoradas em eventos especiais.</li>
          <li><strong>Grau VI (Nível 6 — Raro):</strong> Itens únicos e singulares conquistados exclusivamente em campanhas de alto risco. <strong>Não podem ser aprimorados, fundidos ou refinados por nenhum artesão.</strong></li>
        </ul>

        <h3>Doutrina de Mestiços & Linhagens Duplas</h3>
        <p>A criação de personagens mestiços é uma mecânica sensível sujeita a aprovação expressa da moderação na Central. Personagens com dupla filiação divina possuem regras específicas de divisão de poderes para manter o equilíbrio tático do RPG.</p>
      `
    },

    // ══════════════════════════════════════════════════════════
    // SEÇÃO 09: TABELAS & TERMOS CANÔNICOS
    // ══════════════════════════════════════════════════════════
    {
      id: "glossario-mecanico",
      categoryId: "tabelas-termos",
      title: "Glossário Mecânico & Termos da Égide",
      subtitle: "Índice de siglas e terminologias de jogo para consulta ágil",
      aliases: ["glossario", "termos", "siglas", "atk", "def", "hp", "spd", "rd", "dot", "shabit"],
      summary: "Definições diretas de ATK, DEF, HP, SPD, RD, DoT, Bônus de Dano, Resfriado e Shabits.",
      source: "Compilação Geral de Regras",
      contentHtml: `
        <div class="table-microfilm-wrap">
          <table class="talamasca-table">
            <thead>
              <tr>
                <th>Termo / Sigla</th>
                <th>Definição Canônica</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>HP</strong></td><td>Pontos de Vida. Quando zerados, o personagem entra em estado de incapacitação ou morte clínica.</td></tr>
              <tr><td><strong>ATK</strong></td><td>Ataque. Representa a força e o potencial de dano físico de uma ação.</td></tr>
              <tr><td><strong>DEF</strong></td><td>Defesa. Resistência a impactos físicos e mitigação direta de dano no cálculo clássico.</td></tr>
              <tr><td><strong>SPD</strong></td><td>Velocidade. Determina a ordem das jogadas e confere ações adicionais em 200 e 300 pontos.</td></tr>
              <tr><td><strong>RD</strong></td><td>Redução de Dano. Porcentagem de atenuação sofrida antes da aplicação da DEF (marcos de 250 a 850 DEF).</td></tr>
              <tr><td><strong>DoT</strong></td><td>Damage over Time (Dano por Turno contínuo).</td></tr>
              <tr><td><strong>Bônus de Dano</strong></td><td>Valor numérico fixo que se soma ao dano composto sem necessitar de taxa crítica.</td></tr>
              <tr><td><strong>Shabit</strong></td><td>Autômato egípcio de argila ativado por comando vocal para suporte ou combate.</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],

  // ── ACERVO DA PRESENÇA (FAQS PRÉ-REVISADAS • SEM IA) ──
  presenceFaqs: [
    {
      id: "faq-primeira-ficha",
      question: "Como crio e peço minha primeira ficha?",
      category: "Iniciação",
      docId: "pedido-ficha-oficial",
      answer: "Após realizar seu primeiro jogo na comunidade, solicite sua ficha no tópico da Central. Preencha os campos com número livre da lista, e-mail, nome do personagem, filiação, ofício, fotos do shape e escolha de 3 individualidades por nível. A recomendação padrão de atributos para iniciantes é 30 HP e 10 ATK (para DPS) ou 10 DEF (para Tanker)."
    },
    {
      id: "faq-distribuicao-atributos",
      question: "Como funciona a distribuição de atributos ao subir de nível?",
      category: "Progressão",
      docId: "conversao-atributos-build",
      answer: "Ao ascender de nível você recebe pontos de atributo. Cada 1 ponto investido se converte em: +10 ATK, +10 DEF, +30 HP, +10% de Taxa Crítica, +10% de Dano Crítico ou +3 SPD. Cada personagem escolhe até 3 individualidades por nível da sua lista divina ou mágica, respeitando a progressão de Níveis I, II e Final."
    },
    {
      id: "faq-progressao-xp",
      question: "Quanto XP é necessário do Nível 1 ao Nível 10?",
      category: "Progressão",
      docId: "evolucao-xp-niveis",
      answer: "A progressão inicia no Nível 1 com 0 XP e culmina no Nível 10 com 10.000 XP (passando por N2=600, N3=1.100, N4=2.000, N5=3.000, N6=4.100, N7=5.300, N8=6.600 e N9=8.000). Ao atingir 10.000 XP, o personagem atinge o teto e todo XP subsequente converte-se em Gold na proporção de 10 XP para 1 Gold."
    },
    {
      id: "faq-formulas-dano",
      question: "Quais são as fórmulas de dano (Clássico e com Poderes)?",
      category: "Combate",
      docId: "formulas-dano-combate",
      answer: "No Combate Clássico sem magia: Dano = ATK - DEF. No Combate com Poderes Ativos (Dano Composto), o cálculo baseia-se na escala do poder: (Nível + [ATK x 1.0]) x Crítico + Bônus de Dano; ou com base DEF: (Nível + [DEF x 0.6]) x Crítico + Bônus; ou com base HP: (Nível + [HP x 0.4]) x Crítico + Bônus. A Redução de Dano (RD) mitiga porcentagem antes da DEF."
    },
    {
      id: "faq-oracoes-banners",
      question: "Como funcionam as moedas e os Banners Sazonais?",
      category: "Erário Celestial",
      docId: "banner-e-prioridades",
      answer: "Neotheon possui Golds (itens da loja e refinos de 50G), Contas Celestiais (100 contas = 1 oração) e Orações Celestiais. A Oração serve para atirar no Banner Sazonal rolando 1d20: tirar 20 natural garante um prêmio especial (arma, bênção ou artefato). Priorize sempre a bênção assinatura da sua filiação."
    },
    {
      id: "faq-primeiro-jogo-novato",
      question: "O que um novato deve fazer no primeiro dia de jogo?",
      category: "Iniciação",
      docId: "primeira-inscricao-jogo",
      answer: "Crie uma cena de novato recém-chegado à Égide ou salvo por agentes veteranos. Ganhe XP seguro com turnos livres (10 XP a cada 40 palavras) ou missões verdes de evento. Não entre em combates reais antes do Nível 5 para evitar morte permanente. Ao atingir o Nível 1 com jogo aceito, solicite sua primeira ficha na Central."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.TERMINAL_DATABASE = TERMINAL_DATABASE;
}

// Exportação compatível com ambientes browser e Node/ESM
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TERMINAL_DATABASE };
}
