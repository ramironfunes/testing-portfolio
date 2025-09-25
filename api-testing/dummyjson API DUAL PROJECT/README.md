
# 🧪 DummyJSON API – Postman + Newman (Demo & Strict)

This repository provides **two modes** of testing the DummyJSON API:

- **Demo Mode (green ✅)**  
  Adjusted validations, always passes. Perfect for portfolio & CI/CD.  
  File: `collections/DummyJSON_API_Demo.postman_collection.json`

- **Strict Mode (realistic ❌)**  
  Rigid validations that expose inconsistencies in the API. Useful to demonstrate QA analysis skills.  
  File: `collections/DummyJSON_API_Strict.postman_collection.json`

## 🔗 Base URL
```
https://dummyjson.com
```

## 🚀 Run locally
```bash
npm install
npm run test:demo   # always green
npm run test:strict # shows real API issues
```

Reports will be generated under `results/`.

