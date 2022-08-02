import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElearningSchoolComponent } from './components/pages/elearning-school/elearning-school.component';
import { VendorCertificationEtrainingComponent } from './components/pages/vendor-certification-etraining/vendor-certification-etraining.component';
import { OnlineTrainingSchoolComponent } from './components/pages/online-training-school/online-training-school.component';
import { DistanceLearningComponent } from './components/pages/distance-learning/distance-learning.component';
import { LanguageSchoolComponent } from './components/pages/language-school/language-school.component';
import { ModernSchoolingComponent } from './components/pages/modern-schooling/modern-schooling.component';
import { YogaTrainingComponent } from './components/pages/yoga-training/yoga-training.component';
import { HealthCoachingComponent } from './components/pages/health-coaching/health-coaching.component';
import { KindergartenComponent } from './components/pages/kindergarten/kindergarten.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { AboutStyleOneComponent } from './components/pages/about-style-one/about-style-one.component';
import { AboutStyleTwoComponent } from './components/pages/about-style-two/about-style-two.component';
import { AboutStyleThreeComponent } from './components/pages/about-style-three/about-style-three.component';
import { AboutStyleFourComponent } from './components/pages/about-style-four/about-style-four.component';
import { SuccessStoryComponent } from './components/pages/success-story/success-story.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { PurchaseGuideComponent } from './components/pages/purchase-guide/purchase-guide.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/pages/terms-of-service/terms-of-service.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { CoursesStyleOneComponent } from './components/pages/courses-style-one/courses-style-one.component';
import { CoursesStyleTwoComponent } from './components/pages/courses-style-two/courses-style-two.component';
import { CoursesStyleThreeComponent } from './components/pages/courses-style-three/courses-style-three.component';
import { CoursesStyleFourComponent } from './components/pages/courses-style-four/courses-style-four.component';
import { CoursesStyleFiveComponent } from './components/pages/courses-style-five/courses-style-five.component';
import { CoursesStyleSixComponent } from './components/pages/courses-style-six/courses-style-six.component';
import { CoursesStyleSevenComponent } from './components/pages/courses-style-seven/courses-style-seven.component';
import { CoursesDetailsStyleOneComponent } from './components/pages/courses-details-style-one/courses-details-style-one.component';
import { CoursesDetailsStyleTwoComponent } from './components/pages/courses-details-style-two/courses-details-style-two.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ProfileQuizComponent } from './components/pages/profile-quiz/profile-quiz.component';
import { MembershipLevelsComponent } from './components/pages/membership-levels/membership-levels.component';
import { BecomeATeacherComponent } from './components/pages/become-a-teacher/become-a-teacher.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { ProductsListStyleOneComponent } from './components/pages/products-list-style-one/products-list-style-one.component';
import { ProductsListStyleTwoComponent } from './components/pages/products-list-style-two/products-list-style-two.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { BlogStyleOneComponent } from './components/pages/blog-style-one/blog-style-one.component';
import { BlogStyleTwoComponent } from './components/pages/blog-style-two/blog-style-two.component';
import { BlogStyleThreeComponent } from './components/pages/blog-style-three/blog-style-three.component';
import { BlogStyleFourComponent } from './components/pages/blog-style-four/blog-style-four.component';
import { BlogStyleFiveComponent } from './components/pages/blog-style-five/blog-style-five.component';
import { BlogDetailsStyleOneComponent } from './components/pages/blog-details-style-one/blog-details-style-one.component';
import { BlogDetailsStyleTwoComponent } from './components/pages/blog-details-style-two/blog-details-style-two.component';
import { BlogDetailsStyleThreeComponent } from './components/pages/blog-details-style-three/blog-details-style-three.component';
import { GymCoachingComponent } from './components/pages/gym-coaching/gym-coaching.component';
import { LearningManagementComponent } from './components/pages/learning-management/learning-management.component';
import { ProfileAuthenticationComponent } from './components/pages/profile-authentication/profile-authentication.component';

const routes: Routes = [
    {path: '', component: ModernSchoolingComponent},
    {path: 'rechargeservices', component: AboutStyleOneComponent},
    {path: 'billpayments', component: AboutStyleTwoComponent},
    {path: 'banking', component: AboutStyleThreeComponent},
    {path: 'payment', component: AboutStyleFourComponent},
    {path: 'travel', component: SuccessStoryComponent},
    {path: 'loans', component: TeacherComponent},
    {path: 'insurance', component: VendorCertificationEtrainingComponent},
    {path: 'investiments', component: OnlineTrainingSchoolComponent},
    {path: 'business', component: DistanceLearningComponent},
    {path: 'governance', component: LanguageSchoolComponent},
    {path: 'itservices', component: ModernSchoolingComponent},
    {path: 'amazoneasy', component: YogaTrainingComponent},
    {path: 'health-coaching', component: HealthCoachingComponent},
    {path: 'kindergarten', component: KindergartenComponent},
    {path: 'gym-coaching', component: GymCoachingComponent},
    {path: 'learning-management', component: LearningManagementComponent},

    {path: 'faq', component: FaqComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'purchase-guide', component: PurchaseGuideComponent},

    { path: 'single-courses-1/:id', component: CoursesDetailsStyleOneComponent },
    {path: 'profile-authentication', component: ProfileAuthenticationComponent},
    {path: 'single-courses-2', component: CoursesDetailsStyleTwoComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'profile-quiz', component: ProfileQuizComponent},
    {path: 'membership-levels', component: MembershipLevelsComponent},
    {path: 'become-a-teacher', component: BecomeATeacherComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'events', component: EventsComponent},

    {path: 'tasks', component: CheckoutComponent},
    {path: 'single-products', component: ProductsDetailsComponent},
    {path: 'gallery', component: GalleryComponent},

    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-of-service', component: TermsOfServiceComponent},
    {path: 'contact', component: ContactUsComponent},

    {path: 'customer', component: PurchaseGuideComponent},
    {path: 'retailer', component: BlogStyleOneComponent},
    {path: 'distributor', component: BlogStyleTwoComponent},
    {path: 'masterdistributor', component: BlogStyleThreeComponent},
    {path: 'franchise', component: BlogStyleFourComponent},
    {path: 'superfranchise', component: BlogStyleFiveComponent},
    {path: 'whitelabel', component: BlogDetailsStyleOneComponent},
    {path: 'apipartner', component: BlogDetailsStyleTwoComponent},


    {path: 'Aeps', component: CoursesStyleOneComponent},
    {path: 'Emi', component: CoursesStyleTwoComponent},
    {path: 'Monettrasfer', component: CoursesStyleThreeComponent},
    {path: 'Paymentsolution', component: CoursesStyleFourComponent},
    {path: 'Prepaidcards', component: CoursesStyleFiveComponent},
    {path: 'Superinsurance', component: CoursesStyleSixComponent},
    {path: 'Matm', component: CoursesStyleSevenComponent},
    {path: 'Utility', component: BlogDetailsStyleThreeComponent},
    
    // {path: 'Insurance', component: EventsDetailsComponent},
    {path: 'Bankaccount', component: ProductsListStyleOneComponent},
    {path: 'Amazoneasystore', component: ProductsListStyleTwoComponent},
    {path: 'aboutus', component: CartComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }