# Consegna studenti - Lezione 15

## Obiettivo

Proteggere con Playwright un comportamento visibile della dashboard.

## Passi

1. Verifica la baseline:

   ```bash
   pnpm test
   pnpm test:e2e
   ```

2. Apri `tests/e2e/ticket-dashboard.spec.js`.
3. Sostituisci il `test.fixme` con un test eseguito sul caso comune:

   ```txt
   alta + telefono -> intervento rapido nella riga creata
   ```

4. Definisci azione, risultato e controllo.
5. Completa un solo test in `tests/e2e`.
6. Usa locator basati su role, label o contesto visibile.
7. Esegui il test.
8. Leggi l'output prima di correggere eventuali errori.

Dopo aver chiuso il caso comune, puoi trasferire lo stesso metodo a un altro comportamento chiaro della dashboard.

## Uso guidato dell'AI

### 1. Chiedi il piano

```txt
Analizza tests/e2e/ticket-dashboard.spec.js e la UI collegata.

Devo sostituire il test.fixme con uno scenario Playwright:
alta + telefono -> intervento rapido nella riga creata.

Non modificare file.
Proponi soltanto:
- preparazione e azioni;
- locator basati su role, label o contesto visibile;
- controllo finale specifico;
- possibili cause di failure.

Fermati dopo il piano.
```

Controlla il piano prima di autorizzare modifiche.

### 2. Chiedi la patch

```txt
Implementa il piano approvato modificando soltanto
tests/e2e/ticket-dashboard.spec.js.

Vincoli:
- non modificare codice di produzione;
- non usare waitForTimeout;
- restringi il controllo alla riga creata;
- esegui pnpm test:e2e;
- se fallisce, classifica il failure prima di proporre altre modifiche.
```

## Pronto quando

Puoi mostrare:

```txt
file
comando
output verde
comportamento protetto
```

Se non hai ancora raggiunto il verde, devi almeno mostrare l'output rosso letto,
la causa classificata e il prossimo cambiamento motivato.

Non serve compilare un report separato.
