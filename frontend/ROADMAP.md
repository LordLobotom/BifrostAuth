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
