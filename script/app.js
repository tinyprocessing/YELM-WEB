window.onload = function() {

	get_profile()
};


// settings
domain = "http://95.213.140.10/yelm/admin/api/api.php";
domain_image = "http://95.213.140.10/yelm/admin/api/images.php";
platform = "yelmio"
categoty_change = ""
company_change = ""
company_basis_change = ""


function get_profile() {

 $.ajax({
        type: "GET",
        url: domain,
        data: "get_profile=true&platform="+platform,
        success: function(msg) {
            $(".username")[0].innerHTML = msg[0].Username
           
        }
    });

}


