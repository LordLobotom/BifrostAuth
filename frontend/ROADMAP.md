# Plán rozvoje frontend aplikace

Tento dokument obsahuje plán dalšího rozvoje frontend aplikace s rozdělením do jednotlivých milníků.

## Milestone 1: Základní struktura a autentizace

### Nastavení projektu
- [x] Inicializace React + TypeScript projektu s Vite
- [x] Konfigurace ESLint a Prettier
- [x] Nastavení Tailwind CSS
- [x] Integrace Shadcn UI komponent
- [x] Vytvoření základní struktury adresářů (components, pages, hooks, utils, types)
- [x] Nastavení React Router pro navigaci

### Autentizace a autorizace
- [x] Vytvoření přihlašovacího formuláře
- [x] Implementace registračního formuláře
- [x] Vytvoření kontextu pro autentizaci (AuthContext)
- [x] Implementace JWT autentizace s refresh tokenem
- [x] Vytvoření chráněných routes
- [x] Implementace odhlášení
- [ ] Přidání OAuth přihlášení (Google)

### Základní komponenty
- [x] Vytvoření layoutu aplikace (header, sidebar, footer)
- [x] Implementace navigačního menu
- [x] Vytvoření komponent pro formuláře (input, select, checkbox, atd.)
- [x] Implementace komponent pro zobrazení chyb a notifikací
- [x] Vytvoření modálních oken

### Uživatelské rozhraní
- [x] Implementace responzivního designu
- [x] Vytvoření tmavého/světlého režimu
- [x] Přidání animací a přechodů
- [ ] Implementace loading stavů
- [ ] Vytvoření error boundary
- [ ] Přidání skeleton loaderů

### Testování a CI/CD
- [ ] Nastavení testovacího prostředí (Vitest, React Testing Library)
- [ ] Vytvoření základních unit testů pro komponenty
- [ ] Implementace integračních testů pro formuláře
- [x] Konfigurace GitHub Actions pro automatické testování
- [ ] Nastavení Cypress pro E2E testy

## Milestone 2: Funkce a vylepšení

### Správa uživatelů
- [x] Vytvoření profilu uživatele
- [x] Implementace nastavení účtu
- [ ] Správa rolí a oprávnění
- [ ] Historie přihlášení
- [ ] Správa API klíčů

### Zabezpečení
- [x] Implementace JWT autentizace
- [ ] Přidání CSRF ochrany
- [ ] Rate limiting na frontend straně
- [ ] Validace vstupů
- [ ] Sanitizace dat

### Optimalizace
- [ ] Implementace code splitting
- [ ] Lazy loading komponent
- [ ] Optimalizace obrázků
- [ ] Minifikace CSS a JS
- [ ] Implementace service workeru

## Milestone 3: Testování a kvalita kódu

### Testování
- [x] Nastavení testovacího prostředí
- [x] Implementace unit testů
- [ ] Přidání integračních testů
- [ ] E2E testy s Cypress
- [ ] Testování přístupnosti

### Kvalita kódu
- [x] Nastavení ESLint pravidel
- [x] Konfigurace Prettier
- [ ] Přidání TypeScript strict mode
- [ ] Implementace pre-commit hooks
- [ ] Kontrola typů při buildu

### Výkon
- [ ] Optimalizace bundle size
- [ ] Implementace code splitting
- [ ] Optimalizace renderování
- [ ] Testování výkonu
- [ ] Testování kompatibility prohlížečů

### Dokumentace
- [ ] Vytvoření dokumentace komponent (Storybook)
- [ ] Implementace JSDoc komentářů
- [ ] Vytvoření uživatelské dokumentace
- [ ] Dokumentace API integrace

## Milestone 5: Nasazení a monitoring

### Nasazení
- [x] Konfigurace Docker pro produkční build
- [ ] Optimalizace bundlu pro produkci
- [ ] Implementace CI/CD pipeline pro automatické nasazení

### Monitoring a analýza
- [ ] Implementace error trackingu (např. Sentry)
- [ ] Přidání analytiky uživatelského chování
- [ ] Vytvoření dashboardů pro administrátory
- [ ] Implementace telemetrie pro sledování výkonu
- [ ] Přidání zpětné vazby od uživatelů

## Technické dluhy a budoucí vylepšení
- [ ] Implementace PWA (Progressive Web App)
- [ ] Přidání offline módu
- [ ] Vytvoření mobilní verze pomocí React Native
- [ ] Integrace s dalšími službami (kalendář, notifikace)
- [ ] Implementace real-time funkcí pomocí WebSockets
# Plán rozvoje backend aplikace

Tento dokument obsahuje plán dalšího rozvoje backend aplikace s rozdělením do jednotlivých milníků.

## Milestone 1: Základní infrastruktura

### Základní nastavení
- [x] Inicializace FastAPI projektu
- [x] Nastavení projektové struktury
- [x] Konfigurace pomocí environment proměnných
- [x] Základní CORS nastavení
- [x] Implementace health endpointu
  - [x] Základní metriky (uptime, verze, atd.)
  - [ ] Kontrola připojení k databázi
  - [ ] Kontrola dostupnosti služeb

### Databáze a modely
- [x] Nastavení SQLAlchemy
- [x] Vytvoření základních modelů (User)
- [x] Konfigurace Alembic pro migrace
- [ ] Vytvoření modelů Role a Permission
- [ ] Vytvoření seederu pro testovací data
- [ ] Implementace databázových indexů

### Autentizace a autorizace
- [ ] Rozšíření User modelu o password hash
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