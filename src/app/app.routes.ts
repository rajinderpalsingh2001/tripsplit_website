import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DeleteAccountStepsComponent } from './delete-account-steps/delete-account-steps.component';

export const routes: Routes = [
    {component: HomeComponent, path:'', title: "Trip Split"},
    {component: PrivacyPolicyComponent, path:'privacy_policy', title: "Privacy Policy"},
    {component: DeleteAccountStepsComponent, path:'delete_account', title: "Delete Account Steps"},
];
