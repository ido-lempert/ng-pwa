import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', redirectTo: '/transactions', pathMatch: "full"},
    {path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule)},
    {path: 'capital-market', loadChildren: () => import('./capital-market/capital-market.module').then(m => m.CapitalMarketModule)},
    {path: 'credit-cards', loadChildren: () => import('./credit-cards/credit-cards.module').then(m => m.CreditCardsModule)}
];
