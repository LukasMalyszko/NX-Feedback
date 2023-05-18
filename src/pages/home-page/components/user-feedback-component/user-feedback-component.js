import { UserFeedbackModal } from "../user-feedback-modal/user-feedback-modal";

export const UserFeedbackComponent = () => {
  let isLoading = false;

  const userFeedbackComponent = document.querySelector(
    ".user-feedback-component"
  );
  const allRatesTiles = userFeedbackComponent.querySelectorAll(
    ".user-feedback-component__single-rate-tile"
  );

  let currentRating;

  addListenerToAllRatesTiles();

  function addListenerToAllRatesTiles() {
    allRatesTiles.forEach((singleRateTile) => {
      singleRateTile.addEventListener("click", () => {
        singleRateTile.toggleAttribute("data-selected");
        if (singleRateTile.hasAttribute("data-selected")) {
          currentRating = singleRateTile.getAttribute("data-rate");
        } else {
          currentRating = null;
        }

        disselectOtherRatings(singleRateTile);
        setProperButtonState();
      });
    });
  }

  function disselectOtherRatings(clicketTile) {
    allRatesTiles.forEach((singleRateTile) => {
      if (singleRateTile != clicketTile) {
        singleRateTile.removeAttribute("data-selected");
      }
    });
  }

//   function afterRatingChanged(singleRateTile) {
//     disselectOtherRatings(singleRateTile);
//     setProperButtonState(currentRating);
//   }

  const confirmButton = document.querySelector(".btn-primary");

  function setProperButtonState() {
    if (currentRating) {
      confirmButton.removeAttribute("disabled");
    } else {
      confirmButton.setAttribute("disabled", true);
    }
  }

  confirmButton.addEventListener("click", setLoaderToButton);

  function setLoaderToButton() {
    if (!currentRating) {
      console.log(`Error, choose rewiev`);
      return null;
    }
    confirmButton.setAttribute("data-loader", "1");
  }
};
