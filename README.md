# [**Vorwärts**](https://vorwarts.vercel.app)

```json
{
  "status": 200,
  "ok": true,
  "data": [
    {
      "_id": "61ba1b7024a1157ef54f121d",
      "title": "Alice's Adventures in the Wonderland",
      "author": "Lewis Carroll",
      "language": "English",
      "genres": ["Fantasy", "Literary nonsense"],
      "country": "United Kingdom",
      "countryCode": "GB",
      "year": 1865,
      "files": [
        {
          "type": "Vorwärts",
          "extension": "epub",
          "url": "https://raw.githubusercontent.com/vonweinKeller/vorwarts-library/main/alice/Alice'sAdventuresinWonderland.epub"
        }
      ],
      "user": "caian"
    }
  ]
}
```

## **Why?**

Vorwärts was born to be an easy way to get books in the public domain, free of any advertising and in a completely transparent way. The ideology of Vorwärts is to maintain the neutrality of all these books written by amazing authors and that now belong to everyone.

# **Getting started**

## **URL**

**`https://vorwarts-api.vercel.app`**

## **EndPoints**

- [x] /books
- [x] /book
- [x] /genres
- [x] /countries
- [x] /signup
- [x] /login
      ...

## **Public endpoints**

### **/books**

`GET` | Get books data.

> All requests are sorted by author ascending..

**parameters**

`Title`

`Author`

`Year` _Year of publication. E.g.: {"year": "1984"}._

`Country` _Stands for the country where the book was originally published. The short version of the name should be used. E.g.: {"country": "Germany"}._

`Language` _Language originally written, the download options will usually be in the same language._

`Genres` _A slightly different field. To pass more than one gender, divide it into commas. E.g.: {"genres": "Fantasy, Children's Book"}._

`Limit` _Stands for limit of books per request. The default limit is 10._

`Offset` _Skip the first books._

`Groupby` _Group books by field. Try: author, genres, year, country or language. E.g.: {"groupby": "author"}._

### **Exemple**

```javascript
axios.get("https://vorwarts-api.vercel.app/books", {
  parameters: {
    author: "Johann Wolfgang von Goethe",
    groupby: "author",
  },
});
```

### **Response**

```json
{
  "status": 200,
  "ok": true,
  "data": [
    {
      "author": "Johann Wolfgang von Goethe",
      "books": [
        {
          "_id": "61ba1d7e24a1157ef54f1220",
          "title": "The Sorrows of Young Werther",
          "author": "Johann Wolfgang von Goethe",
          "genres": ["Epistolary novel"],
          "language": "German",
          "country": "Germany",
          "year": 1774,
          "countryCode": "DE",
          "user": "caian",
          "files": []
        }
      ]
    }
  ]
}
```

### **/countries**

`GET` | Get countries with books available.

**parameters**

> No parameters are available.

### **Response**

```json
{
  "status": 200,
  "ok": true,
  "data": [
    "United Kingdom",
    "Italy",
    "Germany",
    "Portugal",
    "Russian Federation"
  ]
}
```

### **/genres**

`GET` | Get all genres in the database.

**parameters**

> No parameters are available.

### **Response**

```json
{
  "status": 200,
  "ok": true,
  "data": [
    "Fantasy",
    "Literary nonsense",
    "Children's book",
    "Epistolary novel",
    "Gothic novel",
    "Horror fiction",
    "Horror",
    "Gothic",
    "Absurdist fiction",
    "Fiction",
    "Mystery",
    "Epic Poetry",
    "Philosophical Novel",
    "Psychological Fiction",
    "Crime Fiction",
    "Classic",
    "Regency Novel"
  ]
}
```

## **Institutional endpoints**

> They, unlikely public ones, affects the database.

### **/signup**

`POST` | Post an user in the database.

**parameters**

`Username` _At least 4 characters longer._

`Email`

`Password` _This will be encrypted._

### **Exemple**

```javascript
axios.post("https://vorwarts-api.vercel.app/signup", {
  username: "Johann Wolfgang von Goethe",
  email: "goethe@gmail.com",
  password: "hyper secure password",
});
```

### **Response**

```json
{ "status": 201, "ok": true }
```

### **/login**

`GET` | Make authentication in passed credentials.

**parameters**

`Username`

`Password`

### **Exemple**

```javascript
axios.get("https://vorwarts-api.vercel.app/login", {
  parameters: {
    username: "Johann Wolfgang von Goethe",
    password: "hyper secure password",
  },
});
```

### **Response**

```json
{
  "status": 200,
  "ok": true,
  "message": "user authenticated",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjUxZGVhZTI3NDZkNTc4ZDVjZDkyNDIiLCJpYXQiOjE2NDk1MzM1MjEsImV4cCI6MTY0OTYxOTkyMX0.LnT2VN9xYRzQGOWKc1RglIgScRI5_mYaEX6eIV_wwWg",
  "username": "Johann Wolfgang von Goethe",
  "email": "goethe@gmail.com"
}
```

### **/token**

`GET` | Creates a token. _This token longer for 1 week_

> This method will soon be improved by creating a token manager.

**parameters**

`Token` _Pass the current token throught headers as "authorization"_

### **Exemple**

```javascript
axios.get("https://vorwarts-api.vercel.app/token", {
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjUxZGVhZTI3NDZkNTc4ZDVjZDkyNDIiLCJpYXQiOjE2NDk1MzM1MjEsImV4cCI6MTY0OTYxOTkyMX0.LnT2VN9xYRzQGOWKc1RglIgScRI5_mYaEX6eIV_wwWg",
  },
});
```

### **Response**

```json
{
  "status": 201,
  "ok": true,
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRlNGQxODk0MDdiNTE2OThmZDk3NDkiLCJpYXQiOjE2NDk3MDQ0NDMsImV4cCI6MTY0OTc5MDg0M30.F_qLlM5aQGUjnPH_sMevG5YrKRoEzLQ5uWZ-6pnFveQ"
}
```

### **/book**

`POST` | Publish a book in the database.

> File uploads are not available yet.

**parameters**

`Token` _Pass the current through the headers as "authorization"._

`Title`

`Author`

`Year`

`Country` _Tends to write in English, the standart is available [here](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/)._

`CountryCode` _In Alpha 2. E.g.: US for United States or GB for United Kingdom ([see more](https://www.iban.com/country-codes))._

`Language` _Tends to write in English, the standart is available [here](https://gist.github.com/jrnk/8eb57b065ea0b098d571)._

`Genres` _Array, E.g: ["fantasy", "children's book"]._

### **Exemple**

```javascript
axios.get("https://vorwarts-api.vercel.app/login", {
    title: "The Sorrows of Young Werther",
    author: "Johann Wolfgang von Goethe",
    year: "1774",
    country: "Germany",
    countryCode: "DE",
    language: "German",
	    "genres": [
        "Epistolary novel"
    ]},
		headers: {
			"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjUxZGVhZTI3NDZkNTc4ZDVjZDkyNDIiLCJpYXQiOjE2NDk1MzM1MjEsImV4cCI6MTY0OTYxOTkyMX0.LnT2VN9xYRzQGOWKc1RglIgScRI5_mYaEX6eIV_wwWg",
        }
	})
```

### **Response**

```json
{
  "status": 201,
  "ok": true,
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRlNGQxODk0MDdiNTE2OThmZDk3NDkiLCJpYXQiOjE2NDk3MDQ0NDMsImV4cCI6MTY0OTc5MDg0M30.F_qLlM5aQGUjnPH_sMevG5YrKRoEzLQ5uWZ-6pnFveQ"
}
```
