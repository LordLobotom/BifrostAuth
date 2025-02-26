# Plán rozvoje backend aplikace

Tento dokument obsahuje plán dalšího rozvoje backend aplikace s rozdělením do jednotlivých milníků.

## Milestone 1: Základní infrastruktura

### Základní nastavení
- [x] Inicializace FastAPI projektu
- [x] Nastavení projektové struktury
- [x] Konfigurace pomocí environment proměnných
- [x] Základní CORS nastavení
- [ ] Implementace health endpointu
  - [ ] Kontrola připojení k databázi
  - [ ] Kontrola dostupnosti služeb
  - [ ] Základní metriky (uptime, verze, atd.)

### Databáze a modely
- [x] Nastavení SQLAlchemy
- [x] Vytvoření základních modelů (User, Role, Permission)
- [x] Konfigurace Alembic pro migrace
- [ ] Vytvoření seederu pro testovací data
- [ ] Implementace databázových indexů

### Autentizace a autorizace
- [ ] Implementace JWT autentizace
- [ ] Správa refresh tokenů
- [ ] Role-based přístupová práva (RBAC)
- [ ] Implementace OAuth2 (Google)
- [ ] Rate limiting a ochrana proti útokům

### API Endpointy
- [x] Základní CRUD pro uživatele
- [ ] Endpointy pro správu rolí
- [ ] Endpointy pro správu oprávnění
- [ ] Dokumentace API (OpenAPI/Swagger)
- [ ] Verzování API

## Milestone 2: Rozšířené funkce

### Bezpečnost
- [ ] Implementace rate limitingu
- [ ] CORS s přísnějšími pravidly
- [ ] Validace vstupních dat
- [ ] Logování bezpečnostních událostí
- [ ] Ochrana proti běžným útokům

### Monitoring a logování
- [ ] Implementace strukturovaného logování
- [ ] Monitoring výkonu
- [ ] Sledování chyb a výjimek
- [ ] Metriky API endpointů
- [ ] Alerting systém

### Optimalizace výkonu
- [ ] Cachování častých dotazů
- [ ] Optimalizace databázových dotazů
- [ ] Implementace connection poolingu
- [ ] Asynchronní zpracování dlouhých operací
- [ ] Optimalizace velikosti odpovědí

## Milestone 3: Testování a kvalita

### Testování
- [x] Nastavení pytest
- [ ] Unit testy pro modely
- [ ] Integrační testy pro API
- [ ] Performance testy
- [ ] Security testy

### CI/CD
- [x] Nastavení GitHub Actions
- [ ] Automatické testy při PR
- [ ] Automatický deployment
- [ ] Kontrola kvality kódu
- [ ] Generování dokumentace

## Milestone 4: Produkční nasazení

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