/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "./home-page.scss";

import { UserFeedbackModal } from "./components/user-feedback-modal/user-feedback-modal";

import { UserFeedbackComponent } from "./components/user-feedback-component/user-feedback-component";


setTimeout(() => {
    UserFeedbackModal();
    UserFeedbackComponent();
 }, 1500);
