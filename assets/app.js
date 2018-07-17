$(document).ready(function() {
  $(".searchBtn").on("click", function() {
    search();
  });

  let search = () => {
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
  };

//   $(window).on("load", function() {
//     let tagtrs
//   })

  //   let searchTags = () => {
  //     let input = $("#searchInput").val();
  //     let filter = input.toUpperCase();
  //     let tr = $("tr");

  //     for (i = 1; i < tr.length; i++) {
  //       td = tr[i].getElementsByTagName("td")[0];
  //       let tags = td.getAttribute("tag");
  //       //   console.log(tags);
  //       if (tags.toUpperCase().indexOf(filter) > 0) {
  //         tr[i].style.display = " ";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   };
});
