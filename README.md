# WAR
This is my personal work-around for the GoGuardian monitoring system for Chromebooks.

To use this, put the setup script in your browser, and then click it on any website that allows JavaScript that your organization allows through the GoGuardian filter.

# ----LIMITATIONS----
Cannot currently unblock websites that are blocked on a network level-WILL BE WORKED ON IN BETA
Cannot use certain Google products
Cannot yet ignore X Frame Headers, which limits the available websites

# How To Use
To use this program, simply open Start.js and copy the code seen there into the URL portion of a new bookmark. Name the bookmark whatever you wish, and have fun!

# Password
The default password is "war", and it can only be changed within the code. The password itself is encrypted in Base64 encryption, use a decoder/encoder tool to change the password. The password variable is "encodedStr". Look for that in the code. Place new password in the quotation marks.
