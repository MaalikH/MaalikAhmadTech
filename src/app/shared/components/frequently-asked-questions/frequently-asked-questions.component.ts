import {Component, Input, OnInit} from '@angular/core';
import {FaqModel} from '../../services/faq.model';

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.scss', '../../../app.component.scss']
})
export class FrequentlyAskedQuestionsComponent implements OnInit {
  @Input() type: string;
  faqs: FaqModel[] = [
    {
      question: 'Does my website look exactly like the template?',
      answer: 'No! Templates are used to guide the layout of the website. Details such as images, colors, and flow can be changed to customized your website.',
      type: 'templates'
    },
    {
      question: 'How many template options can I choose from?',
      answer: 'Our Agency has over 500+ templates to choose from, but we will only initially send screenshots from 5 templates to choose from. If none of these options are suitable for you, then we will send 5 more based on the feedback provided',
      type: 'templates'
    },
    {
      question: 'What if I don’t like the template options that were sent?',
      answer: 'If none of these options are suitable for you, then we will send 5 more based on the feedback provided',
      type: 'templates'
    },
    {
      question: 'I have wireframes/designs I need my website to look like, can I use a template for that?',
      answer: 'Unfortunately not, Wireframes require custom design. Please see our Website Elite package',
      type: 'templates'
    },
    {
      question: 'I would like to include a blog with my website, will there be an extra charge?',
      answer: 'Good news for you! There wont be an additional cost for blog setup. However, there may be additional cost depending on the needs of your blog',
      type: 'pricing'
    },
    {
      question: 'I need to take appointments on my website, will that increase the total cost?',
      answer: 'Both e-commerce options allow for our clients that need to take appointments. Our elite package allows appointments or an online store, and our pro option allows the client to have both',
      type: 'pricing'
    },
    {
      question: 'Which E-Commerce Option should I choose?',
      answer: 'This answer depends on your needs and status as a business. The Lite option allows our clients to save cost upfront and get a professional store up and running. Shopify is a great option for businesses that just want a professional store more than a custom look. Our WooCommerce option is for our clients that require more custom design of their store.',
      type: 'pricing'
    },
    {
      question: 'Do I have to pay the entire price in full?',
      answer: 'We know that all customers may not have the desire to pay for the entirety of our services upfront. Therefore, we ask for 50% of total cost of front as a deposit. Following the completion our work, the remainder of the project cost is due 5 business days after the expected turn around time or 5 business days after the completion of the project, which ever comes first.',
      type: 'pricing'
    },
    {
      question: 'What happens if I do not pay the fees before the due date?',
      answer: 'If the final payment is not made by the due date then a 10% late fee will be added to the total cost of the project. The client will then have 10 business days to make the final payment before the project is subject is suspended. If suspended the client will have to pay a reinstatement fee, which is 25% of the total cost.',
      type: 'pricing'
    },
    {
      question: 'I need my product faster than the turnaround time listed, is that an option?',
      answer: 'If your product is needed faster than our expected turn around time than a rush fee of 25% will be billed. This rush fee insures the project will be finished within half of the original turnaround time',
      type: 'pricing'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
