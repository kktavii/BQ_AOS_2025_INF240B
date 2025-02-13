# AOS

Curso AOS Bento Quirino

---

### Tarefa para o dia 20/02/2025

- [ ] Adicionar a requisição de atualização da tarefa.
- [ ] Adicionar a requisição de exclusão da tarefa.

#### Passo a passo:

No arquivo `src/index.ts`:

1. Adicionar a requisição de atualizar a tarefa utilizando o método PUT (`app.put`) e a rota `/tarefas/:id` e adicione a lógica:

   - Encontrar a tarefa pelo id
   - Atualizar a tarefa
   - Salvar as alterações no arquivo tasks.json
   - Retornar a tarefa atualizada

2. Adicionar a requisição de exclusão da tarefa utilizando o método DELETE (`app.delete`) e a rota `/tarefas/:id` e adicione a lógica:

   - Encontrar a tarefa pelo id
   - Excluir a tarefa
   - Salvar as alterações no arquivo tasks.json
   - Retornar uma mensagem de sucesso com o status code 204 (No Content)

#### Para rodar o projeto Tasks Rest Service

No terminal execute os comandos:

```bash
cd tasks_rest_service
yarn
yarn start
```

#### Para testar as requisições

1. Abra o arquivo `task_rest_requests.restbook` no VSCode. (Se estiver usando ele dentro do stackblitz, lembre-se de instalar o plugin REST Book);
2. Do lado esquerdo você verá um pequendo botão triangular em cada uma das requisições. Ao clicar no botão a requisição será enviada;
3. Você verá o retorno da requisição abaixo dela.

OBS: O servidor deve estar rodando (`yarn start`) para que as requisições funcionem.

---
