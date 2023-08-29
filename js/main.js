(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false
    });


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "USA",
                data: [15, 30, 55, 65, 60, 80, 95],
                backgroundColor: "rgba(0, 156, 255, .7)"
            },
            {
                label: "UK",
                data: [8, 35, 40, 60, 70, 55, 75],
                backgroundColor: "rgba(0, 156, 255, .5)"
            },
            {
                label: "AU",
                data: [12, 25, 45, 55, 65, 70, 60],
                backgroundColor: "rgba(0, 156, 255, .3)"
            }
            ]
        },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "Salse",
                data: [15, 30, 55, 45, 70, 65, 85],
                backgroundColor: "rgba(0, 156, 255, .5)",
                fill: true
            },
            {
                label: "Revenue",
                data: [99, 135, 170, 130, 190, 180, 270],
                backgroundColor: "rgba(0, 156, 255, .3)",
                fill: true
            }
            ]
        },
        options: {
            responsive: true
        }
    });



    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(0, 156, 255, .3)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


})(jQuery);
function addTableRow(tableType) {
    var table = document.getElementById("myTable");
    rowCount = table.rows.length;
    var newRow = table.insertRow(rowCount);

    var idPrefix = tableType === "person" ? "person" : "computer"; // Varsayılan olarak "computer" türünü kullanalım
    if (tableType === "computer") {
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        cell1.innerHTML = rowCount;

        cell2.innerHTML = `<input type="text" id="${idPrefix}-Name${rowCount}" class="form-control" placeholder="Name">`;
        cell3.innerHTML = `<input type="text" id="${idPrefix}-Model${rowCount}" class="form-control" placeholder="Model">`;
        cell4.innerHTML = `<input type="text" id="${idPrefix}-GraphicsCard${rowCount}" class="form-control" placeholder="Graphics Card">`;
        cell5.innerHTML = `<input type="text" id="${idPrefix}-OperatingSystem${rowCount}" class="form-control" placeholder="Operating System">`;
        cell6.innerHTML = `<input type="text" id="${idPrefix}-RAM${rowCount}" class="form-control" placeholder="RAM">`;
        cell7.innerHTML = `<input type="text" id="${idPrefix}-ScreenSize${rowCount}" class="form-control" placeholder="Screen Size">`;
        cell8.innerHTML = '<button type="button" class="btn btn-danger" onclick="removeRow(this)">Remove</button>';
        window.scrollTo(0, document.body.scrollHeight);
    }
    if (tableType === "person") {
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        cell1.innerHTML = rowCount;

        cell2.innerHTML = `<input type="text" id="${idPrefix}-firstName${rowCount}" class="form-control" placeholder="FirstName">`;
        cell3.innerHTML = `<input type="text" id="${idPrefix}-lastName${rowCount}" class="form-control" placeholder="LastName">`;
        cell4.innerHTML = `<input type="text" id="${idPrefix}-email${rowCount}" class="form-control" placeholder="Email">`;
        cell5.innerHTML = `<input type="text" id="${idPrefix}-country${rowCount}" class="form-control" placeholder="Country">`;
        cell6.innerHTML = `<input type="text" id="${idPrefix}-computer${rowCount}" class="form-control" placeholder="ComputerId">`;
        cell7.innerHTML = `<input type="text" id="${idPrefix}-status${rowCount}" class="form-control" placeholder="Status">`;
        cell8.innerHTML = '<button type="button" class="btn btn-danger" onclick="removeRow(this)">Remove</button>';
        window.scrollTo(0, document.body.scrollHeight);
    }
}


function removeRow(button) {
    var table = document.getElementById("myTable");
    var row = button.closest("tr"); // Daha güvenli bir yol
    var computerId = row.querySelector("th").getAttribute("id");

    fetch(`http://localhost:5154/api/Computers/${computerId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data deleted:", data);

            // Row'u kaldır
            row.parentNode.removeChild(row);

            // Sıralamayı güncelle
            var rowCount = table.rows.length;
            for (var i = 0; i < rowCount; i++) {
                table.rows[i].cells[0].innerHTML = i + 1;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



function saveData() {
    const rowCount = document.getElementById("myTable").rows.length - 1;
    const computerName = $("#computer-Name" + rowCount).val();
    const computerModel = document.getElementById(`computer-Model` + rowCount).value;
    const graphicsCard = document.getElementById(`computer-GraphicsCard` + rowCount).value;
    const operatingSystem = document.getElementById(`computer-OperatingSystem` + rowCount).value;
    const ram = document.getElementById(`computer-RAM` + rowCount).value;
    const screenSize = parseInt(document.getElementById(`computer-ScreenSize` + rowCount).value, 10);

    const newData = {
        computerName: computerName,
        computerModel: computerModel,
        graphicsCard: graphicsCard,
        operatingSystem: operatingSystem,
        ram: ram,
        screenSize: screenSize
    };

    const jsonData = JSON.stringify(newData);

    fetch("http://localhost:5154/api/Computers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    })
        .then(response => response.json())
        .then(data => {
            console.log("Data added:", data);
            alert(data.value);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function removeRowOwner(button) {
    var table = document.getElementById("myTable");
    var row = button.parentNode.parentNode;
    var ownerId = row.querySelector("th").getAttribute("id");



    fetch(`http://localhost:5154/api/Owners/${ownerId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log("Data deleted:", data);

            // Row'u kaldır
            row.parentNode.removeChild(row);

            // Sıralamayı güncelle
            var rowCount = table.rows.length;
            for (var i = 1; i < rowCount; i++) {
                table.rows[i].cells[0].innerHTML = i;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function saveDataOwner() {
    const rowCount = document.getElementById("myTable").rows.length - 1;

    const firstName = document.getElementById("person-firstName" + rowCount).value;
    const lastName = document.getElementById("person-lastName" + rowCount).value;
    const email = document.getElementById("person-email" + rowCount).value;
    const country = document.getElementById("person-country" + rowCount).value;
    const computerId = parseInt(document.getElementById("person-computer" + rowCount).value);
    const status = document.getElementById("person-status" + rowCount).value;


    const newData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        computerId: computerId,
        status: status
    };

    const jsonData = JSON.stringify(newData);

    fetch("http://localhost:5154/api/Owners", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    })
        .then(response => response.json())
        .then(data => {
            console.log("Data added:", data);
            // Yeni veriyi tabloya ekleme işlemleri burada yapılabilir
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



