# MercuriChat (for Data Communications II)
## Project Goal

The goal of this project is to create a simple web client that uses TCP/WebSockets to connect to a chat server using HTML5, HTML5 WebSockets, CSS, JavaScript, and Ruby on Rails.

## Project Design

We used draw.io to draw the diagrams explaining our project design.

### High-Level Diagram of MercuriChat:
![alt text](https://github.com/uml-dc2-2016-spring/DC2-MercuriChat/blob/master/mc-diagrams/MercuriChat-diagram.png)

As you can see, we have a centralized server that interacts with different clients.

### Initial User MVC Diagram:
![alt text](https://github.com/uml-dc2-2016-spring/DC2-MercuriChat/blob/master/mc-diagrams/MercuriChat-UsersMVCDiagram.png)

The above indicates the initial functionalities a user has when he or she first uses MercuriChat. The user points to the controller, which then points to the models, which points to the views, and, finally, returns to the user.

### Dashboard MVC Diagram:
![alt text](https://github.com/uml-dc2-2016-spring/DC2-MercuriChat/blob/master/mc-diagrams/MercuriChat-DashboardMVCDiagram.png)

The diagram above shows the design flow once the user has gained access to their dashboards.

## File Structure (from FILES.md)
<ul>
  <li><b>MercuriChat/</b></li>
  <ul>
    <li>config.ru</li>
    <li>faye.ru</li>
    <li>Gemfile</li>
    <li>Gemfile.lock</li>  
    <li><b>app/</b></li>
    <ul>
      <li><b>assets/</b></li>
      <ul>
        <li><b>javascripts/</b></li>
        <ul>
          <li>application.js</li>
          <li>dashboard.js</li>
          <li>websockets.js</li>
        </ul>
        <li><b>stylesheets/</b></li>
        <ul>
          <li>application.css</li>
          <li>index.css</li>
          <li>sign_in.css</li>
          <li>dashboard.css</li>
        </ul>
      </ul>
      <li><b>controllers/</b></li>
      <ul>
        <li>application_controller.rb</li>
        <li>users_controller.rb</li>
        <li>chat_controller.rb</li>
      </ul>
      <li><b>mailers/</b></li>
      <ul>
        <li>application_mailer.rb</li>
        <li>user_mailer.rb</li>
      </ul>
      <li><b>models/</b></li>
      <ul>
        <li>chat.rb</li>
        <li>user.rb</li>
      </ul>
      <li><b>views/</b></li>
      <ul>
        <li><b>chat/</b></li>
        <ul>
          <li>_header.html.erb</li>
          <li>dashboard.html.erb</li>
          <li>index.html.erb</li>
        </ul>
        <li><b>layouts/</b></li>
        <ul>
          <li>application.html.erb</li>
        </ul>
        <li><b>user_mailer/</b></li>
        <ul>
          <li>welcome_email.html.erb</li>
          <li>welcome_email.text.erb</li>
        </ul>
        <li><b>users/</b></li>
        <ul>
          <li>_form.html.erb</li>
          <li>about.html.erb</li>
          <li>index.html.erb</li>
          <li>indexnot.html.erb **(for debugging)**</li> 
          <li>show.html.erb</li>
          <li>sign-in.html.erb</li>
          <li>sign_in.html.erb</li>
          <li>team.html.erb</li>
        </ul>
      </ul>
    </ul>
    <li><b>config/</b></li>
    <ul>
      <li>application.rb</li>
      <li>routes.rb</li>
      <li><b>environments/</b></li>
      <ul>
        <li>development.rb</li>
      </ul>
      <li><b>initializers/</b></li>
      <ul>
        <li>assets.rb</li>
      </ul>
    </ul>
    <li><b>db/</b></li>
    <ul>
      <li>schema.rb</li>
      <li><b>migrate/</b></li>
      <ul>
        <li>20160321200213_create_users.rb</li>
        <li>20160412080749_create_chats.rb</li>
      </ul>
    </ul>
    <li><b>rack_middleware/</b></li>
    <ul>
      <li>dashboard_controller.rb</li>
      <li>dbc.rb</li>
    </ul>
    <li><b>vendor/</b></li>
    <ul>
      <li><b>assets/</b></li>
      <ul>
        <li><b>javascripts/</b></li>
        <li><b>stylesheets/</b></li>
      </ul>
    </ul>
  </ul>
</ul>


*****

# Description of Modified Directories and Files:
Under the main directory, *Gemfile* is the file we use to download different gems (or packages); these installations are represented in *Gemfile.lock*. Both *config.ru* and *faye.ru* were modified to support the Thin server and Faye. 

## app/assets
Under **/javascripts** and **/stylesheets**, we have our unique Javascript and CSS for the webpage. 
<ul>
  <li><i>javascripts/websockets.js:</i> specifies functions for WebSockets events.</li>
  <li><i>javascripts/dashboard.js:</i> specifies functions for the general chat page.</li>
  <li><i>stylesheets/index.css:</i> specifies general styles for our website.</li>
</ul>

## app/controllers
There are three files under this directory: application_controller.rb, chat_controller.rb, and users_controller.rb. *chat_controller.rb* identifies the users in the chatroom at the time. *users_controller.rb* holds functions for:
<ol>
  <li>registering (and creating) new users,</li>
  <li>delivering a confirmation email to registered users,</li>
  <li>updating the user information,</li>
  <li>deleting the user account,</li>
  <li>signing into the chat, and</li>
  <li>checking the sign-in information.</li>
</ol>

## app/mailers
The files in this directory allows confirmation emails to be sent to a registered user.

## app/models
*chat.rb* creates an association between the chat and user. *user.rb* defines the password specificities.

## app/views/chat
<ul>
  <li><i>index.html.erb</i> was our prototype of the chat dashboard.</li>
  <ul>
    <li>We now call to <i>dashboard.html.erb</i> for access.</li>
    <li><b>NOTE:</b> This will be modified so each user has their own dashboard.</li>
  </ul>
</ul>

## app/views/layouts
<ul>
  <li><i>application.html.erb</i> was modified when we first attempted to integrate Bootstrap into the Rails environment.</li>
  <li>Both <i>mailer.html.erb</i> and <i>mailer.text.erb</i> were generated by Rails.</li>
</ul>

## app/views/user_mailer
*welcome_email.html.erb* and *welcome_email.text.erb* both have the content that gets sent to a user after they have registered in MercuriChat.

## app/views/users
<ul>
  <li><i>_form.html.erb</i> contains the registration form in "Get Started".</li>
  <li><i>about.html.erb</i> is currently blank.<li>
  <ul>
    <li>It will contain information about MercuriChat.</li>
  </ul>
  <li><i>index.html.erb</i> is the main page of MercuriChat.</li>
  <ul>
    <li> We currently have this routed as the root of our application.</li>
  </ul>
  <li><i>indexnot.html.erb</i> was created for debugging purposes.</li>
  <li><i>show.html.erb</i> is currently being used as the user's profile page.</li>
  <ul>
    <li>We are working on having separate pages for:</li>
    <ul>
      <li>editing your profile page, and</li>
      <li>viewing others' profiles.</li>
    </ul>
  </ul>
  <li><i>sign-in.html.erb</i> was our prototype sign-in page.</li>
  <ul>
    <li><b>NOTE:</b> This will be removed in the production version.</li>
  </ul>
  <li><i>sign_in.html.erb</i> is the page that allows registered users to sign in, and access the chat application.</li>
  <li><i>team.html.erb</i> is currently blank.</li>
  <ul>
    <li>In the future, it may contain information about the developers.</li>
  </ul>
</ul>

*****

## config/
Under this directory, we modified *application.rb* and *routes.rb*. 
* *application.rb* configures WebSockes on Rails and configures Action Mailer.
* *routes.rb* defines paths to different parts of the application.

## config/environments
*development.rb* primarily configures Action Mailer and assets.rb.

## config/initializers
*assets.rb* precompiles the scripts and stylesheets under /app/assets.

**NOTE:** Remove *devise.rb* and *high_voltage.rb* under this directory at some point.

*****

## db/
Under this directory, *schema.rb* defines the data for the table "users". This includes:
<ol>
  <li>first name,</li>
  <li>last name,</li>
  <li>email,</li>
  <li>password hash,</li>
  <li>password salt,</li>
  <li>password,</li>
  <li>time created, and</li>
  <li>time updated.</li>
</ol>

This file also creates a new table, "chats", and it also contains the time created and the time updated.

## db/migrate
* *20160321200213_create_users.rb* defines **change()**, which creates the "users" table described in *schema.rb*.
* *20160412080749_create_chats.rb* defines **change()**, which creates the "chats" table described in *schema.rb*.

*****

## rack_middleware/
*dashboard_controller.rb* contains the class, Websocket. It:
* defines and initializes the application;
* listens for a connection attempt;
* creates a new WebSocket once a request has been found;
* creates a string of the user's name and their sent data,
* for each user in that chatroom, the socket broadcasts that string;
* handles connection when it closes; and
* decrypts session cookies.

*dbc.rb* has similar content.

*****

## vendor/
Under this directory, we have assets/. All the directories and files under /assets are Bootstrap files.
