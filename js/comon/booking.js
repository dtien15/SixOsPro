async function Send_Booking(data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "/api/Booking/SendBooking",
      type: "POST",
      async: true,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function (data, textStatus, jqXHR) {
        resolve(Number(data));
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        resolve(0);
      },
    });
  });
}

