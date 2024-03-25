# README

* Ruby version - ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-darwin20]
* Node version - v12.21.0

* Database creation
Run `rails db:create`
Run `rails db:migrate`

* Database initialization
Run rake task/script `rails import:data`
Import script assumes that

- Emails are unique and must for a user to exist, if user already exist we skip the new entry
- Any user details who has a missing email is skipped
- Product code is unique and duplicate entries will be skipped
- Any order detail for a non existing user or product is just reported, may be with some reporting tool, right now I would report it using console prints only


* Run the Application

`./bin/dev`
`rails jobs:work`
