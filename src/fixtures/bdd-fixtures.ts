import { test as base } from 'playwright-bdd'; 
import { LoginPage } from '../pages/loginpage'; 
import { InventoryPage } from '../pages/inventorypage';
type ContextFixtures = { 
 loginPage: LoginPage; 
 inventoryPage: InventoryPage;
};
export const test = base.extend<ContextFixtures>({ 
 loginPage: async ({ page }, use) => { 
 await use(new LoginPage(page)); 
 }, 
 inventoryPage: async ({ page }, use) => {
 await use(new InventoryPage(page));
 },
});
