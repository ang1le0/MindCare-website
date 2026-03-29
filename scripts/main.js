/* 
Name: Fatemah Ali Alyami
ID: 2006617
Name: Renad Hassan Almadani
ID: 2206593
Section: CPCS 403
Date: 2026-03-14
*/
console.log("MindCare website loaded successfully.");

const appointmentData = {
  family: [
    {
      doctor: "Dr. Sarah Ahmed",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Unavailable",
        "11:00 AM": "Available",
        "12:00 PM": "Unavailable",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Unavailable",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Laila Hassan",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Available",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Unavailable",
        "2:00 PM": "Available",
        "3:00 PM": "Available",
        "4:00 PM": "Unavailable"
      }
    },
    {
      doctor: "Dr. Noor Ali",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Available",
        "11:00 AM": "Unavailable",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Unavailable",
        "3:00 PM": "Available",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Maha Salem",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Unavailable",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Unavailable",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Reem Khalid",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Unavailable",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Unavailable",
        "2:00 PM": "Available",
        "3:00 PM": "Available",
        "4:00 PM": "Unavailable"
      }
    }
  ],

  individual: [
    {
      doctor: "Dr. Rana Adel",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Available",
        "11:00 AM": "Unavailable",
        "12:00 PM": "Available",
        "1:00 PM": "Unavailable",
        "2:00 PM": "Available",
        "3:00 PM": "Available",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Huda Sami",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Available",
        "11:00 AM": "Available",
        "12:00 PM": "Unavailable",
        "1:00 PM": "Available",
        "2:00 PM": "Unavailable",
        "3:00 PM": "Available",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Eman Tariq",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Unavailable",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Unavailable",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Dana Faris",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Available",
        "11:00 AM": "Available",
        "12:00 PM": "Unavailable",
        "1:00 PM": "Unavailable",
        "2:00 PM": "Available",
        "3:00 PM": "Available",
        "4:00 PM": "Unavailable"
      }
    },
    {
      doctor: "Dr. Amal Nasser",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Available",
        "11:00 AM": "Unavailable",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Available",
        "4:00 PM": "Unavailable"
      }
    }
  ],

  anxiety: [
    {
      doctor: "Dr. Aseel Omar",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Unavailable",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Unavailable",
        "2:00 PM": "Available",
        "3:00 PM": "Available",
        "4:00 PM": "Unavailable"
      }
    },
    {
      doctor: "Dr. Raghad Sami",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Available",
        "11:00 AM": "Available",
        "12:00 PM": "Unavailable",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Unavailable",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Wafa Ali",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Available",
        "11:00 AM": "Unavailable",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Unavailable",
        "3:00 PM": "Available",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Shahad Noor",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Unavailable",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Unavailable",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Maram Khaled",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Available",
        "11:00 AM": "Available",
        "12:00 PM": "Unavailable",
        "1:00 PM": "Unavailable",
        "2:00 PM": "Available",
        "3:00 PM": "Available",
        "4:00 PM": "Unavailable"
      }
    }
  ],

  stress: [
    {
      doctor: "Dr. Haneen Adel",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Available",
        "11:00 AM": "Unavailable",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Unavailable",
        "3:00 PM": "Available",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Samar Nabil",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Available",
        "11:00 AM": "Available",
        "12:00 PM": "Unavailable",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Unavailable",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Mona Saad",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Unavailable",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Unavailable",
        "2:00 PM": "Available",
        "3:00 PM": "Available",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Salma Yasser",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Available",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Unavailable",
        "3:00 PM": "Available",
        "4:00 PM": "Unavailable"
      }
    },
    {
      doctor: "Dr. Lina Fawzi",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Available",
        "11:00 AM": "Unavailable",
        "12:00 PM": "Unavailable",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Available",
        "4:00 PM": "Unavailable"
      }
    }
  ],

  student: [
    {
      doctor: "Dr. Yara Hassan",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Unavailable",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Unavailable",
        "3:00 PM": "Available",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Abeer Sami",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Available",
        "11:00 AM": "Available",
        "12:00 PM": "Unavailable",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Unavailable",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Dalia Noor",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Available",
        "11:00 AM": "Unavailable",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Unavailable",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Reema Adel",
      slots: {
        "9:00 AM": "Unavailable",
        "10:00 AM": "Unavailable",
        "11:00 AM": "Available",
        "12:00 PM": "Available",
        "1:00 PM": "Available",
        "2:00 PM": "Unavailable",
        "3:00 PM": "Available",
        "4:00 PM": "Available"
      }
    },
    {
      doctor: "Dr. Nada Farah",
      slots: {
        "9:00 AM": "Available",
        "10:00 AM": "Available",
        "11:00 AM": "Available",
        "12:00 PM": "Unavailable",
        "1:00 PM": "Available",
        "2:00 PM": "Available",
        "3:00 PM": "Unavailable",
        "4:00 PM": "Unavailable"
      }
    }
  ]
};

