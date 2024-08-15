import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  sections = [
    {
      title: "Introduction",
      data: "This Privacy Policy outlines how Trip Split collects, uses, and safeguards personal information in the application. We respect your privacy and are committed to protecting your personal information. Please read this Privacy Policy carefully to understand our practices regarding your information and how we will handle it."
    },
    {
      title: "1. Information We Collect",
      data: "1.1 Personal Information: When you use our application, we may collect certain personal information that you provide to us, such as your name, email address, phone number, and other relevant contact details. Additionally, we collect trip details, expenses, and credits related to trips to provide you with uninterrupted access to the usage of the application."
    },
    {
      title: "2. How We Use Your Information",
      data: "2.1 Provision of Services: We use the information we collect to provide you with access to the application and its features, including user authentication, trip management, expense tracking, credit purchasing, and member management.\n\n2.2 Personalization and Analytics: We may use your information to personalize your experience within the application, improve our services, and conduct analytical research to enhance user satisfaction and optimize our business operations.\n\n2.3 Communication: We may use your contact information to communicate with you, respond to your inquiries, provide support, and send important updates or promotional offers related to the application. You may opt-out of receiving promotional communications at any time."
    },
    {
      title: "3. Information Sharing and Disclosure",
      data: "3.1 Legal Compliance: We may disclose your personal information if required by law or in response to valid legal requests, such as subpoenas, court orders, or government regulations. We will make reasonable efforts to notify you before disclosing your information unless prohibited by law or court order."
    },
    {
      title: "4. Data Security",
      data: "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We encrypt data while transmitting it to the database. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security."
    },
    {
      title: "5. Data Retention",
      data: "We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. We will securely delete or anonymize your information once it is no longer needed."
    },
    {
      title: "6. Third-Party Links and Services",
      data: "We do not provide any third-party links within our application. If third-party links are added in the future, this Privacy Policy does not apply to those websites or services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party websites or services you visit."
    },
    {
      title: "7. Children's Privacy",
      data: "The application is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately, and we will take steps to delete it."
    },
    {
      title: "8. Changes to this Privacy Policy",
      data: "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective when we post the revised Privacy Policy in the application. Your continued use of the application after the effective date constitutes your acceptance of the revised Privacy Policy."
    },
    {
      title: "9. Contact Us",
      data: "If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at tripsplitofficial@gmail.com or visit our website https://tripsplit.in/contact .\n\nBy using the application, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein."
    }
  ];

  todayDate: string = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}