Feature: End to End Cura HealthCare Application Functionality

    End to End Testing
    Scenario: Login and make appointment
        Given user is logged into Application
        When user select Facility from dropdown
        And user select hospital readmission checkbox
        And user select Healthcare Program from radiobutton
        And user select visit Date
        And user add a comment
        And user clicks on booked an appointment
        Then The system successfully books the appointment.
        And The user sees a confirmation message stating "Appointment Booked".