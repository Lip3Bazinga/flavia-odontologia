// Dados institucionais usados em mais de um lugar do site.
// Centralizados aqui para não divergirem entre rodapé, "Sobre" e JSON-LD.

/**
 * Número de inscrição no Conselho Regional de Odontologia.
 *
 * ⚠️ PENDENTE — preencher antes de publicar.
 *
 * A Resolução CFO 196/2019 exige que toda publicidade odontológica exiba o
 * nome do profissional e o número de inscrição no CRO. Enquanto esta constante
 * estiver vazia, o site omite o trecho por completo em vez de exibir um número
 * falso — publicar "CRO-SP 00000" seria pior do que não exibir nada.
 *
 * Formato esperado: 'CRO-SP 12345'
 */
export const CRO = 'CRO-SP 77010'

export const NOME_PROFISSIONAL = 'Dra. Flávia Jardim'

/**
 * Nome fantasia — como a clínica se apresenta ao público.
 *
 * É o que vai no rodapé, no aviso de direitos autorais e em qualquer lugar
 * voltado ao paciente. Não confundir com RAZAO_SOCIAL abaixo: são coisas
 * diferentes e, neste caso, com nomes diferentes.
 */
export const NOME_FANTASIA = 'Flávia Jardim Odontologia'

/**
 * Razão social registrada na Receita Federal, vinculada ao CNPJ.
 *
 * Usada **apenas** na Política de Privacidade, para identificar o controlador
 * dos dados. A LGPD (Art. 9º, I) exige identificação inequívoca de quem trata
 * os dados, e quem responde juridicamente é a pessoa jurídica registrada —
 * não o nome fantasia sob o qual ela opera.
 *
 * Note que o nome não contém "Flávia Jardim": a clínica opera sob nome
 * fantasia distinto da razão social. Isso é normal e não é erro de cadastro.
 */
export const RAZAO_SOCIAL = 'Carlos Eduardo da Silva Catin e Companhia Ltda.'

export const EMAIL_CONTATO = 'contato@flaviajardim.com.br'
export const TELEFONE_EXIBICAO = '(16) 99404-6647'
export const ENDERECO = 'Av. São Vicente, 4315 — Jd. Noemia, Franca/SP'

/**
 * CNPJ da clínica, exibido na Política de Privacidade.
 *
 * ⚠️ PENDENTE — preencher antes de publicar.
 *
 * A LGPD (Art. 9º, I e II) exige que o titular saiba **quem** é o controlador
 * dos seus dados. Razão social sozinha identifica de forma fraca; o CNPJ é o
 * que torna o controlador inequívoco. Mesma regra do CRO acima: enquanto
 * estiver vazio, a página omite o trecho em vez de inventar um número.
 *
 * Formato esperado: '00.000.000/0001-00'
 */
export const CNPJ = '11.676.874/0001-80'
