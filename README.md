In this project, let's build Nxt Watch by applying the concepts we have learned till now.

Refer to the videos below:
Success View


Failure View


Functionality to be added

The app must have the following functionalities

Initially, the app should be in Light theme

Login Route

When invalid credentials are provided and the Login button is clicked, then the error message received from the response should be displayed
When valid credentials are provided and the Login button is clicked, then the page should be navigated to the Home Route
When an unauthenticated user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page should be navigated to the Login Route
When an authenticated user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page should be navigated to the respective route
When an authenticated user tries to open the Login Route, then the page should be navigated to the Home Route
When the Show Password checkbox is checked, then the password should be shown
When the Show Password checkbox is unchecked, then the password should be masked
Home Route

When an authenticated user opens the Home Route,
An HTTP GET request should be made to the Home Videos API URL with jwt_token in the Cookies and query parameter search with the initial value as an empty string
Loader should be displayed while fetching the data
After the data is fetched successfully, the list of videos should be displayed
If the HTTP GET request made is unsuccessful, then the Failure View should be displayed
When the Retry button is clicked, an HTTP GET request should be made to the Home Videos API URL
When a non-empty value is provided in the search input and the search icon button is clicked
Make an HTTP GET request to the Home Videos API URL with jwt_token in the Cookies and query parameter search with value as the text provided in the search input
Loader should be displayed while fetching the data
After the data is fetched successfully, the list of videos should be displayed
When the HTTP GET request made to the Home Videos API URL returns an empty list, then the No Videos View should be displayed
When a Video is clicked, then the page should be navigated to the Video Item Details Route
When the Trending link in the Sidebar is clicked, then the page should be navigated to the Trending Route
When the Gaming link in the Sidebar is clicked, then the page should be navigated to the Gaming Route
When the Saved Videos link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route
Trending Route

When an authenticated user opens the Trending Route,
An HTTP GET request should be made to the Trending Videos API URL with jwt_token in the Cookies
Loader should be displayed while fetching the data
After the data is fetched successfully, the list of videos should be displayed
If the HTTP GET request made is unsuccessful, then the Failure View should be displayed
When the Retry button is clicked, an HTTP GET request should be made to the Trending Videos API URL
When a Video is clicked, then the page should be navigated to the Video Item Details Route
When the Home link in the Sidebar is clicked, then the page should be navigated to the Home Route
When the Gaming link in the Sidebar is clicked, then the page should be navigated to the Gaming Route
When the Saved Videos link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route
Gaming Route

When an authenticated user opens the Gaming Route,
An HTTP GET request should be made to the Gaming Videos API URL with jwt_token in the Cookies
Loader should be displayed while fetching the data
After the data is fetched successfully, the list of videos should be displayed
If the HTTP GET request made is unsuccessful, then the Failure View should be displayed
When the Retry button is clicked, an HTTP GET request should be made to the Gaming Videos API URL
When a Video is clicked, then the page should be navigated to the Video Item Details Route
When the Home link in the Sidebar is clicked, then the page should be navigated to the Home Route
When the Trending link in the Sidebar is clicked, then the page should be navigated to the Trending Route
When the Saved Videos link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route
Video Item Details Route

When an authenticated user opens the Video Item Details Route

An HTTP GET request should be made to the Video Details API URL with jwt_token in the Cookies and video_id as a path parameter
Loader should be displayed while fetching the data
After the data is fetched successfully, the response received should be displayed
If the HTTP GET request made is unsuccessful, then the Failure View should be displayed
When the Retry button is clicked, an HTTP GET request should be made to the Video Details API URL
Corresponding video should be displayed using react-player package

Initially, all the three buttons (Like, Dislike, Save) should be inactive

When the Like button is clicked,

It should change to active state
If the Dislike button is already in the active state, then the Dislike button needs to be changed to the inactive state
When the Dislike button is clicked,

