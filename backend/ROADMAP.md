# Plán rozvoje backend aplikace

Tento dokument obsahuje plán dalšího rozvoje backend aplikace s rozdělením do jednotlivých milníků.

## Milestone 1: Základní infrastruktura ✅

### Základní nastavení ✅
- [x] Inicializace FastAPI projektu
- [x] Nastavení projektové struktury
- [x] Konfigurace pomocí environment proměnných
- [x] Základní CORS nastavení
- [x] Implementace health endpointu
  - [x] Kontrola připojení k databázi
  - [x] Kontrola dostupnosti služeb
  - [x] Základní metriky (uptime, verze, atd.)

### Databáze a modely ✅
- [x] Nastavení SQLAlchemy
- [x] Vytvoření základních modelů (User, Role, Permission)
- [x] Konfigurace Alembic pro migrace
- [ ] Vytvoření seederu pro testovací data
- [x] Implementace automatického seedování dat
- [x] Skript pro reset/setup databáze

### Bezpečnost a Monitoring ✅
- [x] Základní logování
- [x] Error handling
- [x] Validace konfigurace
- [x] Bezpečná správa secret key

## Milestone 2: Autentizace (Další priorita)

### JWT Implementace
- [x] Vytvoření JWT utility
- [x] Endpointy pro login/logout
- [ ] Refresh token mechanismus
- [x] Implementace JWT middleware pro ochranu endpointů

### Uživatelské zabezpečení
- [x] Hashování hesel (passlib/bcrypt)
- [ ] Validace emailů
- [ ] Reset hesla flow
- [ ] Email verifikace

## Milestone 3: Rozšířené funkce

### Role a Oprávnění
- [x] Model pro Role
- [x] Model pro Oprávnění
- [x] Základní seeder pro role a oprávnění
- [ ] RBAC middleware
- [ ] Endpointy pro správu rolí

### API Dokumentace
- [ ] Swagger/OpenAPI dokumentace
- [ ] Příklady použití v dokumentaci
- [ ] Postman kolekce

## Milestone 4: Testování

### Unit Testy
- [ ] Testy pro modely
- [ ] Testy pro autentizaci
- [ ] Testy pro RBAC
- [ ] Testy pro API endpointy

### Integrační Testy
- [ ] Setup testovací databáze
- [ ] API testy
- [ ] Performance testy

### Testování API
- [ ] Postman/Thunder Client kolekce
- [ ] Příklady použití v dokumentaci
- [ ] Automatizované testy endpointů

### Bezpečnostní vylepšení
- [ ] Rate limiting pro auth endpointy
- [ ] Ochrana proti brute force útokům
- [ ] Session management
- [ ] Audit log pro bezpečnostní události

## Milestone 5: Produkční nasazení

### Deployment
- [x] Dockerfile pro development
- [ ] Dockerfile pro produkci
- [ ] Docker Compose setup
- [ ] Skripty pro zálohování
- [ ] Monitoring v produkci

### Dokumentace
- [ ] API dokumentace
- [ ] Dokumentace deploymentu
- [ ] Uživatelská dokumentace
- [ ] Dokumentace pro vývojáře
- [ ] Postupy pro řešení problémů

## Technické dluhy a vylepšení
- [ ] Migrace na novější verze závislostí
- [ ] Refaktoring kódu
- [ ] Optimalizace výkonu
- [ ] Vylepšení error handlingu
- [ ] Rozšíření testovacího pokrytí

## Další nápady pro budoucí rozvoj

- Implementace GraphQL API vedle REST API
- Podpora pro WebSockets pro real-time funkce
- Internacionalizace a lokalizace chybových hlášek
- Implementace OAuth pro přihlášení přes třetí strany (Google, Facebook, atd.)
- Analýza uživatelského chování a telemetrie 