const sessionSelector = document.getElementById("sessionSelector");
const appointmentsBody = document.getElementById("appointmentsBody");
const sessionTypeForm = document.getElementById("sessionTypeForm");
const doctorNameInput = document.getElementById("doctorName");
const appointmentTimeInput = document.getElementById("appointmentTime");
const selectedAppointmentMessage = document.getElementById("selectedAppointmentMessage");

function clearSelectedSlotHighlight() {
  const selectedCells = document.querySelectorAll(".selected-slot");
  selectedCells.forEach((cell) => cell.classList.remove("selected-slot"));
}

function resetBookingFields() {
  if (doctorNameInput) doctorNameInput.value = "";
  if (appointmentTimeInput) appointmentTimeInput.value = "";
}

function renderAppointments(sessionType) {
  if (!appointmentsBody) return;

  appointmentsBody.innerHTML = "";

  if (!sessionType || !appointmentData[sessionType]) {
    appointmentsBody.innerHTML = `
      <tr>
        <td colspan="9">Please select a session type to view available appointments.</td>
      </tr>
    `;
    return;
  }

  const doctors = appointmentData[sessionType];
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  doctors.forEach((doctorObj) => {
    const row = document.createElement("tr");

    const doctorCell = document.createElement("td");
    doctorCell.textContent = doctorObj.doctor;
    doctorCell.className = "doctor-name";
    row.appendChild(doctorCell);

    times.forEach((time) => {
      const status = doctorObj.slots[time];
      const cell = document.createElement("td");

      if (status === "Available") {
        cell.className = "available-slot";
        cell.innerHTML = `<span class="slot-label">Book Now</span>`;
        cell.title = `Book ${doctorObj.doctor} at ${time}`;

        cell.addEventListener("click", () => {
          clearSelectedSlotHighlight();
          cell.classList.add("selected-slot");

          const sessionText = sessionSelector.options[sessionSelector.selectedIndex].text;

          if (sessionTypeForm) {
            sessionTypeForm.value = sessionText;
          }

          if (doctorNameInput) {
            doctorNameInput.value = doctorObj.doctor;
          }

          if (appointmentTimeInput) {
            appointmentTimeInput.value = time;
          }

          if (selectedAppointmentMessage) {
            selectedAppointmentMessage.textContent =
              `Selected appointment: ${sessionText} with ${doctorObj.doctor} at ${time}.`;
          }
        });
      } else {
        cell.className = "unavailable-slot";
        cell.innerHTML = `<span class="slot-label">Not Available</span>`;
        cell.title = `This slot is not available`;
      }

      row.appendChild(cell);
    });

    appointmentsBody.appendChild(row);
  });
}

if (sessionSelector) {
  sessionSelector.addEventListener("change", function () {
    const selectedValue = this.value;

    renderAppointments(selectedValue);
    clearSelectedSlotHighlight();
    resetBookingFields();

    if (sessionTypeForm) {
      const selectedText = this.options[this.selectedIndex].text;
      sessionTypeForm.value = selectedValue ? selectedText : "";
    }

    if (selectedAppointmentMessage) {
      if (selectedValue) {
        selectedAppointmentMessage.textContent =
          "Now click an available appointment slot to fill the form automatically.";
      } else {
        selectedAppointmentMessage.textContent = "No appointment selected yet.";
      }
    }
  });
}

