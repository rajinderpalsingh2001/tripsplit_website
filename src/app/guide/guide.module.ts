import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileFrameComponent } from '../shared/components/mobile-frame/mobile-frame.component';
import { SharedModule } from '../shared/shared.module';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { DeleteExpenseComponent } from './delete-expense/delete-expense.component';
import { DeleteLeaveTripComponent } from './delete-leave-trip/delete-leave-trip.component';
import { DeleteMemberComponent } from './delete-member/delete-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { JoinTripComponent } from './join-trip/join-trip.component';
import { LockUnlockTripComponent } from './lock-unlock-trip/lock-unlock-trip.component';
import { RestoreExpenseComponent } from './restore-expense/restore-expense.component';
import { SettleUpComponent } from './settle-up/settle-up.component';
import { TrackExpenseChangesComponent } from './track-expense-changes/track-expense-changes.component';
import { TripMembersComponent } from './trip-members/trip-members.component';
import { TripPdfReportComponent } from './trip-pdf-report/trip-pdf-report.component';



@NgModule({
  declarations:[
    AddExpenseComponent,
    AddMembersComponent,
    AnalyticsComponent,
    CreateTripComponent,
    DeleteExpenseComponent,
    DeleteLeaveTripComponent,
    DeleteMemberComponent,
    EditMemberComponent,
    EditTripComponent,
    ExpenseDetailsComponent,
    JoinTripComponent,
    LockUnlockTripComponent,
    RestoreExpenseComponent,
    SettleUpComponent,
    TrackExpenseChangesComponent,
    TripMembersComponent,
    TripPdfReportComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GuideModule {}
