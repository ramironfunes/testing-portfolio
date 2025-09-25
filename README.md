# 🧪 Testing Portfolio

This repository showcases my **end-to-end QA and Functional Analysis skills**, covering API testing, manual testing, UI automation, documentation, and CI/CD.

---

## 📂 Repository Structure

testing-portfolio/
│
├── api-testing/ # Postman + Newman collections (ReqRes, DummyJSON)
│ ├── reqres-api/
│ └── dummyjson-api/
│
├── webapp-testing/
│ ├── videos/ # Evidence of manual webapp tests (screen recordings)
│ ├── test-cases/ # Excel/Markdown with documented test cases
│
├── automation/
│ ├── playwright/ # UI automation examples (login, search, etc.)
│
├── docs/
│ ├── bpmn-sample.png # Example BPMN process diagram
│ ├── test-plan.docx # Test plan / strategy document
│
└── README.md

markdown
Copy code

---

## ✅ What’s included

### 🔹 API Testing
- **Postman + Newman collections** for:
  - **ReqRes API** (mock, schema validation, chaining, negative tests).
  - **DummyJSON API** (realistic CRUD, demo vs strict mode).
- **Automated reports** (HTML + JUnit).
- **GitHub Actions CI** to run Newman on push/PR.

### 🔹 Web Application Testing
- **Manual testing videos** as evidence of executed test cases.
- **Test cases documentation** in Excel and Markdown (login, checkout, registration).

### 🔹 UI Automation
- **Playwright samples** showing:
  - Login test
  - Search functionality
  - Simple page validations  
- Demonstrates ability to implement web UI automation without complex setup.

### 🔹 Test Documentation
- **Test Plan & Test Strategy**: objectives, scope, risks, exit criteria.
- **BPMN process diagram**: sample business flow modeled for functional analysis.

### 🔹 Continuous Integration
- Example GitHub Actions workflows running:
  - **API tests** with Newman.
  - Potential UI automation pipelines.

---

## 🚀 How to run locally

### API tests
```bash
cd api-testing/dummyjson-api
npm install
npm run test:demo   # always green
npm run test:strict # strict mode with real API issues
UI automation (Playwright)
bash
Copy code
cd automation/playwright
npm install
npx playwright test
📊 Example Reports
API Testing (DummyJSON Demo Mode)

API Testing (DummyJSON Strict Mode)
