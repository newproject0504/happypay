import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';
import { StickyNavModule } from 'ng2-sticky-nav';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { LightboxModule } from 'ngx-lightbox';
import { AccordionModule } from "ngx-accordion";
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ElearningSchoolComponent } from './components/pages/elearning-school/elearning-school.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { VendorCertificationEtrainingComponent } from './components/pages/vendor-certification-etraining/vendor-certification-etraining.component';
import { PremiumAccessComponent } from './components/common/premium-access/premium-access.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
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
import { ElearningBannerComponent } from './components/pages/elearning-school/elearning-banner/elearning-banner.component';
import { FeaturesStyleOneComponent } from './components/common/features-style-one/features-style-one.component';
import { ElearningAboutComponent } from './components/pages/elearning-school/elearning-about/elearning-about.component';
import { ViewAllCoursesComponent } from './components/common/view-all-courses/view-all-courses.component';
import { GetInstantCoursesComponent } from './components/common/get-instant-courses/get-instant-courses.component';
import { FunfactsFeedbackComponent } from './components/common/funfacts-feedback/funfacts-feedback.component';
import { VideoComponent } from './components/common/video/video.component';
import { CoursesComponent } from './components/common/courses/courses.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { ViewAllCoursesTwoComponent } from './components/common/view-all-courses-two/view-all-courses-two.component';
import { VendorBannerComponent } from './components/pages/vendor-certification-etraining/vendor-banner/vendor-banner.component';
import { SloganComponent } from './components/common/slogan/slogan.component';
import { VendorCoursesComponent } from './components/pages/vendor-certification-etraining/vendor-courses/vendor-courses.component';
import { VendorPopularCoursesComponent } from './components/pages/vendor-certification-etraining/vendor-popular-courses/vendor-popular-courses.component';
import { InstructorComponent } from './components/common/instructor/instructor.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { PremiumAccessTwoComponent } from './components/common/premium-access-two/premium-access-two.component';
import { FunfactsStyleOneComponent } from './components/common/funfacts-style-one/funfacts-style-one.component';
import { VendorAboutComponent } from './components/pages/vendor-certification-etraining/vendor-about/vendor-about.component';
import { OnlineTrainingBannerComponent } from './components/pages/online-training-school/online-training-banner/online-training-banner.component';
import { FeaturesStyleTwoComponent } from './components/common/features-style-two/features-style-two.component';
import { OnlineTrainingBlogComponent } from './components/pages/online-training-school/online-training-blog/online-training-blog.component';
import { InstructorStyleTwoComponent } from './components/common/instructor-style-two/instructor-style-two.component';
import { TopCategoriesComponent } from './components/common/top-categories/top-categories.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { OnlineTrainingAboutComponent } from './components/pages/online-training-school/online-training-about/online-training-about.component';
import { OnlineTrainingCoursesComponent } from './components/pages/online-training-school/online-training-courses/online-training-courses.component';
import { DistanceBlogComponent } from './components/pages/distance-learning/distance-blog/distance-blog.component';
import { DistanceCoursesComponent } from './components/pages/distance-learning/distance-courses/distance-courses.component';
import { DistancePopularCoursesComponent } from './components/pages/distance-learning/distance-popular-courses/distance-popular-courses.component';
import { DistanceBannerComponent } from './components/pages/distance-learning/distance-banner/distance-banner.component';
import { DistanceBoxesComponent } from './components/pages/distance-learning/distance-boxes/distance-boxes.component';
import { DistanceAboutComponent } from './components/pages/distance-learning/distance-about/distance-about.component';
import { FunfactsStyleTwoComponent } from './components/common/funfacts-style-two/funfacts-style-two.component';
import { LanguageSchoolBannerComponent } from './components/pages/language-school/language-school-banner/language-school-banner.component';
import { ModernSchoolingBannerComponent } from './components/pages/modern-schooling/modern-schooling-banner/modern-schooling-banner.component';
import { HealthCoachingBannerComponent } from './components/pages/health-coaching/health-coaching-banner/health-coaching-banner.component';
import { KindergartenBannerComponent } from './components/pages/kindergarten/kindergarten-banner/kindergarten-banner.component';
import { GymCoachingBannerComponent } from './components/pages/gym-coaching/gym-coaching-banner/gym-coaching-banner.component';
import { LanguageSchoolCoursesComponent } from './components/pages/language-school/language-school-courses/language-school-courses.component';
import { LanguageSchoolTopCoursesComponent } from './components/pages/language-school/language-school-top-courses/language-school-top-courses.component';
import { LanguageSchoolAboutComponent } from './components/pages/language-school/language-school-about/language-school-about.component';
import { FeedbackWithBgComponent } from './components/common/feedback-with-bg/feedback-with-bg.component';
import { HowToApplyComponent } from './components/common/how-to-apply/how-to-apply.component';
import { FreeTrialComponent } from './components/common/free-trial/free-trial.component';
import { UpcomingEventsComponent } from './components/common/upcoming-events/upcoming-events.component';
import { BoxesComponent } from './components/common/boxes/boxes.component';
import { ModernSchoolingAboutComponent } from './components/pages/modern-schooling/modern-schooling-about/modern-schooling-about.component';
import { ModernSchoolingCoursesComponent } from './components/pages/modern-schooling/modern-schooling-courses/modern-schooling-courses.component';
import { ModernSchoolingEventsComponent } from './components/pages/modern-schooling/modern-schooling-events/modern-schooling-events.component';
import { OverviewComponent } from './components/common/overview/overview.component';
import { TrainingComponent } from './components/common/training/training.component';
import { YogaAboutComponent } from './components/pages/yoga-training/yoga-about/yoga-about.component';
import { FeedbackStyleTwoComponent } from './components/common/feedback-style-two/feedback-style-two.component';
import { DownloadSyllabusComponent } from './components/common/download-syllabus/download-syllabus.component';
import { FlexiblePricingComponent } from './components/common/flexible-pricing/flexible-pricing.component';
import { YogaBlogComponent } from './components/pages/yoga-training/yoga-blog/yoga-blog.component';
import { SubscribeStyleTwoComponent } from './components/common/subscribe-style-two/subscribe-style-two.component';
import { ExperienceComponent } from './components/common/experience/experience.component';
import { YogaCoursesComponent } from './components/pages/yoga-training/yoga-courses/yoga-courses.component';
import { YogaBannerComponent } from './components/pages/yoga-training/yoga-banner/yoga-banner.component';
import { LifestyleComponent } from './components/common/lifestyle/lifestyle.component';
import { ProgramComponent } from './components/common/program/program.component';
import { ServicesComponent } from './components/common/services/services.component';
import { HealthCoursesComponent } from './components/pages/health-coaching/health-courses/health-courses.component';
import { HealthExperienceComponent } from './components/pages/health-coaching/health-experience/health-experience.component';
import { HealthFeedbackComponent } from './components/pages/health-coaching/health-feedback/health-feedback.component';
import { HealthEventsComponent } from './components/pages/health-coaching/health-events/health-events.component';
import { HealthBlogComponent } from './components/pages/health-coaching/health-blog/health-blog.component';
import { SubscribeStyleThreeComponent } from './components/common/subscribe-style-three/subscribe-style-three.component';
import { SubscribeStyleFourComponent } from './components/common/subscribe-style-four/subscribe-style-four.component';
import { KindergartenAboutComponent } from './components/pages/kindergarten/kindergarten-about/kindergarten-about.component';
import { KindergartenServicesComponent } from './components/pages/kindergarten/kindergarten-services/kindergarten-services.component';
import { KindergartenCoursesComponent } from './components/pages/kindergarten/kindergarten-courses/kindergarten-courses.component';
import { KindergartenFeedbackComponent } from './components/pages/kindergarten/kindergarten-feedback/kindergarten-feedback.component';
import { KindergartenEventsComponent } from './components/pages/kindergarten/kindergarten-events/kindergarten-events.component';
import { KindergartenBlogComponent } from './components/pages/kindergarten/kindergarten-blog/kindergarten-blog.component';
import { SelectedAgesComponent } from './components/common/selected-ages/selected-ages.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { OnlinePlatformComponent } from './components/common/online-platform/online-platform.component';
import { FeaturedComponent } from './components/common/featured/featured.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { FunfactsStyleThreeComponent } from './components/common/funfacts-style-three/funfacts-style-three.component';
import { FeedbackStyleThreeComponent } from './components/common/feedback-style-three/feedback-style-three.component';
import { ExpertTrainerComponent } from './components/common/expert-trainer/expert-trainer.component';
import { GymBlogComponent } from './components/pages/gym-coaching/gym-blog/gym-blog.component';
import { GymCoursesComponent } from './components/pages/gym-coaching/gym-courses/gym-courses.component';
import { ApplyInstructorComponent } from './components/common/apply-instructor/apply-instructor.component';
import { TeacherRegisterComponent } from './components/common/teacher-register/teacher-register.component';
import { OurStoryComponent } from './components/pages/success-story/our-story/our-story.component';
import { SuccessPeopleComponent } from './components/common/success-people/success-people.component';
import { LearningManagementComponent } from './components/pages/learning-management/learning-management.component';
import { LearningBannerComponent } from './components/pages/learning-management/learning-banner/learning-banner.component';
import { FeaturesStyleFourComponent } from './components/common/features-style-four/features-style-four.component';
import { LearningCoursesComponent } from './components/pages/learning-management/learning-courses/learning-courses.component';
import { LearningAboutComponent } from './components/pages/learning-management/learning-about/learning-about.component';
import { TestimonialsStyleTwoComponent } from './components/common/testimonials-style-two/testimonials-style-two.component';
import { GetInstantCoursesTwoComponent } from './components/common/get-instant-courses-two/get-instant-courses-two.component';
import { PartnerSliderComponent } from './components/common/partner-slider/partner-slider.component';
import { VideoStyleTwoComponent } from './components/common/video-style-two/video-style-two.component';
import { FunfactsStyleFourComponent } from './components/common/funfacts-style-four/funfacts-style-four.component';
import { LearningBlogComponent } from './components/pages/learning-management/learning-blog/learning-blog.component';
import { LearningViewCoursesComponent } from './components/pages/learning-management/learning-view-courses/learning-view-courses.component';
import { LearningPremiumAccessComponent } from './components/pages/learning-management/learning-premium-access/learning-premium-access.component';
import { firebaseConfig } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ViewTaskComponent } from './components/common/view-task/view-task.component';
import { ClarityModule } from '@clr/angular';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        ElearningSchoolComponent,
        PartnerComponent,
        VendorCertificationEtrainingComponent,
        PremiumAccessComponent,
        SubscribeComponent,
        OnlineTrainingSchoolComponent,
        DistanceLearningComponent,
        LanguageSchoolComponent,
        ModernSchoolingComponent,
        YogaTrainingComponent,
        HealthCoachingComponent,
        KindergartenComponent,
        ContactUsComponent,
        GalleryComponent,
        AboutStyleOneComponent,
        AboutStyleTwoComponent,
        AboutStyleThreeComponent,
        AboutStyleFourComponent,
        SuccessStoryComponent,
        TeacherComponent,
        ErrorComponent,
        ComingSoonComponent,
        PurchaseGuideComponent,
        PrivacyPolicyComponent,
        TermsOfServiceComponent,
        FaqComponent,
        CoursesStyleOneComponent,
        CoursesStyleTwoComponent,
        CoursesStyleThreeComponent,
        CoursesStyleFourComponent,
        CoursesStyleFiveComponent,
        CoursesStyleSixComponent,
        CoursesStyleSevenComponent,
        CoursesDetailsStyleOneComponent,
        CoursesDetailsStyleTwoComponent,
        ProfileComponent,
        ProfileQuizComponent,
        MembershipLevelsComponent,
        BecomeATeacherComponent,
        CategoriesComponent,
        EventsComponent,
        EventsDetailsComponent,
        ProductsListStyleOneComponent,
        ProductsListStyleTwoComponent,
        CartComponent,
        CheckoutComponent,
        ProductsDetailsComponent,
        BlogStyleOneComponent,
        BlogStyleTwoComponent,
        BlogStyleThreeComponent,
        BlogStyleFourComponent,
        BlogStyleFiveComponent,
        BlogDetailsStyleOneComponent,
        BlogDetailsStyleTwoComponent,
        BlogDetailsStyleThreeComponent,
        GymCoachingComponent,
        ElearningBannerComponent,
        FeaturesStyleOneComponent,
        ElearningAboutComponent,
        ViewAllCoursesComponent,
        GetInstantCoursesComponent,
        FunfactsFeedbackComponent,
        VideoComponent,
        CoursesComponent,
        BlogComponent,
        ViewAllCoursesTwoComponent,
        VendorBannerComponent,
        SloganComponent,
        VendorCoursesComponent,
        VendorPopularCoursesComponent,
        InstructorComponent,
        TestimonialsComponent,
        PremiumAccessTwoComponent,
        FunfactsStyleOneComponent,
        VendorAboutComponent,
        OnlineTrainingBannerComponent,
        FeaturesStyleTwoComponent,
        OnlineTrainingBlogComponent,
        InstructorStyleTwoComponent,
        TopCategoriesComponent,
        FeedbackComponent,
        OnlineTrainingAboutComponent,
        OnlineTrainingCoursesComponent,
        DistanceBlogComponent,
        DistanceCoursesComponent,
        DistancePopularCoursesComponent,
        DistanceBannerComponent,
        DistanceBoxesComponent,
        DistanceAboutComponent,
        FunfactsStyleTwoComponent,
        LanguageSchoolBannerComponent,
        ModernSchoolingBannerComponent,
        HealthCoachingBannerComponent,
        KindergartenBannerComponent,
        GymCoachingBannerComponent,
        LanguageSchoolCoursesComponent,
        LanguageSchoolTopCoursesComponent,
        LanguageSchoolAboutComponent,
        FeedbackWithBgComponent,
        HowToApplyComponent,
        FreeTrialComponent,
        UpcomingEventsComponent,
        BoxesComponent,
        ModernSchoolingAboutComponent,
        ModernSchoolingCoursesComponent,
        ModernSchoolingEventsComponent,
        OverviewComponent,
        TrainingComponent,
        YogaAboutComponent,
        FeedbackStyleTwoComponent,
        DownloadSyllabusComponent,
        FlexiblePricingComponent,
        YogaBlogComponent,
        SubscribeStyleTwoComponent,
        ExperienceComponent,
        YogaCoursesComponent,
        YogaBannerComponent,
        LifestyleComponent,
        ProgramComponent,
        ServicesComponent,
        HealthCoursesComponent,
        HealthExperienceComponent,
        HealthFeedbackComponent,
        HealthEventsComponent,
        HealthBlogComponent,
        SubscribeStyleThreeComponent,
        SubscribeStyleFourComponent,
        KindergartenAboutComponent,
        KindergartenServicesComponent,
        KindergartenCoursesComponent,
        KindergartenFeedbackComponent,
        KindergartenEventsComponent,
        KindergartenBlogComponent,
        SelectedAgesComponent,
        AppDownloadComponent,
        OnlinePlatformComponent,
        FeaturedComponent,
        WhyChooseUsComponent,
        FunfactsStyleThreeComponent,
        FeedbackStyleThreeComponent,
        ExpertTrainerComponent,
        GymBlogComponent,
        GymCoursesComponent,
        ApplyInstructorComponent,
        TeacherRegisterComponent,
        OurStoryComponent,
        SuccessPeopleComponent,
        LearningManagementComponent,
        LearningBannerComponent,
        FeaturesStyleFourComponent,
        LearningCoursesComponent,
        LearningAboutComponent,
        TestimonialsStyleTwoComponent,
        GetInstantCoursesTwoComponent,
        PartnerSliderComponent,
        VideoStyleTwoComponent,
        FunfactsStyleFourComponent,
        LearningBlogComponent,
        LearningViewCoursesComponent,
        LearningPremiumAccessComponent,
        ViewTaskComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        CountUpModule,
        StickyNavModule,
        TabsModule,
        ClarityModule,
        NgxScrollTopModule,
        LightboxModule,
        AccordionModule,
        FormsModule,
        MatDialogModule,
        MatIconModule,
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideStorage(() => getStorage()),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
