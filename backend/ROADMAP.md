# Plán rozvoje backend aplikace

Tento dokument obsahuje plán dalšího rozvoje backend aplikace s rozdělením do jednotlivých milníků.

## Milestone 1: Základní funkce a vylepšení

### Autentizace a autorizace
- [x] Implementace základní struktury projektu
- [x] Vytvoření základních modelů (User)
- [x] Konfigurace SQLite databáze
- [x] Nastavení Alembic pro migrace
- [ ] Implementace JWT autentizace
- [ ] Vytvoření endpointů pro registraci a přihlášení
- [ ] Správa obnovovacích tokenů (refresh tokens)
- [ ] Implementace role-based autorizace
- [ ] Hashování hesel pomocí bcrypt
- [ ] Implementace OAuth2 pro přihlášení přes Google

### API a databáze
- [x] Vytvoření základních CRUD endpointů pro uživatele
- [ ] Implementace validace vstupních dat pomocí Pydantic
- [ ] Vytvoření modelů pro role a oprávnění
- [ ] Implementace relací mezi modely
- [ ] Optimalizace databázových dotazů
- [ ] Implementace stránkování a filtrování pro seznamy

### Bezpečnost
- [ ] Implementace rate limitingu pro prevenci útoků
- [ ] Konfigurace CORS pro bezpečný přístup
- [ ] Implementace ochrany proti CSRF útokům
- [ ] Logování bezpečnostních událostí
- [ ] Implementace dvoufaktorové autentizace (2FA)

### Testování a CI/CD
- [x] Nastavení testovacího prostředí (pytest, pytest-asyncio)
- [x] Vytvoření základních unit testů
- [x] Konfigurace GitHub Actions pro automatické testování
- [ ] Implementace integračních testů
  - [ ] Testy pro autentizační workflow
  - [ ] Testy pro správu uživatelů a rolí
- [ ] Vytvoření end-to-end testů
  - [ ] Test kompletního přihlašovacího procesu
  - [ ] Test správy uživatelů
- [ ] Měření pokrytí kódu testy
- [ ] Automatizace deploymentu

### Dokumentace a monitoring
- [ ] Vytvoření API dokumentace pomocí Swagger/OpenAPI
- [ ] Implementace logování pomocí strukturovaného formátu
- [ ] Nastavení monitoringu výkonu
- [ ] Vytvoření dokumentace pro vývojáře
- [ ] Implementace health check endpointů

## Milestone 2: Pokročilé funkce

### Rozšířená autentizace
- [ ] Implementace zapomenutého hesla a resetování
- [ ] Verifikace e-mailu při registraci
- [ ] Implementace dalších OAuth poskytovatelů (Facebook, GitHub)
- [ ] Správa sessions a detekce podezřelých přihlášení

### Výkon a škálování
- [ ] Implementace cachování pomocí Redis
- [ ] Optimalizace databázových dotazů
- [ ] Implementace asynchronních úloh pomocí Celery
- [ ] Konfigurace load balancingu

### Další vylepšení
- [ ] Implementace API verzování
- [ ] Přidání integračních testů
- [ ] Nastavení CI/CD pipeline
- [ ] Konfigurace produkčního prostředí
- [ ] Nastavení monitoringu a alertingu
- [ ] Vytvoření skriptů pro zálohování databáze

## Milestone 3: Škálování a monitoring

### Monitoring a logování
- [ ] Implementace strukturovaného logování
- [ ] Integrace s monitorovacími nástroji (např. Prometheus)
- [ ] Vytvoření dashboardů pro sledování výkonu
- [ ] Implementace sledování chyb (error tracking)
- [ ] Přidání zdravotních kontrol (health checks)

### Škálování a výkon
- [ ] Implementace cachování (Redis)
- [ ] Optimalizace výkonu databáze
- [ ] Příprava na horizontální škálování
- [ ] Implementace asynchronního zpracování úloh (např. Celery)
- [ ] Optimalizace velikosti Docker obrazů

## Milestone 4: Bezpečnost a dokumentace

### Bezpečnost
- [ ] Implementace rate limitingu
- [ ] Ochrana proti běžným útokům (CSRF, XSS, SQL injection)
- [ ] Pravidelné bezpečnostní audity
- [ ] Implementace CORS s přísnějšími pravidly
- [ ] Šifrování citlivých dat

### Dokumentace a testování
- [ ] Rozšíření API dokumentace
- [ ] Vytvoření uživatelské dokumentace
- [ ] Implementace unit testů
- [ ] Přidání integračních testů
- [ ] Nastavení CI/CD pipeline

## Další nápady pro budoucí rozvoj

- Implementace GraphQL API vedle REST API
- Podpora pro WebSockets pro real-time funkce
- Internacionalizace a lokalizace chybových hlášek
- Implementace OAuth pro přihlášení přes třetí strany (Google, Facebook, atd.)
- Analýza uživatelského chování a telemetrie 