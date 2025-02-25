# Plán rozvoje frontend aplikace

Tento dokument obsahuje plán dalšího rozvoje frontend aplikace s rozdělením do jednotlivých milníků.

## Milestone 1: Základní struktura a autentizace

### Nastavení projektu
- [x] Inicializace React + TypeScript projektu s Vite
- [x] Konfigurace ESLint a Prettier
- [x] Nastavení Tailwind CSS
- [x] Integrace Shadcn UI komponent
- [x] Vytvoření základní struktury adresářů (components, pages, hooks, utils, types)
- [ ] Nastavení React Router pro navigaci

### Autentizace a autorizace
- [ ] Vytvoření přihlašovacího formuláře
- [ ] Implementace registračního formuláře
- [ ] Vytvoření kontextu pro autentizaci (AuthContext)
- [ ] Implementace JWT autentizace s refresh tokenem
- [ ] Vytvoření chráněných routes
- [ ] Implementace odhlášení
- [ ] Přidání OAuth přihlášení (Google)

### Základní komponenty
- [ ] Vytvoření layoutu aplikace (header, sidebar, footer)
- [ ] Implementace navigačního menu
- [ ] Vytvoření komponent pro formuláře (input, select, checkbox, atd.)
- [ ] Implementace komponent pro zobrazení chyb a notifikací
- [ ] Vytvoření modálních oken
- [ ] Implementace tabulek pro zobrazení dat

### Testování a CI/CD
- [ ] Nastavení testovacího prostředí (Vitest, React Testing Library)
- [ ] Vytvoření základních unit testů pro komponenty
- [ ] Implementace integračních testů pro formuláře
- [x] Konfigurace GitHub Actions pro automatické testování
- [ ] Nastavení Cypress pro E2E testy

## Milestone 2: Správa uživatelů a rozšířené funkce

### Správa uživatelů
- [ ] Implementace seznamu uživatelů
- [ ] Vytvoření detailu uživatele
- [ ] Implementace editace uživatelského profilu
- [ ] Vytvoření správy rolí a oprávnění
- [ ] Implementace vyhledávání a filtrování uživatelů

### Rozšířené funkce autentizace
- [ ] Implementace formuláře pro reset hesla
- [ ] Vytvoření stránky pro verifikaci e-mailu
- [ ] Implementace dvoufaktorové autentizace (2FA)
- [ ] Přidání dalších OAuth poskytovatelů (Facebook, GitHub)
- [ ] Vytvoření historie přihlášení

### UX vylepšení
- [ ] Implementace dark/light módu
- [ ] Vytvoření responzivního designu
- [ ] Implementace animací a přechodů
- [ ] Přidání drag-and-drop funkcí
- [ ] Vytvoření interaktivních grafů a vizualizací

## Milestone 3: Optimalizace a vylepšení UX

### Výkon a optimalizace
- [ ] Implementace lazy loading komponent
- [ ] Optimalizace velikosti bundle
- [ ] Přidání code splitting
- [ ] Implementace memoizace pro výkonnostně náročné komponenty
- [ ] Optimalizace renderování seznamů
- [ ] Měření a optimalizace Web Vitals (LCP, CLS, FID)

### Pokročilé UI funkce
- [ ] Implementace vícejazyčnosti (i18n)
- [ ] Vytvoření pokročilých filtrů a vyhledávání
- [ ] Implementace drag-and-drop rozhraní
- [ ] Přidání klávesových zkratek
- [ ] Vytvoření průvodců (wizards) pro složité procesy

## Milestone 4: Testování a dokumentace

### Rozšířené testování
- [ ] Implementace unit testů pro všechny klíčové komponenty
  - [ ] Testy pro autentizační formuláře
  - [ ] Testy pro tabulku uživatelů
  - [ ] Testy pro správu rolí
- [ ] Vytvoření integračních testů
  - [ ] Testy pro workflow přihlášení
  - [ ] Testy pro správu uživatelů
- [ ] Implementace end-to-end testů (Cypress nebo Playwright)
  - [ ] Test kompletního přihlašovacího procesu
  - [ ] Test správy uživatelů
- [ ] Testování přístupnosti (a11y)
- [ ] Testování kompatibility prohlížečů

### Dokumentace
- [ ] Vytvoření dokumentace komponent (Storybook)
- [ ] Implementace JSDoc komentářů
- [ ] Vytvoření uživatelské dokumentace
- [ ] Dokumentace API integrace

## Milestone 5: Nasazení a monitoring

### Nasazení
- [ ] Konfigurace Docker pro produkční build
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