//--------feedback---------
const feedbackForm = document.getElementById("feedbackForm");
const feedbackSuccessMessage = document.getElementById("feedbackSuccessMessage");

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const feedbackName = document.getElementById("feedbackName");
    const feedbackEmail = document.getElementById("feedbackEmail");
    const feedbackPhone = document.getElementById("feedbackPhone");
    const contactPreference = document.getElementById("contactPreference");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const selectedRating = document.querySelector('input[name="rating"]:checked');

    if (
      !feedbackName.value.trim() ||
      !feedbackEmail.value.trim() ||
      !feedbackPhone.value.trim() ||
      !contactPreference.value.trim() ||
      !feedbackMessage.value.trim() ||
      !selectedRating
    ) {
      alert("Please complete all required feedback fields.");
      return;
    }

    feedbackSuccessMessage.style.display = "block";
    feedbackSuccessMessage.textContent =
      "Thank you! Your feedback has been submitted successfully.";

    feedbackForm.reset();
  });
}
//-------------------------------------------
// Account dropdown toggle on click
document.addEventListener("DOMContentLoaded", function () {
  const accountToggle = document.getElementById("accountToggle");
  const accountDropdown = document.querySelector(".account-dropdown");

  if (accountToggle && accountDropdown) {
    accountToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      accountDropdown.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
      if (!accountDropdown.contains(e.target)) {
        accountDropdown.classList.remove("open");
      }
    });
  }
});
//-------------------------------------------
function togglePassword(){

const passwordInput = document.getElementById("password");

if(passwordInput.type === "password"){

passwordInput.type = "text";

}else{

passwordInput.type = "password";

}

}
//-------------------------------------------
//حفظ بيانات التسجيل من صفحة signup.html
//-------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const birthYear = document.getElementById("birthYear").value.trim();
      const gender = document.getElementById("gender").value;
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const userData = {
        fullName,
        birthYear,
        gender,
        phone,
        email,
        password
      };

      localStorage.setItem("mindcareUser", JSON.stringify(userData));
      localStorage.setItem("mindcareLoggedIn", "true");

      alert("Account created successfully!");

      window.location.href = "../index.html";
    });
  }
});
//-----------------------------------
//إذا سجل المستخدم أولًا من صفحة Create Account
//سيتم حفظ البيانات في  localStorage
//ثم إذا ذهب إلى  Login
//-----------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const loginEmail = document.getElementById("loginEmail").value.trim();
      const loginPassword = document.getElementById("loginPassword").value.trim();
      const loginMessage = document.getElementById("loginMessage");

      const savedUser = JSON.parse(localStorage.getItem("mindcareUser"));

      if (!savedUser) {
        loginMessage.textContent = "No account found. Please create an account first.";
        loginMessage.style.color = "#dc2626";
        return;
      }

      if (
        loginEmail === savedUser.email &&
        loginPassword === savedUser.password
      ) {
        localStorage.setItem("mindcareLoggedIn", "true");
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "#16a34a";

        setTimeout(function () {
          window.location.href = "../index.html";
        }, 1000);
      } else {
        loginMessage.textContent = "Invalid email or password.";
        loginMessage.style.color = "#dc2626";
      }
    });
  }
});

