import { expect, test } from "@playwright/test";

test("shows the server-calculated urgency label in the ticket list", async ({
  page
}) => {
  await page.goto("/");

  const ticketRow = page
    .getByRole("row")
    .filter({ hasText: "Impossibile accedere al portale clienti" });
  // il locator ci racconta quali sono gli elementi (o l'elemento in particolare) che stiamo cercando.
  // attenzione: se racconta esclusivamente dove sia nel DOM (come fareste in un programma) 
  // la soluzione e' piu' fragile

  await expect(ticketRow).toContainText("prioritario");
});

test.fixme(
  "", // potete inserire alta + telefono
  async () => { }
);
