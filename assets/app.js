$(document).ready(function() {
  // Global function to find unique values in an array
  let onlyUnique = (value, index, array) => {
    return array.indexOf(value) === index;
  };

  //Global function to show all table rows
  let renderFullTable = () => {
    $("#searchInput").val("");
    let tr = $("tr");
    tr.show();
  };

  //Render topic buttons function
  let renderTopicButtons = () => {
    let tr = $("tr");
    let topicsArr = [];

    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      topics = td.getAttribute("topic");
      topicsArr.push(topics);
    }

    let uniqueTopicsArr = topicsArr.filter(onlyUnique);
    console.log("unique array:  " + uniqueTopicsArr);

    for (i = 0; i < uniqueTopicsArr.length; i++) {
      let b = $("<button>");
      b.text(uniqueTopicsArr[i]);
      b.addClass("topicButton");
      b.attr("button-value", uniqueTopicsArr[i]);
      $(".buttonDiv").append(b);
    }
  };

  //   Calling renderTopixButtons function
  renderTopicButtons();

  //On click function for search button based on user input
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

  // On click function to query resources using premade buttons
  $(".topicButton").on("click", function() {
    renderFullTable();
    let input = $(this).attr("button-value");
    let filter = input.toUpperCase();
    let tr = $("tr");

    for (i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[0];
      let tdTopic = td.getAttribute("topic");
      if (tdTopic.toUpperCase() === filter) {
        tr[i].style.display = " ";
      } else {
        tr[i].style.display = "none";
      }
    }

    if (input === "") {
      $("tr").show();
    }
  });
});