//------------------------------------------------
// هذا الكود عشان يخليني بس اسجل دخول تطلع لي حجوزاتي و
//------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

  const accountMenu = document.getElementById("accountMenu");
  const isLoggedIn = localStorage.getItem("mindcareLoggedIn") === "true";

  if (!accountMenu) return;

  if (isLoggedIn) {

    const inPages = window.location.pathname.includes("/pages/");

    const appointmentsLink = inPages ? "appointments.html" : "pages/appointments.html";
    const feedbackLink = inPages ? "feedback.html" : "pages/feedback.html";

    const bookingsLink = inPages ? "my-bookings.html" : "pages/my-bookings.html";

accountMenu.innerHTML = `
  <li><a href="${bookingsLink}">My Bookings</a></li>
  <li><a href="${appointmentsLink}">Appointments</a></li>
  <li><a href="${feedbackLink}">Contact & Feedback</a></li>
  <li><a href="#" id="logoutBtn">Logout</a></li>
`;

    const logoutBtn = document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("mindcareLoggedIn");

  const inPages = window.location.pathname.includes("/pages/");

  if (inPages) {
    window.location.href = "login.html";
  } else {
    window.location.href = "index.html";
  }
});

  }

});
//--------------------------------------
//الكود الصحيح لحفظ الموعد
//----------------------------------
document.addEventListener("DOMContentLoaded", function () {

  const bookingForm = document.getElementById("bookingForm");

  if (!bookingForm) return;

  bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const contactMethod = document.getElementById("contactMethod").value.trim();

    const sessionType = document.getElementById("sessionTypeForm").value.trim();
    const doctor = document.getElementById("doctorName").value.trim();
    const dateTime = document.getElementById("appointmentTime").value.trim();

    const notes = document.getElementById("notes").value.trim();

    if (!sessionType || !doctor || !dateTime) {
      alert("Please select an appointment slot first.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      fullName: fullName,
      email: email,
      phone: phone,
      contactMethod: contactMethod,
      sessionType: sessionType,
      doctor: doctor,
      dateTime: dateTime,
      notes: notes,
      status: "Confirmed"
    };

    const bookings =
      JSON.parse(localStorage.getItem("mindcareBookings")) || [];

    bookings.push(newBooking);

    localStorage.setItem("mindcareBookings", JSON.stringify(bookings));

    const successMessage = document.getElementById("bookingSuccessMessage");

    successMessage.textContent = "Appointment booked successfully!";
    successMessage.style.display = "block";

    bookingForm.reset();

    document.getElementById("sessionTypeForm").value = "";
    document.getElementById("doctorName").value = "";
    document.getElementById("appointmentTime").value = "";

  });

});
//-------------------------------------------------
//نخلي الصفحة تقرأ الحجوزات من localStorage وتعرضها داخل الجدول.
//-------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const bookingsTableBody = document.getElementById("bookingsTableBody");
  const totalBookingsCount = document.getElementById("totalBookingsCount");
  const upcomingSessionText = document.getElementById("upcomingSessionText");

  if (!bookingsTableBody) return;

  const bookings = JSON.parse(localStorage.getItem("mindcareBookings")) || [];

  if (totalBookingsCount) {
    totalBookingsCount.textContent = bookings.length;
  }

  if (upcomingSessionText) {
    if (bookings.length > 0) {
      upcomingSessionText.textContent = bookings[0].dateTime;
    } else {
      upcomingSessionText.textContent = "Not Available";
    }
  }

  if (bookings.length === 0) {
    bookingsTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-table-message">
          No bookings found yet.
        </td>
      </tr>
    `;
    return;
  }

  bookingsTableBody.innerHTML = "";

  bookings.forEach(function (booking, index) {
    const row = document.createElement("tr");

    row.innerHTML = `
  <td>${index + 1}</td>
  <td>${booking.sessionType}</td>
  <td>${booking.doctor}</td>
  <td>${booking.dateTime}</td>
  <td><span class="status-badge">${booking.status}</span></td>
  <td>
    <button class="table-action-btn print-booking-btn" type="button">Print</button>
  </td>
`;

    bookingsTableBody.appendChild(row);

    const printBtn = row.querySelector(".print-booking-btn");
//هذا الكود عشان يطبع لي في ملف print.css
printBtn.addEventListener("click", function () {
  window.print();
   });
  });
});

//هذا الكود عشان زر بوك سيشن في صفحة هوم 
document.addEventListener("DOMContentLoaded", function () {
  const bookSessionBtn = document.getElementById("bookSessionBtn");

  if (!bookSessionBtn) return;

  bookSessionBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const isLoggedIn = localStorage.getItem("mindcareLoggedIn") === "true";

    if (isLoggedIn) {
      window.location.href = "pages/appointments.html";
    } else {
      window.location.href = "pages/login.html";
    }
  });
});
//كود عشان ازرار البوك سيرفيس في صفحة السيرفيسيس
document.addEventListener("DOMContentLoaded", function () {
  const bookServiceButtons = document.querySelectorAll(".book-service-btn");

  if (!bookServiceButtons.length) return;

  bookServiceButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const isLoggedIn = localStorage.getItem("mindcareLoggedIn") === "true";

      if (isLoggedIn) {
        window.location.href = "appointments.html";
      } else {
        window.location.href = "login.html";
      }
    });
  });
});
//هذا الكود عشان بس يسوي لوق اوت ما يظهر له صفحة ابويمنت او فيد باك
document.addEventListener("DOMContentLoaded", function () {
  const protectedPages = [
    "/pages/appointments.html",
    "/pages/feedback.html",
    "/pages/my-bookings.html"
  ];

  const currentPath = window.location.pathname;
  const isLoggedIn = localStorage.getItem("mindcareLoggedIn") === "true";

  const isProtectedPage = protectedPages.some(function (page) {
    return currentPath.includes(page);
  });

  if (isProtectedPage && !isLoggedIn) {
    window.location.href = "login.html";
  }
});



