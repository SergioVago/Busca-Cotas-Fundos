# Backend

O backend foi estruturado em AdonisJS e o banco de dados utilizado foi o postgres.

O rota principal é a [api.cotas.org/funds](http://api.cotas.org/funds) que lista todos os fundos cadastrados no nosso DB.
As outras rotas são auxiliares (consultas específicas, criação, deleção e atualização).

A rota [api.cotas.org/funds/aux/updateAll](http://api.cotas.org/funds/aux/updateAll) é utilizada para atualizar nosso DB com a cota do dia de cada fundo

 
| Route                 | Verb(s)   | Handler                      | Name                  |
|-----------------------|-----------|------------------------------|-----------------------|
| /funds                | HEAD,GET  | FundController.index         | funds.index           |
|-----------------------|-----------|------------------------------|-----------------------|
| /funds                | POST      | FundController.store         | funds.store           |
|-----------------------|-----------|------------------------------|-----------------------|
| /funds/:id            | HEAD,GET  | FundController.show          | funds.show            |
|-----------------------|-----------|------------------------------|-----------------------|
| /funds/:id            | PUT,PATCH | FundController.update        | funds.update          |
|-----------------------|-----------|------------------------------|-----------------------|
| /funds/:id            | DELETE    | FundController.destroy       | funds.destroy         |
|-----------------------|-----------|------------------------------|-----------------------|
| /funds/aux/cnpj/:cnpj | HEAD,GET  | AuxFundsController.show      | /funds/aux/cnpj/:cnpj |
|-----------------------|-----------|------------------------------|-----------------------|
| /funds/aux/updateAll  | HEAD,GET  | AuxFundsController.updateAll | /funds/aux/updateAll  |
