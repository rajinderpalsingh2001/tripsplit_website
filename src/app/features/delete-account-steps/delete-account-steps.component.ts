import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-account-steps',
  templateUrl: './delete-account-steps.component.html',
  styleUrl: './delete-account-steps.component.css'
})
export class DeleteAccountStepsComponent {
  steps = [
    "Open the Trip Split app or Web app <a href = 'https://app.tripsplit.in' target = '_'>https://app.tripsplit.in</a> and go to Profile menu",
    "Scroll down and select 'Account Settings'.",
    "In the Account Settings menu, find and select 'Delete Account'.",
    "Read the information about account deletion carefully.",
    "If you are sure you want to delete your account, press the 'Delete Account' button.",
    "Confirm your decision in the confirmation dialog that appears.",
    "Enter your email to verify your identity and complete the deletion process."
  ];

  note = "Note: Once your account is deleted, all your data will be permanently removed within 30 days and cannot be recovered. Please make sure you want to proceed before completing these steps.";
}
