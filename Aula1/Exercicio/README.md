## Criar um seviço que tenha uma lista de "strings" com tarefas:

Para isso, crie uma pasta chamada "dados" e dentro dela crie um arquivo chamado "tasks.ts" e adicione a lista de tarefas:

- Levar cachorro para o veterinário
- Ir ao dentista
- Ir ao shopping
- Ir ao parque
- Ir ao cinema
- Ir ao parque
- Ir ao cinema

Depois, modifique o arquivo "index.ts" para que ele retorne a lista de tarefas como fizemos em sala de aula, porém deve retornar ao usuário a lista completa das tarefas:

```
     res.send(tarefas);
```

Teste a sua aplicação subindo o servidor e a aplicação do frontend que está nessa pasta para ver a lista completa das tarefas.

## Para subir o frontend

```
yarn install
yarn dev
```

## Para subir o servidor backend

```
yarn install
yarn start
```
