
Cada pasta de aula é um projeto React Native independente, com sua própria configuração e dependências.

---

## Como Executar Cada Projeto

1. **Acesse a pasta da aula desejada:**
   ```bash
   cd aula01 # ou aula02, aula03
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o projeto:**
   ```bash
   npx expo start
   ```

4. **Abra o app no emulador ou dispositivo físico:**
   - Use o aplicativo Expo Go para escanear o QR Code exibido no terminal ou navegador.

---

## Dependências Principais

As dependências podem variar entre as aulas, mas geralmente incluem:

- **react**
- **react-native**
- **expo**

Para ver todas as dependências, consulte o arquivo `package.json` de cada pasta.

---

## Estrutura dos Arquivos

- `App.js`: Componente principal da aplicação.
- `index.js`: Ponto de entrada do app.
- `package.json`: Gerenciamento de dependências e scripts.
- `assets/`: Imagens, fontes e outros recursos estáticos.
- `src/`: Componentes, telas e lógica da aplicação (pode estar vazio em algumas aulas).
- `babel.config.js`: Configuração do Babel (presente na aula03).
- `.gitignore`: Arquivos e pastas ignorados pelo Git.

---

## Boas Práticas e Dicas

- **Organização:** Mantenha componentes reutilizáveis na pasta `src/`.
- **Segurança:** Nunca exponha dados sensíveis (tokens, senhas) no código.
- **Performance:** Utilize imagens otimizadas e evite lógica pesada no componente principal.
- **Versionamento:** Use o Git para versionar seu código e criar checkpoints das aulas.
- **Documentação:** Comente trechos importantes do código para facilitar o entendimento.

---

## Licença

Este projeto é de uso educacional. Sinta-se à vontade para estudar, modificar e compartilhar!

---

## Contato

Dúvidas ou sugestões? Entre em contato com o instrutor ou abra uma issue neste repositório.