It should change to active state
If the Like button is already in the active state, then the Like button needs to be changed to the inactive state
When the Save button is clicked,

It should change to active state and the respective video details should be added to the list of saved videos
Save button text should be changed to Saved
When the Saved button is clicked

It should change to inactive state and the respective video details will be removed from the list of saved videos
Saved button text should be changed to Save
Saved Videos Route

When an authenticated user opens the Saved Videos Route,
If the list of saved videos is empty, then the No Saved Videos Found View should be displayed
The list of saved videos should be displayed
When a Video is clicked, then the page should be navigated to the Video Item Details Route
When the Home link in the Sidebar is clicked, then the page should be navigated to the Home Route
When the Trending link in the Sidebar is clicked, then the page should be navigated to the Trending Route
When the Gaming link in the Sidebar is clicked, then the page should be navigated to the Gaming Route
Not Found Route

When a random path is provided as the URL path, then the page should be navigated to the Not Found Route
Header

When the Website logo is clicked, then the page should be navigated to the Home Route
When the theme icon button is clicked, then the theme should be changed accordingly
When the Logout button is clicked, then the Logout Popup should be displayed
When the Cancel button is clicked, then the popup should be closed and the page should not be navigated
When the Confirm button is clicked, then the page should be navigated to the Login Route
The following instructions are required for the tests to pass

Render Home Route component when the path in URL matches /

Render Login Route component when the path in URL matches /login

Render Trending Route component when the path in URL matches /trending

Render Gaming Route component when the path in URL matches /gaming

Render Saved Videos Route component when the path in URL matches /saved-videos

Render Video Item Details Route component when the path in URL matches /videos/:id

Render Not Found Route component when the path in URL matches /not-found

Home Route

The Route should consist of an HTML container element with data-testid as home
The Route should consist of a banner and it contains a close button with data-testid as close
The Route should consist of a banner as shown in the design files with data-testid as banner
The Route should consist of an HTML image element with alt as nxt watch logo and src as the given Nxt Watch logo URL in the banner
The HTML container element with data-testid as home should have the background color,
If the Light theme is applied, then the #f9f9f9 color should be applied as a background color
If the Dark theme is applied, then the #181818 color should be applied as a background color
Trending Route

The Route should consist of an HTML container element with data-testid as trending
The HTML container element with data-testid as trending should persist the background color,
If the Light theme is applied, then the #f9f9f9 color should be applied as a background color
If the Dark theme is applied, then the #0f0f0f color should be applied as a background color
Gaming Route

The Route should consist of an HTML container element with data-testid as gaming
The HTML container element with data-testid as gaming should persist the background color,
If the Light theme is applied, then the #f9f9f9 color should be applied as a background color
If the Dark theme is applied, then the #0f0f0f color should be applied as a background color
Saved Videos Route

The Route should consist of an HTML container element with data-testid as savedVideos
The HTML container element with data-testid as savedVideos should persist the background color,
If the Light theme is applied, then the #f9f9f9 color should be applied as a background color
If the Dark theme is applied, then the #0f0f0f color should be applied as a background color
Video Item Details Route

The Video Item Details Route should consist of an HTML container element with data-testid as videoItemDetails
The HTML container element with data-testid as videoItemDetails should persist the background color,
If the Light theme is applied, then the #f9f9f9 color should be applied as a background color
If the Dark theme is applied, then the #0f0f0f color should be applied as a background color
The Website logos for Light theme and Dark theme should have the alt as website logo

The Failure images for Light theme and Dark theme should have the alt as failure view

In the Video Item Details Route, the #2563eb color should be applied as color for any active button i.e (Like, Dislike, Save)

In the Video Item Details Route, the #64748b color should be applied as color for any inactive button i.e (Like, Dislike, Save)

Resources
Image URLs
Colors
Font-families
Things to Keep in Mind
All components you implement should go in the src/components directory.
Don't change the component folder names as those are the files being imported into the tests.
Do not remove the pre-filled code
Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.

