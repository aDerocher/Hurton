# Hurton
The [Hurton](https://hurton.herokuapp.com/) web app is a clone of [Burton.com](https://burton.com) by Andrew Derocher
Contents:
 1. Overview
 2. Functionality
 3. Backend Summary
 4. FrontEnd Summary
 
### Overview

The Hurton project is a replica of a shopping website for snowboarders. It allows users to shop for new jackets, boots, bindings, and other snowboarding gear with or without creating an account. Account creation does open up additional features such as reviewing items, adding items to a wishlist, and saving account information for easy checkout.

![](PlanningDocs/ReadMePics/ReadMeCover.png)


### Using Hurton
Hurton has a similar look and feel to many online shopping sites. You can browse the splash page to see new additions and upcoming releases, or get to shopping by clicking one of the navigation options. 
![](PlanningDocs/ReadMePics/Store-Sample.png)
Once in the store the items for sale are rendered as many tiles. Clicking one will bring you to that items detialed page. If you find something you like, the item can be added to your shopping cart, or if you are a logged in user, to your wishlist to save for later as a bookmark. The wishlist can later be accessed on your profile, where items from the saved list can be added straight to the cart again.
Once you have some items you would like to purchase, the checkout page allows you to give one last look at the quantities you selected, make any alterations, and if you think you can affterd your subtotal you can move on to check out.
Checking out will ask a user for their shipping details/preferences, and once the order is submitted the cart is cleared and items are added to a users order history.

### Backend
The backend is built using Flask and SQLAlchemy. There are many different components, but the main one is items

Items ended up being a very comprehensive model. Given the time constraints for the project, all of an items unique attributes are represented on this one component. Snowboards have camber and are sized in cm, and jackets have waterproofing and warmth levels and are sized in s/m/l/xl/. The single Item modal was used to encompass all of this variability. 

---

### Frontend
The frontend is build using a React app. one of the most interesting functions on the Hurton site is the ability for non-logged in users to shop. When an item is added to the cart, a check is done for an active user. If none is present, the item is translated to JSON and placed into local storage. This will work throughout their shopping experience, and all normal features are availble such as adjusting in-cart quantities. 
![](PlanningDocs/ReadMePics/add-to-local.PNG)
A Bonus was that if a user is mid-shopping experience, they can create a new account and their cart will be moved over into the state, and the local storage will be emptied. (If they log in, their cart will be lost and replaced with their user accounts cart).


---
### Going Forward

Next steps for this project are:
 - further improve the searchbar. 
 - further improve the filter mechanisms in the store
 - add in the dropdowns so that the navbars more closely resemble those of the burton site
 - animations for pictures/carousels
