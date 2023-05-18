import Swal from "sweetalert2";
import { UserFeedbackComponent } from "../user-feedback-component/user-feedback-component";

export const UserFeedbackModal = () => {
  const userFeedbackModalClosedTimestamp = localStorage.getItem(
    "userFeedbackModalClosedTimestamp"
  );
  /// modal nie pojawia się przez określony czas
  ///
  if (userFeedbackModalClosedTimestamp) {
    const threeDaysInMiliseconds = 3 * 24 * 60 * 60 * 1000;
    const currentDate = new Date();

    const threeDaysAgo = currentDate.getTime() - threeDaysInMiliseconds;
    const oneMinuteAgo = currentDate.getTime() - 60000;
    /// wyłączone na czas zatwierdzenia

    //   if (userFeedbackModalClosedTimestamp >= threeDaysAgo) {
    //     return;
    //   }
  }

  Swal.fire({
    template: "#user-feedback-modal",
    showConfirmButton: false,
    width: "492px",
    padding: 0,
    customClass: {
      container: "user-feedback-modal",
    },
    background: "var(--background-color)",
    color: "var(--on-background-color)",
    showCloseButton: true,
    allowEnterKey: false,
    closeButtonHtml: '<img src="/assets/icons/close-icon.svg" alt="X" />',
    didClose: () => {
      localStorage.setItem("userFeedbackModalClosedTimestamp", Date.now());
    },
  });

  /// zamykanie modala na esc btn
  ///

  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
      Swal.close();
    }
  });
};
// UserFeedbackModal();
// UserFeedbackComponent();
