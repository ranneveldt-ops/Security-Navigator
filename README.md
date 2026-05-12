# Security Navigator

Persoonlijke best practice navigator voor cybersecurity en compliance in de Nederlandse energiesector.

## Functionaliteit

- Zoeken en browsen door security-onderwerpen (NIS2, ISO 27001, IEC 62443, DNB, DORA)
- Automatische framework-selectie op basis van onderwerp
- Cross-sectorale best practices (finance, zorg, telecom, luchtvaart)
- NL/EN taalswitch — volledige interface én AI-antwoorden
- Sessies opslaan en terugvinden
- Werkt offline voor opgeslagen sessies (PWA)

## Installeren op iPhone

1. Publiceer via **GitHub Pages** (Settings → Pages → Branch: main)
2. Open de gegenereerde URL in **Safari** op je iPhone
3. Tik op het deelicoon → **"Zet op beginscherm"**
4. Voer bij eerste gebruik je Anthropic API key in (`sk-ant-...`)

## API key

De app gebruikt de [Anthropic API](https://console.anthropic.com). Je hebt een API key nodig — los van een claude.ai abonnement, betaling per gebruik. Voor persoonlijk gebruik typisch een paar cent per sessie.

De key wordt **alleen lokaal opgeslagen** op je apparaat (localStorage). Nooit gedeeld of verstuurd.

## Technisch

- Eén HTML-bestand, geen build-stap, geen dependencies
- Claude Sonnet als AI-backend
- PWA met inline service worker en manifest
- Sessieopslag via localStorage

## Status

MVP — gebouwd voor persoonlijk gebruik tijdens werk.
