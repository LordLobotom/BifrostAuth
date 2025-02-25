# BifrostAuth

---

*Authentication and user management system | Autentizační a uživatelský správní systém*

[English](#english) | [Česky](#czech)

---

<a name="english"></a>

## 🌉 Description

BifrostAuth is an authentication and user management system providing secure login functionality for information systems. It features user registration, login/logout, role-based permissions, and user profile management. The interface demonstrates these core authentication features through a clean, professional dashboard designed for administrators to manage users and system access.

### 🛠️ Technologies

#### Backend

- **Language**: Python
- **Framework**: FastAPI
- **Database**: PostgreSQL
- **Authentication**: JWT, OAuth2, bcrypt
- **Security**: Rate limiting


#### Frontend

- **Language**: TypeScript
- **Framework**: React
- **UI Libraries**: Tailwind CSS, Shadcn UI
- **Build Tool**: Vite


### ✨ Key Features

- **User Authentication**
    - Registration, Login with JWT
    - OAuth Google Login
    - Email Verification
    - Password Reset
- **Rate Limiting** for brute force attack prevention
- **Role-Based Access Control (RBAC)**
- **Optional Two-Factor Authentication (2FA)**


### 🚀 Milestones

1. Basic Authentication API (Registration, Login, JWT)
2. Email Verification \& Password Reset
3. OAuth Integration (Google Login)
4. Rate Limiting \& Role-Based Access
5. Optional 2FA Implementation

### 🔧 Installation \& Running

```bash
# Clone repository
git clone https://github.com/LordLobotom/BifrostAuth.git
cd BifrostAuth

# Run with Docker Compose
docker compose up -d
```


### 👨‍💻 Development Guidelines

#### Backend

- Use `async def` for all API endpoints
- Follow PEP8 coding standards
- Separate concerns (use routers, schemas, models, services directories)
- Use SQLAlchemy 2.0 for ORM features
- Implement proper error handling \& logging


#### Frontend

- Use TypeScript for type safety
- Use functional components and hooks efficiently
- Follow mobile-first responsive design
- Implement lazy loading \& code splitting for performance


### 🧪 Testing \& Deployment

- Unit tests for both frontend and backend
- Docker Compose for container orchestration
- CI/CD Integration for automated testing and deployment
- CORS Configuration for secure API access

---

<a name="czech"></a>

## 🌉 Popis

BifrostAuth je autentizační a uživatelský správní systém poskytující bezpečnou přihlašovací funkcionalitu pro informační systémy. Nabízí registraci uživatelů, přihlášení/odhlášení, správu rolí a uživatelských profilů. Rozhraní demonstruje tyto základní autentizační funkce prostřednictvím čistého, profesionálního dashboardu navrženého pro administrátory ke správě uživatelů a přístupu do systému.

### 🛠️ Technologie

#### Backend

- **Jazyk**: Python
- **Framework**: FastAPI
- **Databáze**: PostgreSQL
- **Autentizace**: JWT, OAuth2, bcrypt
- **Bezpečnost**: Rate limiting


#### Frontend

- **Jazyk**: TypeScript
- **Framework**: React
- **UI knihovny**: Tailwind CSS, Shadcn UI
- **Build nástroj**: Vite


### ✨ Klíčové funkce

- **Autentizace uživatelů**
    - Registrace, přihlášení s JWT
    - OAuth Google přihlášení
    - Ověření e-mailu
    - Reset hesla
- **Rate Limiting** pro prevenci útoků hrubou silou
- **Role-Based Access Control (RBAC)**
- **Volitelná dvoufaktorová autentizace (2FA)**


### 🚀 Milníky

1. Základní autentizační API (registrace, přihlášení, JWT)
2. Ověření e-mailu a reset hesla
3. OAuth integrace (Google přihlášení)
4. Rate Limiting a přístup založený na rolích
5. Implementace volitelné 2FA

### 🔧 Instalace a spuštění

```bash
# Klonování repozitáře
git clone https://github.com/LordLobotom/BifrostAuth.git
cd BifrostAuth

# Spuštění pomocí Docker Compose
docker compose up -d
```


### 👨‍💻 Vývojové pokyny

#### Backend

- Používejte `async def` pro všechny API endpointy
- Dodržujte standardy kódování PEP8
- Oddělujte zodpovědnosti (použijte adresáře routers, schemas, models, services)
- Používejte SQLAlchemy 2.0 pro ORM funkce
- Implementujte správné zpracování chyb a logování


#### Frontend

- Používejte TypeScript pro typovou bezpečnost
- Používejte funkční komponenty a hooks efektivně
- Dodržujte responzivní design s přístupem mobile-first
- Implementujte lazy loading a code splitting pro výkon


### 🧪 Testování a nasazení

- Jednotkové testy pro frontend i backend
- Docker Compose pro orchestraci kontejnerů
- CI/CD integrace pro automatizované testování a nasazení
- Konfigurace CORS pro bezpečný přístup k API


## 📄 License | Licence

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Tento projekt je licencován pod MIT licencí - podrobnosti naleznete v souboru [LICENSE](LICENSE).

<div style="text-align: center">⁂</div>
