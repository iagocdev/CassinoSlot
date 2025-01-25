# CassinoSlot
Aqui está uma documentação detalhada do seu projeto, que pode ser usada para explicar como o código funciona e o que cada parte faz. A documentação inclui uma visão geral do projeto, uma descrição de cada arquivo e uma explicação de funções chave.

---

# **Documentação do Projeto: Jogo da Roda da Fortuna**

## **Visão Geral**

O projeto é um jogo interativo da "Roda da Fortuna" baseado em HTML, CSS e JavaScript. O objetivo do jogo é girar a roda (simulada com uma máquina de slots) e tentar alinhar três símbolos idênticos em uma das linhas, colunas ou diagonais do grid. Os jogadores começam com 10 créditos e podem recarregar créditos utilizando um código de pagamento simulado. Quando o jogador ganha, uma animação de fogos de artifício é acionada.

### **Funcionalidades Principais:**
1. **Cadastro do Jogador**: O jogador deve fornecer seu nome completo e telefone para começar o jogo.
2. **Máquina de Slots**: A roda é composta por 9 símbolos e o objetivo é alinhar 3 símbolos iguais nas linhas, colunas ou diagonais para ganhar créditos.
3. **Sistema de Créditos**: O jogador começa com 10 créditos e pode adicionar mais créditos através de um sistema simulado de Pix.
4. **Animação de Fogos de Artifício**: Quando o jogador ganha, é ativada uma animação de fogos de artifício na tela.
5. **Interface Responsiva**: O jogo foi desenvolvido para ser responsivo, funcionando bem em diferentes dispositivos móveis e desktop.

---

## **Estrutura do Projeto**

Este projeto é dividido em três arquivos principais: HTML, CSS e JavaScript.

### **1. index.html**
Este arquivo contém a estrutura básica da página web, incluindo os elementos HTML necessários para o cadastro do usuário e a exibição da interface do jogo.

#### **Descrição das principais seções:**
- **Cadastro de usuário**: Uma tela inicial onde o jogador insere seu nome e telefone.
- **Tela do jogo**: Exibe a máquina de slots com 9 "reels" e um botão para girar a roda.
- **Modal Pix**: Tela que permite ao usuário adicionar créditos ao simular um pagamento via Pix.
- **Canvas para animação de fogos de artifício**: Área onde ocorre a animação de fogos de artifício quando o jogador ganha.

### **2. styles.css**
Este arquivo contém os estilos da página. Ele define a aparência do jogo, incluindo cores, layouts e animações.

#### **Principais seções de estilo:**
- **Layout Flexível**: A página utiliza o modelo Flexbox para centralizar os elementos na tela, tornando o design mais responsivo.
- **Estilos da máquina de slots**: Os "reels" (roletas) têm um design de grid com bordas, sombras e um fundo gradiente.
- **Botões**: Os botões de ação possuem efeitos de hover e clique, dando uma experiência interativa.
- **Modal de recarga de créditos**: O modal aparece quando o jogador precisa adicionar mais créditos, com um fundo semi-transparente e um botão de fechamento.

### **3. script.js**
Este arquivo contém toda a lógica do jogo, incluindo a verificação de vitória, manipulação de créditos e animação de fogos de artifício.

#### **Funções principais:**

1. **`validateRegistration()`**: 
   - Valida o nome completo (precisa ter ao menos dois nomes) e o telefone (deve ter 11 dígitos no formato brasileiro).
   - Retorna `true` se as informações forem válidas, caso contrário, exibe um alerta.
   
2. **`validateAndStartGame()`**: 
   - Chama a função `validateRegistration()` para validar as informações inseridas pelo usuário.
   - Se a validação for bem-sucedida, exibe a tela do jogo e uma mensagem de boas-vindas personalizada.

3. **`spinReels()`**: 
   - Gira a máquina de slots, reduzindo um crédito a cada rodada.
   - Verifica se o jogador ganhou com a função `checkWin()` e exibe o resultado na tela.
   - Se houver vitória, a função `triggerFireworks()` é chamada para exibir a animação de fogos de artifício.

4. **`checkWin(reels)`**: 
   - Verifica se há uma vitória, ou seja, se há três símbolos iguais em alguma linha, coluna ou diagonal.
   - Se houver vitória, adiciona 50 créditos ao jogador e exibe uma mensagem de vitória.

5. **`openPixModal()` e `closePixModal()`**: 
   - Controlam a exibição do modal de recarga de créditos.
   - Quando o jogador clica em "Recarregar Créditos", o modal aparece e oferece opções para adicionar créditos.

6. **`addCredits(amount)`**: 
   - Adiciona créditos ao jogador. O valor pode ser 10, 50 ou 100 créditos, dependendo da escolha no modal.

7. **`triggerFireworks()`**: 
   - Exibe uma animação de fogos de artifício no canvas quando o jogador ganha.
   - Cria efeitos visuais com círculos amarelos que aumentam de tamanho e desaparecem com o tempo.

---

## **Funcionamento do Jogo**

1. **Cadastro**: O jogador deve preencher um formulário com nome completo e telefone. O formulário será validado antes de permitir o início do jogo.
   
2. **Tela do Jogo**: Após o cadastro, o jogador verá a tela do jogo com uma máquina de slots composta por 9 "reels" (carretéis). Cada reel contém um símbolo aleatório (como frutas ou outros ícones).
   
3. **Rodada**: O jogador clica no botão "Girar" para rodar os reels. A cada rodada, o jogador perde um crédito. Se o jogador alinhar três símbolos iguais em qualquer linha, coluna ou diagonal, ele ganha 50 créditos adicionais.

4. **Recarregar Créditos**: Caso o jogador não tenha créditos suficientes para jogar, ele pode clicar em "Recarregar Créditos", que abrirá um modal onde ele pode simular uma recarga de créditos usando um código Pix.

5. **Animação de Fogos de Artifício**: Quando o jogador ganha, uma animação de fogos de artifício é exibida no fundo da tela para celebrar a vitória.

---

## **Tecnologias Utilizadas**

- **HTML5**: Para a estrutura da página.
- **CSS3**: Para os estilos, incluindo flexbox e animações de botão.
- **JavaScript**: Para a lógica do jogo, como o giro da máquina de slots, verificação de vitórias e animação de fogos de artifício.

---

## **Conclusão**

Este projeto é um jogo simples, mas interativo, que utiliza HTML, CSS e JavaScript para criar uma experiência divertida e dinâmica. Ele combina elementos de um jogo de azar (máquina de slots) com uma interface de usuário moderna e responsiva, além de adicionar um toque de animação para tornar a experiência mais envolvente.
