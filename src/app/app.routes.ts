import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { FaqComponent } from './features/faq/faq.component';
import { HowToUseComponent } from './features/how-to-use/how-to-use.component';
import { AddMembersComponent } from './guide/add-members/add-members.component';
import { CreateTripComponent } from './guide/create-trip/create-trip.component';
import { JoinTripComponent } from './guide/join-trip/join-trip.component';
import { DeleteExpenseComponent } from './guide/delete-expense/delete-expense.component';
import { RestoreExpenseComponent } from './guide/restore-expense/restore-expense.component';
import { EditMemberComponent } from './guide/edit-member/edit-member.component';
import { EditTripComponent } from './guide/edit-trip/edit-trip.component';
import { DeleteMemberComponent } from './guide/delete-member/delete-member.component';
import { DeleteLeaveTripComponent } from './guide/delete-leave-trip/delete-leave-trip.component';
import { TrackExpenseChangesComponent } from './guide/track-expense-changes/track-expense-changes.component';
import { ExpenseDetailsComponent } from './guide/expense-details/expense-details.component';
import { TripMembersComponent } from './guide/trip-members/trip-members.component';
import { LockUnlockTripComponent } from './guide/lock-unlock-trip/lock-unlock-trip.component';
import { SettleUpComponent } from './guide/settle-up/settle-up.component';
import { TripPdfReportComponent } from './guide/trip-pdf-report/trip-pdf-report.component';
import { AnalyticsComponent } from './guide/analytics/analytics.component';
import { DeleteAccountStepsComponent } from './features/delete-account-steps/delete-account-steps.component';

export const routes: Routes = [
    {component: HomeComponent, path:'', title: "TripSplit"},
    {component: PrivacyPolicyComponent, path:'privacy_policy', title: "Privacy Policy"},
    {component: DeleteAccountStepsComponent, path:'delete_account', title: "Delete Account Steps"},
    { path: 'contact-us', component: ContactUsComponent, title: "Contact Us"},
    { path: 'faq', component: FaqComponent, title: "FAQ" },
    {path:'guide', children:[
        {path: 'view-members', component: TripMembersComponent},
        {path: 'add-members',component: AddMembersComponent},
        {path: 'edit-member', component: EditMemberComponent},
        {path: 'delete-member', component: DeleteMemberComponent},

        {path:'create-trip', component: CreateTripComponent},
        {path:'join-trip', component: JoinTripComponent},
        {path: 'edit-trip', component: EditTripComponent},
        {path: 'delete-leave-trip', component: DeleteLeaveTripComponent},
        {path: 'lock-trip', component: LockUnlockTripComponent},
        {path: 'analytics', component: AnalyticsComponent},

        {path:'delete-expense', component: DeleteExpenseComponent},
        {path:'restore-expense', component: RestoreExpenseComponent},
        {path: 'track-expense-changes', component: TrackExpenseChangesComponent},
        {path: 'expense-details', component: ExpenseDetailsComponent},

        {path:'settle-up', component: SettleUpComponent},
        {path: 'trip-pdf-report', component: TripPdfReportComponent},
    ]},
    { path: 'how-to-use', component: HowToUseComponent, title:"How to use" },
    { path: '**', redirectTo: '' }
];
