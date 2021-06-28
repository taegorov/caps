# CAPS - Code Academy Parcel Service

>  Our goal is to setup a system of events and handlers, with the intent being to change out the eventing system as we go, but keeping the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does. 

(source - Code Fellows Lab 11)

![caps](caps-UML.jpg)

---

The following user/developer stories detail the major functionality for this phase of the project.

    ✔ As a vendor, I want to alert the system when I have a package to be picked up
    ✔ As a driver, I want to be notified when there is a package to be delivered
    ✔ As a driver, I want to alert the system when I have picked up a package and it is in transit
    ✔ As a driver, I want to alert the system when a package has been delivered
    ✔ As a vendor, I want to be notified when my package has been delivered

  And as developers, here are some of the development stories that are relevant to the above:

    ✔ As a developer, I want to use industry standards for managing the state of each package
    ✔ As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time

--- 

## URLs

[Deployed page here](https://timegorov-caps.herokuapp.com)

--- 

## Thanks

Thanks to Jacob Knaack, Code Fellows instructor, for walking us through how to write this code. I used his demo code from lecture as a blueprint for writing my code, along with my tests. 