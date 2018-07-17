$(document).ready(function() {
//Render tag buttons
  let renderTagButtons = () => {
    let tr = $("tr");

    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      tags = td.getAttribute("tag");
      let b = $("<button>");
      b.text(tags);
      b.addClass("tagButton");
      b.attr("button-value", tags)
      $(".buttonDiv").append(b);
    }
  };
  renderTagButtons();

  let renderFullTable = () => {
    $("#searchInput").val('');
      let tr = $("tr");
      tr.show()
  }

//Search button on click
  $(".searchBtn").on("click", function() {
    let input = $("#searchInput").val();
    let filter = input.toUpperCase();
    let tr = $("tr");

    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td.innerHTML.toUpperCase().indexOf(filter) > 0) {
        tr[i].style.display = " ";
      } else {
        tr[i].style.display = "none";
      }
    }

    if (input === "") {
      $("tr").show();
    }
  });

// Tag button on click
  $(".tagButton").on("click", function(){
    renderFullTable();
    let input = $(this).attr("button-value");
    let filter = input.toUpperCase();
    let tr = $("tr");

    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td.innerHTML.toUpperCase().indexOf(filter) > 0) {
        tr[i].style.display = " ";
      } else {
        tr[i].style.display = "none";
      }
    }

    if (input === "") {
      $("tr").show();
    }
  })

});
