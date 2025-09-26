
# 🧪 ReqRes API – Postman + Newman (Fixed & Portfolio-Ready)

This collection is tuned so **all tests pass consistently** using the public ReqRes API.  
No auth, no API keys, **no persistence assumptions** (because ReqRes is mock-by-design).

## ✅ What’s included
- Folders: **Users**, **Create & Update**, **Delete**, **Negative Tests**
- **Chaining**: capture `{{userId}}` from the list endpoint
- **JSON Schema** validation for users & create/update responses
- Delay test (`GET /users?delay=3`) with relaxed SLA (< 4000ms)
- GitHub Actions workflow to run Newman on push/PR

## 🔗 Base URL
```
https://reqres.in/api
```

## 🚀 Run locally
```bash
npm install
npm test
# open results/report.html
```

## 🧠 Notes
- `POST/PUT/PATCH/DELETE` on ReqRes return **mock responses** and do **not persist**.  
  Tests validate status, headers, timestamps, and structure—without trying to read persistence.

