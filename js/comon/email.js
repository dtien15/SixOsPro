async function Email_Send(data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "/api/Mail/SendMail",
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

function Email_ReplaceTemplate(data, template) {
  try {
    let result = template;
    if (Object.entries(data).length !== 0) {
      for (const [key, value] of Object.entries(data)) {
        let keyReplace = "#" + key + "#";
        result = result.replaceAll(keyReplace, value);
      }
    }
    return result;
  } catch (ex) {
    return template;
  }
}

//#endregion

//#region // GET TEMPLATE

async function AjaxGetTemplate(url = "") {
  return new Promise((reslove) => {
    if (url != "") {
      $.get(url, (data) => reslove(data));
    } else reslove("");
  });
}

//#endregion
