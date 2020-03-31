# 1. App Name and Short Description
  - App Name: Jokes Website.
  - Description: a simple website for writer. You can write, read many jokes and exchange with the literary community.
# 2. Preliminary Data Model
  - User Database: identification number(IN), name, password, star ( sum stars of all your jokes), role (admin or user). Primary key is IN.
  - Jokes Database: jokes identification number(JIN), name, author(IN), content, star (points of your jokes if anyone like it). Primary key is JIN.
# 3. Preliminary Functional Areas
  - User Controllers : 
  -- Write / Read: you write new jokes -> the administrator will approve its content -> save it in database. If read, there will be no step 2.
  - 
