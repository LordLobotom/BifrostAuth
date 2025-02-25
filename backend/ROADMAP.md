# Plán rozvoje backend aplikace

Tento dokument obsahuje plán dalšího rozvoje backend aplikace s rozdělením do jednotlivých milníků.

## Milestone 1: Základní funkce a vylepšení

### Autentizace a autorizace
- [ ] Implementace JWT autentizace
- [ ] Vytvoření endpointů pro registraci a přihlášení
- [ ] Správa obnovovacích tokenů (refresh tokens)
- [ ] Implementace rolí a oprávnění (admin, uživatel, atd.)
- [ ] Ochrana endpointů pomocí závislostí (dependencies)

### Rozšíření modelů a endpointů
- [ ] Vytvoření modelu pro články/příspěvky
- [ ] Implementace CRUD operací pro články
- [ ] Vytvoření modelu pro komentáře
- [ ] Implementace vztahů mezi modely (uživatel -> články -> komentáře)
- [ ] Přidání možnosti nahrávání souborů/obrázků

## Milestone 2: Pokročilé funkce a optimalizace

### Vylepšení API
- [ ] Implementace filtrování dat (např. podle data, kategorie)
- [ ] Přidání řazení výsledků (vzestupně/sestupně podle různých polí)
- [ ] Implementace stránkování pro seznamy
- [ ] Optimalizace dotazů na databázi
- [ ] Implementace full-text vyhledávání

### Validace a zpracování chyb
- [ ] Rozšíření validace vstupních dat
- [ ] Vytvoření vlastních chybových hlášek a kódů
- [ ] Implementace globálního zpracování výjimek
- [ ] Přidání validace závislostí mezi poli

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