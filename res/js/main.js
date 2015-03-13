/* make the API call */
FB.api(
    "/me",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);