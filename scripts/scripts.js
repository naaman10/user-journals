$(document).ready(function() {
    $('.mdb-select').material_select();
});
$(document).ready(function() {
  $(".projectLink").click(function() {
    var naaman = $(this).attr('id');
    console.log(naaman);
  });

});
$(".storyTabsItem").click(function() {
  $(".storyTabsItem.activeTab").removeClass('activeTab');
  $(this).addClass('activeTab');
});

