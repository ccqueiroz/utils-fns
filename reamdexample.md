# apiGetCep | BuscaCepsBrasil - <img alt="GitHub" src="https://img.shields.io/github/license/ccqueiroz/buscacepbrasil">

A apiGetCep disponibiliza a consulta de endereçamento com base nos ceps do território brasileiro.

São catalogado cerca de 1.264.636 ceps, alocados em banco de dados próprio.

Informações disponíveis para acesso via API:
+ cep
+ logradouro
+ complemento
+ bairro
+ cidade
+ estado
+ uf
+ endereço Postal

## URL de acesso
Para realizar consultas de endereçamento utilize: `https://apigetcep.cloud/:cep`, onde `":cep"` deverá ser a numeração do cep que deseja buscar as informações.
- Exemplo: https://apigetcep.cloud/77001219

## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de endereçamentos. |

## Respostas
| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `405` | Método não permitido.|
| `422` | Dados informados estão fora do escopo definido para o campo.|
| `429` | Número máximo de requisições atingido. (*aguarde alguns segundos e tente novamente*)|
| `500` | Erro interno do servidor.|

## Limites (Rate Limiting)
Existe o limite de `30` requisições por minuto por aplicação/usuário, onde é possível realizar até `5` consultas a cada `10` segundos.

Por questões de segurança, todas as requisições serão feitas através do protocolo `HTTPS`.

### Listar dados de endereçamento [GET /:cep]

+ Response 200 (application/json)
    - Para o exemplo: https://apigetcep.cloud/77001219
```
    {
        "success": true,
        "data": {
            "cep": "77001-219",
            "uf": "TO",
            "bairro": "Plano Diretor Norte",
            "complemento": null,
            "cidade": "Palmas",
            "logradouro": "Quadra ACSU NO 40 Rua NS A",
            "estado": "Tocantins",
            "enderecoPostal": "Quadra ACSU NO 40 Rua NS A, Plano Diretor Norte, 77001-219, Palmas/TO"
        }
    }
```
+ Response 4xx ou 500 (application/json)
```
    {
        "error": *,
        "success": false
    }
```
Onde * é correspondente à messagem relativa ao erro.

### Autor

<div style="margin-top: 15px; margin-bottom: 5px;">
    <img style="border-radius: 50%;" src="https://github.com/ccqueiroz.png" width="100px;" alt=""/>
    <br />
    <sub style="margin-left: 15px">
        <b>Caio Queiroz</b>
    </sub>
</div>

[![Linkedin Badge](https://img.shields.io/badge/-Caio%20Queiroz-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/caio-queiroz-83846399/)](https://www.linkedin.com/in/caio-queiroz-83846399/)
[![Gmail Badge](https://img.shields.io/badge/-caio.cezar.dequeiroz@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:caio.cezar.dequeiroz@gmail.com)](mailto:caio.cezar.dequeiroz@gmail.com)


## Licença

Esta Api esta sob a licença [MIT](./LICENSE).

