# Vagas e Candidaturas API

## Rotas de Usuário

###\ Registro de usuário create /POST/users

Padrão de corpo

```json
{
"name": "Leu2",
"email": "leu2@mail.com",
"password": "123456788"
}
```

Padrão de respostas (STATUS 201)

```json
{
	"id": 1,
	"name": "Leu2",
	"email": "leu2@mail.com"
}
```

Possíveis erros

403 Forbidden

```json
{
	"message": "Email already registered"
}
```

422 Unprocessable Entity

```json
{
	"issues": [
		{
			"code": "too_small",
			"minimum": 8,
			"type": "string",
			"inclusive": true,
			"exact": false,
			"message": "String must contain at least 8 character(s)",
			"path": [
				"password"
			]
		}
	],
	"name": "ZodError"
}
```

### Login POST /users/login

Padrão de corpo 

```json
{
"email": "leu2@mail.com",
"password": "123456788"
}
```

Padrão de resposta (STATUS 200)

```json
{
	"acessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI1OTExODMyLCJleHAiOjE3MjU5MTU0MzJ9.a4Nn2DRv6QpM5vTOPGA-68N5si0e2B3KtS_2PxI_XY4",
	"user": {
		"id": 1,
		"name": "Leu2",
		"email": "leu2@mail.com"
	}
}
```

401 UNAUTHORIZED 

```json
{
	"message": "Email and password doesn't match"
}
```

404 NOT FOUND

```json
{
   "message": "User not registered"
}
```

### Retornar usuário GET /users

É necessário autorização para acessar está rota, forneça o token do cabeçalho da requisição 

```json
{
	"headers": {
      "Autorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI3MTIzNzg5LCJleHAiOjE3MjcxMjczODl9.eQd9ssvIC30OT-GKvi5wQryANDFdn8cPV6e1FZobvxo"
   }
}
```
Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
	"name": "usuario1",
	"email": "user1@mail.com"
}
```

### POST /opportunities

Padrão de corpo

```json
{
   "title": "Lorem ipsum",
   "description": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 201)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```




### GET /opportunities/:id

Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
   "title": "DBA Junior Aliexpress",
   "description": "Sem experiência, é os guri"
}
```

### GET /opportunities

Padrão de resposta (STATUS 200)

```json
[
	{
		"id": 1,
		"title": "DBA Junior Aliexpress",
		"description": "Sem experiência, é os guri",
		"userId": 1
	},
	{
		"id": 2,
		"title": "Motorista de caminhão",
		"description": "Carteira tipo C",
		"userId": 1
	}
]
```



Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

### PATCH /opportunities/:id

Padrão de corpo

```json
{
   "title?": "Lorem ipsum",
   "description?": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum"
}
```

### DELETE /opportunities/:id



### POST /opportunities/:id/applications

Padrão de corpo

```json
{
   "name": "John Doe",
   "email": "johndoe@email.com",
   "linkedin": "https://example.com"
}
```

Padrão de resposta (STATUS 201)

```json
{
   "id": 1,
   "name": "John Doe",
   "email": "johndoe@email.com",
   "linkedin": "https://example.com",
   "opportunityId": 1
}
```

### GET /opportunities/:id/applications

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@email.com",
      "linkedin": "https://example.com",
      "opportunityId": 1
   }
]
```

Possíveis erros

Nenhum corpo de resposta (STATUS 204)

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```





Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

